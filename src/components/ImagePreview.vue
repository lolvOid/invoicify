<script>
    import ImageFileInput from './ImageFileInput.vue';
    export default{
        name:"ImagePreview",
        props:{
            imgData:{
                type:String,
                default:'https://via.placeholder.com/100x100/ccc.png'
            }
            
        },
        components:{
            ImageFileInput
        },
        template:
        `<img class="w-full h-full object-cover" alt="preview"  :src=imgData />`,
        
    }
</script>