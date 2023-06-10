<script setup>
import { ref } from "vue";

const list = ref([
  { flag: true, title: "卵買う" },
  { flag: false, title: "トマト買う" },
]);
const newFlag = ref(false);
const newTitle = ref("");
const add_todolist = () => {
  list.value.push({ flag: newFlag.value, title: newTitle.value });
};
</script>

<template>
  <h2>ToDoList</h2>
  <div>
    <input v-model="newFlag" type="checkbox" />
    <input v-model="newTitle" type="text" />
    <button @click="add_todolist">追加</button>
  </div>
  <div class="list">
    <div class="lis">
      <label> 完了リスト </label>
      <div v-for="lis in list" :key="lis.name">
        <div v-if="lis.flag" class="list_element">
          <input v-model="lis.flag" type="checkbox" />
          <div class="do_name">{{ lis.title }}</div>
        </div>
      </div>
    </div>
    <div class="lis">
      <label> 未完了リスト </label>
      <div v-for="lis in list" :key="lis.name">
        <div v-if="!lis.flag" class="list_element">
          <input v-model="lis.flag" type="checkbox" />
          <div class="do_name">{{ lis.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.list {
  display: flex;
  justify-content: center;
  text-align: center;
}
.list > div {
  border: 1px solid #999;
  padding: 10px 30px;
  margin: 0;
  list-style: none;
  background: #fff;
  text-align: center;
}
.list_element {
  display: flex;
  text-align: center;
}
</style>
