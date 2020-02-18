<-- This will be for the list of chords of the song -->

<template>
    <span v-on:click="selected(item)">
        {{item.name}}{{item.mod}}
    </span>
</template>

<script>
export default {
    name: 'song-list',
    props: ['item'],
    data() {
        return {}
    },
    methods: {
        selected: function(data) {

            this.$emit('selected', data)
        }
    }
}
</script>