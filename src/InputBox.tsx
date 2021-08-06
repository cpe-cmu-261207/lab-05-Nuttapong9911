type inputBoxFn = {
    keyDown: React.KeyboardEventHandler<HTMLInputElement>;
    change: React.ChangeEventHandler<HTMLInputElement>;
}

function InputBox({keyDown, change}: inputBoxFn) {
    return (
        <input className='border border-gray-400 w-full text-2xl'
            onKeyDown={keyDown} onChange={change} type="text"></input>
    )
}

export default InputBox