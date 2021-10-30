import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './AddBooking.css'

const AddBooking = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        data.email = user?.email;
        fetch(`http://localhost:5000/addOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Successfully")
                    reset()
                }
            })
    };
    return (
        <div className="container">
            <h1 className="header-title text-center py-5">Add Booking</h1>
            <div className="order-form addForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" {...register("name")} />
                    <input placeholder="Price" {...register("price", { required: true })} />
                    <textarea placeholder="Description" {...register("des")} />
                    <input placeholder="Image Url" {...register("img")} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default AddBooking;