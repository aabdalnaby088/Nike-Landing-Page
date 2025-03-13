import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
    return (
        <div className="max-container" id="reviews">
                <h3 className="text-5xl font-bold font-palanquin text-center">
                    What Our <span className="text-coral-red">Customers </span>say?
                </h3>
            <p className="m-auto mt-4 max-w-lg text-center info-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem maiores necessitatibus, nostrum quidem offici is tempora optio veritatis harum nihil modi rem iusto laboriosam adipisci reprehenderit iure, eos sequi eaque?
            </p>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-6">
                {
                    reviews.map(review=> (
                        <ReviewCard review={review} />
                    ))
                }
            </div>
        </div>
    )
}
