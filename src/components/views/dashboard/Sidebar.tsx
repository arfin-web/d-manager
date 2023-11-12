import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SidebarItems from "./SidebarItems"
import { AlignJustify } from 'lucide-react'

const Sidebar = () => {
    return (
        <>
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-2 mt-2">
                            <AlignJustify />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-fit border-none">
                        <SidebarItems />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="hidden lg:block">
                <SidebarItems />
            </div>
        </>
    )
}

export default Sidebar