import { useBoard } from "../../context/BoardContext"
import BoardPreview from './BoardPreview'
import NewBoardCard from './NewBoardCard'

const BoardGrid = () => {
    const { boards } = useBoard()

    return (
        <div className="grid grid-cols-4 gap-4 flex mx-auto mt-10 max-w-xl w-full">
            {boards.map((board) => (
                <BoardPreview 
                    key={board.id} 
                    title={board.title} 
                    image={board.imageLink}
                />
            ))}
            <NewBoardCard />
        </div>
    )
}

export default BoardGrid