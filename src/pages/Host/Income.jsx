import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="mt-12 mb-20 text-gray-950">
            <div className="bg-blue-100 rounded-md md:rounded-none p-5 md:-mx-8 md:px-8 md:py-12">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Income</h1>
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-bold">$2,260</h2>
                    <p className="text-sm text-gray-700">Last 30 days</p>
                </div>
            </div>
            <div>
            <h3 className="text-xl md:text-2xl font-bold mt-12">Your transactions</h3>
            <ul className="md:grid md:grid-cols-custom md:gap-5">
                {transactionsData.map((item) => (
                    <li key={item.id} className="group flex items-center justify-between bg-blue-50 hover:bg-blue-500 hover:text-white px-5 py-4 mt-4 rounded-md transition duration-100 md:flex-col md:items-start">
                        <h3 className="text-lg md:text-3xl font-bold">${item.amount}</h3>
                        <p className="text-sm text-gray-700 group-hover:text-gray-100 md:mt-12">{item.date}</p>
                    </li>
                ))}
            </ul>

            </div>
        </section>
    )
}
