import { useState } from "react"
import { useBoard } from "../../context/BoardContext"
import { useModal } from "../../context/ModalContext"

const DeleteBoardModal = () => {
    const { removeBoard } = useBoard()
    const { modal, closeModal } = useModal()
    const board = modal.data

    if (!board) return null

    const handleConfirm = () => {
        console.log(`Deleting ${board.id}`);
        removeBoard(board.id)
        closeModal()
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {/* Modal box */}
            <div className="bg-[#171D1D] text-white rounded-xl shadow-xl p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete "{board.title}"?</h2>

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

export default DeleteBoardModal