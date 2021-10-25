import React from 'react';
import { Container, Row } from 'reactstrap';
import Card from '../components/Card';

//imgs
import fitnesstracker from '../assets/images/fitlist.jpg'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title:'Fitness Tracker',
                    subTitle:'A simple mongoDb based workout tracker.',
                    imgSrc: fitnesstracker,
                    link:'https://calm-harbor-58560.herokuapp.com/',
                    selected: false
                },
                {
                    id:1,
                    title:'Fitness Tracker',
                    subTitle:'A simple mongoDb based workout tracker.',
                    imgSrc: fitnesstracker,
                    link:'https://calm-harbor-58560.herokuapp.com/',
                    selected: false
                },
                {
                    id:2,
                    title:'Fitness Tracker',
                    subTitle:'A simple mongoDb based workout tracker.',
                    imgSrc: fitnesstracker,
                    link:'https://calm-harbor-58560.herokuapp.com/',
                    selected: false
                },
            ]
    
        }

    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}



export default Carousel;