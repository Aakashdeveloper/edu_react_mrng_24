import React,{Component} from 'react';
import './listing.css';
import axios, { formToJSON } from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const base_url = process.env.REACT_APP_API_URL;

class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restaurantList:'',
            mealId:this.props.match.params.mealId
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <CuisineFilter mealId={this.state.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <CostFilter mealId={this.state.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    //api calling 
    componentDidMount(){
        //http://3.17.216.66:4000/restaurant?mealtype_id=
        let mealId = this.state.mealId;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) =>  this.setState({restaurantList:res.data}))
    }
}

export default Listing;