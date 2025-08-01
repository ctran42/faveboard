import { useState } from 'react'
import BoardPreview from './BoardPreview'

const BoardGrid = () => {
    const [boardList, setBoardList] = useState([{
        imageUrl: "",
        title: "New Board"
    }])

    return (
        <>
            {boardList.map((board, index) => {
                <BoardPreview key={index} board={board} />
            })}
        </>
    )
}

export default BoardGrid