console.log(document);

// abhi hum html waly elements ko accesss krengy

var mydiv = document.getElementById("mydiv")  // bracket main hum inverted coma bhi dengy
console.log(mydiv);

//ab div ki reference se p pe jayengy

var paras = mydiv.getElementsByTagName("p");    //mydiv isliye aya ku k hamain mydiv se chahiye tha ans tag name matlab paragraph ka tag
console.log(paras);  //ku k tags kafi ho skty isliye jab hum gey element by tag name krengy to hamary pas jawab ma array ki form ayegi 


console.log(paras[0]); // sab se pehla para ka code agaya

//second method

console.log(document.childNodes)   //doctype ayega jismain 0 pe doctype and 1 pe html araha

console.log(document.childNodes[1])   // is se html tag ki sari coding agayi

console.log(document.childNodes[1].childNodes)   // NodeList(3) [head, text, body]  yeh text isliye show kr raha ku k jab hum code likhty hain to bech ma kahin text likh dety kahin space chor dety to server usko text consider krleta.. to remove it html file ma ja kr head and body tag k bech wali spaced line cut krdo then it will be removed

console.log(document.childNodes[1].childNodes[2].childNodes) // is se body tag ajana
console.log("---------------------------------------1")

//another way to remove TEXT

for( var i=0; i<document.childNodes[1].childNodes[2].childNodes.length; i++){
    console.log(document.childNodes[1].childNodes[2].childNodes[i])  //html, body, body k bachy
}  //isky output ma text, dic, text, script agaya perfect

//to check node type text=3

for( var i=0; i<document.childNodes[1].childNodes[2].childNodes.length; i++){
    console.log(document.childNodes[1].childNodes[2].childNodes[i].nodeType)  //html, body, body k bachy
} 

//ab hum text asani se remove aisy kr skty k jahan jahan node type 3 ha usko hata do simple!
console.log("---------------------------------------2")


//ab hum pehla bacha go through kr rahy
console.log(document.childNodes[1].childNodes[2].childNodes[0]) //alternative nechy ha
console.log(document.childNodes[1].childNodes[2].firstChild) //alternative
console.log(document.childNodes[1].childNodes[2].lastChild) //alternative for last bacha
console.log(document.childNodes[1].childNodes[2].firstChild.nextSibling) //alternative for second bacha
//aisy hi hum kitny hi necxt siblings laga kr agay barh skty for nesting
//previous.sibling bhi hota ha for coming out
//parentnode and parentelement bhi hota ha 

console.log("---------------------------------------3")


















