import { createContext, useContext, useState } from "react"
import testboard1 from '../assets/testboard1.png'
import testboard2 from '../assets/testboard2.png'

const BoardContext = createContext()

export function BoardProvider({ children }) {
    const [boards, setBoards] = useState([
        { id: 1, title: "My Board #1", imageLink: testboard1, createdAt: "", lastEdited: "" },
        { id: 2, title: "My Favorite", imageLink: testboard2, createdAt: "", lastEdited: "" },
        { id: 3, title: "My Board #3", imageLink: testboard2, createdAt: "", lastEdited: "" },
        { id: 4, title: "My Board #4", imageLink: testboard2, createdAt: "", lastEdited: "" }
    ])
    const [activeBoardId, setActiveBoardId] = useState(null)

    const addBoard = (board) => {
        setBoards(prev => [...prev, board])
    }

    const removeBoard = (id) => {
        setBoards(prev => prev.filter(b => b.id !== id));
    }

    const activeBoard = boards.find(b => b.id === activeBoardId);

    return (
        <BoardContext.Provider
            value={{ boards, activeBoardId, setActiveBoardId, activeBoard, addBoard, removeBoard }}
        >
            {children}
        </BoardContext.Provider>
    )
}

export function useBoard() {
    const context = useContext(BoardContext)
    if (!context) throw new Error("useBoard must be used within a BoardProvider")
    return context
}