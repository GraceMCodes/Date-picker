window.document.querySelector('#show').addEventListener('click',showDate );
 
function showDate(){
     const text = document.querySelector('#text').value.toLowerCase();
     if(
        text === 'tuesday' ||  text === 'thursday'
     ){
        console.log(' Go in your zoom!')
     } else if (
        text === 'saturday' ||  text === 'sunday'
     ){
        console.log ('Free day!')
     }
     else{
        console.log('Submit your homework!')
     }


}