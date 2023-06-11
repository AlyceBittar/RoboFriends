import React, { Component } from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component { 
    constructor() {
        super()
        this.state = {
            robots: [], // reference to where robots are being pulled from
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // HTPP request
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));   
    }

onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
}

    render () {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h1 className='f1'>Loading...</h1> : 
            (
                <div className='tc'>        
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll> 
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }   
    }

export default App;