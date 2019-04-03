<template>
  <div class="card" @click="$emit('flip')">
    <template v-if="flipped">
      <span :class="suitToColor()">
        {{ value }}
        {{ suitMap[suit] }}
      </span>
    </template>

    <template v-else>
      <span>
        X
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: String,
    suit: String,
    flipped: {
      type: Boolean,
      default: true
    }
  },
  data: function(){
    return {
      suitMap: {
        hearts: '♥',
        diamonds: '♦',
        spades: '♠',
        clubs: '♣',
      },
    }
  },
  methods: {
    suitToColor(){
      if(!this.flipped){
        return 'black';
      }
      if(this.suit == 'hearts' || this.suit == 'diamonds'){
        return 'red';
      } else {
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
    /* border-color: darkred; */
  }
</style>
