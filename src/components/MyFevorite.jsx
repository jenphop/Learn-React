import React from 'react'
import LikePokemon from './LikePokemon'

function MyFevorite({fev}) {
    console.log("fev",fev)
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {fev?.map((data,idx)=>(
            <div key={idx}>
                
                <img src={data?.sprites?.other?.home?.front_default} alt='' width={100} height={100}/>
                <h5 >{data?.name}</h5>
                <LikePokemon/>
            </div>
            
        ))}
    </div>
  )
}

export default MyFevorite