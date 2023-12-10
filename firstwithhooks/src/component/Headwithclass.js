import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(){
        super()

        this.state={
            title:"React Search App",
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <input onChange={this.handleChange}/>
                <div style={{color:'white',fontSize:'20px',textAlign:'center'}}>
                    {this.state.keyword}
                </div>
                <hr/>
            </header>
        )
    }
}

export default Header;