import {save,signIn} from "./functions/firebase.js"


document.querySelector('button')
.addEventListener('click', (e)=> {

    signIn(
     document.querySelector('#email').value ,
     document.querySelector('#password').value)
     .then(user=> {
        
        if(user.uid){
            window.location.href = './index.html'
        }})


})