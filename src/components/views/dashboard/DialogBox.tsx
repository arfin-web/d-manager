import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const DialogBox = ({ buttonText, buttonVarient, buttonSize, title, forWhatOne, labelOne, forWhatTwo, labelTwo, valueOne, valueTwo }: any) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={buttonVarient} size={buttonSize}>{buttonText}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor={forWhatOne} className="text-right">
                            {labelOne}
                        </Label>
                        <Input
                            id={forWhatOne}
                            defaultValue={valueOne}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor={forWhatTwo} className="text-right">
                            {labelTwo}
                        </Label>
                        <Input
                            id={forWhatTwo}
                            defaultValue={valueTwo}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="image" className="text-right">
                            Image URL
                        </Label>
                        <Input
                            id="image"
                            defaultValue="https//:imge.png"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogBox