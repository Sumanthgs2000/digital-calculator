const display=document.querySelector('#display')

function appendtoDisplay(input){
    display.value+=input
}
function clearDisplay(){
    display.value='';
}
function backSpace(input){
    display.value=display.value.slice(0,-1)

}
function calculate(){
    try {
        display.value=eval(display.value)
        
    } catch (error) {
        display.value='error bro'
        
    }
}