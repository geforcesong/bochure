<template lang="pug">
<div>
    input(v-on:keyup.enter="add($event.target.value);" type="text" v-model="inputTextContent")
    br
    select(multiple v-model="selected")
        option(v-for="option in items" v-bind:value="option.value") {{ option.text }}
    br
    span Selected: {{ selected }}
    br
    button(v-on:click="go") Confirm
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      inputTextContent: "haha1",
      items: [],
      test: "abc",
      selected: []
    };
  },
  methods: {
    add: function(value: string) {
      this.items.push({
        text: value,
        value: this.items.length + 1
      });
      this.inputTextContent = "";
    },
    go: function() {
      alert(this.selected.join(";"));
    }
  },
  mounted(){
  }
});
</script>

<style lang="scss" scoped>
select {
  width: 200px;
  height: 250px;
}
</style>
