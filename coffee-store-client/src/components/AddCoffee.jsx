import React from 'react';
import Swal from 'sweetalert2';


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        // const name= form.name.value;
        // const chef = form.chef.value;

        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        //send coffee data to server
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl'> Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" name='name' placeholder="coffee name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' className="input w-full" placeholder="coffee quantity" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Supplier</label>
                            <input name='supplier' type="text" className="input w-full" placeholder="coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Taste</label>
                            <input name='taste' type="text" className="input w-full" placeholder="coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Price</label>
                            <input name='price' type="text" className="input w-full" placeholder="coffee price" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Details</label>
                            <input name='details' type="text" className="input w-full" placeholder="coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
                        <label className="label">Photo URL</label>
                        <input name='photoURL' type="text" className="input w-full" placeholder="coffee photoURL" />
                    </fieldset>
                    <button className='btn w-full' type='submit'>Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;