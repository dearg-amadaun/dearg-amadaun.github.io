import React from 'react';
import { Container, Row } from 'reactstrap';
import Card from '../components/Card';

//imgs
import quiz from '../assets/images/large/quiz.jpg'
import fitlist from '../assets/images/fitlist.jpg'
import fitnesstracker from '../assets/images/large/fitnesstracker.png'
import passgen from '../assets/images/large/passgen.jpg'
import note from '../assets/images/large/note.jpg'
import readmeGen from '../assets/images/large/readmeGen.jpg'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title:'Quizzes and Cocktails',
                    subTitle:'A social app that generates random cocktails and trivia.',
                    imgSrc: quiz,
                    link:'https://sf487552.github.io/Group-Project-1/',
                    selected: false
                },
                {
                    id:1,
                    title:'Fitlist',
                    subTitle:'An early attempt at building a profile based workout buuilder.',
                    imgSrc: fitlist,
                    link:'https://obscure-falls-14224.herokuapp.com/',
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
                {
                    id:3,
                    title:'Password Generator',
                    subTitle:'A javascript random password generator.',
                    imgSrc: passgen,
                    link:'https://dearg-amadaun.github.io/Password-Generator/',
                    selected: false
                },
                {
                    id:4,
                    title:'Note Taker',
                    subTitle:'An express based app for writing and saving notes.',
                    imgSrc: note,
                    link:'https://note-taker-express-homework-11.herokuapp.com/',
                    selected: false
                },
                {
                    id:5,
                    title:'Readme Generator',
                    subTitle:'A node.js app that uses basic command line inputs to generate a markdown README file.',
                    imgSrc: readmeGen,
                    link:'https://github.com/dearg-amadaun/Readme-Generator',
                    selected: false
                }

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