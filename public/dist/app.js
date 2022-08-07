//Variabile
const resposiveButton = document.querySelector('.button__responsive');
const cardContainer = document.querySelector("#cards");
const resetScroll = document.querySelector(".resetScroll");
const headerElement = document.querySelector(".header");
const navElements = document.querySelectorAll(".navbar__link");
const navElement = document.querySelector('nav');
const navActive = document.querySelector('.nav__active');

//Buton de mobil
resposiveButton.addEventListener('click', () => {
    navElement.classList.toggle('nav__active');
    if (navElement.classList.contains('nav__inactive')) {
        navElement.classList.remove('nav__inactive');
    }
})

// Sectiunea de carduri
const item = [{
        name: "Dormitory Design",
        image: "./public/dist/images/cards/Image 1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2019",
        link: "https://mariustanase.com"
    }, {
        name: "Garden Design",
        image: "./public/dist/images/cards/Image 2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2018",
        link: "https://mariustanase.com"

    }, {
        name: "Forest Gardern Design",
        image: "./public/dist/images/cards/Image 3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2017",
        link: "https://mariustanase.com"

    }, {
        name: "Library Corner Design",
        image: "./public/dist/images/cards/Image 4.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2016",
        link: "https://mariustanase.com"

    },
    {
        name: "Proiectul 5",
        image: "./public/dist/images/cards/Image 1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2015",
        link: "https://mariustanase.com"

    }
];

//create a card based on counter and show it on the screen
function createCard(item) {
    //Create card section
    const card = document.createElement("section");
    card.classList.add("card");
    //Creating the image
    const image = document.createElement("img");
    image.classList.add("card__image");
    image.src = item.image;

    //Creating the title
    const title = document.createElement("h2");
    title.classList.add("card__title");
    title.innerText = item.name;
    //Creating the card description
    const description = document.createElement("p");
    description.classList.add("card__text");
    description.innerText = item.description;
    //creating the date of the card

    const dateOfProject = document.createElement("p");
    dateOfProject.classList.add("card__date");
    dateOfProject.innerText = item.date;

    const linkToProject = document.createElement("a");
    linkToProject.innerText = "View Project";
    linkToProject.href = item.link;
    linkToProject.classList.add("card__link");
    //Append all the sub-data to the card including the creation of the div and a class to it.
    const subData = document.createElement('div');
    subData.classList.add("card__subdata");
    subData.appendChild(dateOfProject);
    subData.appendChild(linkToProject);
    //Append all the elements to the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(subData);
    //Append the card to the card container
    cardContainer.appendChild(card);
}

//create cards based on json file data and apprend them to dom and show only 4 cards at a time
function createCards(item) {
    //show only 4 cards at a time
    for (let i = 0; i < 4; i++) {
        createCard(item[i]);
    }
}

// Creating animation to remove first element and add it to the end of the array at each 3 seconds
let counter = 4;

function removeFirstElement() {
    const firstElement = document.querySelector(".card");
    cardContainer.removeChild(firstElement);
    createCard(item[counter]);
    cardContainer.lastChild.classList.add("card__intro");
    counter++;
    if (counter === item.length) {
        counter = 0;
    }

    setTimeout(() => {
        cardContainer.lastChild.classList.remove("card__intro");

    }, 2000);
}

// Calling all the functions
createCards(item);

//Calling the intervals
setInterval(() => {
    const element = document.querySelector("#cards > section:nth-child(1)")
    element.classList.add("card__outro");
    // event listener when animation ends
    element.addEventListener("animationend", () => {
        element.classList.remove("card__outro");
        removeFirstElement();

    })
}, 6000);


// Scroll to top button
window.onscroll = function () {
    if (window.pageYOffset > 1) {
        //Show back to top button
        resetScroll.classList.add('show');
        resetScroll.classList.remove('hide');
        headerElement.classList.add('headerbg')
    } else {
        // after button is pressed and the page is scrolled back to the top the button will be hidden with animation
        resetScroll.classList.remove('show');
        resetScroll.classList.add('hide');
        headerElement.classList.remove('headerbg')

    }
}

resetScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});

navElements.forEach(e => {
    e.addEventListener('click', () => {
        navElement.classList.add('nav__inactive');
        setTimeout(() => {
            navElement.classList.remove('nav__active');
        }, 500);
        
    });
});

// Initialize AoS library
AOS.init();
