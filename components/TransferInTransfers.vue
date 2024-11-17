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

import axios from 'axios';

const selectedCard = ref('')
const selectedCardRecipient = ref('')
const amount = ref(null)

function formatLastFour(cardNumber: string) {
  return cardNumber.slice(-4)
}

const newTransfer = async () => {
  let response = await axios.post('http://localhost:3005/card/transfer', {
    recipientId: recipientId
  })
}

const cards = ref([
  { number: '4153456789123456', balance: '34,000.00', CardType: 'Visa' },
  { number: '5172345678912345', balance: '480,000,000.00', CardType: 'Mastercard' },
  { number: '4151256789122456', balance: '34,000.00', CardType: 'Mir' }
])

const RecipientCards = ref([
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

const selectCardRecipient = (cardNumber: string) => {
  if (selectedCardRecipient.value == cardNumber) {
    selectedCardRecipient.value = ''
  } else {
    selectedCardRecipient.value = cardNumber
  }
}

const status = ref('')
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger @click="status = 'choiceCard'"
      class="border border-zinc-700 hover:border-zinc-700 rounded px-3 p-2 hover:bg-zinc-900 transition active:bg-zinc-800">
      Перевести</AlertDialogTrigger>
    <AlertDialogContent class="bg-zinc-900 border border-zinc-700">
      <div v-if="status == 'choiceCard'">
        <AlertDialogHeader>
          <AlertDialogTitle class="text-white text-xl mb-4 text-center font-semibold">С какой карты вы хоитие перевести?
          </AlertDialogTitle>
          <AlertDialogDescription class="text-white select-none flex flex-col gap-5 mb-6">
            <div v-for="card in cards" :key="card.number" @click="selectCard(card)"
              :class="{ selected: selectedCard == card.number }"
              class="w-full cursor-pointer p-3 flex justify-center items-center gap-8 h-28 rounded-2xl bg-zinc-800">
              <p class="font-[500]  max-w-48 min-w-48 text-xl">{{ card.balance }} ₽</p>
              <p>...{{ formatLastFour(card.number) }}</p>
              <img v-if="card.CardType == 'Visa'" src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px">
              <img v-if="card.CardType == 'Mastercard'" src="https://artsmile.by/assets/images/carts/mastercard.png"
                width="60px">
              <img v-if="card.CardType == 'Mir'" src="https://kentonish.ru/upload/mir-logo.png" width="60px">
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            class="bg-red-700 select-none border-none text-white hover:text-white h-10 hover:bg-red-900">
            Отменить
          </AlertDialogCancel>
          <button @click.prevent="status = 'accept'" :disabled="!selectedCard" :class="{ 'disabled': !selectedCard }"
            class="border bg-zinc-900 text-white rounded-md px-3 transition select-none border-zinc-500 hover:bg-zinc-800 h-10">Продолжить</button>
        </AlertDialogFooter>
      </div>
      <div v-if="status == 'accept'">
        <AlertDialogHeader>
          <AlertDialogDescription class="text-white select-none flex flex-col gap-1 mb-6">
            <div class="w-full text-white text-xl text-center font-semibold bg-zinc-800 pl-7 py-5 rounded-3xl">
              <p class="text-left text-gray-500">С моего счета</p>
              <h2 class="text-left mt-3 text-3xl">753.234,96₽</h2>
            </div>
            <div class="grid-cols-3 grid gap-3 mt-5">
              <div @click="selectCardRecipient(card.number)" v-for="card in RecipientCards"
                :class="{ 'selected': selectedCardRecipient == card.number }"
                class="rounded-xl  text-left  gap-3 pt-1 justify-center bg-zinc-800 h-24 flex flex-col pl-4">
                <img v-if="card.CardType == 'Visa'" class="h-7 w-12 object-contain"
                  src="https://i.ibb.co/WHZ3nRJ/visa.png">
                <img v-if="card.CardType == 'Mastercard'" class="h-7 w-10 " src="../assets/mir.png">
                <img v-if="card.CardType == 'Mir'" class="w-16 h-7 object-contain"
                  src="https://kentonish.ru/upload/mir-logo.png">
                <p class="text-lg font-normal overflow-hidden">Борис Ч...</p>
              </div>
            </div>
            <input v-model="amount" placeholder="0₽"
              class="w-full text-xl focus:outline-none pl-5 text-zinc-200 bg-zinc-800 border-zinc-700 border h-14 mt-5 rounded-lg"
              name="" id="">
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            class="bg-red-700 select-none border-none text-white hover:text-white h-10 hover:bg-red-900">Отменить
          </AlertDialogCancel>
          <AlertDialogAction :disabled="!amount || !selectedCardRecipient"
            :class="{ 'disabled': !amount || !selectedCardRecipient }"
            class="border select-none border-zinc-500 hover:bg-zinc-800 h-10">Перевести
          </AlertDialogAction>
        </AlertDialogFooter>
      </div>
    </AlertDialogContent>
  </AlertDialog>
</template>
<style>
.selected {
  outline: 2px solid gray;
  outline-offset: 3px;
}

.disabled {
  opacity: 80%;
  cursor: not-allowed;
  transition: 0s;
}

.disabled:hover {
  background-color: rgb(24 24 27);
}
</style>