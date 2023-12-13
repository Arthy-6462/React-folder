import React from 'react'
import {mobileData} from '../data/mobiles';

const Mobiles = () => {
    const firstfive=mobileData.slice(0,5)
  return (
    <div className='product_card'>
<h2 className='text_head'>Mobiles</h2>
<div className='view_btn'>
    <button className='btn btn-warning mb-4'>view all</button>
</div>
<div className='d-flex'>
{
    firstfive.map((mob)=>{
        return(
            <div>
                <div className="proimg ">
                    <img  className="border" src={mob.image} alt="" />

                </div>
                <div className="product_details">
                    <p className='text-center'>{mob.company},{mob.model}</p>
                </div>
            </div>
        )
    })
}
</div>

    </div>
  )
}

export default Mobiles;