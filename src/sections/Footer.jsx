import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
    return (
        <section className="flex flex-col gap-10  max-container text-white" id="contact">
            <div className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-20" >
                <div className="flex flex-col gap-5 items-start">
                    <a href='/'>
                        <img
                            src={footerLogo}
                            alt='logo'
                            width={150}
                            height={46}
                            className='m-0'
                        />
                    </a>
                    <p className=" mt-6 text-base leading-7 font-montserrat  sm:max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia obcaecati ullam distinctio nemo ut veniam necessitatibus voluptate, iste quos laudantium quasi beatae debitis alias consequuntur vitae repudiandae illum repellendus aliquam!
                    </p>
                    <div className="flex gap-3">
                        {socialMedia.map((platform, idx) => (
                            <img className="bg-white rounded-full p-3" src={platform.src} alt={platform.alt} />
                        ))}
                    </div>
                </div>
                {
                    footerLinks.map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-8">
                            <h2 className="text-3xl ">
                                {item.title}
                            </h2>
                            <ul className="flex flex-col gap-3">
                                {
                                    item.links.map((el, index) => (
                                        <li key={index} className="text-base leading-7 font-montserrat ">
                                            <a href={el.link} className=" hover:text-white-400">
                                                {el.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col sm:flex-row gap-10 items-center justify-between m-8">
                <div className="flex gap-2">
                    <img
                        src={copyrightSign}
                        alt='copyright sign'
                        width={20}
                        height={20}
                        className='rounded-full m-0'
                    />
                    <p className="font-montserrat">
                        Copyrigghts all raights reserved
                    </p>
                </div>
                <p className=" font-montserrat cursor-pointer">
                    TERMS & CONDITIONS
                </p>
            </div>
       </section>
    )
}
