type Props = {
    onChange: (name: string, value: string) => void,
    onRemove: () => void,
    label: string,
    data: number,
}

export const RowInput: React.FC<Props> = ({ onChange, onRemove, label, data }) => {
    return (
        <div className="flex sm:flex-row flex-col justify-center">
            <input
                value={label}
                onChange={e => onChange("label", e.target.value)}
                placeholder="Label"
                className="border border-gray-300 rounded focus:border-blue-500 p-2 mx-3 my-2 "
            />

            <input
                placeholder="Data"
                value={data}
                onChange={e => onChange("data", e.target.value)}
                className="border border-gray-300 rounded focus:border-blue-500 p-2 mx-3 my-2 "
            />

            <button className='cursor-poiter' onClick={onRemove} >❌</button>
        </div>
    )
}

