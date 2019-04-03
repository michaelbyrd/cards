<template>
  <div id="app">
    <div class="deck">
      <div v-for="card in cards" :key="card.id">
        <Card :value="card.rank" :suit="card.suit" />
      </div>
    </div>

    <button @click="shuffle">shuffle</button>
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
      ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      suits: ['hearts', 'diamonds', 'spades', 'clubs'],
      cards: []
    }
  },
  created() {
    this.initializeDeck();
  },
  methods: {
    initializeDeck(){
      let id=1;
      for( let s = 0; s < this.suits.length; s++ ) {
        for( let r = 0; r < this.ranks.length; r++ ) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s]
          }
          this.cards.push(card);
          id++;
        }
      }
    },
    shuffle(){
      // Fisher-Yates shuffle
      let currentIndex = this.cards.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this.cards[currentIndex];
        // this.cards[currentIndex] = this.cards[randomIndex];
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
}

.deck {
  display: flex;
  flex-wrap: wrap;
}
</style>
