import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section className="mt-12 mb-20 text-gray-950">
            <div className="bg-blue-100 rounded-md p-5">
                <h1 className="text-2xl font-bold mb-4">Income</h1>
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">$2,260</h2>
                    <p className="text-sm text-gray-700">Last 30 days</p>
                </div>
            </div>
            <h3 className="text-xl font-bold mt-12">Your transactions</h3>
            <ul>
                {transactionsData.map((item) => (
                    <li key={item.id} className="flex items-center justify-between bg-blue-50 px-5 py-4 mt-4 rounded-md">
                        <h3 className="text-lg font-bold">${item.amount}</h3>
                        <p className="text-sm text-gray-700">{item.date}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
