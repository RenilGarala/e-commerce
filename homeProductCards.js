import { addToCart } from "./addToCart.js";
import {homeQuantityToggle} from "./homeQuantityToggle.js";
const productContainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");

export const showProductContainer= (products)=>{
    if(!products){
        return false;
    }
    products.forEach((curProd) => {
        const {brand, category, discription, id, image, name,price, stock}=curProd;

        const productClone= document.importNode(productTemplate.content,true);

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productDescription").textContent=discription;
        productClone.querySelector(".productPrice").textContent=`₹${price}`;
        productClone.querySelector(".productActualPrice").textContent=`₹${price * 2}`;
        productClone.querySelector(".productStock").textContent=stock;

        productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
            homeQuantityToggle(event,id,stock);
        });
        
        productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
            addToCart(event,id,stock);
        });
        productContainer.append(productClone);
    });
};