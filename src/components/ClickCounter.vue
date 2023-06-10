<script setup>
import { ref, computed } from "vue";
const count = ref(0);
const countMessage = computed(() => "回数: " + count.value);
defineProps({
  msg: { type: String, default: "" },
});
</script>

<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ countMessage }}</div>
    <button @click="count++">クリック！</button>
    <button @click="count = 0">リセット！</button>
  </div>
</template>

<style></style>
