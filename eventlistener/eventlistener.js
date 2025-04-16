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
more code on eventlistener
console.log(document)
    

// three ways to add eventlistener 1- by passing a funtion 2- anonymys funtion 3- arrow



const mybutton= document.getElementById("mybutton");
    const go = document.getElementById("go");

    mybutton.addEventListener("click", event=>{ event.target.style.backgroundColor= "yellow"
    event.target.textContent="lmaoo!!!🤔"

    })


    mybutton.addEventListener("click", function(event){
     go.style.backgroundColor= "red"
     go.textContent="ouch!!!🤔"
    });

   /* go.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor= "yellow"
        event.target.textContent="lmaoo!!!😂"
    })*/
    function changeColor(event){
     go.style.backgroundColor= "yellow"
      go.textContent="lmaoo!!!🤔"
    }

    mybutton.addEventListener("mouseover", changeColor);

    mybutton.addEventListener("mouseout", event=>{
       go.style.backgroundColor= "black"
       go.textContent="Fuck!!!🤔"
