<script setup lang="ts">
interface INav {
  id: number,
  name: string,
  icon: string,
  url: string
}

const items: INav[] = [
  {
    id: 1,
    name: 'Главная',
    icon: 'radix-icons:dashboard',
    url: '/'
  },
  {
    id: 1,
    name: 'Мои карты',
    icon: 'fluent:credit-card-person-24-filled',
    url: '/MyCards'
  },
  {
    id: 1,
    name: 'Расходы',
    icon: 'material-symbols:query-stats',
    url: '/Expenses'
  },
  {
    id: 1,
    name: 'Переводы',
    icon: 'solar:hand-money-linear',
    url: '/Transfers'
  },
  {
    id: 1,
    name: 'Поддержка',
    icon: 'material-symbols:shield-question-rounded',
    url: '/Support'
  }
]
</script>

<template>
  <div class="flex flex-col items-center mr-10 gap-2">
    <NuxtLink :to="item.url" v-for="item in items" :key="item.id" class="w-full hover:bg-zinc-800 rounded-xl text-2xl transition items-center flex gap-3 font-[500] p-3">
      <Icon :name="item.icon" />
      <h2>{{ item.name }}</h2>
    </NuxtLink>
  </div>
</template>