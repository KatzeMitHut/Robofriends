import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll'



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render (){
        console.log(this.state.searchField);
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then(users => this.setState({robots: users}));
    }



}

export default App;