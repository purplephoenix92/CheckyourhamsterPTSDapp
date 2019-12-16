import React from 'react';

// My goal is to eventually have a looping 5 second timer with a progress bar for users to watch as they are focusing on their breathing

class Breathing extends React.Component {

    constructor() {

        super();
        this.state = {};
    }
//   Below is the message I wanted people to see when they look on my home page, to explain why I have created this site. 
    render() {
        alert( "There is no right or wrong way to do this. All you need to do is watch the timer, inhale, pause, and exhale")
        return (
            <div>
                <h3>Breath is what fuels our lives, it is the only thing that will be with us every moment of our lives. 
             
                First thing that you need to do is inhale for five seconds, hold for five seconds, and exhale for five seconds.</h3>
            </div>
        )

    }
}

// var timeleft = 5;
// var downloadTimer = setInterval(function(){
//   document.getElementById("progressBar").value = 5 - timeleft;
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
// }, 1000);
// <progress value="0" max="10" id="progressBar"></progress>











export default Breathing; 