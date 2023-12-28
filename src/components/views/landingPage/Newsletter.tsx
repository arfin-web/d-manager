import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const Newsletter = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 my-16">
                <Card className="bg-primary rounded-3xl pt-8 pb-12">
                    <CardHeader>
                        <CardTitle className="text-center">Subscribe Our Newsletter</CardTitle>
                        <CardDescription className="text-center font-semibold">Stay Connected With Us</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="w-full flex justify-center items-center">
                            <div className="flex w-96 justify-center items-center space-x-2">
                                <Input type="email" placeholder="Email" />
                                <Button type="submit" variant='outline'>Subscribe</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Newsletter