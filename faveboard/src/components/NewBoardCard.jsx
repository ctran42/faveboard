import { useBoard } from "../context/BoardContext"

const NewBoardCard = () => {
    const { addBoard } = useBoard()

    const handleNewBoard = () => {
        console.log("New board created")
        addBoard({
            id: Date.now(),
            title: "New Board",
            imageLink: "/assets/testboard1.png"
        })
    }

    return (
        <div className="flex flex-col items-center">
            <button
                onClick={handleNewBoard}
                className="justify-center w-24 h-24 bg-black text-white border border-gray-600 rounded-md hover:bg-gray-800 transition"
            >
                <span className="text-4xl">+</span>
            </button>
            <span className="mt-1 text-sm text-gray-300">New board</span>
        </div>
    )
}

export default NewBoardCard