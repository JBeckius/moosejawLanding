$(document).ready(function() {
  var slideshow = {
    counter: 0,
    imgArray: [{path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?", alt: "Helmet 1", counter:0},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?", alt: "Helmet 2", counter:1},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?", alt: "Helmet 3", counter:2},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?", alt: "Helmet 4", counter:3},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?", alt: "Helmet 5", counter:4},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 6", counter:5},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 7", counter:6},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 8", counter:7},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 9", counter:8},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 10", counter:9},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 11", counter:10},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 12", counter:11},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 13", counter:12},
                {path: "assets/build/img/helmet.jpg", title: "Smith Overtake Helmet", copy: "A classic, like a little black dress , the women's Smith Arrival Snow Helmet delivers the proven fit and function you expect from a Smith helmet, all with a ladylike polish and style.", link:"#?",alt: "Helmet 14", counter:13}],
    changeSlide: function(img) {
      console.log(img);
      $("#slideshow img").attr('src', img.path);
      $("#slideshow img").attr('alt', img.alt);
      // $("#slideshow p").html('<strong>' + img.title + "</strong><br /><br />" + img.copy + '<a href='+img.link+'>More Details</a>');
      this.counter = img.counter;
      console.log(this.counter);

    },
    nextImg: function() {
      if (this.counter + 1 === this.imgArray.length) {
        console.log("hello");
        console.log(this.imgArray[this.counter]);
        this.changeSlide(this.imgArray[0]);

      } else {
        console.log("hello");
        console.log(this.imgArray[this.counter]);

      this.changeSlide(this.imgArray[this.counter + 1]);
      }
    },
    prevImg: function() {
      if (slideshow.counter - 1 > 0) {
        this.changeSlide(this.imgArray[this.imgArray.length - 1]);
      } else {
        this.changeSlide(this.imgArray[this.counter -1]);
      }
    },
    checkCount: function() {
      this.removeSelected();
      var count = this.counter;
      $(('#plus' + (count + 1))).attr('class', 'selected');
      console.log('she back?');
    },
    makePluses: function() {
      console.log("pluses");
      for (var i = 0; i < this.imgArray.length; i++) {
        var $plus = $('<button>+</button>');
        $plus.attr('class', 'plus')
          .attr('id', "plus" + (i + 1));
        $('#slideContent').prepend($plus);
      }
      $('#slideContent').on('click', '.plus', function() {
        var id = this.id;
        var num = id.replace('plus', "");
        var index = parseInt(num);
        slideshow.changeSlide(slideshow.imgArray[index-1]);
        slideshow.checkCount();
        // slideshow.removeSelected();
      });
    },
    removeSelected: function() {
      console.log("she gone");
      $('.selected').attr('class', 'plus');
    }
  };
  // for (var i = 0; i < slideshow.imgArray.length; i++) {
  //   $('#slideContent').on('click', "#plus" + (i + 1), slideshow.changeSlide(slideshow.imgArray[i]));
  // }
  $('#forward').on('click', function() {
    slideshow.nextImg();
  });
  slideshow.makePluses();
  // slideshow.changeSlide(slideshow.imgArray[1]);


});
