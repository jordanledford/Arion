/**
 * Created by j on 1/30/17.
 */
import React, { Component } from 'react';
// import FlatButton from 'material-ui/FlatButton';
// import muiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fetchUserDataFromInstagram from '../actions/FetchAPI.js';

class Splash extends Component {
    render() {
        return (

                <div className="splash">
                    <p className="username-lookup">
                        <code>Enter an Instagram username: </code>

                        <input type="text" placeholder="jordanledford" onKeyPress={fetchUserDataFromInstagram}></input>
                        {/*<FlatButton*/}
                            {/*label="Ok"*/}
                            {/*primary={true}*/}
                            {/*onTouchTap={this.handleRequestClose}*/}
                        {/*/>*/}
                        <button className="btn red"> <a className="link" href="https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token">Search</a></button>
                    </p>
                </div>
        );
    }
}

export default Splash;