import React from "react"
import { AccordionContext } from "./Accordion"

export default function AccordionBody({className, children}) {
    const {accordionOpen} = React.useContext(AccordionContext)

    return (
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
                <p className="text-gray-700 text-sm pb-3 leading-normal">{children}</p>
            </div>
        </div>
    )
}
