<script setup lang="ts">
useHead({
  title: 'Авторизация | OnlyBank',
})
definePageMeta({
  layout: false,
});

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3005'

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    let response = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    })
    console.log(response.data);  
  } catch (error) {
    console.log(error);
    
  }
}
</script>

<template>
  <div class="w-full p-7 h-screen bg-zinc-800 flex flex-col justify-center items-center text-white shadow-inner">
    <h2 class="text-3xl font-[500] mb-6 select-none">Авторизация</h2>
    <form @submit.prevent="login" class="flex flex-col gap-5">
      <input v-model="email" class="w-72 p-3 bg-zinc-900 rounded-lg" placeholder="Введите ваш email" type="text">
      <input v-model="password" class="w-72 p-3 bg-zinc-900 rounded-lg" placeholder="Введите ваш пароль" type="text">
      <button type="submit" class="bg-zinc-900 select-none border-zinc-700 border hover:bg-zinc-800 transition active:bg-zinc-900 p-3 rounded-lg">Войти</button>
    </form>
    <p class="mt-4 text-zinc-200 select-none cursor-pointer">Забыли пароль?</p>
  </div>
</template>



<style scoped></style>