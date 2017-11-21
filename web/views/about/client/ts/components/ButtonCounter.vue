<template lang="pug">
  div this is a pug template
    br
    button(v-on:click='incrementCounter') {{counter}}
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