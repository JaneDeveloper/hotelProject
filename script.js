     /* Carousel of the first page. */

"use strict";
const serviceContainers = [...document.querySelectorAll('.service_container')];
const nxtBtn = [...document.querySelectorAll('.nxt_btn')];
const preBtn = [...document.querySelectorAll('.pre_btn')];

serviceContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log("containerDimensions:" + containerDimensions);
    console.log("containerWidth:"+ containerWidth);

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log("back");
    })
});



     /* Text expansion of the second page */


$(document).ready(function(){
    $(".about_hotel_text a:eq(0)").click(() => {
        $(".about_hotel_text div:eq(1)").toggleClass();
        if($(".about_hotel_text div:eq(1)").hasClass("hide")==false){
            $(".about_hotel_text a:eq(0)").empty();
            $(".about_hotel_text a:eq(0)").append("Show less");
        }else {
            $(".about_hotel_text a:eq(0)").empty();
            $(".about_hotel_text a:eq(0)").append("Show more");
          }
  
        });
   
  
    $(".about_hotel_text a:eq(1)").click(() => {
        $(".about_hotel_text  div:eq(3)").toggleClass();
        if($(".about_hotel_text div:eq(3)").hasClass("hide")==false){
            $(".about_hotel_text a:eq(1)").empty();
            $(".about_hotel_text a:eq(1)").append("Show less");
        }else {
            $(".about_hotel_text a:eq(1)").empty();
            $(".about_hotel_text a:eq(1)").append("Show more");
           }
    
        }); 
        
        

    }); 


     /* Animation of the big text and images. */

     $(document).ready( ()=>{
        const w = window.innerWidth;
        if (w<=323) {
            $(".big_text").animate ({ left:"18%" }, 2000);
            $(".about_hotel_text").animate ({ left:"7.5%"}, 2000);
            console.log("screen size:" + w);
            }else if(w>=324 && w<=472) {
                $(".big_text").animate ({ left:"17%" }, 2000);
                $(".about_hotel_text").animate ({ left:"7.5%"}, 2000);
            }else if(w>=473 && w<=549) {
                $(".big_text").animate ({ left:"15%" }, 2000);
                $(".about_hotel_text").animate ({ left:"8%"}, 2000);
            }else if(w>=600 && w<=659) {
                $(".big_text").animate ({ left:"20%" }, 2000);
                $(".about_hotel_text").animate ({ left:"13%"}, 2000);
            }else if(w>=550 && w<=599) {
                $(".big_text").animate ({ left:"20%" }, 2000);
                $(".about_hotel_text").animate ({ left:"7.5%"}, 2000);
            }else if(w>=660 && w<=888) {
            $(".big_text").animate ({ left:"25%" }, 2000);
            $(".about_hotel_text").animate ({ left:"12%"}, 2000);
            }else if (w<=1385 && w>=889) {
                $(".photo_hotel img").animate ({ left:"10%"}, 2000);
                $(".big_text").animate ({ left:"6%" }, 2000);
                $(".about_hotel_text").animate ({ left:"45%"}, 2000);
            }
            else {
                $(".big_text").animate ({ left:"6%" }, 2000);
                $(".about_hotel_text").animate ({ left:"45%"}, 2000);
                $(".photo_hotel img").animate ({ left:"20%"}, 2000);
        
                console.log("screen size:" + w);
             
    
            }
        });







    /*Carousel page 3*/

    const buttons= document.querySelectorAll("[data-carousel-button]")
    buttons.forEach(button => {
        button.addEventListener("click", ()=>{
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides=button.closest("[data-carousel]").querySelector("[data-slides]")
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide)+offset
            if(newIndex<0)newIndex=slides.children.length-1
            if(newIndex >=slides.children.length) newIndex=0
    
            slides.children[newIndex].dataset.active=true
            delete activeSlide.dataset.active
        })
    })






