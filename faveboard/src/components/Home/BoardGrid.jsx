import { useBoard } from "../../context/BoardContext"
import { useModal } from "../../context/ModalContext"
import BoardPreview from './BoardPreview'
import NewBoardCard from './NewBoardCard'

const BoardGrid = () => {
    const { addBoard, boards } = useBoard()
    const { openModal } = useModal()

    const onEdit = () => {
        console.log("Edit request")
    }

    const onDelete = (board) => {
        console.log(`Delete request for ${board.id}`);
        openModal("deleteBoard", board)
    }

    return (
        <div className="grid grid-cols-4 gap-4 flex mx-auto mt-10 max-w-xl w-full">
            {boards.map((board) => (
                <BoardPreview 
                    key={board.id} 
                    title={board.title} 
                    image={board.imageLink}
                    onEdit={onEdit}
                    onDelete={() => onDelete(board)}
                />
            ))}
            <NewBoardCard 
                openModal={openModal}
            />
        </div>
    )
}

export default BoardGrid