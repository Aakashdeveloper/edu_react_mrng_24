import React,{Fragment,Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import JSON from './data.json';

class App extends Component {

    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData: JSON
        }
    }

    filterData = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filteredData: output})

    }
    

    render(){
        //console.log(JSON)
        return(
            <Fragment>
                <Header userInput={(data) => {this.filterData(data)}}/>
                <Products products={this.state.filteredData}/>
                <Footer year="2024" month="Jan"/>
            </Fragment>
           
        )
    }
   
}

export default App;