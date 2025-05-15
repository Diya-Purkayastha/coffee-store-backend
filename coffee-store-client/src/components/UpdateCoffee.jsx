import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id } = coffee
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries(formData))
        console.log(updateCoffee);

        //send update coffee to the db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl'> Update Coffee</h1>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" name='name' defaultValue={coffee.name} placeholder="coffee name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' className="input w-full" defaultValue={coffee.quantity} placeholder="coffee quantity" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Supplier</label>
                            <input name='supplier' defaultValue={coffee.supplier} type="text" className="input w-full" placeholder="coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Taste</label>
                            <input name='taste' defaultValue={coffee.taste} type="text" className="input w-full" placeholder="coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Price</label>
                            <input defaultValue={coffee.price} name='price' type="text" className="input w-full" placeholder="coffee price" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Details</label>
                            <input name='details' defaultValue={coffee.details} type="text" className="input w-full" placeholder="coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                        <label className="label">Photo URL</label>
                        <input defaultValue={coffee.photoURL} name='photoURL' type="text" className="input w-full" placeholder="coffee photoURL" />
                    </fieldset>
                    <button className='btn w-full' type='submit'>Update Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;