import { Link } from "react-router-dom"
import { useModal } from "../context/ModalContext"
import BoardGrid from "../components/home/BoardGrid"
import NewBoardModal from "../components/modals/NewBoardModal"
import DeleteBoardModal from "../components/modals/DeleteBoardModal"

const Home = () => {
    const id = "test123"
    const { modal, closeModal } = useModal()

    return (
        <>
            <h1 className="text-center mt-10 text-4xl">FaveBoard</h1>
            <BoardGrid />
            <Link to={"edit/" + id}>Go to Edit</Link>

            {modal?.type === "createBoard" && (
                <NewBoardModal onClose={closeModal} />
            )}
            {modal?.type === "deleteBoard" && (
                <DeleteBoardModal onClose={closeModal} boardId={modal.data.id} />
            )}
        </>
    )
}

export default Home