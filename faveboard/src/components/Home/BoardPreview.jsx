const BoardPreview = ({ title, image }) => {
    console.log("Board loaded")

    return (
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-black flex items-center justify-center rounded-md overflow-hidden">
                {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : null}
            </div>
            <span className="mt-1 text-gray-300 text-sm">{title}</span>
        </div>
    )
}

export default BoardPreview