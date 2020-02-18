<template>
    <li v-on:click="selected(item)">
        {{item.name}}
    </li>
</template>

<script>
export default {
    name: 'modifier-item',
    props: ['item'],
    data() {
        return {}
    },
    methods: {
        selected: function(data) {
            console.log("emmitting...")
            this.$emit('selected', data)
        }
    }
}
</script>

<style scoped>

li:hover {
   cursor: pointer;
}
</style>
