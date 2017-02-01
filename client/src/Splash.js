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
                    <button> <a href="https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token"></a></button>
                </p>
        );
    }
}

export default Splash;