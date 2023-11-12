import { Button } from "@/components/ui/button"

const title = "Upgrade Your Automotive Shop with"
const colorTitle = "D-Manager"
const description = `D-Manager is a powerful and easy to use automotive shop management software.`

const Hero = () => {
    return (
        <>
            <div className="container h-screen mx-auto px-2 lg:px-20">
                <div className="h-5/6 flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-6xl font-bold text-center">{title}<span className="text-primary"> {colorTitle}</span></h1>
                    <p className="text-base lg:text-lg text-center my-5">{description}</p>
                    <Button size='lg'>Start for Free</Button>
                </div>
            </div>
        </>
    )
}

export default Hero