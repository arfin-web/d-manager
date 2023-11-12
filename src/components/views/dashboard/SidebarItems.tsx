import {
    ActivitySquare,
    CreditCard,
    LayoutDashboard,
    Settings,
    PackageSearch,
    Users
} from "lucide-react"

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const SidebarItems = () => {
    return (
        <>
            <Command className="w-60 h-64 border shadow-md rounded-none">
                <CommandList>
                    <CommandSeparator />
                    <CommandGroup>
                        <CommandItem className="my-4 text-primary">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-lg font-bold ml-3">My Shop</span>
                        </CommandItem>
                        <Link href='/dashboard'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span className="text-lg">Dashboard</span>
                                <CommandShortcut>⌘D</CommandShortcut>
                            </CommandItem>
                        </Link>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <PackageSearch className="mr-2 h-4 w-4" />
                            <span className="text-lg">Products</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <Users className="mr-2 h-4 w-4" />
                            <span className="text-lg">Employees</span>
                            <CommandShortcut>⌘E</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
            <Command className="w-60 h-96 border shadow-md rounded-none">
                <CommandList>
                    <CommandGroup>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span className="text-lg">Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <ActivitySquare className="mr-2 h-4 w-4" />
                            <span className="text-lg">Analytics</span>
                            <CommandShortcut>⌘A</CommandShortcut>
                        </CommandItem>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            <span className="text-lg">Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </>
    )
}

export default SidebarItems