<script setup lang="ts">
useHead({
  title: 'Поддержка | OnlyBank',
})

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

</script>

<template>
  <div class="w-fill p-7 rounded-3xl scrol overflow-y-auto h-full bg-zinc-800 text-white shadow-inner">
    <div class="flex flex-col">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-0" class="border-b-gray-400">
          <AccordionTrigger class="text-xl font-semibold transition hover:no-underline hover:text-zinc-300">Что делать,
            если я забыл пароль?</AccordionTrigger>
          <AccordionContent class="text-lg text-zinc-400">
            Вы можете сбросить пароль, нажав на кнопку "Забыли пароль?" на экране входа. Следуйте инструкциям для
            восстановления доступа к аккаунту.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" class="border-b-gray-400">
          <AccordionTrigger class="text-xl font-semibold transition hover:no-underline hover:text-zinc-300">Как
            пополнить баланс с помощью ЮMoney?</AccordionTrigger>
          <AccordionContent class="text-lg text-zinc-400">
            Чтобы пополнить баланс через ЮMoney, перейдите в раздел "Пополнить" и выберите способ оплаты YooMoney.
            Следуйте инструкциям на экране для завершения транзакции.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" class="border-b-gray-400">
          <AccordionTrigger class="text-xl font-semibold transition hover:no-underline hover:text-zinc-300">Есть ли
            комиссия за переводы между пользователями?</AccordionTrigger>
          <AccordionContent class="text-lg text-zinc-400">
            Нет, переводы между пользователями в системе бесплатны. Однако возможно взимание комиссии за вывод средств
            на внешние счета в зависимости от банка-получателя.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" class="border-b-gray-400">
          <AccordionTrigger class="text-xl font-semibold transition hover:no-underline hover:text-zinc-300">Как
            просмотреть историю моих транзакций?</AccordionTrigger>
          <AccordionContent class="text-lg text-zinc-400">
            Историю транзакций можно найти в разделе "Расходы". Там будет список всех переводов, пополнений и других
            операций, связанных с вашим аккаунтом.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" class="border-b-gray-400">
          <AccordionTrigger class="text-xl font-semibold transition hover:no-underline hover:text-zinc-300">Могу ли я
            удалить карту из своего аккаунта?</AccordionTrigger>
          <AccordionContent class="text-lg text-zinc-400">
            На данный момент удаление карт не поддерживается. Если у вас есть вопросы по безопасности, обратитесь в
            службу поддержки.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>



<style scoped>
.scrol::-webkit-scrollbar {
  width: 22px;
}

.scrol::-webkit-scrollbar-thumb {
  background: #232325;
  border-radius: 0px 50px 50px 0px;
}
</style>