import React, {Component} from 'react';
import Search from '../../components/Search/Search';
import './style.css';

class HomePage extends Component {

    render(){
    return (
        <div>
            <h1 id="favouriteAristh1">Find your favorite artist</h1>
            <Search/>
        </div>
    )
}
}

export default HomePage;