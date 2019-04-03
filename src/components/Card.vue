<template>
  <div class="card" :class="suitToColor()">
    {{ value }}
    {{ suitMap[suit] }}
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: String,
    suit: String
  },
  data: function(){
    return {
      suitMap: {
        hearts: '♥',
        diamonds: '♦',
        spades: '♠',
        clubs: '♣',
      }
    }
  },
  methods: {
    suitToColor(){
      if(this.suit == 'hearts' || this.suit == 'diamonds'){
        return 'red';
      } else {
        console.log('here');
        return 'black';
      }
    }
  }

}
</script>

<style scoped>
  div {
    border: 1px solid black;
    margin: .5em;
    width: 3em;
  }

  .red {
    color: darkred;
    border-color: darkred;
  }
</style>
