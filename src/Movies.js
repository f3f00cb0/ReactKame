import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from 'react-router-dom'

const hi = "Hallo";

export class Movies extends React.Component {
    
    render(){
        return (
            <div>{hi}</div>
        )
    }
}