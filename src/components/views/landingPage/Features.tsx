import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const features = [
    {
        id: 1,
        title: "Product Management",
    },
    {
        id: 2,
        title: "Employee Management",
    },
    {
        id: 3,
        title: "Easier Billing Management",
    },
    {
        id: 4,
        title: "Deep Analysis & Analytics",
    },
]

const Features = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-20 mb-20">
                <h1 className="text-2xl lg:text-4xl font-bold text-center py-8">Key <span className="text-primary">Features</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-stretch">
                    {
                        features.map((feature) => (
                            <Card key={feature.id} className="border-2 hover:border-primary">
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Features