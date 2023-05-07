<template>
    <div class="border-2 bg-white rounded-lg mb-2 mt-2" v-for="item in itemsData" :key="item.id">
        <div class="relative flex-col flex p-2 relative justify-center ">

            <a class="hover:cursor-pointer hover:text-red-600 self-end text-xl p-2" @click="onRemoved" :data-id="item.id">
                <fa-icon icon="fa-solid fa-multiply"></fa-icon>
            </a>
            <div class="mt-2 ">
                <input-text inputType="text" label="Description" :placeholder="'Description'" :maxLength="30"
                    @dataValue="(value = 'Description') => $emit('dataValue', value, item.id, 'description')" />
            </div>
            <div class="mt-2">
                <input-text inputType="text" label="Quantity" :placeholder="'Quantity'" :maxLength="5"
                    @dataValue="(value = 1) => $emit('dataValue', value, item.id, 'quantity')" />
            </div>
            <div class="mt-2">
                <input-text inputType="text" label="Price" :placeholder="'Price'" :maxLength="15"
                    @dataValue="(value = 0) => $emit('dataValue', value, item.id, 'price')" />
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "DataRow",
    emits: ["count", "dataValue"],
    props: {
        itemsData: Array,
        count: Number
    },

    data() {
        return {
            items: this.itemsData
        }
    },
    methods: {
        onRemoved: function (e) {
            this.items.splice(0, 1);
            // this.itemsData.sort((a,b)=>a.title < b.title ? -1 : 1)
            localStorage.setItem('itemsData', JSON.stringify(this.itemsData));
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