<script setup lang="ts">

useHead({
  title: 'Расходы | OnlyBank',
})

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Ui/table';

const items = ref([1, 2, 3, 4])
</script>

<template>
  <div class="w-fill p-7 scrol overflow-y-auto rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="pl-5 pt-5 flex items-center gap-3">
      <NuxtLink to="/"
        class="border cursor-pointer border-zinc-500 p-3 rounded-lg rotate-180 hover:-translate-x-1 transition px-4">
        <img src="../public/arrow-right.svg" alt="">
      </NuxtLink>
      <h2 class="text-3xl font-[500]">Все транзакции на ваших счетах</h2>
    </div>
    <div class="mt-6 border border-zinc-500 rounded-lg mx-3">
      <Table>
        <TableHeader>
          <TableRow class="hover:bg-zinc-900 rounded-2xl transition text-lg ">
            <TableHead class="text-zinc-400 py-3">Тип</TableHead>
            <TableHead class="text-zinc-400 py-3">Карта</TableHead>
            <TableHead class="text-zinc-400 py-3">Дата и время</TableHead>
            <TableHead class="text-zinc-400 py-3">От кого/кому</TableHead>
            <TableHead class="text-right text-zinc-400 py-3">Сумма</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="border-t-[2px] border-gray-500">
          <TableRow v-for="item in items"
            class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
            <TableCell class="font-[500] select-none text-lg">
              Перевод
            </TableCell>
            <TableCell>5555 5555 5555 4444</TableCell>
            <TableCell>15 октября в 15:03</TableCell>
            <TableCell>Khruschalev Artem</TableCell>
            <TableCell class="text-right text-red-500">
              -250.00$
            </TableCell>
          </TableRow>
          <TableRow v-for="item in items" class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
            <TableCell class="font-[500] select-none text-lg">
              Перевод
            </TableCell>
            <TableCell>5555 5555 5555 4444</TableCell>
            <TableCell>26.01.2024</TableCell>
            <TableCell>Rodionov Roman</TableCell>
            <TableCell class="text-right text-green-500">
              +250.00$
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>



<style scoped>
.scrol::-webkit-scrollbar {
  width: 0;
}

.scrol::-webkit-scrollbar-thumb {
  background: #232325;
  border-radius: 0px 50px 50px 0px;
}
</style>