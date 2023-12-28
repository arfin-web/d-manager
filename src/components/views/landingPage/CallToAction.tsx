import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const title = "Upgrade Your Automotive Shop with"
const colorTitle = "D-Manager"
const description = `D-Manager is a powerful and easy to use automotive shop management software.`

const CallToAction = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
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
                    <div className="flex flex-col justify-center items-start py-32">
                        <h1 className="text-2xl lg:text-4xl font-bold text-center">{title}<span className="text-primary"> {colorTitle}</span></h1>
                        <p className="text-base lg:text-lg text-center my-5">{description}</p>
                        <div className="w-full flex justify-center items-center">
                            <Link href='/dashboard'>
                                <Button size='lg'>Start for Free</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToAction