import React from "react"

const AccordionContext = React.createContext()

export default function Accordion({children}) {
    const [accordionOpen, setAccordionOpen] = React.useState(false)

    function toggleAccordionOpen() {
        setAccordionOpen(prevAccordionOpen => !prevAccordionOpen)
    }

    return (
        <AccordionContext.Provider value={{accordionOpen, toggleAccordionOpen}}>
            <div className="border-b border-gray-300">
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

export { AccordionContext }