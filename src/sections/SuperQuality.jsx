import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
export default function SuperQuality() {
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row mt-10 max-container gap-10 w-full" id="aboutUs">
            <div className="flex flex-col space-y-7 flex-1">
                <h1 className="font-palanquin capitalize text-5xl lg:max-w-lg font-bold">
                    We Provide You
                    <span className='text-coral-red'> Super </span>
                    <span className='text-coral-red'>Quality </span> Shoes
                </h1>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis eos illum quia corporis harum odio a necessitatibus deserunt ea quam aspernatur repudiandae animi blanditiis, quibusdam laborum exercitationem iste voluptatem.
                        <br />
                        <br />
                    OUR DEDICATION details and excellence ensures your satisfaction
                </p>
                <Button title={'Shop Now'} iconUrl={arrowRight}/>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt='super quality' width={570}
                    height={522}
                    className='object-contain' />
            </div>
        </div>
    )
}
