<template>
    <component :is="tag" class="file-preview">
        <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
    </component>
</template>

<script setup>
defineProps({
    file: { type: Object, required: true },
    tag: { type: String, default: 'li' },
})
</script>