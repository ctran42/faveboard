const BoardPreview = ({ title, image, onEdit, onDelete }) => {
    // console.log("Board loaded")

    return (
        <div className="relative group flex flex-col items-center">
            {/* Board Preview */}
            <div className="w-24 h-24 bg-black flex items-center justify-center rounded-md overflow-hidden">
                {image ? <img src={image} alt={title} className="w-full h-full object-cover" /> : null}
            </div>
            <span className="mt-1 text-gray-300 text-sm">{title}</span>

            {/* Hover Overlay */}
            <div className="
                absolute inset-0 
                bg-black/60 
                flex items-center justify-center gap-2
                opacity-0 group-hover:opacity-100 
                transition-opacity rounded-md
            ">
                <button
                    onClick={onEdit}
                    className="px-2 py-1 text-xs bg-blue-600 rounded hover:bg-blue-500"
                >
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className="px-2 py-1 text-xs bg-red-600 rounded hover:bg-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BoardPreview