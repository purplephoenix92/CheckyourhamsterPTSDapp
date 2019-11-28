import React from 'react'; 


class HamsterTrends extends React.Component {

    constructor() {

        super();
        this.state = {};
    }
//   Below is the message I wanted people to see when they look on my trends page, to explain why I have created this page
    render() {
        alert("test msg")
        return (
            <div>
                This is where you can track your check-ins over time. The focus is on your eemotional intensity. I hope that this will give you
                some insight into your own patterns. 
            </div>
        )

    }
}













export default HamsterTrends; 