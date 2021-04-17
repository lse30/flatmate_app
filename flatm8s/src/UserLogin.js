import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {TextField, Container, Button, Typography} from '@material-ui/core'
import * as Constants from './constants'
import { withRouter } from 'react-router-dom'

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        alignItems: 'center'
    },
})


class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()

        let myHeaders = new Headers()
        myHeaders.append("content-Type", "application/json")


        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            }),
            redirect: 'follow'
        };


        fetch(Constants.URL + '/users/login', requestOptions)
            .then((response) => response.json())
            .then((json) => {
                let myHeaders = new Headers();
                let user_token = json.token
                myHeaders.append("X-Authorization", user_token);

                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                fetch("http://localhost:4000/users/" + json.userId, requestOptions)
                    .then((response) => response.json())
                    .then((json) => {
                        this.props.history.push({
                            pathname: '/ConnectFlat',
                            state: {
                                firstName: json.first_name,
                                surname: json.surname,
                                token: user_token,
                            }
                        })
                    })
                    .catch(error => console.log('error', error));







            })
            .catch((error) => {
                console.log((error.status))
            })



    }

    render() {
        const {classes} = this.props;
        return (

            <Container className={classes.root}>
                <Typography variant='h4'>
                    Login
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        fullWidth
                        label='Enter your Email'
                        variant='outlined'
                        margin='normal'
                        name='email'
                        onChange={(event) => {
                            this.setState({email: event.target.value})
                        }}
                    />
                    <TextField
                        required
                        fullWidth
                        label='Password'
                        variant='outlined'
                        margin='normal'
                        type='password'
                        name='password'
                        onChange={(event) => {
                            this.setState({password: event.target.value})
                        }}
                    />
                    <Button fullWidth variant='contained' color='primary' type='submit'>Submit</Button>


                </form>
            </Container>
        )
    }
}

export default withRouter(withStyles(useStyles)(UserLogin))


