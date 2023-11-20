<template>
  <AppHeader />
  <TodoList />
</template>

<script>
import "./css/index.css";
import AppHeader from "./components/AppHeader.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    TodoList,
  },
};
</script>

<style></style>
