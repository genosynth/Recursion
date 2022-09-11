const fibs = (input)=>{
    let array = [];
    
    if (input==0){return array}
    if (input==1){
     array.push(0)
     return array;
    }

    if (input>1){
        array.push(0);
        array.push(1);
        for (let i=2; i<input; i++){
            let result = array[i-2] + array[i-1]
            array.push(result);
    
        }    
    }
   
  return(array)
}


const fibsRec = (input) =>{
  
   if (input<2){return input}
    else {
        return fibsRec(input-1)+fibsRec(input-2)
    }
       
}
  


function fibonacci(length) {
    // Cases to exclude
    if (length < 1 || isNaN(length)) return "Invalid parameter";

    // Base case
    if (length === 1) return [0];


    if (length === 2) return [0, 1];

    // Recursion
    return [...fibonacci(length - 1), 
            fibonacci(length - 1)[length - 2] + fibonacci(length - 1)[length - 3]];
    

}
console.log(fibsRec(8))
