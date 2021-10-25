import React from "react";
import { Container, Row, Col } from "reactstrap";

function Content(props) {

    return(
        <Container fluid={true} className="rounded mx-auto d-block">
            <Row className="justify-content-center ">
                <Col md={5}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;