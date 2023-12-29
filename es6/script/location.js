const getdata= () =>{
    let email=document.getElementById('exampleInputEmail1').value;
    let password=document.getElementById('exampleInputPassword1').value;

    console.log(email, password)

    const myobj={email,password}
    console.log(myobj)

    window.localStorage.setItem('user', JSON.stringify(myobj))

}

const getmydata=()=>{


    window.localStorage.removeItem('user')
}