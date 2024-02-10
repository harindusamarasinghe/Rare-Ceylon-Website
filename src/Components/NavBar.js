import React ,{Component} from 'react';
import '../App.css';
import './NavBar.css';
import { Link } from 'react-router-dom';


export default class NavBar extends Component{
    
    handlelick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    // eslint-disable-next-line no-dupe-class-members
    state = {
        scrolled: false,
        clicked:false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };
    
    render(){
        const { scrolled } = this.state;
    return(
        <div>
            <nav className={`navbar--items ${scrolled ? 'scrolled' : ''}`} >
                <h1 className='logo'>Rare Ceylon</h1>
                <ul id='navbar' className={this.state.clicked?"#navbar active":"#navbar"}>
                    <li className='items'>
                        <Link to="/" className='links'>Home</Link>
                    </li>
                    <li className='items'> 
                        <Link to="/services" className='links'>Services</Link>
                    </li>
                    <li className='items'>
                        
                        <a href='/aboutus' className='links' >About</a>
                    </li>
                    <li className='items'>
                        
                        <a href='../pages/Home.js' className='links' >Contact</a>
                    </li>
                </ul>
                <div id='mobile' onClick={this.handlelick}>
                    <i
                    id="bar"
                    className={this.state.clicked? "fa fa-close":"fas fa-bars"}>    
                    </i>
                </div>
            </nav>
        </div>
    )
}}