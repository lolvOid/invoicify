
<template>
    <label label class="block mb-2 text-sm font-medium text-gray-900 light:text-white" for="file_input">{{ label }}</label>
    <input @change="onFileSelected"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
        id="file_input" accept=".png" type="file">
</template>
<script>

export default {
    name: "ImageFileInput",

    props: {
        label: String,
    },
    emits: ['selected-image'],
    methods: {

        onFileSelected: function (e) {

            e.preventDefault();
            const reader = new FileReader();
            reader.onload = (d) => {
                this.$emit("selected-image", d.target.result);
            }
            reader.readAsDataURL(e.target.files[0])
        }
    },


}
</script>