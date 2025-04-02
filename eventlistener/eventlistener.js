console.log(document)
    

// three ways to add eventlistener 1- by passing a funtion 2- anonymys funtion 3- arrow




    const go = document.getElementById("go");

    go.addEventListener("click", function(event){
        event.target.style.backgroundColor= "red"
        event.target.textContent="ouch!!!🤔"
    });

   /* go.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor= "yellow"
        event.target.textContent="lmaoo!!!😂"
    })*/
    function changeColor(event){
        event.target.style.backgroundColor= "yellow"
        event.target.textContent="lmaoo!!!🤔"
    }

    go.addEventListener("mouseover", changeColor);

    go.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor= "black"
        event.target.textContent="Fuck!!!🤔"

        

    })