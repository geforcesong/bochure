<template lang="pug">
  div this is a pug template
    br
    button(v-on:click='incrementCounter') {{counter}}
    slot 只有在没有要分发的内容时才会显示。
    div(class="divRed")
        slot(name="redSlot")
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function() {
      this.counter++;
      this.$emit('increment');
    }
  }
});
</script>

<style>
    .divRed {
        color:blue;
    }
</style>
