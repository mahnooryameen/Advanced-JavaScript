
/*
function changeurl(){
    console.log(window.location.href)  //will show the current ip address
    window.location.href="http://www.dodear.com/en/movie"   //on click it will move to dodear page

} */

function changeurl(){

    var chotu=window.open("","","width=420, height=380"); 
      var content = "<h1>sign in</h1>";
    chotu.document.write(content);
}

    
