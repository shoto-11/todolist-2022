<script setup>
import { ref } from "vue";
const items = ref([
  { name: "卵", price: "150" },
  { name: "トマト", price: "100" },
]);
const newItemName = ref("");
const newItemPrice = ref(0);
const addItem = () => {
  items.value.push({ name: newItemName.value, price: newItemPrice.value });
};
</script>

<template>
  <div>ItemList</div>
  <div v-for="item in items" :key="item.name">
    <div class="item" :class="{ over500: item.price >= 500 }">
      <div class="name">名前：{{ item.name }}</div>
      <div class="price">金額：{{ item.price }}</div>
      <div v-if="item.price >= 10000">高額商品</div>
    </div>
  </div>
  <div>
    <label>
      名前
      <input v-model="newItemName" type="text" />
    </label>
    <label>
      金額
      <input v-model="newItemPrice" type="number" />
    </label>
    <button @click="addItem">add</button>
  </div>
</template>
<style scoped>
.over500 {
  color: red;
}
</style>
