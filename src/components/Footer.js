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
                       &copy; Brendan Rottmund 2021
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <a href="https://www.linkedin.com/in/brendan-rottmund-587a501b2/">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                        </a>

                        <a href="https://github.com/dearg-amadaun">
                        <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
                        </a>

                        <a href="mailto:brottmund@gmail.com">
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="3x"/>
                        </a> 
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;