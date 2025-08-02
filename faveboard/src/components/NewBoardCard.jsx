const NewBoardCard = () => {
    const handleNewBoard = () => {
        console.log("New board created")
    }

    return (
        <button
            onClick={handleNewBoard}
            className="flex flex-col items-center justify-center w-24 h-24 bg-black text-white border border-gray-600 rounded-md hover:bg-gray-800 transition"
        >
            <span className="text-4xl">+</span>
            <span className="mt-1 text-sm text-gray-300">New board</span>
        </button>
    )
}

export default NewBoardCard