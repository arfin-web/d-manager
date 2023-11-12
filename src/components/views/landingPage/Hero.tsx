import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const title = "Upgrade Your Automotive Shop with"
const colorTitle = "D-Manager"
const description = `D-Manager is a powerful and easy to use automotive shop management software.`

const Hero = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <div className="flex flex-col justify-center items-center py-32">
                    <h1 className="text-3xl lg:text-6xl font-bold text-center">{title}<span className="text-primary"> {colorTitle}</span></h1>
                    <p className="text-base lg:text-lg text-center my-5">{description}</p>
                    <Link href='/dashboard'>
                        <Button size='lg'>Start for Free</Button>
                    </Link>
                    <div>
                        <figure className="border-2 border-primary mt-14 p-1 rounded-2xl">
                            <Image
                                src="/mainImg.png"
                                alt={title}
                                width={1080}
                                height={486}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero