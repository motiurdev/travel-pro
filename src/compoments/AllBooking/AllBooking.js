import React, { useEffect, useState } from 'react';

const AllBooking = () => {
    const [allBookings, setAllBookings] = useState([])

    // fetch all booking
    useEffect(() => {
        fetch(`https://mighty-thicket-11693.herokuapp.com/allBooking`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data)
            })
    }, [allBookings])

    // delete order
    const handleDeleteOrder = (deleteId) => {
        const confirm = window.confirm("Are you sure. You want to delete this?")
        if (confirm) {
            fetch(`https://mighty-thicket-11693.herokuapp.com/deleteOrder/${deleteId}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainder = allBookings.filter(myBooking => myBooking._id !== deleteId)
                        setAllBookings(remainder)
                    }
                })
        }
    }


    // update status
    const handlePendingOrder = (id, index) => {
        const updateData = allBookings[index]
        fetch(`https://mighty-thicket-11693.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })

    }


    return (
        <div className="container mb-5">
            <h1 className="text-center py-5 header-title">Manage All Booking {allBookings.length}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto">
                {/* show all booking */}
                {
                    allBookings.map((allBooking, index) => (
                        <div
                            key={allBooking._id}
                            className="card mb-3 me-3 ps-0" style={{ "maxWidth": "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={allBooking?.singleBooking.img} className="img-fluid rounded-start h-100" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">{allBooking?.singleBooking.name}</h5>
                                        <p className="card-text">{allBooking?.singleBooking.des.slice(0, 80)}</p>
                                        <h5 className="mb-3 text-muted">Price: ${allBooking?.singleBooking.price}</h5>
                                        {/* service delete button */}
                                        <button onClick={() => handleDeleteOrder(allBooking._id)} className="regular-btn"><i class="fas fa-trash-alt"></i> Cancel</button>
                                        {/* status update button */}
                                        <button onClick={() => handlePendingOrder(allBooking._id, index)} className="regular-btn ms-3"><i class="fas fa-tags"></i> {allBooking.status}</button>
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

export default AllBooking;