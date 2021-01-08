let array = [0,1,1,2,3,4,5,5,5,6,7,7,8,9];
let value;
let maxGlobal = 1;
let maxLocal = 0;

for (let i = 0; i < array.length; i++) 
{
  for (let j = i; j < array.length; j++) 
  {
    if (array[i] == array[j]) 
    {
        maxLocal++;
    }
    if (maxGlobal < maxLocal) 
    {
      maxGlobal = maxLocal;
      value = array[i];
    }
  }
  maxLocal = 0;   
}

console.log("Max occured value is "+" "+ value+" "+ "And Count is :" +" "+ maxGlobal );