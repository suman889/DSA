# DSA-Js & .py

sum of Digits
```
function generateSumofDigits(number_pased){
  
  let output =0;
  while(number_pased !=0){
    output = output + number_pased % 10;
    
    number_pased = parseInt(number_pased/10);
    
  }
  return output;
}

let value =687

console.log(generateSumofDigits(value))

```
