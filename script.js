fetch("./quotes.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data.length));
