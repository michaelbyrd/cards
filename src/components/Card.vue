<template>
  <div class="card" @click="$emit('flip')">
    <template v-if="showCard">
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
    selected: { type: Boolean, default: false },
    completed: { type: Boolean, default: false }
  },
  data: function(){
    return {
      suitMap: { hearts: '♥', diamonds: '♦', spades: '♠', clubs: '♣' },
    }
  },
  computed: {
    showCard: function(){
      return (this.selected || this.completed);
    }
  },
  methods: {
    suitToColor(){
      return (this.suit == 'hearts' || this.suit == 'diamonds') ? 'red' : 'black';
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
