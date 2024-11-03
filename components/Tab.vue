<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
</script>

<template>
  <Table>
    <TableHeader class="">
      <TableRow class="hover:bg-zinc-900 rounded-2xl transition text-lg ">
        <TableHead class="text-zinc-400">Тип</TableHead>
        <TableHead class="w-64 text-zinc-400">Карта</TableHead>
        <TableHead class="text-zinc-400">Дата</TableHead>
        <TableHead class="text-right text-zinc-400">Сумма</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class="hover:bg-zinc-900 transition border-t-[2px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-red-500">
          -250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-green-500">
          +250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-red-500">
          -250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-red-500">
          -250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-green-500">
          +250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[500] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right text-green-500">
          +250.00$
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>