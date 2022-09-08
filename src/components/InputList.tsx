import { RowInput } from './RowInput'

export const InputList = ({ inputRows, setInputRows, InitialState }: any) => {

    const handleOnChange = (index: number, name: string, value: string) => {
        const copyRows = [...inputRows]
        copyRows[index] = {
            ...copyRows[index],
            [name]: value
        }
        setInputRows(copyRows)        
    }

    const handleOnAdd = () => {
        setInputRows(inputRows.concat(InitialState))
    }

    const handleOnRemove = (index: number) => {
        const copyRows = [...inputRows]
        copyRows.splice(index, 1)
        setInputRows(copyRows)
    }

    return (
        <>
            {
                inputRows.map((row: any, index: any) =>
                    <RowInput
                        {...row}
                        onChange={(name, value) => handleOnChange(index, name, value)}
                        onRemove={() => handleOnRemove(index)}
                        key={index}
                    />)
            }
            < button onClick={handleOnAdd} >
                ➕
            </button>
        </>
    )
}
