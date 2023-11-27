import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ThemeSwitcher'
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const MainNav = () => {
    const { data: session } = useSession()
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <nav className="flex flex-wrap items-center justify-between py-4 md:py-6 ">
                    <Link href="/" className="text-base lg:text-2xl text-primary font-bold">D-Manager</Link>
                    <div className="flex justify-center items-center gap-4">
                        {
                            session ? <Button size='lg' onClick={() => signOut()}>Sign Out</Button>
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