//When the DOM LOADS
$(document).ready(() => {
    //Select form ID
    $('#searchForm').on('submit', (e) => {
        //Get value from the input
        let searchText= $('#searchText').val();
        getMovie(searchText);
        e.preventDefault();
    });
});

//Request API
//Fetch the movie api and concat the value
function getMovie(searchText){
    //"&s=" parameter will fetch all the data related with the posible value
    axios.get('http://www.omdbapi.com/?apikey=13e27bcd' + '&s=' + searchText)
        //Return a promise
        .then((res) => {
            let movies = res.data.Search;
            let output = '';
            //forEach Movie
            $.each(movies, (index, movie) => {
                output += `
                    <div class="container-movie">
                        <div class="inner-movie">
                            <img src="${movie.Poster}"/>
                            <h3>${movie.Title}</h3>
                            <a onclick="movieSelected('${movie.imdbID}')" href="#" class="btn">Movie Details</a>
                        </div>
                    </div>
                `
            })
            //Append to html
            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err)
        })
}

function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'details.html';
    return false;

}

function getDetails(){
    let movieId = sessionStorage.getItem('movieId');
    //"&i=" parameter will fetch current index id movie
    axios.get('http://www.omdbapi.com/?apikey=13e27bcd&i=' + movieId)
        //Return a promise
        .then((res) => {
            let movie = res.data;
            let output = `
                <div>
                    <div>
                        <img src="${movie.Poster}" />
                    </div>
                    <div>
                        <h2>${movie.Title}</h2>
                    </div>
                    <a href="./movie.html" class="btn">Go Back</a>
                </div>
            `;
            $('#movie').html(output)
        })
        .catch((err) => {
            console.log(err)
        })
}