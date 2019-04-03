<template>
  <div id="app">
    <h1>Remaining Sets: {{ remainingSetsCount }}</h1>
    <h4>Remaining attempts: {{ numberOfTries }}</h4>
    <hr>
    <div class="deck">
      <Card v-for="card in cards" 
        :key="card.id" 
        :value="card.rank" 
        :suit="card.suit" 
        :selected="card.selected" 
        :completed="card.completed"
        @flip="onFlip(card)"
      />
    </div>

    <div v-if="gameOver">
      <hr>
      <div v-if="remainingSetsCount == 0">
        !!!--CONGRATULATIONS--!!!
        <br>
        <button @click="reset()">Play Again</button>
      </div>

      <div v-else>
        <button @click="reset()">Try Again</button>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

const NUM_TRIES = 5;
const RANKS = ['10', 'J', 'Q', 'K', 'A'];
const SUITS = ['hearts', 'spades', 'hearts', 'spades'];

// const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
// const SUITS = ['hearts', 'diamonds', 'spades', 'clubs'],

export default {
  name: 'app',
  components: {
    Card
  },
  data: function() {
    return {
      ranks: RANKS,
      suits: SUITS,
      cards: [],
      displayDeck: true,
      numberOfTries: NUM_TRIES,
    }
  },
  computed: {
    selectedCards: function(){
      return this.cards.filter(function(card){ return card.selected });
    },
    completedCards: function(){
      return this.cards.filter(function(card){ return card.completed });
    },
    remainingSetsCount: function(){
      return (this.cards.length - this.completedCards.length)/ 2;
    },
    gameOver: function(){
      return this.numberOfTries == 0 || this.remainingSetsCount == 0;
    }
  },
  created() {
    this.initializeDeck();
  },
  methods: {
    reset(){
      this.cards = [];
      this.initializeDeck();
      this.shuffle();
      this.numberOfTries = NUM_TRIES;
    },
    initializeDeck(){
      let id = 1;
      for( let s = 0; s < this.suits.length; s++ ) {
        for( let r = 0; r < this.ranks.length; r++ ) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s],
            selected: false,
            completed: false
          }
          this.cards.push(card);
          id++;
        }
      }
    },
    onFlip(card) {
      if(this.gameOver || card.completed) return 'early';

      if(this.selectedCards.length >= 2){
        this.selectedCards.forEach(card => {
          card.selected = false;
        });
      }

      card.selected = !card.selected;

      if(this.selectedCardsMatch()){
        this.selectedCards.forEach(card => {
          card.completed = true;
        })
      }
    },
    selectedCardsMatch(){
      if(this.selectedCards.length <2 )
        return false;

      if(this.selectedCards[0].suit == this.selectedCards[1].suit && this.selectedCards[0].rank == this.selectedCards[1].rank){
        return true;
      } else {
        this.numberOfTries -= 1;
        return false;
      }
    },
    shuffle(){
      // Fisher-Yates shuffle
      let currentIndex = this.cards.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this.cards[currentIndex];
        this.$set(this.cards, currentIndex, this.cards[randomIndex])
        this.cards[randomIndex] = temporaryValue;
      }

      return this.cards;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}

.deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  flex-basis: 15%;
}

button {
	-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
	-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffffff), color-stop(1, #f6f6f6));
	background:-moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:-ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
	background-color:#ffffff;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}

button:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f6f6f6), color-stop(1, #ffffff));
	background:-moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:-ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
	background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
	background-color:#f6f6f6;
}

button:active {
	position:relative;
	top:1px;
}

</style>

