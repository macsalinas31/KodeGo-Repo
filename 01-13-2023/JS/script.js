const reviewForm = document.querySelector('#reviewForm');
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const review = document.querySelector('#review');
const display = document.querySelector('#display pre');
const retrieveBtn = document.querySelector('#retrieveBtn');
const reviewsTable =document.querySelector('#reviewsTable');

const movieReviews = [];

reviewForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

       const movieReview = {
        title: title.value,
        year: year.value,
        review: review.value,
       }

       movieReviews.push(movieReview)
       reviewForm.reset();

       console.table(movieReviews);

        // JSON - text or string at may sariling method to convert into JSON string
       const reviewsJSON = JSON.stringify( movieReviews, null, 2 );
    //    console.log(reviewsJSON);
       display.innerText = "\n" + reviewsJSON

    localStorage.setItem("Movie Reviews".reviewsJSON);
    }
)

retrieveBtn.addEventListener(
    'click',
    () => {
        //retreive movie review from local storage
       const reviews = JSON.parse (localStorage.getItem("Movie Reviews"))
        
        console.log(reviews)
    }
)