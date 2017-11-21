<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello vue file {{enthusiasm}}</div>
        <div>Passed in message:{{message}}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["message"],
  data() {
    return {
      enthusiasm: "dsf"
    };
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
  background-color: pink;
}
</style>
