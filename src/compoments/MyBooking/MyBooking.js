import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth()
    const [myBookings, setMyBookings] = useState([])

    // my order data load
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email, myBookings])

    // order delete button
    const handleDeleteOrder = (deleteId) => {
        const confirm = window.confirm("Are you sure. You want to delete this?")
        if (confirm) {
            fetch(`http://localhost:5000/deleteOrder/${deleteId}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = myBookings.filter(myBooking => myBooking._id !== deleteId)
                        setMyBookings(remainder)
                    }
                })
        }
    }
    window.scrollTo(0, 0)
    return (
        <div className="container mb-5">
            <h1 className="text-center py-5">My Booking {myBookings.length}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
                {
                    myBookings.map(myBooking => (
                        <div
                            key={myBooking._id}
                            className="card mb-3 me-3 ps-0" style={{ "maxWidth": "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={myBooking?.singleBooking.img} className="img-fluid rounded-start h-100" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">{myBooking?.singleBooking.name}</h5>
                                        <p className="card-text">{myBooking?.singleBooking.des.slice(0, 80)}</p>
                                        <button onClick={() => handleDeleteOrder(myBooking._id)} className="regular-btn">Cancel</button>
                                        <button className="regular-btn ms-2">{myBooking.status}</button>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyBooking;