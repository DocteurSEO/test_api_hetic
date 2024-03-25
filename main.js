import {life,dRClick,dCtrl,fullScreen,dfocus} from './functions/cheater.js'
import {save} from './functions/firebase.js'


if(!localStorage.getItem('heart')){
    localStorage.setItem('heart', 3)
}


if(localStorage.getItem('heart') == 'end'){
    document.body.innerHTML = 'End of the game'
    save('end', {uid: localStorage.getItem('uid')})

}


document?.querySelector('#validate')
.addEventListener('click', ()=> {

    const data = {uid: localStorage.getItem('uid'),
    name: document.querySelector('#name').value,
    docker : document.querySelector('#docker').value,
    node : document.querySelector('#node').value,
    js : document.querySelector('#js').value,
    sql: document.querySelector('#sql').value, 
    heart: localStorage.getItem('heart'),
    time : new Date().toLocaleDateString(),
    timestamp : Date.now()

  
     
}

save('Last',data).then(()=> {
    localStorage.setItem('heart', "end")
    window.location.href = './login.html'
}
)

    
   
    

})



const heart = document.querySelector('.heart')

life('🧠', localStorage.getItem('heart'), '.heart')



document.querySelector('#full').addEventListener('click', () => {
    document.querySelector('#control').style.display = 'block'
    document.documentElement.requestFullscreen().catch((e) => {
       
    })

    dRClick()
    dCtrl() 
    fullScreen() 
    dfocus()
}
    
 
    
    )