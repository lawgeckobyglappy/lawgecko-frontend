<template>
    <div>
        <input type="file" accept="image/*" class="hidden" ref="file" @change="change" />
        <img :src="src" alt="Avatar" class="h-24 w-24 rounded-full object-cover"/>
        <button @click="browse()">Browse</button>
    </div>
</template>

<script>

export default {
    
    props: {
        value: File,

    },

    data() {
        return {
            src: null,
        }
    },

    methods: {
        browse() {
            this.$refs.file.click();
        },

        change(e) {
            this.$emit('input', e.target.files[0]);
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])

            reader.onload = e => {
                this.src = e.target.result;
            }
        }
    }
}
</script>