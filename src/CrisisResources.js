import React from 'react';


class CrisisResources extends React.Component {

    constructor() {

        super();
        this.state = {};
    }
//   Below is the message I wanted people to see when they look on my Crisis Resources page, to provide site users with additional supports if needed. 
    render() {
        alert("If you are in immediate danger please call 9-1-1 or your emergency number. Be well")
        return (
            <div>
                The following is a list of resources available to you:  
            </div>
        )

    }
}













export default CrisisResources; 