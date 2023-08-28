<template>
    <div>
        <button class="my-button">
            {{ btnText }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'TheButton',
        props: {
            btnText: String
        }
    }
</script>

<style scoped>
    .my-button {
        padding: 10px 20px;
        font-weight: bold;
        border-radius: 20px;
        justify-content: center;
        white-space: nowrap;
    }
</style>