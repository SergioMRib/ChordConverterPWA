<template>
  <div class="home">
    <div id="container">
      
      <form v-show="!songTitle" >
        Enter your song title:
        <input type="text" v-model.lazy="songTitle"
                placeholder="title here" name="songTitle" id="songTitle"
                >
        <button type="submit"
                v-on:click.prevent="hasTitle = true"
                >Set title
        </button>
      </form>
      <h3 v-if="songTitle"> {{songTitle}} </h3>

      <ul class="song-list">
        <Chord
          v-bind:key="item.id"
          v-for="item in songChords"
          v-bind:item="item"
          v-on:selected="selectChord"
          v-on:click="selectChord"
          v-bind:class="{selected: item.selected, fullLine: item.fullLine}"
          class="song-list-chord">
        </Chord>
      </ul>

      <div id="usables" v-show="chords">
        <button id="button-save-song" v-on:click="saveSongToStore">{{saveButtonText}}</button>
        
        <ul class="list-of-chords">
          <Chord
            v-bind:key="item.pos"
            v-for="item in chords"
            v-bind:item="item"
            v-on:selected="addChord"
            class="chord-selectable">
          </Chord>
        </ul>

        <ul class="list-of-modifiers">
          <Modifier
              v-bind:key="item.pos"
              v-for="item in modifiers"
              v-bind:item="item"
              v-on:selected="addModifier"
              class="modifier-selectable">
          </Modifier>
        </ul>
        <div class="action-buttons">
          <button
            v-on:click="convert(1)">
            <font-awesome-icon icon="arrow-alt-circle-up" />
          </button>
          <button
            v-on:click="removeChord">
            <font-awesome-icon icon="eraser" />
          </button>
          <button
            v-on:click="convert(-1)">
            <font-awesome-icon icon="arrow-alt-circle-down" />
          </button>
          <button
            v-on:click="clearWarning = true">
            <font-awesome-icon icon="trash" />
          </button>
          <button id="add-line-button"
            v-on:click="addLine">
            <font-awesome-icon icon="level-down-alt" />
          </button>
        </div>
        <ul class="chord-system">
          <li v-on:click="selectSystem('latin')" v-bind:class="{latin: chordSystem}">
            Choose latin (Dó, Ré, Mi...)
          </li>
          <li v-on:click="selectSystem('universal')" v-bind:class="{latin: !chordSystem}">
            Choose universal (C, D, E...)
          </li>
        </ul>
      </div>
    </div>

    <div v-if="clearWarning" class="clear-warning">
      <p>Clear your entire song list?</p>
      <button @click="songChords = []; songTitle = ''; clearWarning = false">Yes</button>
      <button @click="clearWarning = false">No</button>
    </div>

    <div v-if="saveWarning" class="save-song-warning">
      <p>Make sure you have a title for the song and chords!</p>
      <button @click="saveWarning = false">Got it!</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import uuid from 'uuid'


