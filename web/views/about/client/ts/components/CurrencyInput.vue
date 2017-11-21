<template lang="pug">
  span 
    | $ 
    input(ref="input" v-bind:value="value" v-on:change="updateValue($event.target.value)")
    |  hello

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["value"],
  methods: {
    updateValue: function(value: string) {
      var formattedValue = parseFloat(value).toFixed(2);
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }
      // 通过 input 事件带出数值
      this.$emit("input", Number(formattedValue));
    }
  }
});
</script>

<style lang="scss" scoped>
span {
  background-color: red;
  input {
    background-color: yellow;
  }
}
</style>
