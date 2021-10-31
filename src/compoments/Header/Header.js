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
                    {/* logo */}
                    <Navbar.Brand className="logo"><NavLink to="/home" className="fw-bold">Travel Pro</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* navbar */}
                        <Nav className="ms-auto">
                            <NavLink to="/home">Home</NavLink>
                            {
                                user?.email &&
                                <span className="d-flex flex-column flex-md-row">
                                    <NavLink to="/mybooking">My Booking</NavLink>
                                    <NavLink to="/allbooking">All Booking</NavLink>
                                    <NavLink to="/addbooking">Add Booking</NavLink>
                                </span>
                            }
                            {
                                user?.email && <span className="align-items-center d-flex me-2">
                                    <img src={user?.photoURL} className="profile-img" alt="" />
                                    {user.displayName.slice(0, 13)}
                                </span>
                            }
                            {
                                user?.email ? <button className="login-btn my-2" onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></button> : <NavLink to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;