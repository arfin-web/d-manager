"use client"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ThemeSwitcher'
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

import {
    CreditCard,
    LogOut,
    Settings,
    User,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MainNav = () => {
    const { data: session } = useSession()
    const router = useRouter()

    const handleDashboard = () => {
        router.push('/dashboard')
    }
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <nav className="flex flex-wrap items-center justify-between py-4 md:py-6 ">
                    <Link href="/" className="text-base lg:text-2xl text-primary font-bold">D-Manager</Link>
                    <div className="flex justify-center items-center gap-4">
                        {
                            session?.user ? <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem onClick={handleDashboard}>
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Dashboard</span>
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <CreditCard className="mr-2 h-4 w-4" />
                                            <span>Billing</span>
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => signOut()}>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                                : <Button size='lg' onClick={() => signIn()}>Try It Now</Button>
                        }
                        <ModeToggle />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainNav