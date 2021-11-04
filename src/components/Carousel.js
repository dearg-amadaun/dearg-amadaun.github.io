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
                    link1:'https://sf487552.github.io/Group-Project-1/',
                    link2: 'https://github.com/sf487552/Group-Project-1',
                    selected: false
                },
                {
                    id:1,
                    title:'Fitlist',
                    subTitle:'An early attempt at building a profile based workout builder.',
                    imgSrc: fitlist,
                    link1:'https://obscure-falls-14224.herokuapp.com/',
                    link2:'https://github.com/az84/FitList',
                    selected: false
                },
                {
                    id:2,
                    title:'Fitness Tracker',
                    subTitle:'A simple mongoDb based workout tracker.',
                    imgSrc: fitnesstracker,
                    link1:'https://calm-harbor-58560.herokuapp.com/',
                    link2:'https://github.com/dearg-amadaun/NOSQL-WorkoutTracker',
                    selected: false
                },
                {
                    id:3,
                    title:'Password Generator',
                    subTitle:'A javascript random password generator.',
                    imgSrc: passgen,
                    link1:'https://dearg-amadaun.github.io/Password-Generator/',
                    link2:'https://github.com/dearg-amadaun/Password-Generator',
                    selected: false
                },
                {
                    id:4,
                    title:'Note Taker',
                    subTitle:'An express based app for writing and saving notes.',
                    imgSrc: note,
                    link1:'https://note-taker-express-homework-11.herokuapp.com/',
                    link2:'https://github.com/dearg-amadaun/Express-Note-Taker',
                    selected: false
                },
                {
                    id:5,
                    title:'Readme Generator',
                    subTitle:'A node.js app to generate a markdown README file. (Requires Pull)',
                    imgSrc: readmeGen,
                    link2:'https://github.com/dearg-amadaun/Readme-Generator',
                    
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