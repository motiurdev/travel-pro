import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './BookingDetail.css'
import useAuth from '../../hooks/useAuth';


const BookingDetail = () => {
    const [singleBooking, setSingleBooking] = useState({})
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { user } = useAuth()
    const { id } = useParams()

    // fetch single Booking data
    useEffect(() => {
        fetch(`https://mighty-thicket-11693.herokuapp.com/bookingDetail/${id}`)
            .then(res => res.json())
            .then(data => setSingleBooking(data))
    }, [])

    // submit booking data
    const onSubmit = data => {
        data.singleBooking = singleBooking;
        data.status = "pending"

        fetch(`https://mighty-thicket-11693.herokuapp.com/placeOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booking Successful")
                    reset()
                }
            })
    };
    window.scrollTo(0, 0)

    return (
        <div className="container">
            <div className="row my-5">
                {/* single Booking data */}
                <div className="col-md-6">
                    <div>
                        <img src={singleBooking.img} alt="" className="img-fluid rounded" />
                    </div>
                    <h4 className="my-3 header-title">{singleBooking.name}</h4>
                    <p className="my-3 text-muted">{singleBooking.des}</p>
                    <h5>Price: ${singleBooking.price}</h5>
                </div>
                <div className="col-md-6 order-form">
                    {/* Booking Place */}
                    <h2 className="text-center header-title py-3">Booking Place</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        <input placeholder="Phone" {...register("phone")} />
                        <input placeholder="Address" {...register("address")} />
                        <input defaultValue={new Date()} {...register("date")} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" value="Place Order" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingDetail;