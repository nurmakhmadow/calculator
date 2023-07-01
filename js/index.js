let btn = document.querySelector('button')

function matematika() {

let a = +prompt('first number')
let m = prompt('math')
let c = +prompt('second number')

    if(m === '+'){
       alert( a+c)
    } else  if ( m === '-'){
      alert(a -c)
    } else if (m === '*'){
        alert(a * c)
    }else if (m === '/'){
        alert(  a / c)
    } 
    
}


btn.onclick = () => {
    matematika()
}





let kolichestvo = +prompt('kolichestwo mashin')
let brokenCars = +prompt('broken')

function hello(){
  let prosent = (brokenCars / kolichestvo) * 100
  
    alert(prosent)
  
}
hello()