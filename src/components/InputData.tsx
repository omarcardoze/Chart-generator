import { useCallback } from "react"

type Props = {
    setData: (data: string[]) => void,
    setLabels: (labels: string[]) => void
}

const InputData: React.FC<Props> = ({ setData, setLabels }) => {

    console.log(setData)

    const handleData = useCallback((data: string) => {
        setData(data.split(','))
    }, [])

    const handleLabels = useCallback((labels: string) => {
        setLabels(labels.split(','))
    }, [])

    return (
        <section className="flex bg-gray-50 w-3/6 justify-center items-center flex-col border">
            <p className="text-slate-800 text-center mt-5">Import your data values seperated by commas</p>
            <div>
                <textarea
                    name="data"
                    id="data"
                    placeholder='Your data here example 100,200,300'
                    rows={5}
                    cols={33}
                    className='m-5 p-5 border'
                    onChange={(event) => handleData(event.target.value)}
                />

                <textarea
                    name="labels"
                    id="labels"
                    placeholder='Your labels here example A,B,C'
                    rows={5}
                    cols={33}
                    className='m-5 p-5 border'
                    onChange={(event) => handleLabels(event.target.value)}
                />
            </div>
        </section>
    )
}

export default InputData