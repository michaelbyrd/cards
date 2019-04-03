<template>
  <div id="app">
    <h1>Remaining Sets: {{ remainingSetsCount }}</h1>
    <hr>
    <div class="deck">
      <template v-if="displayDeck">
        <Card v-for="card in cards" 
          :key="card.id" 
          :value="card.rank" 
          :suit="card.suit" 
          :selected="card.selected" 
          :completed="card.completed"
          @flip="onFlip(card)"
        />
      </template>
    </div>


  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  },
  data: function() {
    return {
      // ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      // suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      ranks: ['10', 'J', 'Q', 'K', 'A'],
      suits: ['hearts', 'spades', 'hearts', 'spades'],
      cards: [],
      displayDeck: true,
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
  },
  created() {
    this.initializeDeck();
  },
  methods: {
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
      if(card.completed) return 'early';

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

      return (this.selectedCards[0].suit == this.selectedCards[1].suit) && (this.selectedCards[0].rank == this.selectedCards[1].rank)
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
}

.deck {
  display: flex;
  flex-wrap: wrap;
}
</style>

    // shuffle(){
    //   // Fisher-Yates shuffle
    //   let currentIndex = this.cards.length, temporaryValue, randomIndex;
    //   while (0 !== currentIndex) {
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex -= 1;

    //     temporaryValue = this.cards[currentIndex];
    //     // this.cards[currentIndex] = this.cards[randomIndex];
    //     this.$set(this.cards, currentIndex, this.cards[randomIndex])
    //     this.cards[randomIndex] = temporaryValue;
    //   }

    //   return this.cards;
    // }