/*Calculator*/
    "use strict";
    const chosen_selector = selector => document.querySelector(selector);

  const displayErrorMsgs = msgs => {
        const ul = document.createElement("ul");
        ul.classList.add("messages");

        for (let msg of msgs) {
            const li = document.createElement ("li");
            const text = document.createTextNode(msg);
            li.appendChild(text);
            ul.appendChild(li);
        }
        const node = chosen_selector(".messages");
        if (node == null) {
            const calculator = chosen_selector(".calculator");
            const h3 = calculator.firstChild.nextElementSibling;
            const firstDiv=h3.nextElementSibling;
        
           
            firstDiv.parentNode.insertBefore(ul, firstDiv);
            
        }
        else {
            node.parentNode.replace(ul, node);
        }
    };


    
    const processEntries = () => {
        const current_weight=parseFloat(chosen_selector("#current_weight").value);
        const scores=parseInt(chosen_selector("#scores").value);

        const msgs = [];
        if (current_weight == "") {
            msgs[msgs.length] = "Please enter the current weight of your cat.";
        }
        if (scores == "") {
            msgs[msgs.length] = "Please enter the score.";
        }
        if (isNaN(current_weight) || current_weight <= 0) {
            msgs[msgs.length] = "Current weight must be a valid number greater than zero.";
        }
        if (isNaN(scores) || scores <= 0) {
            msgs[msgs.length] = "The score must be a valid number greater than zero.";
        }
        if (msgs.length == 0) { 
            if (scores==1) {
                chosen_selector("#ideal_weight").value=(current_weight*((100+30)/100)).toFixed(2);
            }
            else if (scores==2) {
                chosen_selector("#ideal_weight").value=(current_weight*((100+15)/100)).toFixed(2);
            }
            else if (scores==3) {
                chosen_selector("#ideal_weight").value=(current_weight*((100+0)/100)).toFixed(2);
            }
            else if (scores==4) {
                chosen_selector("#ideal_weight").value=(current_weight*((100-15)/100)).toFixed(2);
            }
            else if (scores==5) {
                    chosen_selector("#ideal_weight").value=(current_weight*((100-30)/100)).toFixed(2);
                }
        } else {
           displayErrorMsgs (msgs);
        
        }
        }; 


        document.addEventListener("DOMContentLoaded", ()=>{ 
            chosen_selector("#calculate").addEventListener("click", processEntries);
            chosen_selector("#clear_form").addEventListener("click", () => {
                chosen_selector("#current_weight").value="";
                chosen_selector("#scores").value="";
                chosen_selector("#ideal_weight").value=""; 
                const ulMessages = document.getElementsByClassName('messages');
                if(ulMessages.length!=0) {
                    chosen_selector(".messages").remove();
                }
                chosen_selector("#current_weight").focus();

            }); 
        }); 



         /*Form */
   


         const contactEntries = () => {
             const yourName = chosen_selector("#nameinput");
             const phone = chosen_selector("#phoneinput");
             const email = chosen_selector("#emailinput");
             const catName = chosen_selector("#catnameinput");
             const catageinput = chosen_selector("#catageinput");
             const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
             const namePattern = /^[a-zA-Z\s]+$/;
             const catNamePattern = /^[a-zA-Z\s]+$/;
             const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
             
             let isValid = true;
             if (yourName.value == "") {
                 yourName.nextElementSibling.textContent = "This field is required.";
                 isValid=false;
             }else if (!namePattern.test(yourName.value)) {
                yourName.nextElementSibling.textContent = "First name should not have digits.";
                isValid=false;
             }else { 
                 yourName.nextElementSibling.textContent = "";
             }
             if (email.value == "") {
                 email.nextElementSibling.textContent = "This field is required.";
                 isValid=false;
             }else if (!emailPattern.test(email.value)) {
                email.nextElementSibling.textContent = "Enter valid email.";
                isValid=false;
             }else {
                 email.nextElementSibling.textContent = "";
             }
             if (phone.value == "") {
                 phone.nextElementSibling.textContent = "This field is required.";
                 isValid=false;
             }else if (!phonePattern.test(phone.value)) {
                phone.nextElementSibling.textContent = "Follow the pattern 999-999-9999.";
                isValid=false;
               
             }else {
                 phone.nextElementSibling.textContent = "";
             }
             if (catName.value == "") {
                 catName.nextElementSibling.textContent = "This field is required.";
                 isValid=false;
             }else if (!catNamePattern.test(catName.value)) {
                catName.nextElementSibling.textContent = "Cat's name should not have digits.";
                isValid=false;
             }else {
                 catName.nextElementSibling.textContent = "";
             }
             if (catageinput.value == "") {
                 catageinput.nextElementSibling.textContent = "This field is required.";
                 isValid=false;
             }else if (isNaN(catageinput.value)){
                catageinput.nextElementSibling.textContent = "Enter the age in digits.";
                isValid=false;
            }else {
                 catageinput.nextElementSibling.textContent = "";
             }
     
     if (isValid==true) {
         chosen_selector("form").submit();
     }
     
         };
     
     document.addEventListener("DOMContentLoaded", () => { 
        chosen_selector("#btnSubmit").addEventListener("click", contactEntries);
         chosen_selector("#clear").addEventListener("click", () => {
            const yourName = chosen_selector("#nameinput");
            const phone = chosen_selector("#phoneinput");
            const email = chosen_selector("#emailinput");
            const catName = chosen_selector("#catnameinput");
            const catageinput = chosen_selector("#catageinput");
        
            chosen_selector("#nameinput").value="";
            chosen_selector("#emailinput").value="";
            chosen_selector("#phoneinput").value="";
            chosen_selector("#catnameinput").value="";
            chosen_selector("#catageinput").value="";
            chosen_selector("#comments").value="";
            yourName.nextElementSibling.textContent="";
            email.nextElementSibling.textContent ="";
            phone.nextElementSibling.textContent ="";
            catName.nextElementSibling.textContent ="";
            catageinput.nextElementSibling.textContent = "";
        
        });
          
    
            chosen_selector("#nameinput").focus();
     });
     

    