import { useState } from "react"
import { useBoard } from "../../context/BoardContext"
import { useModal } from "../../context/ModalContext"
import testboard2 from "../../assets/testboard2.png"

const NewBoardModal = () => {
    const { addBoard, boards } = useBoard()
    const { closeModal } = useModal()
    const [title, setTitle] = useState("")
    const [chartType, setChartType] = useState("Collage")

    const handleConfirm = () => {
        console.log("New board:", { title, chartType })
        addBoard({
            id: Date.now(),
            title: title !== "" ? title : `My Board #${boards.length+1}`,
            imageLink: testboard2
        })
        closeModal()
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {/* Modal box */}
            <div className="bg-[#171D1D] text-white rounded-xl shadow-xl p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Create new board</h2>

                <div className="mb-4">
                <label className="block mb-1 text-sm">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-md bg-gray-700 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder={`My Board #${boards.length+1}`}
                />
                </div>

                <div className="mb-6">
                <label className="block mb-1 text-sm">Chart type:</label>
                <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value)}
                    className="w-full rounded-md bg-gray-700 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                >
                    <option>Collage</option>
                    <option>Timeline</option>
                    <option>Grid</option>
                </select>
                </div>

                <div className="flex justify-end gap-2">
                <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500"
                >
                    Cancel
                </button>
                <button
                    onClick={handleConfirm}
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500"
                >
                    Confirm
                </button>
                </div>
            </div>
        </div>
    )
}

export default NewBoardModal