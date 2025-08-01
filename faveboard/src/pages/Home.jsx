import { Link } from "react-router-dom"

const Home = () => {
    const id = "test123"

    return (
        <>
            <h2>This is the home page</h2>
            <Link to={"edit/" + id}>Go to Edit</Link>
        </>
    )
}

export default Home;