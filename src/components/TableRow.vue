<template>
    <tr class="bg-white light:bg-gray-800" v-for="item in itemsData" :key="item.id" v-bind="currency" >
        <td scope="row" class="px-2 py-2 font-medium text-gray-900 whitespace-nowrap light:text-white">

        
           {{item.description==""?"Required Description" :item.description}}
        </td>
        <td class="px-2 py-2 ">
           {{ changeCur(item.price) }}
        </td>
        <td class="px-2 py-2 text-center">
            {{ item.quantity==null?1:item.quantity  }}
        </td>

        <td class="px-2 py-2 ">
            {{  changeCur(item.price *(item.quantity==null?1:item.quantity)) }}
        </td>
    </tr>
</template>
<script>
export default {
    name: "TableRow",
    props: {
        itemsData: Array,
        currency:Object
    },

    data() {
        return {
           
            items: this.itemsData
        }
    },
    methods: {
        changeCur(data){
            const c = new Intl.NumberFormat(this.currency.format,{
                style:"currency",
                currency: this.currency.currency
            });
            return c.format(data);
        }
    }
}
</script>