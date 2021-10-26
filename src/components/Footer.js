import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faEnvelope)


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Brendan Rottmund
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        <FontAwesomeIcon icon={['fas', 'envelope']} /> 
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;