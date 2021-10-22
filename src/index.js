// write your code here

// deliverable 1

// load the DOMM
document.addEventListener('DOMContentLoaded', e => {
    console.log.apply('DOM fully loaded and parsed')
});
// fetch Ramen data
const baseUrl = "http://localhost:3000/ramens"
fetch(baseUrl)
    .then(res => res.json())
    .then(data => data.forEach(ramenObj => { //ramenObj represents the object that was fetched with the base url - using a for each loop to iterate through the entire array - data represents the array
        const img = document.createElement('img'); //create image element to contain the images
        img.src = ramenObj.image //provide the image source which comes from the object image key
        const ramenMenu = document.querySelector('#ramen-menu') // target the div that the images will append to
        ramenMenu.append(img) //append the images to the targeted div (ramenMenu)

// deliverable 2

img.addEventListener('click', () => { //add the event listener to the img element created (this is all in the fetch)
    const detailImage = document.querySelector('.detail-image') 
    detailImage.src = ramenObj.image 
    detailImage.alt = ramenObj.name

    const name = document.querySelector('.name')
    name.innerText = ramenObj.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.innerText = ramenObj.restaurant

    const ratingDisplay = document.querySelector('#rating-display')
    ratingDisplay.innerText = ramenObj.rating

    const commentDisplay = document.querySelector('#comment-display')
    commentDisplay.innerText = ramenObj.comment
    }
    )
}))

// deliverable 3

// add event listener to #new-ramen form
const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() // stop the page from refreshing on form submit
    const newRamenObj = {} // create new ramen object
    newRamenObj.name = document.querySelector('#new-name').value
    newRamenObj.restaurant = document.querySelector('#new-restaurant').value
    newRamenObj.image = document.querySelector('#new-image').value
    newRamenObj.rating = document.querySelector('#new-rating').value
    newRamenObj.comment = document.querySelector('#new-comment').value
    console.log(newRamenObj)

    // create new ramen object    
    const ramenMenu = document.querySelector('#ramen-menu')
    const newRamenItem = document.createElement('img')
    newRamenItem.src = newRamenObj.image
    // display new ramen in #ramen-menu
    ramenMenu.append(newRamenItem)
})



