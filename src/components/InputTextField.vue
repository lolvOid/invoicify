<template>
    <label :for="label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {{ label }}
    </label>
    
    <input :type="inputType" :id="label"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f ocus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         @input="handleValueChange" v-model="inputValue"  :placeholder="placeholder"  :maxlength="maxLength">
</template>
<script>
export default {
    props: {
        maxLength:{
            type:Number,
            default:10
        },
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
           
            default: "",
        },
       
    },
    emits:["dataValue"],
    name: "InputTextField",
    data() {
        return {
            inputValue: "",
        
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
