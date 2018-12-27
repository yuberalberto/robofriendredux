import React from 'react';

// export const Card = ({ id, name, email}) =>{
const Card = ({ id, name, username, email}) =>{
    let firstname=name.split(" ");
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={firstname[0]} src={`https://robohash.org/${id}?size=200x200`} />
            <div id='div2' style={{padding:10, display:'flex', flexDirection:'column'}} className='w5 h4'>
                <h2 className='f5 adjustxt'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;