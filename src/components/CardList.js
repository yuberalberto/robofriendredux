import React from 'react'
import Card from './Card'

const CardList = ({robots}) =>{
  if(false){
    throw new Error('NOOOOOOOO!')
  }
  return(
    <div>
      {
        robots.map(user => {
          return (
            <Card 
              key={user.id} 
              id={user.id}
              name={user.name} 
              username={user.username} 
              email={user.email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;