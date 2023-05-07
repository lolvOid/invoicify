<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { event } from 'vue-gtag'
const store = useStore();
const user = ''
const stack = computed(() => {
    return store.state.stack
})
const login = () => {
    event('login', { method: 'Google' })
}
const head = () => {
    return {
        title: 'INVOICIFY',
        meta: [
            { name: 'description', content: 'Simple Invoice Builder' }
        ]
    }
}
head();
login();
</script>

<template>
    <RouterView ></RouterView>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}
</style>
