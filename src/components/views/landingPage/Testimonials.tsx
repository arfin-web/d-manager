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
        review: "Great Platform for better Shop Management"
    },
    {
        id: 2,
        name: "John Doe",
        review: "Great Platform for better Shop Management"
    },
    {
        id: 3,
        name: "John Doe",
        review: "Great Platform for better Shop Management"
    },
    {
        id: 4,
        name: "John Doe",
        review: "Great Platform for better Shop Management"
    },
    {
        id: 5,
        name: "John Doe",
        review: "Great Platform for better Shop Management"
    },
]

const Testimonials = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 mb-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-center py-8">Some Happy <span className="text-primary">Faces</span></h1>
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
                                        <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                                            <p className="text-2xl font-bold">{review.review}</p>
                                            <p className="text-lg mt-4">{review.name}</p>
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

export default Testimonials