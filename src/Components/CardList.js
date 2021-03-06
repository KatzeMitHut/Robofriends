import React from 'react';
import Card from './Card'; 

const CardList = ({robots}) =>  {
    const CardComponent = robots.map((robot) => {
        console.log(robot);
        return <Card key={robot.id} id = {robot.id} name = {robot.name} email = {robot.email} />
    })
    return (
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList;