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
            <div>
            <h2>
                The following is a list of resources available to you: 
            </h2> 
            </div> 
            <div>
            <h4> Crisis Text Line: Text SUPPORT to 741-741. This is 24/7, free and confidential</h4>
            </div>
            <div>
            <h4> loveisrespect.org gives information about dating and healthy relationships. Text loveis to 22522
            to speak with a trained counselor, or call 1-866-332-9474. They also have an online chat option.
            </h4>
            </div>
            <div>
                <h4>
                 National Domestic Violence Hotline 1-800-799-7233   
                </h4>
            </div>

            <div>
            <h4> RAINN (Rape,Abuse and Incest National Network) 1-800-656-4673.They also have live chat  </h4>
            </div>
            <div>
            <h4> National Child Abuse Hotline 1-800-422-4453 </h4>
            </div>
            <div>
            <h4> SAFE place Text SAFE and current zipcode to 69866 </h4>
            </div>
            <div>
            <h4> National Runaway Safeline 1-800-786-2929. Live chat from 430-1130 pm CST </h4>
            </div>
            <div>
            <h4> National Suicide Prevention Hotline 800-273-825 </h4>
            </div>
            <div>
            <h4> Veterans Crisis Line 800-273-8255</h4>
            </div>
            </div>
        )
    }
}













export default CrisisResources; 