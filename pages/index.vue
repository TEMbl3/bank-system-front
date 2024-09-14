<script setup lang="ts">
import Card from '../components/Card.vue'
import Chart from '../components/Chart.vue'

useHead({
  title: 'Главная | OnlyBank'
})
</script>
<template>
  <div class="w-full scrol overflow-y-auto p-7 rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="flex gap-10">
      <div class="m-3 flex flex-col gap-5 w-fit">
        <h2 class="font-[500] text-2xl ml-3">Приборная панель</h2>
        <Card />
      </div>
      <div class="m-3 flex flex-col gap-5 w-fit">
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
      <div class="flex w-full mt-3 flex-col gap-5">
        <h2 class="font-[500] text-2xl ml-3">Расходы за 7 дней</h2>
        <div class="bg-zinc-900  h-full flex flex-col gap-4 w-full rounded-xl p-4">
          <h3 class="m-3 font-[400] text-2xl flex items-center gap-3">Потратил за сегодня: <span
              class="font-[600] text-3xl text-[#1c74c4]">700.00₽</span></h3>
          <Chart class="w-full  p-3 h-full" />
          <div class="">
            <div class="flex m-3 justify-between items-center">
              <h3 class=" font-[500] text-3xl">Мои карты</h3>
              <p class="text-gray-400">Смотреть все</p>
            </div>
            <div class="flex flex-col gap-6 mb-2 px-2 mt-5">
              <div class="w-full p-3 flex justify-center items-center gap-8 h-28 rounded-2xl bg-zinc-800">
                <p class="font-[500]  max-w-48 min-w-48 text-2xl">34,000.00 ₽</p>
                <p>...4153</p>
                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px">
              </div>
              <div class="w-full p-3 flex justify-center items-center gap-8 h-28 rounded-2xl bg-zinc-800">
                <p class="font-[500] max-w-52 min-w-52 text-2xl break-all">1,480,000,000 ₽</p>
                <p>...5172</p>
                <img src="https://artsmile.by/assets/images/carts/mastercard.png" width="60px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.scrol::-webkit-scrollbar {
  width: 0px;
}
</style>