//import { FeelGoodMovies } from "./Moviesugesstions/ComedyMovies"
import SuggestionCard from "./SuggestionCard"

export default function Suggestion(props) {
    let { FeelGood,Comedy} = props;
    let arr,arr1=[]
   // console.log(f);
   
    arr = FeelGood.map(item => <SuggestionCard
            id={item.id}
            title={item.title}
            year={item.year}
            description={item.description}
            specialty={item.specialty}
    />)
    arr1 = Comedy.map(item => <SuggestionCard
        id={item.id}
        title={item.title}
        year={item.year}
        description={item.description}
        specialty={item.specialty}
    />)
    
      
    return (<div className='Suggestion'>
        <h3>FeelGood</h3>
        {arr}
        {arr1 }
        </div>)
         }
