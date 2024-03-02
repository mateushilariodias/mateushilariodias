interface InputProps {
    newState: (state: string) => void,
    placeholder: string,
    type: string,
    nameAndId: string
}
function Input(props: InputProps) {
    return (
        <div className="flex flex-col items-start justify-between">
            <input
                type={props.type}
                name={props.nameAndId}
                id={props.nameAndId}
                placeholder={props.placeholder}
                onChange={(e) => props.newState(e.currentTarget.value)}
                className="py-2 px-3 border-gray-400 border-b w-full focus-visible:border-gray-600 focus-visible:border-b focus-visible:outline-none" />
        </div>
    );
}
export default Input;