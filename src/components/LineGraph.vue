
<script>
import { Line } from "vue-chartjs";
import { mapGetters } from "vuex";
export default {
  extends: Line,
  mounted() {
    this.renderchart(this.speed.log.data, )
  }
}
</script>
