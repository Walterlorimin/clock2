const names=["spongebob", "patrick", "sansy"]
const person={
    "name":"spongebob",
    "age": 30,
    "isemployed": true,
    "hobbies": ["jellyfissing", "karate", "cooking"]
};


const people=[
    {
        "name":"spongebob",
        "age": 30,
        "isemployed": true,
    },
    
        {
        "name":"patrick",
        "age": 45,
        "isemployed": false,
        },
        {
        "name":"mark",
        "age": 50,
        "isemployed": true,
        },
        {
        "name":"sandy",
        "age": 60,
        "isemployed": false,
        }
        
        
    ];
    const jsonString=JSON.stringify(people);


console.log(jsonString);