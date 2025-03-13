import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

export default function Services() {
    return (
        <div className="mt-10 flex justify-center items-center flex-col sm:flex-row gap-7 max-container flex-wrap" id="services">
            {
                services.map(service => <ServiceCard service={service}/>)
            }
        </div>
    )
}
