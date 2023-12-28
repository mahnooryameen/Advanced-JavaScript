var myobj={title: 'foo',
body: 'bar',
userId: 1,}

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',   //create
  body: JSON.stringify(myobj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())  //promise
  .then((fanta) => console.log(fanta));  //actual