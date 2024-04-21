import React from "react"
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="mt-10 text-gray-950">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Your reviews</h2>
                <p className="text-sm text-gray-700">Last 30 days</p>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-6 lg:gap-8">
                {reviewsData.map((review) => (
                    <div key={review.id} className="border-b pb-4 mb-6 sm:border-none sm:bg-blue-50 sm:p-6">
                        <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                                <BsStarFill className="text-blue-500" key={i} />
                            ))}
                        </div>
                        <div className="flex justify-between mt-3 mb-1 sm:flex-col sm:mt-4 sm:mb-4 sm:gap-0.5">
                            <p className="font-bold text-lg">{review.name}</p>
                            <p className="text-sm text-gray-700">{review.date}</p>
                        </div>
                        <p className="text-gray-900">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
