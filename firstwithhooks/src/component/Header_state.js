import React,{useState} from 'react';
import './Header.css';

const Header = () => {

    const [title] = useState('React Search APP');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);

    const updateCount = () => {
        setCount(count+1)
    }


    return(
        <header>
            <div className="logo">{title}</div>
            <h2>{count}</h2>
            <button onClick={updateCount}>Count</button>
            <h2>Count1: {count1}</h2>
            <button onClick={() => {setCount1(count1+1)}}>Count</button>
            {/* <button onClick={updateCount}>Count</button> */}
            {/* <input onChange={this.handleChange}/> */}
            <div style={{color:'white',fontSize:'20px',textAlign:'center'}}>
                
            </div>
            <hr/>
        </header>
    )
}




export default Header;