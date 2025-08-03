import { Plus, Settings, Download, Check } from "lucide-react"
import SidebarMenuButton from "./SidebarMenuButton"

const Menu = ({ activeTab, handleTabChange }) => {
    const buttons = [
        { icon: Plus, tab: "add" },
        { icon: Settings, tab: "options" },
        { icon: Download, tab: "export" },
        { icon: Check, tab: "finished" }
    ]

    return (
        <div className="">
            {buttons.map(({ icon, tab }) => (
                <SidebarMenuButton
                    key={tab}
                    icon={icon}
                    isActive={activeTab === tab}
                    onClick={() => handleTabChange(tab)}
                />
            ))}
        </div>
    )
}

export default Menu