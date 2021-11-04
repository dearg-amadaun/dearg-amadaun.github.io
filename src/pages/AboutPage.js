import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {
    
    return(
        <div>

            <Content>
                    <Hero title={props.title} />
                        
                    <p>As a skilled tradesman laid off during the height of the COVID crisis I decided to focus on retraining and setting myself on a new path. I took a risk and joined the Penn LPS Coding Bootcamp.
                    
                    Now as a full stack web developer I am continually striving to evolve what I know, write cleaner code, and learn new languages and skills to improve my abilities and add to my toolbox.</p>

                    <p>Versed in HTML, CSS, Javascript, Bootstrap, JQuery, Node, and MYSQL. As well as progressive web apps, agile methodology, and database theory.</p>
                    
                    <p>Here you will find several small projects that showcase proficiency in a variety of areas including the above.</p>
            </Content>
          
        </div>
    );

}

export default AboutPage;