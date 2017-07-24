/**
 * Created by j on 3/17/17.
 */
import {OAuthSignin} from 'react-redux-oauth2';
import React from 'react';
let Signin = OAuthSignin(class extends React.Component {
    render(){
        return <button {...this.props} />
    }
}, {
    width: 100,
        height: 100
});
export default Signin;