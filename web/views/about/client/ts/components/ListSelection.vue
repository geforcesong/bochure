<template>
    <div>
        <br>
        <div class="greeting">List selected values: {{selection}}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import EventBus from "../_eventBus";

export default Vue.extend({
  data() {
    return {
      selection: "no selection"
    };
  },
  created() {
    EventBus.$on(
      "SELECTION_CONFIRMED",
      function(num: string) {
        this.selection = num;
      }.bind(this)
    );
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
  background-color: pink;
  color: orange;
}
</style>
