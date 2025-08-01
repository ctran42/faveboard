import { Link } from "react-router-dom"

const Home = () => {
    const id = "test123"

    return (
        <>
            <h1 className="text-center mt-10 text-4xl">FaveBoard</h1>
            <Link to={"edit/" + id}>Go to Edit</Link>
        </>
    )
}

export default Home