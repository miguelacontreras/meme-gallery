var imageUrls = [
  'https://assets3.thrillist.com/v1/image/2954290/1584x1056/crop;jpeg_quality=60;progressive.jpg',
  'https://lh6.googleusercontent.com/snnrs_9E-lXhVFFsp0CajrrqfoHOrWjYrP7_rcq1pJkAdZ0v937Froj9wYIz-M4P64m6PXzEvLCP0FXEEdmL-kx3_o-7r9YhHIIRf8Rrh1-oomrs2gPpG6iP-StX8eSewl6WDWnA',
  'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/Warzone-mandalorian-meme.jpg?q=50&fit=crop&w=740&h=762&dpr=1.5',
  'https://lh3.googleusercontent.com/8wm7ZKTcDNDUc2XzSoRa28EOkwIu23WDs4dwxJ3w8TAaS-hb7pQSnM9TAYiJgvPPNc5Zf0ZFhkdis8x9Z79b48TQ7i7oO67wwTWdz22qONLZx_zxrZr8eGPORaXmUMAWvEfw-Vik',
  'https://rkade.gg/wp-content/uploads/2020/07/104686171_3231011663629390_5542787271962345536_o-609x630.jpg',
  'https://live.staticflickr.com/65535/49896240578_eca954616a_c.jpg',
  'https://thechive.com/wp-content/uploads/2020/04/Call-Of-Duty-War-Zone-Memes-Humor-Funny-Pictures-Gaming-29.jpg?attachment_cache_bust=3269156&quality=85&strip=info&w=400',
  'https://thunderdungeon.com/wp-content/uploads/2020/06/Duty-02-600x528.jpg',
  'https://www.gamespecifications.com/wp-content/uploads/2021/03/COD-Warzone-Meme-quarantine-time-1024x724.jpg',
];
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value)
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
