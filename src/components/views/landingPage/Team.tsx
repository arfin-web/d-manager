import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const reviews = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1703669181~exp=1703669781~hmac=3183926310286dd3b34b616108fb3d0de917558929fd3c8d0992f5780ea1dc7b"
    },
    {
        id: 2,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1703669181~exp=1703669781~hmac=3183926310286dd3b34b616108fb3d0de917558929fd3c8d0992f5780ea1dc7b"
    },
    {
        id: 3,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1703669181~exp=1703669781~hmac=3183926310286dd3b34b616108fb3d0de917558929fd3c8d0992f5780ea1dc7b"
    },
    {
        id: 4,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1703669181~exp=1703669781~hmac=3183926310286dd3b34b616108fb3d0de917558929fd3c8d0992f5780ea1dc7b"
    },
    {
        id: 5,
        name: "John Doe",
        designation: "Software Engineer",
        image: "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?w=740&t=st=1703669181~exp=1703669781~hmac=3183926310286dd3b34b616108fb3d0de917558929fd3c8d0992f5780ea1dc7b"
    },
]

const Team = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 mb-20">
                <h1 className="text-2xl lg:text-4xl font-bold text-center py-8">Our <span className="text-primary">Team</span></h1>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {reviews.map((review) => (
                            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                            <img src={review.image} className="rounded-full" alt={review.name} />
                                            <p className="text-xl font-bold mt-3">{review.name}</p>
                                            <p className="mt-2">{review.designation}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default Team