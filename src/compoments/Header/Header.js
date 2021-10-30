import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand className="logo"><NavLink to="/home">Travel Pro</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home">Home</NavLink>
                            {
                                user?.email &&
                                <span className="pt-3">
                                    <NavLink to="/mybooking">My Booking</NavLink>
                                    <NavLink to="/allbooking">All Booking</NavLink>
                                    <NavLink to="/addbooking">Add Booking</NavLink>
                                </span>
                            }
                            {
                                user?.email && <span className="me-2 mt-3">
                                    <img src={user?.photoURL} className="profile-img" alt="" />
                                    {user.displayName}
                                </span>
                            }
                            {
                                user?.email ? <button className="login-btn" onClick={logOut}>Logout</button> : <NavLink to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;