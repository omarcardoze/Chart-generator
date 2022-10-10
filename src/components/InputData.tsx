import { useCallback } from "react"

const InputData = ({ setData, setLabels }) => {

    const handleData = useCallback((event: any) => {
        const data = event.target.value
        setData(data.split(','))
    }, [])

    const handleLabels = useCallback((event: any) => {
        const labels = event.target.value
        setLabels(labels.split(','))
    }, [])

    return (
        <section className="flex bg-gray-50 w-3/6 justify-center items-center flex-col">
            <p className="text-slate-800 text-center mt-5">Import your data values seperated by commas</p>
            <div>
                <textarea
                    name="data"
                    id="data"
                    placeholder='Your data here example 100,200,300'
                    rows={5}
                    cols={33}
                    className='m-5 p-5'
                    onChange={handleData}
                />

                <textarea
                    name="labels"
                    id="labels"
                    placeholder='Your labels here example A,B,C'
                    rows={5}
                    cols={33}
                    className='m-5 p-5'
                    onChange={handleLabels}
                />
            </div>
        </section>
    )
}

export default InputData