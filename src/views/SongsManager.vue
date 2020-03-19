<template>
  <div>
    <h3>I'm Sérgio and I created this app.</h3>
    <ul>
      <li
        v-bind:key="song.id"
        v-for="(song, i) in songsList"
        v-bind:song="song"
        >
        {{song.title}}
        ({{i}})
        <button @click="getSong(i)">Get song</button>
        <button @click="removeSong(i)">
          <font-awesome-icon icon="trash" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'songs-manager',
    methods: {
      getSong: function(index) {
        this.$store.commit('setCurrentSong', index)
      },
      removeSong: function (i) {
        this.$store.commit('remove', i)
      }

    },
    computed: mapState({
      songsList: state => state.savedSongs
    })
  }
</script>

