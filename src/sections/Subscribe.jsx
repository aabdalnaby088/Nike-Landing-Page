import Button from "../components/button";

export default function Subscribe() {
    return (
        <div className="flex flex-1 flex-col md:flex-row items-center gap-10"> 
            <div className="flex-1 flex">
                    <h2 className="font-bold text-5xl leading-[68px] lg:max-w-md">
                        Sign Up from<span className="text-coral-red">Updates&</span>
                        <br />
                        NewsLetter
                    </h2>
            </div>
            <div className="flex-1 relative">
                <input type="text" className="p-7 rounded-full outline-1 outline-gray-400 w-full" placeholder="subscribe@nike.com"/>
                <div className="absolute end-0 top-[50%] right-[5%] translate-y-[-50%]">
                    <Button title={'Sign Up'} />
                </div>
            </div>
        </div>
    )
}
