import React from 'react'
import { useState, useRef, useCallback } from 'react'

import InputData from '../components/InputData'
import Header from '../components/Header'
import Chart from '../components/Chart'
import { toJpeg } from 'html-to-image'

export default function Home() {
	const [data, setData] = useState([100, 200, 300])
	const [labels, setLabels] = useState(['A', 'B', 'C'])
	const [chartType, setChartType] = useState('line')

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

	const handleType = (typeBar: string) => {
		setChartType(typeBar)
	}

	return (
		<>
			<Header />
			<div className='w-full h-screen grid grid-cols-[200px_minmax(900px,_1fr)_100px] bg-gray-100'>
				<aside className='w-80 h-auto border justify-center bg-slate-50 p-10'>
					<select className=' border rounded p-3 cursor-pointer' onChange={(event) => handleType(event.target.value)}>
						<option>Select bar type: </option>
						<option value="pie">Pie</option>
						<option value="line">Line</option>
						<option value="doughnut">Doughnut</option>
					</select>

					<button onClick={onButtonClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center absolute bottom-0  mb-10 ">
						<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
						</svg>
						<span>Export</span>
					</button>
				</aside>

				<div className='w-full flex justify-center flex-col items-center'>
					<InputData setData={setData} setLabels={setLabels} />
					<div className='bg-white w-96 mt-10' ref={ref}>
						<Chart data={data} labels={labels} chartType={chartType} />
					</div>
				</div>
			</div>
		</>
	)
}