$(document).ready(function() {
  var slideshow = {
    counter: 0,
    imgArray: [{url: "assets/build/img/helmet.jpg", alt: "Helmet 1", counter:0},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 2", counter:1},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 3", counter:2},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 4", counter:3},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 5", counter:4},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 6", counter:5},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 7", counter:6},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 8", counter:7},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 9", counter:8},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 10", counter:9},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 11", counter:10},
                {url: "assets/build/img/helmet.jpg", alt: "Helmet 12", counter:11}],
    changeImg: function(img) {
      $("#slideshow img").attr('src', img.url);
      $("#slideshow img").attr('alt', img.alt);
      slideshow.counter = img.counter;
      console.log(slideshow.counter);
    },
    nextImg: function() {
      if (slideshow.counter + 1 === slideshow.imgArray.length) {
        slideshow.changeImg(slideshow.imgArray[0]);
      } else {
      slideshow.changeImg(slideshow.imgArray[slideshow.counter + 1]);
      }
    },
    prevImg: function() {
      if (slideshow.counter - 1 > 0) {
        slideshow.changeImg(slideshow.imgArray[slideshow.imgArray.length - 1]);
      } else {
        slideshow.changeImg(slideshow.imgArray[slideshow.counter -1]);
      }
    },
    checkCount: function() {

    }
  };
  slideshow.changeImg(slideshow.imgArray[1]);


});
