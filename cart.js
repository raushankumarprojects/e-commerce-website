
// cart WORKING

if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}
// Making Functions

function ready(){
    var removeCartButtons=document.getElementsByClassName('cart-remove')
console.log(removeCartButtons)

for(var i=0;i<removeCartButtons.length;i++){
    var buttons=removeCartButtons[i];
    buttons.addEventListener("click", removeCartItem);
}
}

 function removeCartItem(event){
    var buttonsClicked= event.target;
buttonsClicked.parentElement.remove(); 

}