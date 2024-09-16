<script setup lang="ts">
import Card from '~/components/Card.vue';
import SecondCard from '~/components/SecondCard.vue';
import ThirdCard from '~/components/ThirdCard.vue';

useHead({
  title: 'Мои карты | OnlyBank',
})
</script>

<template>
  <div class="pt-14 scrol overflow-y-auto rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="flex gap-16 flex-wrap justify-center">
      <div class="flex flex-col items-center">
        <Card />
        <button class="p-3 mt-3 w-full rounded-lg bg-[#2c2c31] border border-zinc-500 shadow">Основная карта</button>
      </div>
      <div class="flex flex-col items-center">
        <SecondCard />
        <button
          class="p-3 mt-3 w-full hover:bg-zinc-800 transition active:bg-zinc-700 rounded-lg bg-zinc-900 border border-zinc-600 shadow">Сделать
          карту основной</button>
      </div>
      <div class="flex flex-col items-center">
        <ThirdCard />
        <button
          class="p-3 mt-3 w-full hover:bg-zinc-800 transition active:bg-zinc-700 rounded-lg bg-zinc-900 border border-zinc-600 shadow">Сделать
          карту основной</button>
      </div>
      <div class="w-[400px] hidden h-[260px] rounded-[15px] flex items-center justify-center text-[100px] border hover:bg-zinc-800 active:bg-zinc-700 select-none transition border-zinc-500 bg-zinc-900 ">+</div>
    </div>
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
</style>