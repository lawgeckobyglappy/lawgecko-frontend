<template>
    <div>
        <input type="file" accept="image/*" class="hidden" ref="file" @change="change" />
        <div class="relative inline-block mb-7">
            <img :src="src" alt="Avatar" class="h-24 w-24 rounded-full object-cover"/>
            <div class="absolute top-0 h-full w-full bg-green-900 bg-opacity-25 rounded-full flex items-center justify-center">
                <button @click="browse()"><fa-icon :icon="['fas', 'camera']" style="color: #a1a0a0;" /></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    props: {
        value: File,
        defaultSrc: String
    },

    data() {
        return {
            src: this.defaultSrc,
            file: null
        }
    },

    methods: {
        browse() {
            this.$refs.file.click();
        },

        change(e) {
            this.file = e.target.files[0]
            this.$emit('input', this.file);
            let reader = new FileReader();
            reader.readAsDataURL(this.file)

            reader.onload = e => {
                this.src = e.target.result;
            }
        }
    }
}
</script>