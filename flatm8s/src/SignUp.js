import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {TextField, Container, Button, Typography} from '@material-ui/core'
import * as Constants from './constants'

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        alignItems: 'center'
    },
})


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            surname: '',
            email: '',
            password: ''
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
                "firstName": this.state.firstName,
                "surname": this.state.surname,
                "email": this.state.email,
                "password": this.state.password
            }),
            redirect: 'follow'
        };

        fetch(Constants.URL + '/users/register', requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.userId)
            })
            .catch((error) => {
                console.log((error.status))
            })

        //login
        //redirect

    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <Typography variant='h4'>
                    Create Account
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        required
                        label='First Name'
                        variant='outlined'
                        margin='normal'
                        name='firstName'
                        onChange={(event) =>
                        {this.setState({firstName: event.target.value})}}
                    />
                    <TextField
                        required
                        label='Surname'
                        variant='outlined'
                        margin='normal'
                        name='surname'
                        onChange={(event) =>
                        {this.setState({surname: event.target.value})}}
                    />
                    <TextField
                        required
                        fullWidth
                        label='Enter your Email'
                        variant='outlined'
                        margin='normal'
                        name='email'
                        onChange={(event) =>
                        {this.setState({email: event.target.value})}}
                    />
                    <TextField
                        required
                        fullWidth
                        label='Password'
                        variant='outlined'
                        margin='normal'
                        type='password'
                        name='password'
                        onChange={(event) =>
                        {this.setState({password: event.target.value})}}
                    />
                    <Button fullWidth variant='contained' color='primary' type='submit'>Submit</Button>


                </form>
            </Container>
        )
    }
}

export default withStyles(useStyles)(SignUp)


