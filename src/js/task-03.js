const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery')

const galleryArray = []

images.forEach(image => {
  const itemRef = document.createElement('li')
  const imageRef = document.createElement('img')

  itemRef.classList.add('gallery-item')
  imageRef.classList.add('gallery-image')

  imageRef.src = image.url
  imageRef.alt = image.alt
  itemRef.append(imageRef)

  galleryArray.push(itemRef)
})

galleryRef.append(...galleryArray)
