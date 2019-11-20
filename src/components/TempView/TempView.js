import React from 'react';
import './TempView.css'

const TempView = () => {
    const resLink = 'https://drive.google.com/file/d/1MZdkFUsgY4K_yXKXVn8DwAStC1bo6PAl/view?usp=sharing'
    const linkedIn = 'https://www.linkedin.com/in/davidhjkang/'
    const barzLink = 'https://barz-beta.herokuapp.com/'

    const openLink = (url) => {
        window.open(url)
    }

    return (
        <div className='temp-view'>
            <h1>Hi there, I'm David Kang.</h1>
            <p>
                Welcome. You've reached the portfolio (or lack thereof) of this recent UC Berkeley graduate (2019) and
                web developer.
                Whelp, I wish I had more on here. Thankfully, this website is currently under construction.
                In the meantime, take a copy of my 
                <b 
                    className='link' 
                    onClick={() => openLink(resLink)}> resume</b>, 
                connect with me via 
                <b 
                    className='link' 
                    onClick={() => openLink(linkedIn)}> LinkedIn</b>, 
                and check out my latest project: <b 
                    className='link' 
                    onClick={() => openLink(barzLink)}> BARZ </b>.
                
            </p>
        </div>
    );
}

export default TempView;
