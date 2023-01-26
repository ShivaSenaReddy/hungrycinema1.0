
import Card from "./Card";

export default function CardList(props) {
    let arr = props.Data.map(movie => <Card releaseDate={movie.releaseDate}
        poster={movie.poster}
        key={movie.poster}
    />)
    console.log(arr);
    return (
        <div className='CardList'>
            {arr}
            </div>
        )
}