// import SongList from '../components/SongList.vue';
import Chord from '../components/Chord.vue';
import Modifier from '../components/Modifier.vue';
/* import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'home',
  components: {
    Chord,
    Modifier
  },
  data() {
    return {
      chordSystem: false,
      chords: '',
      clearWarning: false,
      saveWarning: false,
      songTitle: '',
      saveButtonText: 'Save this song',
      latimChords: [{
            pos:0,
            name:"Lá"
        },
        {
            pos:1,
            name: "Lá#"
        },
        {
            pos:2,
            name:"Si"
        },
        {
            pos:3,
            name:"Dó"
        },
        {
            pos:4,
            name:"Dó#"
        },
        {
            pos:5,
            name:"Ré"
        },
        {
            pos:6,
            name:"Ré#"
        },
        {
            pos:7,
            name:"Mi"
        },
         {
            pos:8,
            name:"Fá"
        },
        {
            pos:9,
            name:"Fá#"
        },
        {
            pos:10,
            name:"Sol"
        },
        {
            pos:11,
            name:"Sol#"
        }
      ],
      universalChords: [{
            pos:0,
            name:"A"
        },
        {
            pos:1,
            name: "A#"
        },
        {
            pos:2,
            name:"B"
        },
        {
            pos:3,
            name:"C"
        },
        {
            pos:4,
            name:"C#"
        },
        {
            pos:5,
            name:"D"
        },
        {
            pos:6,
            name:"D#"
        },
        {
            pos:7,
            name:"E"
        },
         {
            pos:8,
            name:"F"
        },
        {
            pos:9,
            name:"F#"
        },
        {
            pos:10,
            name:"G"
        },
        {
            pos:11,
            name:"G#"
        }
      ],
      modifiers: [
        {
          pos:1,
          name:"m"},
        {
          pos:2,
          name: "M"
        },
        {
          pos:3,
          name:"7"},
        {
          pos:4,
          name:"9"
        },
        {
          pos:5,
          name:"sus"
          },
        {
          pos:6,
          name:"dim"
        }
      ],
      songChords: []
    }
  },
  methods: {
    selectSystem: function(choice) {
      this.chordSystem = choice;
      if (choice === "latin") {
        this.chordSystem = true;
        this.chords = this.latimChords
      } else {
        this.chords = this.universalChords
        this.chordSystem = false;
        }
    },
    addChord: function(data) {
      /**
       *
      */
      if (typeof(this.activeChord) === 'undefined') {

        //create the new chord
        const newChord = {
          id: uuid.v4(),
          pos: data.pos,
          name: data.name,
          mod: "",
          selected: true
        };

        //push it to the songChords array
        this.songChords.push(newChord)

      } else {
        //get the position of the active chord
        let index = this.songChords.findIndex(x => x.id === this.activeChord.id)
        // add one to insert the new chord after the current selected
        index += 1

        //deselect the chord
        this.activeChord.selected = false;

        //create the new chord
        const newChord = {
          id: uuid.v4(),
          pos: data.pos,
          name: data.name,
          mod: "",
          selected: true
        };

        // push the newly created to the song list at specified position
        this.songChords.splice(index, 0, newChord)
      }

    },
    removeChord: function() {

      if (typeof(this.activeChord) !== 'undefined') {
        // remove it
        let index = this.songChords.findIndex(x => x.id === this.activeChord.id)
        this.songChords.splice(index, 1)
      }
    },
    selectChord: function(data) {
      if (typeof(this.activeChord) !== 'undefined') {
        this.activeChord.selected = false;
      }

      data.selected = !data.selected // toggles true and false

    },
    addModifier: function(data) {

      if (typeof(this.activeChord) !== 'undefined') {
        this.activeChord.mod += data.name
      }
    },
    convert: function(direction) {
      /**
       * for each element of the songChords update its .name and .pos properties
       */

      // gets the current list of chord positions and increases/decreases
      this.songChords.forEach( element => {
        if (element.fullLine != true) {

          let val = element.pos + direction;
          if (val > 11) {
            val = 0;
          }
          if (val < 0 ) {
            val = 11;
          }

          element.name = this.chords[val].name;
          element.pos = val;
        }
      });
    },
    addLine: function() {
      /* Creates a new empty chord object that fills all cells of the line
       *
       */
      let emptyChord = {
        id: uuid.v4(),
        pos: "",
        name: "_",
        mod: "",
        fullLine: true,
        selected: true
      };
      //deselect the chord
      this.activeChord.selected = false;

      this.songChords.push(emptyChord);
    },
    saveSongToStore: function() {
      
      //alert("save to song method called")
      if (this.songTitle && this.songChords.length != 0) {
        let song = {id: uuid.v4(), title: this.songTitle, chords: this.songChords}
        this.$store.commit('addSong', song)

        this.saveButtonText = 'Saved'
      } else {
        this.saveWarning = true
      }

      
      //this.$store.commit('increment')
    }
  },
  computed: {
    activeChord: function() {
        /* still in development */
      let index = this.songChords.findIndex(x => x.selected === true)
      return this.songChords[index]
    },
  },
  watch: {
    songChords: function () {
      if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem('chords', JSON.stringify(this.songChords))
      }
    },
  },
  created () {
    //when opening, the current chord should be empty, 
    //when changing routes the song gets populated by the selected from the saved list
    if (this.$store.state.currentSong.chords ) {
      this.songTitle = this.$store.state.currentSong.title
      this.songChords = this.$store.state.currentSong.chords
    }
    this.selectSystem("universal")
  }
}
</script>

<style scoped>


  #container {
    background-color: rgb(57, 73, 96);
  }

  .song-list {
    display: grid;
    box-sizing: border-box;
    padding: 5px;
    grid-template-columns: repeat(8,1fr);
    grid-gap: 7px;
  }

  .song-list-chord {

    font-size: 1.3em;
    color: #fd9800;
    font-weight: bold;
  }
  .fullLine {
    grid-column-end: -1;

  }
  #usables {
    position: fixed;
    bottom: 5px;
    width: 100%;
    padding: 1px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 3px;
  }

  #button-save-song{
    grid-column: 1/ -1;
    place-self: center;
    color: #42b983;
    display: inline;
    line-height: 3em;
    padding: 0 5em;
    background: none;
    border-radius: 0.5em;
    background-clip: padding-box;
    cursor: pointer;
    border: 1px solid #EEE;
  }

  .chord-selectable, .modifier-selectable {
    font-size: 1em;
    vertical-align: middle;
    line-height: 2em;
    border-right: 2px solid #555f72;
    border-bottom: 2px solid #555f72;
    border-radius: 5px;
    background-color: #26334a;
  }

  .modifier-selectable {
    color: rgb(54, 184, 166);
    background-color: #698c7b;
  }

  .list-of-chords, .list-of-modifiers, .action-buttons {
    display: grid;
    grid-gap: 2px;
    justify-items: stretch;
    align-items: stretch;
    margin: 0;
  }
  .list-of-chords {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 2em);
  }
  .list-of-modifiers {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 2em);
  }

  .action-buttons{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 2em);
    margin: 0;
  }
  .svg-inline--fa {
    font-size: 1.5em;
  }
  #add-line-button {
    grid-column: span 2;
  }

  .chord-system {
    font-size: 0.8em;
    font-weight: 300;
    margin: 0;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .latin {
    font-weight: 600;
  }

  .clear-warning, .save-song-warning {
    background-color: #698c7b93;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
    padding: 5% 10% 10%;
    border-radius: 10px;
    box-shadow: 5px 5px #26334ad3;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li:hover, button:hover {
    cursor: pointer;
  }
</style>
