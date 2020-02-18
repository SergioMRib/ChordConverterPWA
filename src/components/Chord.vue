
<template>
    <li v-on:click="selected(item)">
        {{item.name}}{{item.mod}}
    </li>
</template>

<script>
export default {
    name: 'chord-item',
    props: ['item'],
    data() {
        return {}
    },
    methods: {
        selected: function(data) {
            console.log("emitted from chord")
            this.$emit('selected', data)
        }
    }
}
</script>

<style scoped>

li:hover {
   cursor: pointer;
}

li.selected {
    border: 1px dotted white;
    border-radius: 2px;
}

</style>

