import React from 'react'; 


class HamsterTrends extends React.Component {

    constructor() {

        super();
        this.state = {};
    }
//   Below is the message I wanted people to see when they look on my trends page, to explain that this is where they will track over time their reported check-ins of emotional intensity
    render() {
        
        return (
            <div>
            <h3>
                This is where you can track your check-ins over time. The focus is on your emotional intensity. I hope that this will give you
                some insight into your own patterns. 
            </h3>
            </div>
        )

    }
}













export default HamsterTrends; 