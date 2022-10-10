import { useState, useRef, useCallback } from 'react'

import InputData  from '../components/InputData';
import Header from '../components/Header';
import Chart from '../components/Chart';
import { toJpeg } from 'html-to-image'

export default function Home() {
    const [data, setData] = useState([100,200,300])
    const [labels, setLabels] = useState(['A','B','C'])

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

    return (
        <div className='w-full h-screen flex items-center'>
            <Header />

            <aside className='w-80 h-screen border justify-center'>
                <button onClick={onButtonClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center absolute bottom-0 ml-5 mb-10 ">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Export</span>
                </button>
            </aside>

            <div className='w-full flex justify-center flex-col items-center'>
                <InputData setData={setData} setLabels={setLabels} />

                <div className='bg-white w-96 mt-10' ref={ref}>
                    <Chart data={data} labels={labels} />
                </div>
            </div>
        </div>
    )
}