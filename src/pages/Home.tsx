import { useCallback, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie, PolarArea, Doughnut } from 'react-chartjs-2';
import { toJpeg } from 'html-to-image'

import { InputList } from '../components/InputList';
import Header from '../components/Header';

function Home() {
    const InitialState = {
        label: '',
        data: ''
    }

    const [inputRows, setInputRows] = useState([InitialState])

    ChartJS.register(ArcElement, Tooltip, Legend);
    const ref = useRef<HTMLDivElement>(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toJpeg(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'chart.jpeg'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    const data = {
        labels: inputRows.map(l => l?.label),
        datasets: [
            {
                label: 'MY CHART',
                data: inputRows.map(d => d?.data),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 4,
            },
        ],
    };

    console.log('Home data: ', data.labels)

    return (
        <main>
            <Header />
            <div className='sm:h-screen h-auto flex flex-col gap-8 justify-center items-center'>

                <div className='flex flex-col sm:flex-row'>
                    <div className='md:mr-12'>
                        <InputList
                            inputRows={inputRows}
                            setInputRows={setInputRows}
                            InitialState={InitialState}
                        />

                    </div>

                    <div ref={ref} className='w-96 h-96 bg-slate-50'>
                        {
                            data.labels[0] || data.datasets[0].data[0] ?
                                <Chart type='pie' data={data} /> :
                                <img src="example-chart.jpeg" alt="" />
                        }
                    </div>
                </div>
                <button
                    className={`py-2 px-4 ${inputRows[0]?.data === '' ? 'bg-slate-600' : 'bg-blue-500'}  text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer`}
                    onClick={onButtonClick}
                >
                    Exportar
                </button>
            </div>
        </main>

    )
}

export default Home

