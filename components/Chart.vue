<script setup>
import { ref, onMounted } from 'vue';
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
import axios from 'axios';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const chartRef = ref(null);
const chartData = ref(null);
const chartOptions = ref(null);

const generateLabels = () => {
  const labels = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    labels.push(date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }));
  }
  return labels;
};

const loadData = async () => {
  try {
    const token = useCookie('jwt').value;
    if (!token) {
      console.error('Токен отсутствует');
      return;
    }
    const response = await axios.get('http://localhost:3005/getters/chart', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const dataFromServer = response.data;
    chartData.value = {
      labels: generateLabels(),
      datasets: [
        {
          label: 'Расходы',
          data: dataFromServer,
          borderColor: '#1c74c4',
          backgroundColor: 'rgba(71, 85, 105, 0.2)',
          fill: true,
          tension: 0.5,
        },
      ],
    };
    chartOptions.value = {
      responsive: true,
      plugins: {
        tooltip: { enabled: true },
      },
    };
  } catch (error) {
    console.error('Ошибка при загрузке данных с сервера:', error.message);
  }
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <div v-if="chartData && chartOptions" class="mt-2">
    <!-- Компонент графика -->
    <Line ref="chartRef" :data="chartData" :options="chartOptions" />
  </div>
  <div v-else>
    <!-- Сообщение о загрузке данных -->
    <p>Загрузка данных...</p>
  </div>
</template>