import Vue from 'vue'
import Vuex from 'vuex'

//import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedSongs: [],
    currentSong: {}
  },
  mutations: {
    addSong(state, song) {
      state.savedSongs.push(song)
      state.currentSong = song
    },
    setCurrentSong(state, index) {
      state.currentSong = {}
      state.currentSong = {
        id: state.savedSongs[index].id,
        title: state.savedSongs[index].title,
        chords: state.savedSongs[index].chords
      }
      //state.currentSong = state.savedSongs[index]
    },
    remove(state, index) {
      state.savedSongs.splice(index, 1)
      state.currentSong = {}
    }, 
  },
  actions: {
    
    
    async addSong() {
      alert('addsong method from store')
      return
    },
    async removeSong() {
      return
    }
  },
  modules: {
  }
})
