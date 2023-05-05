<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
</script>

<template>
   
    <RouterView class="p-0"></RouterView>
    
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}


</style>
