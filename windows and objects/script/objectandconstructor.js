var my={
    name:"mahnoor",
    age : 39,
    hobby : ["a", "b",10]
}
/*
console.log(my.hobby[1]
//funsiton in a object
var a = {
    m : function(v){
        return Math.sin(v);
    }
}

console.log(a.m(30)) */

//constructor
//old way   .... it is not working because it is an old way
/*

function M (name, course, number){
    this.name = name;
    this.course=course;
    this.number=number
}
var m1 = new M ("mah","web dev",15)

console.log(m1)  */

//new way

class M {
    constructor(name, course, ide){   //yahan constructor banwa diya
        this.name = name;
        this.course=course;
        this.ide=ide
    }


    myfunction(){
        return "bq" + this.ide;
    }
}


var m1 = new M ("mahnoor", "web dev", 1)    //m capital hona chahie

console.log(m1.myfunction())   //bq1 araha jawab

///true and false check krty hain

console.log("name" in m1)

//iteration

for( var i in m1){
    console.log(m1[i])
}

console.log(m1["name"])







