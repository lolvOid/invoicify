<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const user = ''
const stack = computed(() => {
    return store.state.stack
})
const siteName = 'Vite App';
</script>

<template>
   
    <RouterView></RouterView>
    
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}


</style>
