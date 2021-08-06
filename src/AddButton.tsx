type addBtn = {
    add: Function;
    task: string;

}

function AddButton({add, task}: addBtn) {
    return (
        <button className='border border-gray-400 w-8 font-bold' onClick={() => add(task)}>+</button>
    )
}

export default AddButton