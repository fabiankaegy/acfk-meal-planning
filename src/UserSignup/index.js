import React from 'react';
import './style.scss';

class UserSignup extends React.Component {

    state = {
        username: "testuser",
        email: "fabian@arvernus.info",
        password: "Testpassword"
    }

    componentWillMount() {
        fetch("http://acfkmealplanning.dev/wp-json/wp/v2/users")
        .then( response => {
            if (response.ok) {
                return response.json()
            } else {
                throw response;
            }
        }).then( users => {
            console.info(users)
        }).catch( error => {
            console.error(error)
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        fetch( 'http://acfkmealplanning.dev/wp-json/wp/v2/users/register', {
            method: "POST",
            data: JSON.stringify(this.state),
            mode: "cors",
            header: {
                'Content-Type': 'application/json',
            }
        }).then( response => {
            if (response.ok) {
                return response.json();
            } else {
                throw response;
            }
        }).then( response => {
            console.info(response);
        }).catch( error => {
            console.error(error);
        })


    }
    render() {
        return (
            <form onSubmit={ this.handleFormSubmit }>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={this.state.username} onChange={
                    event => {
                        const username = event.target.value;
                        this.setState({username})
                    }
                } />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={this.state.email} onChange={
                    event => {
                        const email = event.target.value;
                        this.setState({email})
                    }
                }/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={
                    event => {
                        const password = event.target.value;
                        this.setState({password})
                    }
                }/>
                <input type="submit" />
            </form>
        );
    }
}

export default UserSignup;