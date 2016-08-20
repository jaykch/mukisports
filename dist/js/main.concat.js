$(document).ready(function () {
    testimonialslider();

});


var review = {};
var clickIndex = 0;
var starSRC = 'data/icons/star.png';
var ratingSelector = ".rating";
var sliderSelector = ".testimonial-slider";

var revArray = [
    review.first = {
        name: "Sophie Weston",
        rating: 5,
        testimonial: "Brilliant party shared between 3 Birthday Boys! 20 boys raring to go, and they were all engaged the whole time! Thank you",
        image: "data/img/reviews/sophieweston.jpg"
    },

    review.second = {
        name: "Alexandra Luella",
        rating: 5,
        testimonial: "Honestly, the easiest and most affordable party I have ever held. The kids loved him, thoroughly engaged and used all their energy",
        image: "data/img/reviews/alexandraluella.jpg"
    },

    review.third = {
        name: "Catherine Hutton",
        rating: 5,
        testimonial: "Absolutely incredible how you kept 15 kids thoroughly riveted with all the games and team play",
        image: "data/img/reviews/catherinehutton.jpg"
    },

    review.fourth = {
        name: "Georgina Wilson Kamara",
        rating: 5,
        testimonial: "Great alternative to a traditional party. The kids had a fabulous time, one said 'they wished all the parties were like this' Alistair was brilliant",
        image: "data/img/reviews/georgina.jpg"
    },

    review.fifth = {
        name: "Tom Bell",
        rating: 5,
        testimonial: "Alice's 11th Birthday was a great experience. The kids really worked out, with red faces and plenty of smiles. Strongly recommend Muki Sports for parties and fun",
        image: "data/img/reviews/tom.jpg"
    },
    review.sixth = {
        name: "Kelly Stewart",
        rating: 5,
        testimonial: "My son celebrated his fifth birthday party with Alastair over the weekend. It was so much fun and all eighteen five year olds joined in! ",
        image: "data/img/reviews/kelly.jpg"
    },
    review.seventh = {
        name: "Kenroy Quellennec-Reid",
        rating: 5,
        testimonial: "Had Tahirah for my daughter's 9th birthday and it was wonderful. The children thoroughly enjoyed it - they had plenty of fun and laughs",
        image: "data/img/reviews/kenroy.jpg"
    }
];



function testimonialslider() {
    $('#testimonial-right').click(function () {
        clickIndex++;
        if (clickIndex > revArray.length - 1) {
            clickIndex = 0;
        }

        reviewChanger();
        rating();
        animation();

    });
    $('#testimonial-left').click(function () {
        clickIndex--;
        if (clickIndex < 0) {
            clickIndex = revArray.length - 1;
        }

        reviewChanger();
        rating();
        animation();
    });


}

function reviewChanger(reviewId)
{
    reviewId=clickIndex;
    $(".testimonial").html('"' + revArray[reviewId].testimonial + '"');
    $(".reviewer-name").html(revArray[reviewId].name);
    $(".reviewer-image").attr("src",revArray[reviewId].image);
}

function rating(rating,reviewId)
{
    reviewId=clickIndex;
    rating=revArray[reviewId].rating;
    $(ratingSelector).empty();
    for(i=1; i<rating+1;i++)
    {
        $(ratingSelector).append('<img src="' + starSRC + '" class="star" />')

    }

}

function animation(){
    $(sliderSelector).removeClass("fade-in");
    setTimeout(function(){$(sliderSelector).addClass("fade-in")},100);

}

$(window).load(function(){
    animateScrolling();
});

function animateScrolling(){
    $(function() {
        $('.animateScrolling').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
}