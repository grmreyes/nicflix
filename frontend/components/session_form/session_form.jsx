import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push({pathname: '/browse'}));
  }

  renderErrors() {
    return(
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount(){
    this.props.deleteErrors()
  }
  render() {
    return (
      <div className="signin-form-container">
        <Link className="close-login" to="/">&#60; back</Link>
        <h1>{this.props.formType}</h1>     
          <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="signin-form">
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
                placeholder="Password"
              />
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <div className="session-question">
              {this.props.question}{this.props.navLink}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
