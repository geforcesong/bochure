<template lang="pug">
div
    input(v-on:keyup.enter="add($event.target.value);" type="text" v-model="inputTextContent")
    br
    select(multiple v-model="selected")
        option(v-for="option in items" v-bind:value="option.value") {{ option.text }}
    br
    transition(name="fade")
        span(v-if="show") Selected: {{ selected }}
    br
    button(v-on:click="go" v-annoying-background="'red'") Confirm
</template>

<script lang="ts">
import Vue from "vue";
import EventBus from "../_eventBus";

var myMixin = {
  created: function() {
    this.hello();
  },
  methods: {
    hello: function() {
      console.log("hello from mixin!");
    }
  }
};

export default Vue.extend({
  mixins: [myMixin],
  data() {
    return {
      inputTextContent: "haha1",
      items: [],
      test: "abc",
      selected: [],
      show: true
    };
  },
  directives: {
    "annoying-background": {
      inserted(el: HTMLElement, binding: any, vnode: any) {
        el.style.backgroundColor = binding.value || "pink";
      }
    }
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
      let val = this.selected.join(";");
      this.show = !this.show;
      this.hello();
      EventBus.$emit("SELECTION_CONFIRMED", val);
    }
  },
  mounted() {
    const uri = "/api/user/get";
    const self = this;
    $.ajax({ url: uri })
      .done(d => {
        for (let v of d.list) {
          self.items.push({
            text: v.name,
            value: v.age
          });
        }
      })
      .fail(err => {
        alert(err);
      });
  }
});
</script>

<style lang="scss" scoped>
select {
  width: 200px;
  height: 250px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
