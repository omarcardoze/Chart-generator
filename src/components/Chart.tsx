import {
    Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
} from 'chart.js';
import { Doughnut, Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,);

const Chart = ({ data, labels, chartType }) => {

    console.log(chartType)
    const dataChart = {
        labels,
        datasets: [
            {
                label: '',
                data: data.map(d => Number(d)),
                backgroundColor: [
                    '#FF715B',
                    '#F9CB40',
                    '#BCED09',
                    '#2F52E0',
                    '#FF8427',
                    '#F038FF',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 3,
            }
        ],
    };

    if (chartType === 'line') return <Line data={dataChart} />
    if (chartType === 'pie') return <Pie data={dataChart} />
    if (chartType === 'doughnut') return <Doughnut data={dataChart} />
}

export default Chart 