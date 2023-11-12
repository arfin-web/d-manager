import {
    ActivitySquare,
    CreditCard,
    LayoutDashboard,
    LogOut,
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
import { ModeToggle } from "@/components/ThemeSwitcher"

const SidebarItems = () => {
    return (
        <>
            <Command className="w-60 h-64 border shadow-md rounded-none">
                <CommandList>
                    <CommandSeparator />
                    <CommandGroup>
                        <CommandItem className="my-4 text-primary">
                            <Avatar>
                                <AvatarImage src="https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?w=740&t=st=1699802691~exp=1699803291~hmac=3f7dd61cb50d38bf136465fec6f2eefbad8bd1bf88335703b1c1098e7aae4818" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-lg font-bold ml-3">My Shop</span>
                            <CommandShortcut>
                                <ModeToggle />
                            </CommandShortcut>
                        </CommandItem>
                        <Link href='/dashboard'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span className="text-lg">Dashboard</span>
                                <CommandShortcut>⌘D</CommandShortcut>
                            </CommandItem>
                        </Link>
                        <Link href='/dashboard/products'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <PackageSearch className="mr-2 h-4 w-4" />
                                <span className="text-lg">Products</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                        </Link>
                        <Link href='/dashboard/employees'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <Users className="mr-2 h-4 w-4" />
                                <span className="text-lg">Employees</span>
                                <CommandShortcut>⌘E</CommandShortcut>
                            </CommandItem>
                        </Link>
                    </CommandGroup>
                </CommandList>
            </Command>
            <Command className="w-60 h-96 border shadow-md rounded-none">
                <CommandList>
                    <CommandGroup>
                        <Link href='/dashboard/billing'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span className="text-lg">Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                        </Link>
                        <Link href='/dashboard/analytics'>
                            <CommandItem className="mt-3 text-primary cursor-pointer">
                                <ActivitySquare className="mr-2 h-4 w-4" />
                                <span className="text-lg">Analytics</span>
                                <CommandShortcut>⌘A</CommandShortcut>
                            </CommandItem>
                        </Link>
                        <CommandItem className="mt-3 text-primary cursor-pointer">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span className="text-lg">Logout</span>
                            <CommandShortcut>⌘L</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </>
    )
}

export default SidebarItems