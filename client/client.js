console.log("Hello World");

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
    console.log(woof);
    form.style.display = 'none';
    loadingElement.style.display = '';
})

