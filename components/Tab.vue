<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/Ui/ui/table'
</script>

<template>
  <Table class="rounded">
    <TableHeader>
      <TableRow class="hover:bg-zinc-900 transition text-lg ">
        <TableHead class="font-[600">
          Тип
        </TableHead>
        <TableHead class="w-64">Карта</TableHead>
        <TableHead>Дата</TableHead>
        <TableHead class="text-right">
          Amount
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class="hover:bg-zinc-900 transition border-t-[3px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
      <TableRow class="hover:bg-zinc-900 transition border-t-[1px] border-gray-500">
        <TableCell class="font-[600] text-lg">
          Перевод
        </TableCell>
        <TableCell>5555 5555 5555 4444</TableCell>
        <TableCell>15.09.2024</TableCell>
        <TableCell class="text-right">
          250.00$
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>