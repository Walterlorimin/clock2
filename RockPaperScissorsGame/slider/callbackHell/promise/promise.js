function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("you walked the dog🐕‍🦺")
            
        }, 1500);
    
    })
    
  
}


function cleanKitchen(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("you cleaned the kitchen")
       
    },2500);
})
}

function takeOutTrash(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("you took out the trash")
        
    },500);
})

}

walkDog().then(value=>{console.log(value); return cleanKitchen()})
         .then(value=>{console.log(value); return takeOutTrash()})
         .then(value=>{console.log(value);

         console.log("you finished all the chores")});