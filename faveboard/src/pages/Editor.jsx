import { useParams, Link } from "react-router-dom"

const Editor = () => {
    const { id } = useParams()

    return (
        <>
            <h2>This is the editor page for {id}</h2>
            <Link to="/">Go back</Link>
        </>
    )
}

export default Editor;