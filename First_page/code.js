const customerSection = document.querySelector('.customerSection');
const leftBtn = document.querySelector('.leftbtn');
const rightBtn = document.querySelector('.rightbtn');

let currentIndex = 0; // Initialize the index

// Array of customer objects
const customers = [
    {
        "text": "ohoh streamlined our dealership management, playing a pivotal role in propelling our business growth",
        "imageUrl": "../First_page/ui/ja.jpg",
        "name": "JANARHDHANA R S",
        "position": "Founder & DEV, Coimbatore"
    },
    {
        "text": "Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle-free!",
        "imageUrl": "../First_page/ui/jana11.jpg",
        "name": "Kokila R",
        "position": "Founder & CEO, Thiruvallur"
    },
    {
        "text": "Exuding charm and exceptional flexibility. Gratitude for ensuring a seamless, delightful, and, above all, trouble-free experience!",
        "imageUrl": "../First_page/ui/sat.jpg",
        "name": "Sathish R",
        "position": "Developer & CEO, chennai"
    }
];

function renderCustomer(customer) {
    const customerDiv = document.createElement('div');
    customerDiv.classList.add('customer');


    const textDiv = document.createElement('div');
    textDiv.classList.add('customer-text');


    const review = document.createElement('p');
    review.classList.add("review")
    review.textContent = customer.text;

    const image = document.createElement('img');
    image.src = customer.imageUrl;
    image.alt = `${customer.name}'s Image`;

    const name = document.createElement('h3');
    name.textContent = customer.name;

    const position = document.createElement('p');
    position.textContent = customer.position;

    textDiv.appendChild(review);
    textDiv.appendChild(image);
    textDiv.appendChild(name);
    textDiv.appendChild(position);

    customerDiv.appendChild(textDiv);

    customerSection.innerHTML = ''; 
    customerSection.appendChild(customerDiv);
}





customers.forEach(renderCustomer);

function updateDisplayedCustomer() {
    customerSection.innerHTML = '';
    renderCustomer(customers[currentIndex]);
}

leftBtn.onclick = function () {
    console.log("left")
    currentIndex = (currentIndex - 1 + customers.length) % customers.length;
    updateDisplayedCustomer();
};

rightBtn.onclick = function () {
    console.log("right")
    currentIndex = (currentIndex + 1) % customers.length;
    updateDisplayedCustomer();
};

updateDisplayedCustomer();