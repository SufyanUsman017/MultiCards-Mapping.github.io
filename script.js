const Product = [
//   {
// prodImg:"https://images.pexels.com/photos/27459281/pexels-photo-27459281/free-photo-of-apple.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
//     prodTitle: "Product Name",
//     prodDesc: "Description text...",
//     prodPrice: "Price : 1390",
//   },



]

function addprod(){
    Product.push({
        prodImg: document.getElementById("prodImg").value,
        prodTitle: document.getElementById("prodName").value,
        prodDesc: document.getElementById("prodDesc").value,
        prodPrice: document.getElementById("prodPrice").value,
      },)

      const productSection = document.getElementById("productSection");
        const card = document.createElement("div");
        const cardImage = document.createElement("img");
        const cardbody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");
        const cardPrice = document.createElement("p");
      
    Product.map((items) => {
        
      
        cardImage.src = items.prodImg;
        cardTitle.innerText = items.prodTitle;
        cardText.innerText = items.prodDesc;
        cardPrice.innerText = `Price:${items.prodPrice}`;
      
        cardbody.appendChild(cardTitle);
        cardbody.appendChild(cardText);
        cardbody.appendChild(cardPrice);
      
        card.appendChild(cardImage);
        card.appendChild(cardbody);
      
        productSection.appendChild(card);
      
        card.classList.add("card");
        card.style.width = "18rem";
        cardImage.classList.add("card-img-top");
        cardbody.classList.add("card-title");
        cardTitle.classList.add("card-text");
        cardPrice.classList.add("card-Text");
      });
}



// cardImage.src=Product[0].prodImg;
// cardTitle.innerText = Product[0].prodTitle;
// cardText.innerText = Product[0].prodDesc;
// cardPrice.innerText = `Price:${Product[0].prodPrice}`;

//step1 card bnaya
//step2 cript per element create kra
//step3 ab cardbody mai element add krenge
//step4 phir cardbody mai element add kre osko appendchild mai add krenge
//step5 phir second ID ko call krenge get krna
//step6 phir card ko bhi ksi mai append krenge
//step7 phir js style use krenge
//step8 phir array sai data lenege array bnaenge

//phir isko map functionmai dalenge
//phir user input kenge id kai through
// phit jitni bhi chexn hen sb arrow fuction m jayenge
