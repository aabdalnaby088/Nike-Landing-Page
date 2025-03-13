import React from 'react'
import { star } from '../assets/icons'

export default function ReviewCard({review}) {
    return (
        <div className='p-10 flex flex-col gap-10 items-center justify-center'>
                <img src={review.imgURL} alt="customer review" className='object-cover w-[120px] h-[120px] rounded-full' />
            <p className='mt-6 max-w-sm text-center info-text'>{review.feedback}</p>
            <div className='flex gap-5'>
                <img src= {star} width={24} height={24} />
                <span className="text-slate-gray text-xl font-montserrat leading-normal ">{review.rating}</span>
            </div>
            <h4 className='font-bold font-palanquin text-3xl'>
                {review.customerName}
            </h4>
        </div>
    )
}
