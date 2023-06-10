import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        ".components/ToDoList.vue",
        // 他のモジュールも追加する場合はここに追記する
      ],
    },
  },
});

