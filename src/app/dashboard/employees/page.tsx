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

const employees = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1699799741~exp=1699800341~hmac=7b0f288252aebcec8a297bdf454030a5151358984577102b87111c976145a04f",
        name: "Mr Salah",
        designation: "Manager",
        salary: "2000",
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=996&t=st=1699799763~exp=1699800363~hmac=70a6a0972da2d6c91d842abb44bc915b984fe81c251360d1e7930707611308f7",
        name: "Mr Fakhar",
        designation: "Supervisor",
        salary: "1500",
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?w=996&t=st=1699799779~exp=1699800379~hmac=417a600af24d5a5bca937bd9e8cf16d28dd589a2a8ab9759705d365ae1e7217e",
        name: "Mr Habib",
        designation: "Sales Man",
        salary: "1200",
    }
]

const Employees = () => {
    return (
        <div className=" container mx-auto px-2 lg:px-5 my-10">
            <h1 className="text-2xl font-bold text-center lg:text-3xl mb-6">All Employees</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-40">Employee</TableHead>
                        <TableHead>Salary</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell>
                                <div className="flex justify-start items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={employee.image} />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-base font-bold">{employee.name}</h3>
                                        <h5 className="text-xs">{employee.designation}</h5>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <h3>$ {employee.salary}</h3>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex flex-col lg:flex-row justify-end items-center gap-2">
                                    <Button variant='outline' size='sm'>Edit</Button>
                                    <Button size='sm'>Remove</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default Employees