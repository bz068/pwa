var template = "<article>\n\
<img src='data/img/placeholder.png'  data-src='data/img/LOCATION.jpg'  alt='LOCATION'>\n\
<h3>#POS. TOPIC</h3>\n\
	<li><span>Topic:</span> <strong>TOPIC</strong></li>\n\
    <li><span>Location:</span> <strong>LOCATION</strong></li>\n\
    <li><span>Price:</span> <strong>PRICE</strong></li>\n\
    <li><span>Img:</span> <strong>IMG</strong></li>\n\
	</ul>\n\
</article>";
var content = '';
for(var i=0; i<courses.length; i++) {
	var entry = template.replace(/POS/g,(i+1))
				.replace(/TOPIC/g,courses[i].topic)
                .replace(/LOCATION/g,courses[i].location)
                .replace(/PRICE/g,courses[i].price)
                .replace(/IMG/g,courses[i].img);
entry = entry.replace('<a href=\'http:///\'></a>','-');
	content += entry;
};
document.getElementById('content').innerHTML = content; 


//sw
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then((reg) => console.log('sw registered', reg))
    .catch((err) => console.log('not registered', err));
}



//load images
//imagesToLoad variable contains references to all the images
var imagesToLoad = document.querySelectorAll('img[data-src]');
var loadImages = function(image) {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = function() {
        image.removeAttribute('data-src');
        //When each image is actually loaded, it removes its data-src attribute as it's not needed anymore.

    };
    
};
//If the IntersectionObserver object is supported, the app creates a new instance of it
// image is loaded when it intersects with the observer
if('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(items, observer) {
		items.forEach(function(item) {
			if(item.isIntersecting) {
				loadImages(item.target);
                observer.unobserve(item.target);
                //image is then removed from the observation list
			}
		});
    });
    	imagesToLoad.forEach(function(img) {
		observer.observe(img);
	});
}
else {
    //loop through each image and load it
	imagesToLoad.forEach(function(img) {
		loadImages(img);
	});
}

