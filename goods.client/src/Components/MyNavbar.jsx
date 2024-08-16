import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
        <>
            <Navbar sticky="top" style={{
                backgroundColor: '#D12026'
            }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src='src/assets/images/Logo Name.svg' width="150" height="50" className="d-inline-block align-top"
                        alt="Logo"></img></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default MyNavbar