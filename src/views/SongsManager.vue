<template>
  <div>
    <h2>Saved Songs</h2>
    <ul id="saved-songs">
      <li
        v-bind:key="song.id"
        v-for="(song, i) in songsList"
        v-bind:song="song"
        class = "songs"
        >
        {{song.title}}
        
        <button @click="getSong(i)">Load</button>
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

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

#saved-songs{
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

}

.songs {
  text-align: left;
  margin: 1em;
}

button {
  color: #42b983;
  display: inline-block;
  line-height: 3em;
  padding: 0 1em;
  background: #34343E;
  border-radius: 0.5em;
  background-clip: padding-box;
  margin-right: 1em;
  cursor: pointer;
  border: 1px solid #EEE !important;
	background: none
}

</style>