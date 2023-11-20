<template>
  <div id="app">
    <input v-model="newItem" @keyup.enter="add">
    <ul>
      <li v-for="(todo, index) in items" :key="index">
        {{ todo }}
        <button @click="remove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newItem: '',
      items: []
    }
  },
  methods: {
    add() {
      this.items.push(this.newItem);
      this.newItem = '';
    },
    remove(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
