export const MovieCard = () => {
    return (
        <div className = "card-container">
            <div className = "card-img-container">
                <img className ="card-img" src = "/" alt="movie-card"/>
            </div>

            <div className = "card-details"></div>
            <div>
                <span className = "title">The Shawshank Redemption</span>
            </div>

            <div>
                <span className ="genre">Genre: Drama, Crime</span>
            </div>
            <div>
                <span className = "ratings">Rating: 4.8</span>
                <span>142 mins</span>
            </div>
        </div>
    )
}