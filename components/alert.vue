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
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger class="bg-red-700 p-2 px-3 rounded">Удалить</AlertDialogTrigger>
    <AlertDialogContent class="bg-zinc-900 border border-zinc-700">
      <AlertDialogHeader>
        <AlertDialogTitle class="text-white font-semibold">Вы абсолютно уверены?</AlertDialogTitle>
        <AlertDialogDescription class="text-gray-400">
          Это действие невозможно отменить. Это приведет к необратимому удалению контакта с
          вашего аккаунта.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel class="bg-red-700 border-none text-white hover:text-white hover:bg-red-900">Отмена
        </AlertDialogCancel>
        <AlertDialogAction class="border border-zinc-500 hover:bg-zinc-800">Продолжить</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
