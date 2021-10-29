import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" variant="light">
                <Container>
                    <Navbar.Brand className="logo"><NavLink to="/home">Travel Pro</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;