import {save} from "./firebase.js"


export function dRClick(){
    document.addEventListener('contextmenu', (e)=>  {
        e.preventDefault();
        let vie = localStorage.getItem('heart') - 1 
        console.log(vie)
        life('🧠', vie, '.heart')
        localStorage.setItem('heart', vie)
       
    })
}


export function dCtrl(){

    document.addEventListener('keydown', (e)=>  {
         if (e.key == 'Control' || e.key =='Meta'){
            vie = vie - 1 
            life('🧠', vie, '.heart')
         }

        
       
    })
}


export function dResize (){
    window.addEventListener('resize', (e)=>  {
       console.log(e)

       vie = vie - 1 
     life('🧠', vie, '.heart')
      
   })
}

export function fullScreen(){

    window.addEventListener('DOMContentLoaded', (e)=> {


       
let ratio = window.screen.width / window.screen.height 


let innerRation = window.innerWidth / window.innerHeight


 console.log(ratio, innerRation)

    })
}


export function dfocus (){

    document.addEventListener('visibilitychange', (e)=>{

        if(document.visibilityState == 'hidden'){
            vie = vie - 1 
           life('🧠', vie, '.heart')
        }
    })
    
}



 

export function life (emoji,nbHeart, selector){

   
    save('heart', { uid:localStorage.getItem('uid'), name : document.querySelector('#name').value, coeur : nbHeart })

    if(nbHeart <= 0){
        document.querySelector('body').innerHTML = ' EndGame'
        localStorage.setItem('heart', 'end')
    }
    let newP = document.querySelector(selector);
    newP.innerHTML = ''
    for (let i = 0; i < nbHeart ; i++){
        newP.innerHTML += emoji ;

    }

}


