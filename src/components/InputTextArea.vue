<template>
    <label :for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {{ label }}</label>
    <textarea id="message" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @input="handleValueChange" v-model="inputValue" :placeholder="placeholder" wrap="soft" maxlength="50"></textarea>
</template>
<script>
export default {
    props: {

        label: {
            type: String,
            default: "",
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
            required: true,
        },
        value: {
            type: String,
            default: ""
        }
    },
    name: "InputTextField",
    emits: ["dataValue"],
    data() {
        return {
            inputValue: this.value,

        }
    },

    methods: {
        handleValueChange: function (e) {

            this.inputValue = e.target.value
            this.$emit("dataValue", e.target.value);
        }
    }
}
</script>