import ProductCard from "../components/ProductCard"
import { products } from "../constants"
export default function PopularProducts() {
    return (
        <div className="flex flex-col justify-start w-full max-container space-y-5" id="products">
            <div className="space-y-8">
                <h1 className="text-5xl font-palanquin font-bold">
                    Our <span className="text-coral-red">
                    Popular Products
                    </span>
                </h1>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                    Fashion, a dynamic realm influenced by personal expression and global trends, witnesses the rise of iconic apparel and accessories. From designer handbags that exude luxury to sustainable clothing lines that champion ethical practices, the definition of popular products in the fashion landscape is as diverse a s the preferences of the consumers themselves.
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:gap-6 gap-14 mt-6 bg">
                {
                    products.map(product =>
                        <ProductCard product={product} />
                    )
                }
            </div>
        </div>
    )
}
