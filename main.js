const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", e=>{
        let value = button.innerText
        if (value ==="No") {
            buttons.forEach(x => {
                x.innerText = "No"
            });
            button.innerText = "Yes"
        }
    })
    button.addEventListener("click" , e=>{
       let value = button.innerText 
       if(value === "Yes"){
        document.getElementById("results").classList.toggle("hidden")
        setTimeout(() => {
        document.getElementById("results").classList.toggle("hidden")
        }, 5000);
       }
    })
});