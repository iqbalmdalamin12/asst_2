const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */
const images = ['../images/pic1.jpg', '../images/pic2.jpg', '../images/pic3.jpg', '../images/pic4.jpg', '../images/pic5.jpg'];
images.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    thumbBar.appendChild(newImage);
})

const imageList = document.querySelectorAll('.thumb-bar>img');
imageList.forEach(image => {
    image.addEventListener('click', ()=>{
        let newImage = image.getAttribute('src');
        displayedImage.setAttribute('src', newImage);
    })
})
console.log(imageList);


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', ()=>{
    let className = btn.getAttribute('class');
    console.log(btn.getAttribute('class'));
    if(className === 'dark'){
        btn.setAttribute('class', 'light');
        btn.style.color = '#fff';
        btn.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
})