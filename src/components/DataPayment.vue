<template>
    <div class="border-2 bg-white rounded-lg mb-2 mt-2" v-for="item in paymentData" :key="item.id">
        <div class="relative flex-col flex p-2 relative justify-center ">

            <a class="hover:cursor-pointer hover:text-red-600 self-end text-xl p-2" @click="onRemoved" :data-id="item.id">
                <fa-icon icon="fa-solid fa-multiply"></fa-icon>
            </a>
            <div class="mt-2 ">
                <input-text inputType="text" label="Title" :placeholder="'Title'" :maxLength="50"
                    @dataValue="(value = 'Title') => $emit('dataValue', value, item.id, 'title')" />
            </div>
            <div class="mt-2">
                <input-text inputType="text" label="Description" :placeholder="'Description'" :maxLength="20"
                    @dataValue="(value = 'Description') => $emit('dataValue', value, item.id, 'description')" />
            </div>
          

        </div>
    </div>
</template>
<script>
import InputTextField from './InputTextField.vue';

export default {
    name: "DataRow",
    components:{
        "input-text":InputTextField
    },
    emits: ["count", "dataValue"],
    props: {
        paymentData: Array,
        count: Number
    },

    data() {
        return {
            items: this.paymentData
        }
    },
    methods: {
        onRemoved: function (e) {
            this.items.splice(0, 1);
            // this.paymentData.sort((a,b)=>a.title < b.title ? -1 : 1)
            localStorage.setItem('paymentData', JSON.stringify(this.paymentData));
            if (this.count < 0) {
                this.$emit("count", 0);
            }
            else {
                this.$emit("count", this.count - 1)
            }

        }
    }
}
</script>