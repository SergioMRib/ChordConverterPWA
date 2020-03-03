import Vue from 'vue'
import Vuex from 'vuex'

//import idb from '@/api/idb';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: []
  },
  mutations: {
  },
  actions: {
    async getSongs(){
      return
    },
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
