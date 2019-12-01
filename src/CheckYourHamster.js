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
               <h3> Take just a moment to rate the following items on a scale of 1 to 10. 1 is very little intensity, and 10 being the most intense it has ever felt to you:
            
            <div>
                1. On a scale of 1 to 10 where is your anger?
                2. On a scale of 1 to 10 where is your depression?
                3. On a scale of 1 to 10 where is your anxiety?
            </div>
            </h3>
            </div>
        )

    }
}











export default CheckYourHamster; 