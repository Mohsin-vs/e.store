import { useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { NavBar, Slider, ProductCard } from "../components/index";
import { getData, passingFuntionToChild } from '../services/context'

const Index = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getData(setProduct);
    }, [])

    return (
        <>
            {/* <NavBar handleCategoryData={handleCategoryData} /> */}
            <NavBar passingFuntionToChild={(x) => passingFuntionToChild(x, setProduct)} allData={() => getData(setProduct)} />
            <Slider />
            <Container>
                <Row>
                    {/* {console.log("asdasdasdasd", product)} */}
                    {
                        product.data && product.data.map((x) => {
                            return (
                                <Col xs={3} md={4} sm={12}>
                                    <ProductCard {...x} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
export default Index