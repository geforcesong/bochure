<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello vue file</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            enthusiasm: 'abc'
        }
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
    background-color: pink;
}
</style>
