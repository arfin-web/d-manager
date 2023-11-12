import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Overview from "@/components/views/dashboard/Overview"

const basicInfo = [
    {
        id: 1,
        title: "Total Sale",
        value: "$ 3000+",
        icon: "https://img.freepik.com/free-vector/final-sale-yellow-with-offer-details_1017-30356.jpg?w=740&t=st=1699800627~exp=1699801227~hmac=7fadf55dbcc1ca770563b0d634e8527eb698236199aaae2d0ab14650577b807a"
    },
    {
        id: 2,
        title: "Total Product",
        value: "30+",
        icon: "https://img.freepik.com/free-vector/design-with-cart-supermarket-logo_23-2148464351.jpg?w=740&t=st=1699800711~exp=1699801311~hmac=0c98d6f14c99c3199c23a5993714c818dffa28f9d58f7080536fffdfd693274b"
    },
    {
        id: 1,
        title: "Total Invoice",
        value: "100+",
        icon: "https://img.freepik.com/free-psd/geometric-architecture-project-invoice_23-2149660465.jpg?w=740&t=st=1699800744~exp=1699801344~hmac=c9598cdb9ac402fd54062b6b4edfdf7134838e8acc852c1505869ddfbcca2d8a"
    },
]

const Dashboard = () => {
    return (
        <>
            <div className="container mx-auto px-2 lg:px-5 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-stretch">
                    {
                        basicInfo.map((info) => (
                            <Card key={info.id}>
                                <CardContent>
                                    <div className="flex justify-start space-x-4 mt-5">
                                        <Avatar>
                                            <AvatarImage src={info.icon} />
                                            <AvatarFallback>VC</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="text-base font-semibold">{info.title}</h4>
                                            <p className="text-xl text-primary font-bold">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
            <Overview />
        </>
    )
}

export default Dashboard