const ratingELs = document.querySelectorAll(".rating");
const btnEL = document.getElementById("btn");

const containerEL = document.getElementById("container");


let selectedRating ="";

ratingELs.forEach((ratingELs)=>{
    ratingELs.addEventListener('click',(Event)=>{
       removeActive(); 
       selectedRating= Event.target.innerText || Event.target.parentNode.innerText;
       Event.target.classList.add("active");
       Event.target.parentNode.classList.add("active")

    });

});

btnEL.addEventListener("click",()=>{
    if (selectedRating !==""){
        containerEL.innerHTML = `
        <strong>Thankyou for your feedback</strong>
        <br>
        <br>
        <p>Feedback : ${selectedRating}</p>
        We will use your feedback to improve our service
        `
    }
})
function removeActive(){
    ratingELs.forEach((ratingELs) =>{
        ratingELs.classList.remove("active");
    });
};