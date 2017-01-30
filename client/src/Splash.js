/**
 * Created by j on 1/30/17.
 */
import React, { Component } from 'react';
import fetchUserDataFromInstagram from './data/FetchAPI.js';

class Splash extends Component {
    render() {
        return (
                <p className="username-lookup">
                    <code>Enter an Instagram username: </code>

                    <input type="text" name="meme"onKeyPress={fetchUserDataFromInstagram}></input>
                </p>
        );
    }
}

export default Splash;