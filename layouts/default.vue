<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import search from '~/components/search.vue';
</script>
<template>
  <div class="w-full text-white gap-3 flex bg-zinc-900 p-12 h-screen">
    <div class="w-[400px] h-full flex flex-col">
      <div class="flex ml-5 items-center gap-4 cursor-pointer select-none">
        <img class="w-10 " src="https://img.icons8.com/?size=100&id=77051&format=png&color=FFFFFF" alt="">
        <h1 class="text-3xl font-semibold">OnlyBank</h1>
      </div>
      <div class="flex-1"></div>
      <Nav></Nav>
      <div class="flex-1"></div>
      <div class="mr-10 mb-4">
        <button
          class="w-full hover:bg-zinc-800 rounded-xl text-2xl transition flex items-center gap-4 font-[500] p-3">
          <Icon class="text-2xl" name="material-symbols:account-circle-full" />
          <h2>Выйти</h2>
        </button>
      </div>
    </div>
    <div class="flex flex-col h-full w-full">
      <div class="flex justify-between mb-6 items-center">
        <search />
        <div class="w-12 h-12 rounded-3xl bg-zinc-800 mr-5"></div>
      </div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>