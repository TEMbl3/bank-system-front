<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartData = ref({
  labels: ['02.01', '03.01', '04.01', '05.01', '06.01', '07.01', '08.01'],
  datasets: [
    {
      label: 'Расходы',
      data: [300, 200, 259.75, 150, 0, 120, 90],
      borderColor: '#1c74c4',
      backgroundColor: 'rgba(71, 85, 105, 0.2)',
      fill: true,
      tension: 0.4, // делает график плавным
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
});
</script>