"use strict";

import { app, protocol, BrowserWindow } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(["app"], { secure: true });
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { webSecurity: false }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

/** An event listener
 *  takes a event from CSV.vue
 *  and creates a csv file
 *  at a default path
 */
const {ipcMain} = require('electron');
ipcMain.on('write-csv',(event,csv)=>{
  console.log("Write-Csv event recieved");

  let path = getPath();
  // Write csv to file method
  csv = parseTextToCsv(csv);
  writeFile(path, "csv",csv,()=>{
    console.log(csv);
    console.log("callback called")
  });
  // TODO: event reply
  // Then event.reply('write-csv-reply',reply)
  // Reply should be path of file and if successful

});

function parseTextToCsv(csv) {

  let parsed = "";
  parsed = csv.replace(/(?:\\[rn]|[\r\n]+)+/g, "\n");
  parsed = parsed.replace(/\\/g, " ");
  return parsed;
}

/**
 * Creates a file
 */
function writeFile(path, extension,content, callBack) {
  const fs = require('fs');

  let filePath = path+"/"+"kymaTest."+extension;

  fs.writeFile(filePath,content,(err)=>{
    if(err)throw err;
    console.log(filePath);
    console.log('file saved');
    callBack();
  });

}

/**
 * Creates a system specified path
 * Can take a specifiedPath else it
 * defaults to /downloads
 * @param specifiedPath
 * @return {string} system default path
 */
function getPath(specifiedPath){
  const path = require('path');
  // https://shapeshed.com/writing-cross-platform-node/#home-directories
  // Path for different systems
  // *nix = process.env.HOME Unix /home, Mac /Users
  // Windows = process.env.HOMEPATH Windows C:\\Users
  // path.join(homeDir,downloads) /downloads/data.csv

  let homeDir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
  let url = "";
  if(!!specifiedPath){
    url = path.join(homeDir,specifiedPath)
  } else{
    url = path.join(homeDir,"downloads")
  }
  return url;
}