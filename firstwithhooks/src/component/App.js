import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './product';
import JSON from './data.json';

const App = () => {
    const [productData] = useState(JSON)
    const [filterData, setFilteredData] = useState(JSON)


    const filteredData = (keyword)  => {
        let output = productData.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        setFilteredData(output)
    }

    return(
        <>
            <Header userInput={(data) => {filteredData(data)}}/>
            <ProductDisplay prodData={filterData}/>
            <Footer year="2025" month="Jan"/>
        </>
    )
}



export default App;
