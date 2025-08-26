// https://colorhunt.co/palette/fffbde91c8e4749bc24682a9
// https://colorhunt.co/palette/0b1d51725cad8ccdebffe3a9
// https://app.netlify.com/signup/start/templates

const template = document.getElementById('item')
const browse = document.querySelector('.browse')

const items = [

    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'first item',
        description: 'short description of item'
    },

    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'second item',
        description: 'short description of item'
    },
    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'third item',
        description: 'short description of item'
    },
    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'fourth item',
        description: 'short description of item'
    },

    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'fifth item',
        description: 'short description of item'
    },

    {
        link: 'page.html',
        img: 'img/phimg.jpg',
        title: 'sixth item',
        description: 'short description of item'
    }
]

items.forEach(item =>{
    const clone = template.content.cloneNode(true)

    clone.querySelector('a').href = item.link;
    clone.querySelector('img').src = item.img;
    clone.querySelector('img').alt = item.title;
    clone.querySelector('.itmtitle').textContent = item.title;
    clone.querySelector('.itmdescription').textContent = item.description; 

    browse.appendChild(clone);
})

let slides = document.querySelectorAll('.img');
let index = 0;
function showslide(){
    slides.forEach(slide => slide.style.display = 'none'); //hide all pics
    slides[index].style.display = 'block'; //show current
    index = (index + 1) % slides.length;
}

setInterval(showslide,3000)
showslide()

// const carousel = document.querySelector('.inner');
// const slides = document.querySelectorAll('.img');
// let index = 0;

// function showNextSlide() {
//   index = (index + 1) % slides.length;
//   carousel.style.transform = `translateX(-${index * 300}px)`; // 300 = slide width
// }

// setInterval(showNextSlide, 3000); // Change every 3 seconds
// showNextSlide()

