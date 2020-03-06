import Vue from 'vue'
import Vuex from 'vuex'

//import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    savedSongs: [],
    currentSong: {},
    count: 0
  },
  mutations: {
    addSong(state, song) {
      state.savedSongs.push(song)
      state.currentSong = song
    },
    setCurrentSong(state, index) {
      state.currentSong = state.savedSongs[index]
    },
    remove() {
      return 
    }, 
    increment(state) {
      //alert("increment mutation was called")
      state.count++
    } 
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
