const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
// let cartIcon = document.querySelector("addToCart")
// let cart = document.querySelector(".cart")
// let closeCart = document.querySelector("#closeCart")


// cartIcon.onclick = () =>{
//     cart.classList.add("active");
// }

//cart working js
// if(document.readyState == 'loading'){
//     document.addEventListener("DOMContentLoaded", ready);
// }
// else{
//     ready();
// }

// //making function
// function ready(){
//     //remove item from cart
//     var removeCart = document.getElementsByClassName("cart-remove");
//     console.log(removeCart)
//     for(var i = 0; i < removeCart.length; i++){
//         var button = removeCart[i]
//         button.addEventListener("click", removeCartItem)
//     }

// //quantity changes
// var quantityInputs = document.getElementsByClassName("cart-quantity");
//     for(var i = 0; i < quantityInputs.length; i++){
//       var input = quantityInputs[i];
//       input.addEventListener("change", quantityChanged);
//     }
//    //add to cart
//    var addCart = document.getElementById('addToCart');
//    for(var i = 0; i < addCart.length; i++){
//          var button = addCart[i];
//          button.addEventListener('click', addCartClicked);

//    }
// } 
// function removeCartItem(event){
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updatetotal();
// }
// function  quantityChanged(event){
//     var input = event.target;
//     if(isNaN(input.value) || input.value <= 0){
//         input.value = 1;
//     }
//     updatetotal()

// }
// //add to cart
// function addCartClicked(event){
//     var button = event.target
//     var shopProducts = button.parentElement
//     var title = shopProducts.getElementsByClassName('product-title')[0].innerText
//     console.log(title)

// }
// function updatetotal(){
//     var cartContent = document.getElementsByClassName('cart-content')[0]
//     var cartBoxes = cartContent.getElementsByClassName('cart-box')
//     var total = 0;
//     for(var i = 0; i < cartBoxes.length; i++){
//         var cartBox = cartBoxes[i]
//         var priceElement = cartBox.getElementsByClassName('cart-price')[0];
//         var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
//         var price = parseFloat(priceElement.innerText.replace("Rs",""));
//         var quantity = quantityElement.value; 
//         total = total + (price * quantity);
//           //if price contain some cents value
//         total = Math.round(total * 100)/100;

//         document.getElementsByClassName('total-price')[0].innerText = 'Rs' + total
//     }
// }