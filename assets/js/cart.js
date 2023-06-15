
    let cart = [];

    function addToCart(name, price,img) {

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {

          cart[i].quantity++;
          saveCart();
          displayCart();
          return;
        }
      }


      let item = {
        name: name,
        price: price,
        img: img,
        quantity: 1
      };
      cart.push(item);
      saveCart();
      displayCart();
    }


function removeFromCart(name) {

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name)
        if(cart[i].quantity>1){

          cart[i].quantity--;
          saveCart();
          displayCart();
          return;
        }
      }



      deleteFromCart(name);
    }

    function deleteFromCart(name) {



      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {

          cart.splice(i, 1);
          saveCart();
          displayCart();
                const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));
    let ref = document.getElementById("lineTr_0");

    ref.classList.add('shake');
    delay(500).then(() => ref.remove());
            return;
        }
      }
    }


    function displayCart() {


        if(cart.length==0)
            document.getElementById("empty_cart").innerHTML = "Ваша корзина пуста";
        else{
        let list = document.getElementById("items-wrapper");
        if(list.childElementCount==0)
              for (let i = 0; i < cart.length; i++)
              createNewRow(list,i)

        else
            for (let i = 0; i < cart.length; i++)
          {
                   let cartTable = document.getElementById("empty_cart");
      cartTable.innerHTML = ""; document.getElementById("amount_"+i).value=cart[i].quantity;
              document.getElementById("lineTotal_"+i).textContent=(cart[i].quantity*cart[i].price);
          }
        }

        let total=0;
        for(let i=0;i<cart.length;i++)
            total+=cart[i].price*cart[i].quantity;
        document.getElementById("fullTotal").textContent=total;
    }

function createNewRow(list,i)
{
      document.getElementById("empty_cart").innerHTML = "";
            let lineTr= document.createElement("div");
          lineTr.id = "lineTr_"+i;
        let item= document.createElement("a");
          item.className="item";
        let inner_item= document.createElement("div");
          inner_item.className="inner-item";
        let item_img= document.createElement("div");
          item_img.className="item_img";
        let img= document.createElement("img");
          img.src=cart[i].img;
        let price_place= document.createElement("div");
          price_place.className="price_place";
        let counter= document.createElement("div");
          counter.id="counter";
        let minus= document.createElement("input");
          minus.className="minus";
          minus.type= "button" ;
          minus.value="-"; minus.onclick=function() {removeFromCart(cart[i].name)};
        let amount= document.createElement("input");
          amount.id="amount_"+i;
          amount.className="amount";
          amount.type= "text" ;
          amount.value=cart[i].quantity; amount.onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\d{0,3}$/.test(this.value));";
        let plus= document.createElement("input");
           plus.className="plus";
          plus.type= "button" ;
          plus.value="+"; plus.onclick=function() {addToCart(cart[i].name,0)};
        let btnTrash= document.createElement("button");
          btnTrash.className="btnTrash";
          btnTrash.onclick=function() {
    deleteFromCart(cart[i].name)};
        let trash= document.createElement("i");
          trash.className="fa fa-trash";
        let price= document.createElement("b");
          price.className="price";
          price.id="lineTotal_"+i;
          price.textContent=(cart[i].price*cart[i].quantity);


          btnTrash.appendChild(trash);
          price_place.appendChild(btnTrash);
               price_place.appendChild(price);
          counter.appendChild(plus);
          counter.appendChild(minus);
    counter.appendChild(amount);
          price_place.appendChild(counter);
          inner_item.appendChild(price_place);
          item_img.appendChild(img);
          inner_item.appendChild(item_img);
          item.appendChild(inner_item);
          lineTr.appendChild(item);
    list.appendChild(lineTr);
}

    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    function loadCart() {
      let savedCart = localStorage.getItem("cart");
      if (savedCart) {
        cart = JSON.parse(savedCart);
      }
      displayCart();
    }


    loadCart();
