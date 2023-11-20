<template>
  <input v-model="newItem" @keyup.enter="add" />
  <ul>
    <li v-for="(todo, index) in items" :key="index">
      {{ todo }}
      <button @click="remove(index)">Remove</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      items: [],
    };
  },
  methods: {
    add() {
      this.items.push(this.newItem);
      this.newItem = "";
    },
    remove(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style></style>
