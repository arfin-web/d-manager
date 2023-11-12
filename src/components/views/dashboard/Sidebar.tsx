import {
    CreditCard,
    LayoutDashboard,
    Settings,
} from "lucide-react"

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

const Sidebar = () => {
    return (
        <Command className="rounded-lg w-60 h-screen border shadow-md">
            <CommandList>
                <CommandSeparator />
                <CommandGroup>
                    <CommandItem className="mt-3 text-primary">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span className="text-lg">Dashboard</span>
                        <CommandShortcut>⌘D</CommandShortcut>
                    </CommandItem>
                    <CommandItem className="mt-3 text-primary">
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span className="text-lg">Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem className="mt-3 text-primary">
                        <Settings className="mr-2 h-4 w-4" />
                        <span className="text-lg">Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}

export default Sidebar