import React from 'react';


class CheckYourHamster extends React.Component {

    constructor() {

        super();
        this.state = {};
    }
//   Below is the message I wanted people to see when they look on my home page, to explain why I have created this site. 
    render() {
        alert("If you are feeling a 8 or higher in your perception of your intensity, please see the Crisis Resources page for more support. Be well")
        return (
            <div>
                Konnichiwa!
                Thank you for visiting this fan website dedicated to showing you just some of what is in
                the Studio Ghibli universe. The films, locations, and people are mainly part of the artistic
                mind of visionary Hayao Miyazaki. Many of his works focus on environmental awareness, women
                in strong leadership roles, and how to understand our bigger connection with the world around us.
                I would strongly encourage anyone who visits to watch these films. I am sure you will fall in love
                with this universe as I have. Happy exploring!!! 
            </div>
        )

    }
}











export default CheckYourHamster; 