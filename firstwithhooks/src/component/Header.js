import React,{useState} from 'react';
import './Header.css';

const Header = (props) => {

    const [title] = useState("React Search App");
    const [keyword,setKeyword] = useState('User Input Here')


    const handleChange = (event) => {
        setKeyword(event.target.value)
        props.userInput(event.target.value)
    }

    return(
        <header>
            <div className="logo">{title}</div>
            <input onChange={handleChange}/>
            <div style={{color:'white',fontSize:'20px',textAlign:'center'}}>
                {keyword}
            </div>
            <hr/>
        </header>
    )
}

export default Header;