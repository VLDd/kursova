    let cart = [];
      let savedCart = localStorage.getItem("cart");
      if (savedCart) {
        cart = JSON.parse(savedCart);
      }
   function addToCart(name, price,img) {

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {

          cart[i].quantity++;
          saveCart();
          return;
        }
      }


      let item = {
        name: name,
        price: price,
      img:img,
        quantity: 1
      };
      cart.push(item);
      saveCart();
    }

    function deleteFromCart(name) {

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {

          cart.splice(i, 1);
          saveCart();
          return;
        }
      }
    }
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    function isInCart(name)
{
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            return true;
        return false;
        }
}
}


function da()
{
    console.log(document.getElementById('fullTotal').innerHTML);
}
