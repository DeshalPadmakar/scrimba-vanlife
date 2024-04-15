import React from "react"
import { AccordionContext } from "./Accordion"

// react icon
import { IoIosArrowDown } from "react-icons/io"

export default function AccordionTitle({children}) {
    const { accordionOpen, toggleAccordionOpen } = React.useContext(AccordionContext)

    return (
        <button 
            onClick={toggleAccordionOpen} 
            className={`flex justify-between items-center w-full py-2.5 outline-none text-left hover:text-blue-600`}
            >
            <p className={`text-sm ${accordionOpen ? "font-semibold" : ""}`}>{children}</p>
            <IoIosArrowDown className={`transition-all duration-300  ${accordionOpen ? "rotate-180" : ""}`}/>
        </button>
    )
}