import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import SidebarLayout from "../components/sidebar/SidebarLayout"
import SidebarMenu from "../components/sidebar/SidebarMenu"
import BoardEditor from "../components/editor/BoardEditor"

const Editor = () => {
    const { id } = useParams()
    const [activeSidebar, setActiveSidebar] = useState("add")
    const navigate = useNavigate()

    const handleTabChange = (tabName) => {
        console.log("Clicked:", tabName)
        if (tabName === "finished") {
            console.log("Going back")
            navigate("/")
        }
        else {
            setActiveSidebar(tabName)
        }
    }

    return (
        <>
            <div className="flex h-screen">
                <SidebarMenu activeTab={activeSidebar} handleTabChange={handleTabChange}/>
                <SidebarLayout activeTab={activeSidebar}/>
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