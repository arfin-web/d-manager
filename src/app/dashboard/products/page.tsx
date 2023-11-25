import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DialogBox from "@/components/views/dashboard/DialogBox"

const products = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?w=740&t=st=1699797772~exp=1699798372~hmac=62b1f09ffa5803ceeb6b81e8a360c83884cc9f0e1dd4ec9d0a4309c05ae9af65",
        name: "Lotto",
        category: "Shoe",
        price: "250.00",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup_126278-130.jpg?w=740&t=st=1699797805~exp=1699798405~hmac=a595faf1fbf44e0c528c3d67fc3be5926808d733653d1d332434d746efa40002",
        name: "Yellow",
        category: "Shirt",
        price: "150.00",
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-psd/ripped-jean-shorts-with-tag-mockup_53876-65768.jpg?w=826&t=st=1699797835~exp=1699798435~hmac=f082b2a71c8edeb2b5065cb18d753e262b84bb18b786734cf7ab16cea5a85e5b",
        name: "Alna",
        category: "Pant",
        price: "350.00",
    }
]

const Products = () => {
    return (
        <div className=" container mx-auto px-2 lg:px-5 my-10">
            <h1 className="text-2xl font-bold text-center lg:text-3xl mb-6">All Products</h1>
            <div className="flex justify-end">
                <DialogBox
                    buttonText='Add New'
                    buttonVarient='default'
                    buttonSize='sm'
                    title='Add New Product'
                    forWhatOne='name'
                    labelOne='Name'
                    valueOne='Iphone 12'
                    forWhatTwo='description'
                    labelTwo='Description'
                    valueTwo='Great Product'
                />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-40">Item</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <div className="flex justify-start items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={product.image} />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-base font-bold">{product.name}</h3>
                                        <h5 className="text-xs">{product.category}</h5>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <h3>$ {product.price}</h3>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex flex-col lg:flex-row justify-end items-center gap-2">
                                    <DialogBox
                                        buttonText='Edit'
                                        buttonVarient='outline'
                                        buttonSize='sm'
                                        title='Edit Product'
                                        forWhatOne='name'
                                        labelOne='Name'
                                        valueOne='Iphone 12'
                                        forWhatTwo='description'
                                        labelTwo='Description'
                                        valueTwo='Great Product'
                                    />
                                    <Button size='sm' variant='destructive'>Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Products