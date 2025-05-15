import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees , setCoffees }) => {
    const { _id, photoURL, name, price, quantity } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                //start deletion
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            //remove coffee form state
                            const remainingCoffees = coffees.filter(cof=> cof._id !== id)
                            setCoffees(remainingCoffees);
                        }
                    })


            }
        });
    }
    return (
        <div>
            <div>
                <div className="card card-side bg-base-100 shadow-sm border p-2">
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
                        </div>
                        <div className="card-actions justify-end">
                            <div className="join join-vertical space-y-2">
                               <Link to={`/coffeeDetails/${_id}`}>
                                 <button className="btn join-item">View</button>
                               </Link>
                                <Link to={`/updateCoffee/${_id}`}>
                                    <button className="btn join-item">Edit</button>
                                </Link>
                                <button className="btn join-item" onClick={() => handleDelete(coffee._id)}>X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;