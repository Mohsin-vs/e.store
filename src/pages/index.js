import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar, Slider, ProductCard } from "../components/index";

const Index = (props) => {
    // console.log("aasdasdasdsadsadsfsdf", props);
    const [product, setProduct] = useState({});
    const getData = () => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProduct(res)

        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    const passingFuntionToChild = (x) => {
        axios.get(`https://fakestoreapi.com/products/category/${x}`).then((res) => {
            setProduct(res)
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            {/* <NavBar handleCategoryData={handleCategoryData} /> */}
            <NavBar passingFuntionToChild={passingFuntionToChild} allData={getData} />
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