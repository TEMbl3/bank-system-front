<script setup lang="ts">
useHead({
  title: 'Переводы | OnlyBank',
})
import { useRouter } from 'vue-router';
import Cookies from 'universal-cookie';
import axios from 'axios';
import middleware from '@/controllers/middleware.ts'

const cookies = new Cookies();

// Проверяем токен
definePageMeta({
  async middleware() { await middleware() }
});

import alert from '~/components/alert.vue';
import AlertChoseCard from '~/components/TransferInTransfers.vue';

const items = ref([1, 2, 3, 4])
</script>

<template>
  <div
    class="min-w-full overflow-x-hidden w-full p-7 px-9 rounded-3xl h-full scrol overflow-y-auto bg-zinc-800 text-white shadow-inner">
    <div class="flex items-center justify-between mt-2">
      <h2 class="text-3xl font-semibold">Мои контакты</h2>
      <div class="flex items-center gap-5">
        <input type="text"
          class="w-72 block focus:outline-none focus:border focus:border-zinc-700 border border-zinc-800 p-3 bg-zinc-900 rounded-lg"
          placeholder="Поиск">
        <button
          class="border border-zinc-900 hover:border-zinc-700 active:border-zinc-700 rounded-lg p-3 px-4 hover:bg-zinc-900 transition active:bg-zinc-800 bg-zinc-900">Добавить
          контакт</button>
      </div>
    </div>
    <div class="w-full mt-8 flex flex-col gap-3 ml-1">
      <div class="w-full px-5 gap-20 flex items-center border border-zinc-600 rounded-lg h-16" v-for="item in items">
        <div class="flex items-center gap-4">
          <span class="w-10 h-10 rounded-3xl bg-zinc-900"></span>
          <p class="mt-1">Khruschalev Artem</p>
        </div>
        <p>Номер телефона: +79811601034</p>
        <div class="flex ml-auto gap-4 items-center">
          <AlertChoseCard />
          <alert></alert>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.scrol::-webkit-scrollbar {
  width: 22px;
}

.scrol::-webkit-scrollbar-thumb {
  background: #232325;
  border-radius: 0px 50px 50px 0px;
}
</style>