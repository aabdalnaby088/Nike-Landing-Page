import { arrowRight } from "../assets/icons";
import Button from "../components/button";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
export default function Hero() {
    const [bigImage, setBigImage] = useState(bigShoe1)
    return (
        <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col space-y-14 justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-coral-red text-xl font-montserrat">Our Summer Collection</p>
                <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                    The New Arrival 
                    </span>
                    <span className="text-coral-red"> Nike </span>
                    Shoes
                </h1>
                <p className="text-md font-montserrat text-slate-gray text-xl ">
                    Discover stylish nike Shoes ,qualities comfort and innovation for your active life.
                </p>
                <Button title={'Shop Now'} iconUrl={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
                    {statistics.map(stat => (
                    <div key={stat.label}>
                    <h1 className="font-palanquin font-bold text-4xl ">{stat.value}</h1>
                    <p className="font-light text-gray-400 font-montserrat">{stat.label}</p>
                    </div>
                    ))}
                </div>
            </div>
            {/* {shoes section} */}
            <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero-image">
                <img src={bigImage} alt="big shoes 1" width={610} height={500} className="object-contain relative z-10" />
                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard
                            imgUrl={image}
                            changeImage={setBigImage}
                                actualImage={bigImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
