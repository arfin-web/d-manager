import { Button } from "@/components/ui/button"
import { ModeToggle } from '@/components/ThemeSwitcher'
import Link from "next/link"

const MainNav = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <nav className="flex flex-wrap items-center justify-between py-4 md:py-6 ">
                    <Link href="/" className="text-base lg:text-2xl text-primary font-bold">D-Manager</Link>
                    <div className="flex justify-center items-center gap-4">
                        <Button size='lg'>Try It Now</Button>
                        <ModeToggle />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default MainNav