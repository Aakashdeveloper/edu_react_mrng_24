import React,{Component} from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const users = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
]

const stocks = [
    {
        id: 1,
        name: 'TCS'
            
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ]

const StockComponent = Hoc(StockList,stocks);
const UserComponent = Hoc(UserList,users)
    

class App extends Component{
    render(){
        return(
            <>
                <StockComponent/>
                <UserComponent/>
            </>
            
        )
    }
}

export default App