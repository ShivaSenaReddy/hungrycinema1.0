

export default function SuggestionCard(props) {
   
    return (<div className='Suggestion--Card'>
        <div className='Suggestion--Card--Header'>
            <h4 className="Suggestion--Card--Header--title">{props.id}{'.'}
                {props.title} {' '}
            {props.year}</h4>
        </div>
        <div className='Suggestion--Card-Description'>
        <p>{props.description}</p>
            <p>{props.specialty}</p>
            </div>
        </div>
        
        )
}