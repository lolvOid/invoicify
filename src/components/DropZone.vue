<template>
    <div :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive" @dragleave.prevent="setInactive"
        @drop.prevent="onDrop">
        <!-- share state with the scoped slot -->
        <slot :dropZoneActive="active">
            <label for="file-input">
                <span v-if="dropZoneActive">
                    <span>Drop Them Here</span>
                    <span class="smaller">to add them</span>
                </span>
                <span v-else>
                    <span>Drag Your Files Here</span>
                    <span class="smaller">
                        or <strong><em>click here</em></strong> to select files
                    </span>
                </span>

                <input type="file" id="file-input" multiple @change="onInputChange" />
            </label>
       
        </slot>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const emit = defineEmits(['file-dropped']);

let active = ref(false);
let inActiveTimeout = null;

function setActive() {
    active.value = true;
    clearTimeout(inActiveTimeout);
}

function setInactive() {
    active.value = false
    inActiveTimeout = setTimeout(() => {
        active.value = false;
    }, 50)
}

function onDrop(e) {
    setInactive()
    emit("file-dropped", [...e.dataTransfer.files]);
}
function preventDefaults(e) { e.preventDefault(); }

const events = [
    'dragenter', 'dragover', 'dragleave', 'drop'
]
onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults);
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.removeEventListener(eventName, preventDefaults);
    })
})
function onInputChange(e) {
        addFiles(e.target.files)
        e.target.value = null
    }
</script>