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
                Grounding is a useful tool when you don't really feel completely present in a room, are having a flashback, or your emotions are compelling
                you to relive a difficult, traumatic memory. 
            </div>
        )

    }
}













export default CrisisResources; 