
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ title, description, image, id }) => {
    const navigate = useNavigate();
    return (
        <>
            <Card style={{ width: '18rem' }} className="mt-3 mb-3">
                <Card.Img variant="top" src={image} width={100} height={220} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 15)}{title && "..."}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 35)}{description && "..."}
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>asdsa</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
                <Card.Body>
                    <Card.Link onClick={() => navigate(`/ProductDetail/${id}`)}
                        style={{ display: 'flex', justifyContent: 'center' }}>Go to Detail</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductCard