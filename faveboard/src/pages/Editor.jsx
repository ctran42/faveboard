import { useParams, Link } from "react-router-dom"
import SidebarLayout from "../components/Sidebar/SidebarLayout"
import Menu from "../components/Sidebar/Menu"
import BoardEditor from "../components/BoardEditor"

const Editor = () => {
    const { id } = useParams()

    return (
        <>
            <div className="flex h-screen">
                <Menu />
                <SidebarLayout />
                <div className="flex">
                    <h2>This is the editor page for {id}</h2>
                    <Link to="/">Go back</Link>
                    <BoardEditor />
                </div>
            </div>
        </>
    )
}

export default Editor