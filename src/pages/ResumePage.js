import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Image from 'react-bootstrap/Image'
import resume from '../assets/images/resumepdf.png'

function ResumePage(props) {
    
    return(
        <div>

            <Content>
                    <Hero title={props.title} />

            </Content>
            <a href="https://drive.google.com/file/d/125e1z5LQC5IM4DFAU3D_2UlvtNZ38B05/view?usp=sharing" target="_blank">
            <Image className="rounded mx-auto d-block mt-5" src={resume} alt="Brendan" rounded />
            </a>
          
        </div>
    );

}

export default ResumePage;