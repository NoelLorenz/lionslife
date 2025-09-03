// https://colorhunt.co/palette/fffbde91c8e4749bc24682a9
// https://colorhunt.co/palette/0b1d51725cad8ccdebffe3a9
// https://app.netlify.com/signup/start/templates

const template = document.getElementById('item')
const browse = document.querySelector('.browse')

const items = [

    {
        link: 'https://amzn.to/3JPpmjH',
        img: 'itmIMG/item10.jpg',
        title: 'Aloodor Sweatsuit for Women ',
        description: '2 Piece Outfits for Womens Crewneck Sweatshirts Pullover '
    },

    {
        link: 'https://amzn.to/46jz8TW',
        img: 'itmIMG/item11.jpg',
        title: 'Grip Pilates Socks for Women',
        description: 'Yoga Slouch Socks with Grip for Barre Workout Hospital Long Scrunch Slipper Socks'
    },

    {
        link: 'https://amzn.to/4mBh8u0',
        img: 'itmIMG/item12.jpg',
        title: "Gihuo Women's Athletic Full Zip Lightweight Workout Jacket",
        description: 'Perfect for casual, running, sports, yoga, workout'
    },

    {
        link: 'https://amzn.to/4mBh8u0',
        img: 'itmIMG/item1.jpg',
        title: '3 Piece Workout Sets for Women',
        description: 'Butt Lifting Leggings with High Impact Sports Bra Gym Shorts '
    },

    {
        link: 'https://amzn.to/45VXTUU',
        img: 'itmIMG/item2.jpg',
        title: 'SAMPEEL Womens Two Piece Lounge Sets ',
        description: 'Casual Summer Outfits 2 Piece Short Matching Clothing Set '
    },
    {
        link: 'https://amzn.to/4lSvEfO',
        img: 'itmIMG/item3.jpg',
        title: 'Women Workout Seamless Jumpsuit Yoga ',
        description: 'Ribbed Bodycon One Piece Tank Top Leggings Romper '
    },
    {
        link: 'https://amzn.to/4fZdrf4',
        img: 'itmIMG/item4.jpg',
        title: 'SUUKSESS Women Strappy Romper',
        description: 'Seamless Jumpsuit Tummy Control Padded Sports Bra '
    },

    {
        link: 'https://amzn.to/4p2KK56',
        img: 'itmIMG/item5.jpg',
        title: 'Womens Workout Tops',
        description: 'Short Sleeve Shirts with Sun Protection Trendy Spring Summer Outfits S-3XL '
    },

    {
        link: 'https://amzn.to/45Ud4xW',
        img: 'itmIMG/item6.jpg',
        title: "CHRLEISURE Women's 4 Packs Workout Gym Shorts",
        description: 'High Waisted Butt Lifting Scrunch Butt Seamless Booty Shorts '
    },
    {
        link: 'https://amzn.to/4fZdGqu',
        img: 'itmIMG/item7.jpg',
        title: 'FireSwan Crossover Athletic Shorts for Women',
        description: '2 in 1 Flowy Running Shorts with Pockets Spandex Butterfly Workout Tennis Skorts'
    },
        {
        link: 'https://amzn.to/4oXXBFX',
        img: 'itmIMG/item8.jpg',
        title: 'High Waisted Leggings for Women',
        description: 'No See Through Tummy Control Cycling Workout Yoga Pants with Pockets Reg & Plus  '
    },
        {
        link: 'https://amzn.to/47TF2MK',
        img: 'itmIMG/item9.jpg',
        title: 'Women Short Sleeve Workout Shirts',
        description: 'Open Back Tops Casual Yoga Y2k Athletic Gym Slouchy Crop Running Tees '
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

