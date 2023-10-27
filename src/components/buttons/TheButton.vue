<template>
    <div>
        <button>
            {{ text }}
        </button>
    </div>
</template>

<script>
    export default {
        name: 'TheButton',
        props: {
            text: String
        }
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
        font-weight: bold;
        justify-content: center;
        white-space: nowrap;
        background-color: black;
        color: white;
    }
</style>