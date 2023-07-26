<template>
    <button @click="onClick" class="Button">
        <slot>Button</slot>
    </button>
</template>

<script>
    export default {
        props: {
            onClick: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
        border-radius: 8px;
        border: 0;
        background-color: lightgreen;
    }
</style>