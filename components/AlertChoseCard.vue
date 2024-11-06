<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const selectedCard = ref('')

function formatLastFour(cardNumber: string) {
  return cardNumber.slice(-4)
}


const cards = ref([
  { number: '4153456789123456', balance: '34,000.00', CardType: 'Visa' },
  { number: '5172345678912345', balance: '480,000,000.00', CardType: 'Mastercard' },
  { number: '4151256789122456', balance: '34,000.00', CardType: 'Mir' }
])

interface ICards {
  number: string,
  balance: string,
  CardType: string,
}

const selectCard = (card: ICards) => {
  if (selectedCard.value == card.number) {
    selectedCard.value = ''
  } else {
    selectedCard.value = card.number
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger
      class="border border-zinc-700 hover:border-zinc-700 rounded px-3 p-2 hover:bg-zinc-900 transition active:bg-zinc-800">
      Перевести</AlertDialogTrigger>
    <AlertDialogContent class="bg-zinc-900 border border-zinc-700">
      <AlertDialogHeader>
        <AlertDialogTitle class="text-white text-xl mb-4 text-center font-semibold">С какой карты вы хоитие перевести?
        </AlertDialogTitle>
        <AlertDialogDescription class="text-white select-none flex flex-col gap-5 mb-4">
          <div v-for="card in cards" :key="card.number" @click="selectCard(card)"
            :class="{ selected: selectedCard == card.number }"
            class="w-full cursor-pointer p-3 flex justify-center items-center gap-8 h-28 rounded-2xl bg-zinc-800">
            <p class="font-[500]  max-w-48 min-w-48 text-xl">{{ card.balance }} ₽</p>
            <p>...{{ formatLastFour(card.number) }}</p>
            <img v-if="card.CardType == 'Visa'" src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px">
            <img v-if="card.CardType == 'Mastercard'" src="https://artsmile.by/assets/images/carts/mastercard.png" width="60px">
            <img v-if="card.CardType == 'Mir'" src="https://kentonish.ru/upload/mir-logo.png" width="60px">
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel
          class="bg-red-700 select-none border-none text-white hover:text-white h-10 hover:bg-red-900">Отмена
        </AlertDialogCancel>
        <AlertDialogAction :disabled="!selectedCard" class="border select-none border-zinc-500 hover:bg-zinc-800 h-10">Продолжить</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
<style>
.selected {
  outline: 2px solid gray;
  outline-offset: 3px;
}
</style>