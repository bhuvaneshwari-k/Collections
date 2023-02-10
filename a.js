let arr1 = [1,2,3,4,5];
let arr2 = ["a", "b", "c","d","e"];
console.log("Concatination:");
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log("Constructor:");
let  arr4= arr1.constructor;
console.log(arr4);
console.log("CopyWithin:");
console.log(arr1.copyWithin(3,1,3));
console.log("Entries:");
let arr5= arr2.entries();
for (let x of arr5) {
    console.log(x);
  }
let arr6 = [5,6,7,8,9];
console.log("Every:");
let even= arr6.every(checkeven);
console.log(even);
  function checkeven(x) {
    return x%2==0;
  }
  console.log("Fill:");
  let arr7=arr2.fill("f");
  console.log(arr7);
  console.log("Filter:");
  let arr8=arr6.filter(x=> x%2==0);
  console.log(arr8);
  console.log("Find:");
  let even1= arr6.find(checkeven);
  console.log(even1);
  console.log("FindIndex:");
  let even2= arr6.findIndex(checkeven);
  console.log(even2);
console.log("ForEach:");
  let arr10= "";
arr6.forEach(animals);
console.log(arr10);
function animals(x) {
  arr10 += x*2+"\n" ; 
}
console.log("From:");
let text = "bhuvana"
let arr11 = Array.from(text);
console.log(arr11);
let arr9=["lion","tiger","cheetah"];
console.log("Includes:");
console.log(arr9.includes("tiger"));
console.log("IndexOf:");
let index = arr9.indexOf("cheetah");
console.log(index);
console.log("IsArray:");
let result = Array.isArray(arr9);
console.log(result);
console.log("Join:");
let text1 = arr9.join("/");
console.log(text1);
console.log("Keys:");
let keys = arr9.keys();
let text2 = "";
for (let x of keys) {
  text2 += x + "\n";
}
console.log(text2);
let arr12=["one","two","three","four","two"];
console.log("LastIndexOf:");
let index1 = arr12.lastIndexOf("two");
console.log(index1);
console.log("Length:");
let length = arr12.length;
console.log(length);
console.log("Map:");
let arr13= arr6.map(x=> x*x);
console.log(arr13);
console.log("Pop:");
arr12.pop();
console.log(arr12);
console.log("Push:");
arr12.push("five");
console.log(arr12);
console.log("Reduce:");
let total= arr6.reduce(getsum);
function getsum(a,b) {
  return a+b;
}
console.log(total);
console.log("ReduceRight:");
let total1= arr6.reduceRight(getsum);
console.log(total1);
console.log("Reverse:");
console.log(arr12.reverse());
console.log("Shift:");
console.log(arr12.shift());
console.log("Unshift:");
console.log(arr12.unshift("five"));
console.log("Slice:");
let arr14 = arr12.slice(1, 3);
console.log(arr14);
console.log("Some:");
let even3= arr6.every(checkeven);
console.log(even3);
console.log("Sort:");
let arr15 = [1,9,5,3,7,2];
arr15.sort();
console.log(arr15);
console.log("Splice:");
console.log(arr15.splice(1,3));
console.log("ToString:");
let text3 = arr12.toString();
console.log(text3);
console.log("ValueOf:");
let arr16=arr12.valueOf();
console.log(arr16);

