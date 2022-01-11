import { useEffect, useState } from 'react';
import { Navbar, Form, Button, Nav, NavDropdown, FormControl, Container } from 'react-bootstrap';

import { getAllCategories } from '../../services/context';

const NavBar = ({ passingFuntionToChild, allData }) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getAllCategories(setCategory);
    }, [])

    const getSelectedItem = (passingSelectedItem) => {
        passingFuntionToChild(passingSelectedItem)
    }
    const allCategoryData = () => {
        allData();
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">E-Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link onClick={allCategoryData}>All Products</Nav.Link>
                            <NavDropdown title="Category" id="navbarScrollingDropdown">
                                {category.data && category.data.map((element) => (

                                    // <NavDropdown.Item eventKey={element} onClick={() => checkSelectedvalue(element)}>
                                    //     {element}
                                    // </NavDropdown.Item>
                                    <NavDropdown.Item action={element} onClick={() => getSelectedItem(element)}>
                                        {element}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar