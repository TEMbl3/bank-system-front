<script setup lang="ts">
import Card from '../components/Card.vue'

useHead({
  title: 'Главная | OnlyBank'
})
</script>
<template>
  <div class="w-fill scrol overflow-y-auto p-7 rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="flex gap-12">
      <div class="m-3 flex flex-col gap-5 w-fit mt">
        <h2 class="font-[500] text-2xl ml-3">Приборная панель</h2>
        <Card />
      </div>
      <div class="m-3 flex flex-col gap-5 w-fit mt">
        <h2 class="font-[500] text-2xl ml-3">Ваши балансы</h2>
        <div class="flex flex-col gap-[20px]">

          <div class="w-96 gap-4 p-5 pl-6 h-[120px] rounded-3xl text-xl flex items-center bg-zinc-900">
            <img class="h-12" src="https://img.icons8.com/?size=100&id=23659&format=png&color=228BE6" alt="">
            <div class="flex flex-col">
              <p>1 000 000 000.00₽</p>
              <p class="text-gray-400 text-lg">Мой счет</p>
            </div>
          </div>
          <div class="w-96 items-center p-5 pl-6 gap-5 h-[120px] flex rounded-3xl text-xl bg-zinc-900">
            <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=11497&format=png&color=228BE6" alt="">
            <div class="flex flex-col gap-1">
              <h3 class="font-[500] text-2xl">Все операции</h3>
              <p class="font-[300] text-lg text-gray-400">Трат в сентябре 200 000.00₽</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.scrol::-webkit-scrollbar {
  width: 22px;
}

.scrol::-webkit-scrollbar-thumb {
  background: #232325;
  border-radius: 0px 50px 50px 0px;
}
</style>