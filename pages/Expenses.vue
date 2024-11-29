<script setup lang="ts">
import { useRouter } from 'vue-router';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useUserStore } from '@/stores/userStore';
import type { ITransfer } from '@/interfaces';
import middleware from '@/controllers/middleware'

const store = useUserStore();
const cookies = new Cookies();

// Проверяем токен
definePageMeta({
  async middleware() { await middleware() }
});

useHead({
  title: 'Расходы | OnlyBank',
})

const transfers = ref<ITransfer[]>([])
const user = store.user

onMounted(async () => {
  const token = useCookie('jwt').value;
  let response = await axios.get('http://localhost:3005/card/getTransfers', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  transfers.value = response.data

})
</script>

<template>
  <div class="w-fill p-7 scrol overflow-y-auto rounded-3xl h-full bg-zinc-800 text-white shadow-inner">
    <div class="pl-5 pt-5 flex items-center gap-3">
      <NuxtLink to="/"
        class="border cursor-pointer border-zinc-500 p-3 rounded-lg rotate-180 hover:-translate-x-1 transition px-4">
        <svg width="8" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.999999L6 6L1 11" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>

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
          <TableRow v-for="item in transfers" class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
            <TableCell class="font-[500] select-none text-lg">
              Перевод
            </TableCell>
            <TableCell>{{ (item.senderName === user?.fullName ? item.senderCard : item.recipientCard).replace(/(\d{4})/g, '$1 ').trim() }}</TableCell>
            <TableCell>{{ item.createdAt }}</TableCell>
            <TableCell>{{ item.senderName === user?.fullName ? item.recipientName : item.senderName }}</TableCell>
            <TableCell
              :class="{ 'text-red-500': user?.fullName === item.recipientName, 'text-green-500': user?.fullName === item.senderName }"
              class="text-right">
              {{ user?.fullName === item.senderName ? '+' : '-' }}{{ item.amount }}.00$
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