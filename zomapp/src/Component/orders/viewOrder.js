import React,{Component} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const pUrl = process.env.REACT_APP_POST_API

class ViewOrder extends Component{

    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <DisplayOrder orderData={this.state.orders}/>
        )
    }

    // apicalling 
    componentDidMount(){
        axios.get(pUrl).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;