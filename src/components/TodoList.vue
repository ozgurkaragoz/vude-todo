<template>
  <div class="mt-10 bg-blue-100 p-6 max-w-md mx-auto rounded-xl shadow-md flex flex-col items-center">
    <input
      v-model="newItem"
      @keyup.enter="add"
      class="w-full px-4 py-2 border rounded-md"
      placeholder="What needs to be done? Press enter to add..."
    />
    <ul class="space-y-2 w-full">
      <li
        v-for="(todo, index) in items"
        :key="index"
        class="flex justify-between items-center bg-gray-100 rounded-md p-2 mt-2"
      >
        <span class="text-gray-800">{{ todo }}</span>
        <button
          @click="remove(index)"
          type="button"
          class="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium rounded-full text-sm px-3 py-1"
        >
          Done
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  data() {
    return {
      newItem: "",
      items: [],
    };
  },
  created() {
    const items = localStorage.getItem("items");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
  methods: {
    add() {
      if (this.newItem.length === 0) return;

      this.items.push(this.newItem);
      this.newItem = "";
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    remove(index) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items));

      confetti.create(document.getElementById("confetti"), {
        resize: true,
        useWorker: true,
      })({
        particleCount: 200,
        spread: 200,
      });
    },
  },
};
</script>
