import React,{Component} from 'react';


class Orders extends Component{
    state={
        data:{
            orders:{
                order_name:"Sample Order",
                category:"Sample Category",
                price:140
            }
        }
    }

    render(){
        const {order_name,category,price} = this.state.data.orders;
        return(
            <div>
                <h2>{order_name}</h2>
                <h2>{category}</h2>
                <h2>{price}</h2>
            </div>
        )
    }
}

export default Orders;