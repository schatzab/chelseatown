// Chelsea Town 2015


// API thumbnails

function jsonFlickrFeed(data) {
	console.log(data);
	var output = '';
	for (var i=0; i < data.items.length; i++) {
		var title = data.items[i].title;
		var link = data.items[i].media.m.slice(0,-6); // _m.jpg
		// 5 column structure
		var blocktype =
			((i % 5) === 4) ? 'e':
			((i % 5) === 3) ? 'd':
			((i % 5) === 2) ? 'c':
			((i % 5) === 1) ? 'b':
			'a';
		output += '<div class="col_' + blocktype + '">';
		output += '<a href="#showphoto" data-transition="fade" onclick="showPhoto(\'' + link + '\',\'' + title + '\')">';
		output += '<img src="' + link + '_q.jpg" alt="' + title + '">';
		output += '</a>';
		output += '</div>';
	}
	$('#photolist').html(output);
}
// API lg photo
function showPhoto(link, title) {
	var output = '<a href="#photo" data-transition="fade">';
	output +='<img src="' + link + '_b.jpg" alt="' + title + '">';
	output += '</a>';
	output += '<div class="title_big">' + title + '</div>';
	$('#myphoto').html(output);
}


(function(){
	// select box
	var lightbox = document.querySelector('#photoCont .photo_inner ul');  // affects first element 

	lightbox.addEventListener("click", function(event) {  

		if(event.target.tagName === 'IMG') { // if tag is IMG...

			// Create Base Overlay
			var pOverlay = document.createElement('div'); 
			pOverlay.id = 'overlay'; 
			document.body.appendChild(pOverlay); 

			// size and position of overlay 
			pOverlay.style.width = window.innerWidth + 'px';
			pOverlay.style.height = window.innerHeight + 'px';
			pOverlay.style.top = window.pageYOffset + 'px';
			pOverlay.style.left = window.pageXOffset + 'px';

			// create large image overlay
			var imageSrc = event.target.src; 
			var lgImage = document.createElement('img'); 
			lgImage.id = 'lgImage'; 
			lgImage.src = imageSrc.substr(0, imageSrc.length-6) + '_b.jpg';  


			// Next Left Button
			var nextLeftCont = document.createElement('div'); 
			nextLeftCont.id = 'nextLeftCont'; 
			var nextLeft = document.createElement('div'); 
			nextLeft.id = 'nextLeft'; 
			nextLeft.innerHTML = '&#10092;';  // >
	

			// Next Right Button
			var nextRight = document.createElement('div'); 
			var nextRightCont = document.createElement('div');  
			nextRight.id = 'nextRight'; 
			nextRightCont.id = 'nextRightCont'; 
			nextRight.innerHTML = '&#10093;';


			// wait until image is loaded
			lgImage.addEventListener('load', function(){
				// resize if taller than window
				if (this.height > window.innerHeight) {
					this.ratio = window.innerHeight / this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				// resize if wider
				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth / this.width;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				// add to overlay
				centerImage(this); 
				pOverlay.appendChild(lgImage);  
				pOverlay.appendChild(nextLeft);  
				pOverlay.appendChild(nextLeftCont); 
				pOverlay.appendChild(nextRight);  
				pOverlay.appendChild(nextRightCont); 
			});  //image has loaded


			// close overlay when overlay is clicked
			pOverlay.addEventListener('click', function() {
				if (pOverlay) { 
					window.removeEventListener('resize', window, false); 
					window.removeEventListener('scroll', window, false);
					pOverlay.parentNode.removeChild(pOverlay); 
				}
			}, false); 


			// arrows appear when mouseover next containers
			nextLeftCont.addEventListener('mouseenter', function showArrows() {
				if (pOverlay) { 
					nextLeft.style.display = 'inline';  
					nextRight.style.display = 'inline';  
				}
			}, false); 
			nextRightCont.addEventListener('mouseenter', function showArrows() {
				if (pOverlay) { 
					nextLeft.style.display = 'inline'; 
					nextRight.style.display = 'inline'; 
				}
			}, false);

			// arrows hide on mouseleave
			nextLeftCont.addEventListener('mouseleave', function hideArrows() {
				if (pOverlay) {
					nextLeft.style.display = 'none'; 
					nextRight.style.display = 'none'; 
				}
			}, false); 
			// arrows hide on mouseleave
			nextRightCont.addEventListener('mouseleave', function hideArrows() {
				if (pOverlay) { 
					nextLeft.style.display = 'none'; 
					nextRight.style.display = 'none';  
				}
			}, false); 




			// listen for screen scroll so that overlay adjusts with it.
			window.addEventListener('scroll', function() {
				if (pOverlay) {
					pOverlay.style.top = window.pageYOffset + 'px';
					pOverlay.style.left = window.pageXOffset + 'px';
				}
			}, false);

			// listener for another window event, resizing the screen.
			window.addEventListener('resize', function(){
				if (pOverlay) {
					pOverlay.style.width = window.innerWidth + 'px';
					pOverlay.style.height = window.innerHeight + 'px';
					pOverlay.style.top = window.pageYOffset + 'px';
					pOverlay.style.left = window.pageXOffset + 'px';

					centerImage(lgImage);
				}
			}, false);
		}  // target is an image
	}, false); //image is clicked

	function centerImage(theImage) {
		// function will center the image.  
		var myDifX = (window.innerWidth - theImage.width)/2; 
		var myDifY = (window.innerHeight - theImage.height)/2;
		
		theImage.style.top = myDifY + 'px'; 
		theImage.style.left = myDifX + 'px'; 

		return theImage;
	}

})();



