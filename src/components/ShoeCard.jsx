import React from 'react'

export default function ShoeCard({imgUrl, changeImage, actualImage}) {
    function handleClick(){
        if (imgUrl.bigShoe != actualImage)
            changeImage(imgUrl.bigShoe)
    }    
    return (
        <div className={`border-2 rounded-xl py-5 bg-hero-image
        ${imgUrl.bigShoe == actualImage? 'border-coral-red' : 'border-blue-300'}
        cursor-pointer
        max-sm:flex-1
        `}
        onClick={handleClick}
        >
            <div className="flex flex-center items-center sm:w-40 sm:h-40 max-sm:p-">
                <img src={imgUrl.thumbnail} alt="big shoes" height={103} width={127} className="object-contain" />
            </div>
        </div>
    )
}
