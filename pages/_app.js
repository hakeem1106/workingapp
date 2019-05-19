import App, {Container} from 'next/app';
import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackLayout from '../components/Layout'
import '../style.css';

export default class MyApp extends App{
    render(){
        return(
            <div>
             <div id="formy" className="position-absolute">

            <form method="POST" action="/index">
            <input type='text'className="form-control" placeholder="Username" name="username"></input>
            <br></br>
            <input type="password" className="form-control" placeholder="Password" name="password"></input>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
            </div>

        )
    }

}

