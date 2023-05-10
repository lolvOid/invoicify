<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { event } from 'vue-gtag'
import {useHead} from "@unhead/vue";
const store = useStore();
const user = ''
const stack = computed(() => {
    return store.state.stack
})
useHead({
    title:"INVOICIFY",
    meta:[
        {
            name:"title",
            content:"INVOICIFY",
        } ,
        {
            name:"application-name",
            content:"INVOICIFY"
        },
        {
            name:"author",
            content:"freddielin"
        },
        {
            name:"google-site-verification",
            content:"gGf7v3gULvhF0PL7rGfU8Xzejkn0IdEZuI1dc_1bZEE"
        },
        {
            name:"description",
            content:"Simple Invoice Maker"
        },
        {   
            property:"og:type",
            content:"website"
        },
        {
            property:"og:url",
            content:"https://simple-invoicify.vercel.app"
        },
        {
            property:"og:title",
            content:"INVOICIFY"
        },
        {
            property:"og:description",
            content:"Simple Invoice Maker"
        },
        {
            property:"og:image",
            content:"https://simple-invoicify.vercel.app/_invoicify.png"
        }
    ]
})

event('index', { method: 'Google' })



</script>

<template>
    <RouterView ></RouterView>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}
</style>
