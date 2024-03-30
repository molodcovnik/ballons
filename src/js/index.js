const btnForm = document.querySelector('.btn-brown');
const form = document.querySelector('.form');

btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
  
    asyncPostCall(name, email);

});

const asyncPostCall = async (name, email) => {

    // console.log(JSON.stringify(formData));
    try {
        const response = await fetch('http://127.0.0.1:8000/api/forms/', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({
              "name": name,
              "last_name": name,
              "email": email,
              "client": 8
           }),
         });

         const data = await response.json();
    // enter you logic when the fetch is successful
         console.log(data);
       } catch(error) {
          console.log(error);
         } 
    }