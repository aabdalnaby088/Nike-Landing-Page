import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";

export default function SpecialOffer() {
    return (
        <div className="flex flex-1 w-full flex-col sm:flex-row items-center justify-center max-container gap-10" id="offers">
            <div className="rounded-xl flex flex-1 justify-center items-center">
                <img src={offer} alt='offer image' width={773}
                    height={687}
                    className='object-contain w-full' />
            </div>
            <div className="flex flex-1 justify-center items-start flex-col space-y-10">
                <h2 className="text-5xl font-bold ">
                    <span className="text-coral-red">Special</span> Offer
                </h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis eos illum quia corporis harum odio a necessitatibus deserunt ea quam aspernatur repudiandae animi blanditiis, quibusdam laborum exercitationem iste voluptatem.
                    <br />
                    <br />
                    OUR DEDICATION details and excellence ensures your satisfaction
                </p>
                <div className="flex w-full flex-col gap-6">
                    <Button title={'view Details'} />
                    <Button
                        title='Learn more'
                        backgroundColor='bg-white'
                        borderColor='border-slate-gray'
                        textColor='text-slate-gray'
                    />
                </div>
            </div>
        </div>
    )
}
