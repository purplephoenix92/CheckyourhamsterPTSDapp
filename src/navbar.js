import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    constructor() {

        super();
        this.state = {
            active: false
        }
    }
// The challenge and issue I ran into before was that I had created the navbar, but I did not assign it a job to do within this site
// I created a Navbar class and in turn had the set state of active to be false. This meant that below when I referenced. current state and set it
// then if it was active, it would show the opposite of the current state, which would be true. 
    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };


    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" onClick={this.toggleClass} data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* This is the part of the code that enables the hamburger menu. Icon-bar is just a horizontal bar that is seen when the viewer looks at the website in mobile view */}
                    </div>
                    <div className={this.state.active ? 'navbar-collapse' : 'navbar-collapse collapse'} id="navbar-collapse">
                    {/* This is a ternary function to show that if this.state.active is true, then the targeted class is navbar, collapse. 
                    If it is not, then the navbar-collapse collapse will show instead. When using react tools in chrome, this enabled me to see that removing this one class within
                    the targeted class name made the hamburger menu not only collapse to show the endpoints but to navigate them properly. 
                     */}
                        <ul className="nav navbar-nav">
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/CheckYourHamster">Check Your Hamster</Link></li>
                            <li><Link to="/Grounding">Grounding</Link></li>
                            <li><Link to="/Breathing"> Breathing</Link></li>
                            <li><Link to="/HamsterTrends">Hamster Trends</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navbar 