import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

class QuickSearch extends Component {

    render(){
        return(
            <div className='quickSearch'>
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By MealType
                </span>
                <div>
                    <QuickDisplay/>
                </div>
            </div>
        )
    }
}

export default QuickSearch;