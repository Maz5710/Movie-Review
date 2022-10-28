console.log('working');

var movies = [{
        title: 'Howling II',
        image: 'img/howling_2.jpg',
        genre: 'Horror',
        blurb: 'A man discovers that his sister was a werewolf, and helps an investigator track down a gang of the monsters through the United States and eastern Europe.',
        starring: ['Christoper Lee', 'Anne McEnroe', 'Reb Brown'],
        year: '1985',
        rating: 'R',
        reviews: [{
                postedBy: 'Hey_Sweden',
                review: 'Incredibly idiotic, senseless, and utterly sleazy sequel to the popular 1981 werewolf film The Howling.'
            },
            {
                postedBy: 'BandSAboutMovies',
                review: 'Total Junk. Totally awesome.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi747881241/?playlistId=tt0089308&ref_=tt_ov_vi'
    },
    {
        title: 'Captain Marvel',
        image: 'img/captain_marvel.jpg',
        genre: 'Action',
        blurb: 'Carol Danvers becomes one of the universes most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
        starring: ['Brie Larsen', 'Samuel L Jackson', 'Ben Mendelsohn'],
        year: '2019',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'reddalewcu',
                review: 'Entertaining, thought it was better than what most reviews have give.'
            },
            {
                postedBy: 'Mr_Wobbly',
                review: 'Thoroughly entertaining.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi4235180569/?playlistId=tt4154664&ref_=tt_ov_vi'
    },
    {
        title: 'Thor Rangarok',
        image: 'img/thor_ragnarok.jpg',
        genre: 'Comedy',
        blurb: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
        starring: ['Chris Hemsworth', 'Tom Hiddleston', 'Cate Blanchett'],
        year: '2019',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'MR_Heraclius',
                review: 'Best Movie in THOR series.'
            },
            {
                postedBy: 'ctowyl',
                review: 'This Thor is Thor-some!'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi4010391833/?playlistId=tt3501632&ref_=tt_ov_vi'
    },
    {
        title: 'Pulp Fiction',
        image: 'img/pulp_fiction.jpg',
        genre: 'Crime',
        blurb: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        starring: ['Uma Thurman', 'John Travolta', 'Samuel L Jackson'],
        year: '1994',
        rating: 'R',
        reviews: [{
                postedBy: 'mundoaudiofilo',
                review: 'Time to kill ol spidy off.'
            },
            {
                postedBy: 'Pjtaylor-96',
                review: 'The best Spider-Man film since Sam Raimis second instalment.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi4175083801/?playlistId=tt2250912&ref_=tt_ov_vi'
    },
    {
        title: 'Forrest Gump',
        image: 'img/forrest_gump.jpg',
        genre: 'Romance',
        blurb: 'AThe presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        starring: ['Tom Hanks', 'Robin Wright', 'Gary Sinse'],
        year: '1994',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'Smells_Like_Cheese',
                review: 'Lets see the world through the eyes of Forrest Gump.'
            },
            {
                postedBy: 'Zonieboy',
                review: 'A beautiful fable for now and the future.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi3567517977/?playlistId=tt0109830&ref_=tt_ov_vi'
    },
    {
        title: 'A Quiet Place',
        image: 'img/a_quiet_place.jpg',
        genre: 'Horror',
        blurb: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
        starring: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'],
        year: '2018',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'CabbageCustard',
                review: 'Rivetting, suspenseful and scary.'
            },
            {
                postedBy: 'thekarmicnomad',
                review: 'Great movie - if you can just get passed the concept.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi3446716441/?playlistId=tt6644200&ref_=tt_ov_vi'
    },
    {
        title: 'The Dark Knight',
        image: 'img/the_dark_knight.jpg',
        genre: 'Drama',
        blurb: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        starring: ['Heath Ledger', 'Christian Bale', 'Aaron Eckhart'],
        year: '2008',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'MR_Heraclius',
                review: 'Confidently directed, dark, brooding, and packed with impressive action sequences.'
            },
            {
                postedBy: 'Smells_Like_Cheese',
                review: 'The Batman of our dreams! So much more than a comic book movie.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi324468761/?playlistId=tt0468569&ref_=tt_ov_vi'
    },
    {
        title: 'Spiderman Homecoming',
        image: 'img/spider_man_homecoming.jpg',
        genre: 'Sci-fi',
        blurb: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
        starring: ['Tom Holland', 'Michael Keaton', 'Robert Downey Jr.'],
        year: '2020',
        rating: 'PG-13',
        reviews: [{
                postedBy: 'mundoaudiofilo',
                review: 'Time to kill ol spidy off.'
            },
            {
                postedBy: 'Pjtaylor-96',
                review: 'The best Spider-Man film since Sam Raimis second instalment.'
            },
        ],
        trailerURL: 'https://www.imdb.com/video/vi4175083801/?playlistId=tt2250912&ref_=tt_ov_vi'
    }
]

// Get all filter inputs
var genre = document.getElementById('genreSelect');
var rating = document.getElementById('ratingSelect');
var starring = document.getElementById('starringSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Event Change
genre.addEventListener('change', filterGenre);
rating.addEventListener('change', filterRating);
starring.addEventListener('change', starringFilter);

// Straight Compare Search
search.addEventListener('click', searchMovies);

// On KeyUp
searchInput.addEventListener('keyup', function(event) {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    // console.log(event.target.value);
    var input = event.target.value;
    for (var i=0; i < movies.length; i++) {
        if ((movies[i].title.toLowerCase().includes(input.toLowerCase())) === true){
            console.log("success");
            var movie = movies[i];
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read More</a>
                    </div>
                  </div>
            </div>
        `
        }
    }
});

function filterGenre() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        if (genre.value === movie.genre) {
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read More</a>
                    </div>
                  </div>
            </div>
        `
        } 
    }
}

function filterRating() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        if (rating.value === movie.rating) {
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read More</a>
                    </div>
                  </div>
            </div>
        `
        } 
    }
}

function starringFilter() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = ''; 
    for (var i=0; i<movies.length; i++){
        for (var j=0; j<movies[i].starring.length; j++){
            var movie = movies[i];
            var stars = movies[i].starring[j];
            if (starring.value === stars) {
                moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read More</a>
                    </div>
                  </div>
            </div>
        ` 
            }
        }
    }
}

function getAllMovies() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    for (var i=0; i < movies.length; i++) {
        var movie = movies[i];
        moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn" value="${i}" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
                    </div>
                  </div>
            </div>
        `
    }
}

getAllMovies();

function searchMovies() {
    var moviesOutput = document.getElementById('movieOutput');
    moviesOutput.innerHTML = '';
    var searchValue = searchInput.value;
    for (var i=0; i<movies.length; i++) {
        var movie = movies[i];
        if (searchValue.toLowerCase() == movie.title.toLowerCase()){
            moviesOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title} Movie Poster">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <h6 class="card-text">${movie.year}</h6>
                      <p class="card-text">${movie.rating}</p>
                      <a href="#" class="btn">Read More</a>
                    </div>
                  </div>
            </div>
        ` 
        }
    }
}