// components/WeightLossChart.tsx
"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WeightLossChart = () => {
  // Recupero dei dati dal Redux store
  const weightData = useSelector((state: AppState) => state.weight.data);
  const calorieData = useSelector((state: AppState) => state.calories.data);

  const chartDataWeight = useMemo(() => {
    return {
      labels: Array.from(
        { length: weightData.length },
        (_, i) => `Week ${i + 1}`
      ),
      datasets: [
        {
          label: "Weight (kg)",
          data: weightData,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "white",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          pointBorderWidth: 2,
          hoverRadius: 8,
          hoverBackgroundColor: "rgba(75, 192, 192, 1)",
        },
      ],
    };
  }, [weightData]);

  const optionsWeight = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top" as const,
          labels: {
            font: {
              size: 16,
            },
            boxWidth: 20,
          },
        },
        title: {
          display: true,
          text: "Weekly Weight Loss Progress",
          font: {
            size: 24,
            weight: "bold",
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return `Weight: ${tooltipItem.raw} kg`;
            },
          },
          backgroundColor: "rgba(75, 75, 75, 0.9)",
          titleColor: "white",
          bodyColor: "white",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Week",
            font: {
              size: 18,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
          },
        },
        y: {
          title: {
            display: true,
            text: "Weight (kg)",
            font: {
              size: 18,
            },
          },
          min: Math.min(...weightData) - 2,
          max: Math.max(...weightData) + 2,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
          },
        },
      },
    };
  }, [weightData]);

  // Secondo grafico per le calorie
  const chartDataCalories = useMemo(() => {
    return {
      labels: Array.from(
        { length: calorieData.length },
        (_, i) => `Week ${i + 1}`
      ),
      datasets: [
        {
          label: "Calories (kcal)",
          data: calorieData,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.3)",
          fill: true,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: "white",
          pointBorderColor: "rgba(255, 99, 132, 1)",
          pointBorderWidth: 2,
          hoverRadius: 8,
          hoverBackgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };
  }, [calorieData]);

  const optionsCalories = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top" as const,
          labels: {
            font: {
              size: 16,
            },
            boxWidth: 20,
          },
        },
        title: {
          display: true,
          text: "Weekly Calorie Intake",
          font: {
            size: 24,
            weight: "bold",
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return `Calories: ${tooltipItem.raw} kcal`;
            },
          },
          backgroundColor: "rgba(75, 75, 75, 0.9)",
          titleColor: "white",
          bodyColor: "white",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Week",
            font: {
              size: 18,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
          },
        },
        y: {
          title: {
            display: true,
            text: "Calories (kcal)",
            font: {
              size: 18,
            },
          },
          min: Math.min(...calorieData) - 100,
          max: Math.max(...calorieData) + 100,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
          },
        },
      },
    };
  }, [calorieData]);

  return (
    <div className="flex my-10 border-2 border-purple-300 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-[600px]">
        {" "}
        {/* Altezza del grafico per il peso */}
        <Line data={chartDataWeight} options={optionsWeight} />
      </div>
      <div className="relative w-full h-[600px]">
        {" "}
        {/* Altezza del grafico per le calorie */}
        <Line data={chartDataCalories} options={optionsCalories} />
      </div>
    </div>
  );
};

export default WeightLossChart;
