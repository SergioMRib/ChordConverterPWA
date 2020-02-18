<template>
    <button
        v-on:click="alert">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'action-button',
    methods: {
        alert: function() {
            console.log("alerteedddd")
        }
    }
}

</script>

<style scoped>
    button {
        background-color: aqua;
    }

</style>
