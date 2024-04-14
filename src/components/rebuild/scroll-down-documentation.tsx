import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export function MenuleftDocumentaion() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-0" className="font-semibold py-4"> Getting started </AccordionItem>
            <AccordionItem value="item-1">
                <Link href={"/documentation"}> <AccordionTrigger> Installation</AccordionTrigger></Link>
                <AccordionContent>
                    Settup your environment and install the necessary dependencies.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <Link href={"/core"} > <AccordionTrigger>Core Features</AccordionTrigger></Link>
                <AccordionContent>
                    Threat Detection
                </AccordionContent>
                <AccordionContent>
                    Code Analysis
                </AccordionContent>
                <AccordionContent>
                    Customizable Reports
                </AccordionContent>
                <AccordionContent>
                    Threat Detection
                </AccordionContent>
                <AccordionContent>
                    Threat Detection
                </AccordionContent>

            </AccordionItem>
            <AccordionItem value="item-3">
                <Link href={"/advance"}> <AccordionTrigger>Advanced Features (Optional)</AccordionTrigger></Link>
                <AccordionContent>
                    Behavioral Analysis
                </AccordionContent>
                <AccordionContent>
                    Sandbox Testing
                </AccordionContent>
                <AccordionContent>
                    Behavioral Analysis
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
