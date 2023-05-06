<template>
    <label :for="label" class="block mb-2 text-sm font-medium text-gray-900 light:text-white">
        {{ label }}
    </label>
    <input :type="inputType" :id="label"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
         @input="handleValueChange" v-model="inputValue"  :placeholder="placeholder">
</template>
<script>
export default {
    props: {
        inputType:{
            type:String,
            default:"text"
        },
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
            required: true
        }
    },
    name: "InputTextField",
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