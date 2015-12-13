import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import { Input, Button } from 'react-bootstrap';

class Register extends Component {

  handleSubmit(e) {

    e.preventDefault();

    const { dispatch } = this.props;

    const userObj = {
      username: 'andy',
      password: 'password'
    };

    dispatch(authActions.register(userObj));
  }

  render() {
    return (
      <div className='login-content'>
        <form onSubmit={::this.handleSubmit}>
          <div className="lc-block toggled">
            <h3>Register</h3>
            <div className="input-group m-b-20">
                <span className="input-group-addon"><i className="zmdi zmdi-email"></i></span>
                <div className="fg-line">
                    <input type="text" className="form-control" placeholder="Email Address" />
                </div>
            </div>

            <div className="input-group m-b-20">
                <span className="input-group-addon"><i className="zmdi zmdi-male"></i></span>
                <div className="fg-line">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
            </div>

            <div className="clearfix"></div>

            <button type="submit" className="btn btn-login btn-danger btn-float"><i className="zmdi zmdi-arrow-forward"></i></button>

            <ul className="login-navigation">
                <li className="bgm-green"><a href="#login">Login</a></li>
                <li data-block="#l-forget-password" className="bgm-orange"><a href="#register">Forgot Password</a></li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Register);
