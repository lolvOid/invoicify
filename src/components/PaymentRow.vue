<template>
   
    <div class="text-sm mt-1" v-for="item in itemsData" :key="item.id" >{{ item.title }}: {{item.description}}</div>
</template>
<script>
export default {
    name: "PaymentRow",
    props: {
        itemsData: Array,
        currency:Object
    },

    data() {
        return {
           
            items: this.itemsData
        }
    },
    
    
}
</script>