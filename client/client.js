console.log("Hello World");

const API_URL = 'http://localhost:8081/woofs';
const form = document.querySelector("form");
const loadingElement = document.querySelector('.loading')

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    // Prevents form from setting query string parameters
    // Lets us handle this event with javascript
    event.preventDefault();
    const formData = new FormData(form);
    console.log('Form was submitted!');
    const name = formData.get('name');
    const content = formData.get('content');

    const woof = {
        name,
        content
    };

    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(woof),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())
      .then(createdWoof => {
          console.log(createdWoof);
      });
})

