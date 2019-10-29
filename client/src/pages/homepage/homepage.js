import React, {Component} from 'react';
import Search from '../../components/Search/Search';
import './style.css';
import getJWT from '../../_helpers/getJwt';

class HomePage extends Component {
    state = {
       
    }

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