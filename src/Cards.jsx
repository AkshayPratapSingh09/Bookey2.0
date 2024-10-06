import React from 'react'
import Card from './Card'
import data from "./data.json"

const Cards = () => {
    // console.log(data);
    


    return (
        <div className="card-grid">
            {data?.data && data.data.map((one) => (
                <Card key={one.id} title={one.title} url={one.url} description={one.description} images={one.images} favicons={one.favicons}  />
            ))} 
        </div>
    );
}

export default Cards