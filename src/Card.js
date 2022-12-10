export default function Card(props) {
    return( <div className='Card'>
        <img className='Card--poster' src={props.poster} />
        <p className='Card--release--date'>{props.releaseDate}</p>
        <button className='Card--button'><a href='https://youtu.be/9kyPX1qZbfY' target='_blank'>YoutubeTrailer</a></button>
        </div>)
}