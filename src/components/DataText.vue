<template>
    <div class="text-sm">
        {{ textValue }}
    </div>
</template>
<script>
import InputTextBus from "../composition/InputTextBus";
export default{
    name:"DataText",
    data(){
        return{
            textValue:String
        }
    },
    created(){
        InputTextBus.$on('value',(value)=>{
            this.textValue = value;
        });
    }
}
</script>