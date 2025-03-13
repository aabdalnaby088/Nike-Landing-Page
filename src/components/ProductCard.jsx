import { star } from "../assets/icons"
export default function ProductCard({product}) {
    return (
        <div className='flex flex-1 max-sm:items-center flex-col w-full space-y-4'>
            <img src={product.imgURL} className='w-[282px] h-[282px]' />
            <div className="flex gap-2.5 mt-2">
            <p className="flex gap-5 justify-start items-center">
                    <img src={star} alt='star' width={24} height={24} />
                    <span className="text-slate-gray text-xl font-montserrat leading-normal ">(4.5)</span>
            </p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-semibold font-palanquin text-2xl leading-normal">
                    {product.name}
                </h3>
                <p className="text-xl mt-2 font-semibold font-montserrat text-coral-red">
                    {product.price}
                </p>
            </div>
        </div>
    )
}
