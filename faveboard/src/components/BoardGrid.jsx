import { useState } from 'react'
import BoardPreview from './BoardPreview'
import NewBoardCard from './NewBoardCard'
import testboard1 from '../assets/testboard1.png'
import testboard2 from '../assets/testboard2.png'

const BoardGrid = () => {
    const [boards, setBoards] = useState([
        { id: 1, title: "My Board #1", imageLink: testboard1, createdAt: "", lastEdited: "" },
        { id: 2, title: "My Favorite", imageLink: testboard2, createdAt: "", lastEdited: "" },
        { id: 3, title: "My Board #3", imageLink: testboard2, createdAt: "", lastEdited: "" },
        { id: 4, title: "My Board #4", imageLink: testboard2, createdAt: "", lastEdited: "" }
    ])

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