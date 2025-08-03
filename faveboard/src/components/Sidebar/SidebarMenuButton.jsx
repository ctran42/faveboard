const SidebarButton = ({ icon: Icon, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded flex items-center justify-center transition-colors
        ${isActive ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"}`}
    >
      <Icon className="w-6 h-6" />
    </button>
  )
}

export default SidebarButton