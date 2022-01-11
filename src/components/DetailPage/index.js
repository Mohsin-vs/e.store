import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom"

import { filterData } from "../../services/context";


const DetailPage = () => {
    const { pid } = useParams();
    const navigation = useNavigate();
    const [product, setProduct] = useState({});
    useEffect(() => {
        filterData(pid, setProduct);
    }, [])

    return (
        <>
            <Row  >
                <Col lg={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Img variant="top" src={product?.image} height={300} width={100} />
                        <Card.Body>
                            <Card.Title>{product && product.title}</Card.Title>
                            <Card.Text>
                                {product?.description}
                            </Card.Text>
                            <ListGroup className="list-group-flush text-center">
                                <ListGroupItem>${product?.price}</ListGroupItem>
                                <ListGroupItem>Rating{product?.rating?.rate}</ListGroupItem>
                                <ListGroupItem>watch {product?.rating?.count}</ListGroupItem>
                            </ListGroup>
                            <div className="d-grid gap-2">
                                <Button variant="danger" size="md" onClick={() => {
                                    navigation(-1);
                                }} >
                                    Back
                                </Button>
                                <Button variant="primary" size="md">
                                    Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}
export default DetailPage