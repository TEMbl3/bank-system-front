<script setup lang="ts">
import Cookies from 'universal-cookie';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import middleware from '@/controllers/middleware.ts'
import axios from 'axios'
import type { IUser } from '~/interfaces.ts';

const router = useRouter();
const cookies = new Cookies();
const store = useUserStore();


useHead({
  title: 'Авторизация | OnlyBank',
})
definePageMeta({
  layout: false,
});

const email = ref('')
const password = ref('')

const login = async () => {
  try {
    let response = await axios.post('http://localhost:3005/auth/login', {
      email: email.value,
      password: password.value
    })
    if (response.data.token) {
      cookies.set('jwt', response.data.token, { path: '/', maxAge: 3600 * 24 * 30 });
      store.setUser(response.data as IUser);
      console.log(store.getUserName);     
      router.push('/');
    }

  } catch (error) {
    console.log(error);

  }
}
</script>

<template>
  <div class="w-full p-7 h-screen bg-zinc-800 flex flex-col justify-center items-center text-white shadow-inner">
    <h2 class="text-3xl font-[500] mb-6 select-none">Авторизация</h2>
    <form @submit.prevent="login" class="flex flex-col gap-5">
      <input v-model="email" required class="w-72 p-3 bg-zinc-900 rounded-lg" placeholder="Введите ваш email" type="text">
      <input v-model="password" type="password" required class="w-72 p-3 bg-zinc-900 rounded-lg" placeholder="Введите ваш пароль">
      <button type="submit"
        class="bg-zinc-900 select-none border-zinc-700 border hover:bg-zinc-800 transition active:bg-zinc-900 p-3 rounded-lg">Войти</button>
    </form>
    <p class="mt-4 text-zinc-200 select-none cursor-pointer">Забыли пароль?</p>
  </div>
</template>



<style scoped></style>