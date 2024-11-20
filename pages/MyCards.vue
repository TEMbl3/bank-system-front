<script setup lang="ts">
import Card from '@/components/Card.vue';
import SecondCard from '@/components/SecondCard.vue';
import ThirdCard from '@/components/ThirdCard.vue';
import { useRouter } from 'vue-router';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import axios from 'axios';

// Проверяем токен
definePageMeta({
  async middleware() {
    const router = useRouter();
    const token = useCookie('jwt').value;
    if (token) {
      let response = await axios.get('http://localhost:3005/auth/checkAuth', {
        headers: {
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
      })
      console.log(response.data.success);
      if (!response.data.success) {
        return router.push('/login');
      }
    }
    if (!token) {
      return router.push('/login');
    }
  },
});

useHead({
  title: 'Мои карты | OnlyBank',
})
const isOpenDrawer = ref(false)
const toggleDrawer = () => {
  isOpenDrawer.value = !isOpenDrawer.value
}
const closeDrawer = () => {
  isOpenDrawer.value = false
}
</script>

<template>
  <div class="pt-14 scrol overflow-y-auto rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="flex gap-16 flex-wrap justify-center">
      <div class="flex flex-col items-center">
        <Card />
        <button @click="toggleDrawer"
          class="p-3 mt-3 w-full hover:bg-zinc-800 transition active:bg-zinc-700 rounded-lg bg-zinc-900 border border-zinc-600 shadow">Подробнее</button>
      </div>
      <div class="flex flex-col items-center">
        <SecondCard />
        <button @click="toggleDrawer"
          class="p-3 mt-3 w-full hover:bg-zinc-800 transition active:bg-zinc-700 rounded-lg bg-zinc-900 border border-zinc-600 shadow">Подробнее</button>
      </div>
      <div class="flex flex-col items-center">
        <ThirdCard />
        <button @click="toggleDrawer"
          class="p-3 mt-3 w-full hover:bg-zinc-800 transition active:bg-zinc-700 rounded-lg bg-zinc-900 border border-zinc-600 shadow">Подробнее</button>
      </div>
      <div
        class="w-[400px] opacity-0 h-[260px] rounded-[15px] flex items-center justify-center text-[100px] border hover:bg-zinc-800 active:bg-zinc-700 select-none transition border-zinc-500 bg-zinc-900 ">
        +</div>
    </div>
    <transition name="slide">
      <div
        class="drawer p-10 flex flex-col z-10 fixed right-0 bg-zinc-900 border-l border-zinc-800 top-0 w-[450px] h-full"
        v-if="isOpenDrawer">
        <div class="">
          <div class="flex flex-col">
            <div class="flex items-center justify-between">
              <h2 class="text-xl">Мой счет</h2>
              <img class="h-4" src="../public/Mir.png" alt="">
            </div>
            <h1 class="text-3xl mt-4 font-[500] italic">100 000,00$</h1>
          </div>
          <div class="flex w-full font-[500] mt-5 text-center mx-auto border border-zinc-700 rounded-xl">
            <div
              class="w-[50%] select-none text-xl cursor-pointer p-5 border-r hover:bg-zinc-800 transition rounded-l-xl active:bg-zinc-700 border-zinc-700">
              Пополнить</div>
            <div
              class="w-[50%] select-none text-xl cursor-pointer p-5 hover:bg-zinc-800 transition rounded-r-xl active:bg-zinc-700">
              Перевести</div>
          </div>
          <div class="flex flex-col gap-3 mt-5 text-lg">
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">Номер карты:</span>5555 5555 5555 444
            </p>
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">Владелец:</span> Artem Khruschalev
            </p>
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">CCV:</span> 767
            </p>
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">Срок действия:</span> 12/28
            </p>
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">Платежная система:</span> Мир
            </p>
            <p class="flex items-center gap-2 font-[300]">
              <span class="font-[500]">Трат в октябре:</span> 1 000 000,00$
            </p>
          </div>
        </div>
        <div class="flex-1"></div>
        <button
          class="border p-5 rounded-xl border-zinc-700 cursor-pointer hover:bg-zinc-800 transition rounded-r-xl active:bg-zinc-700">Сделать
          основной</button>
      </div>
    </transition>
    <transition name="opacity">
      <div v-if="isOpenDrawer" @click="closeDrawer"
        class="fixed transition w-full h-full bg-black top-0 left-0 opacity-40"></div>
    </transition>
  </div>
</template>



<style scoped>
.scrol::-webkit-scrollbar {
  width: 0px;
}

.scrol::-webkit-scrollbar-thumb {
  background: #232325;
  border-radius: 0px 50px 50px 0px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.4s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}
</style>