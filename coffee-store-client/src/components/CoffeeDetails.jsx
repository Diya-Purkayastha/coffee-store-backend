import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const data = useLoaderData()
      const { _id, photoURL, name, price, quantity, details } = data;

    return (
        <div>
             <div className="card card-side bg-base-100 shadow-sm border w-2xl p-2 mx-auto mt-12">
                    <figure>
                        <img
                            src={photoURL}
                            alt="Movie" />
                    </figure>
                    <div className="flex w-full justify-around mt-8 ">
                        <div className='space-y-6'>
                            <h2 className="font-bold">{name}</h2>
                            <p>Price: {price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Details: {details}</p>
                        </div>
                       
                    </div>
                </div>
        </div>
    );
};

export default CoffeeDetails;