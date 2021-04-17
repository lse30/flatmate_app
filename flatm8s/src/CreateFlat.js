import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {TextField, Container, Button } from '@material-ui/core'
import * as Constants from './constants'

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        alignItems: 'center'
    },
})


class CreateFlat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flatName: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        console.log(this.props.token)
        event.preventDefault()
        let myHeaders = new Headers()
        myHeaders.append("content-Type", "application/json")
        myHeaders.append("X-Authorization", this.props.token)
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                "flatName": this.state.flatName,
                "password": this.state.password
            }),
            redirect: 'follow'
        };

        fetch(Constants.URL + '/flats', requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json.flatId)
            })
            .catch((error) => {
                console.log((error.status))
            })


    }

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        fullWidth
                        required
                        label='Flat Name'
                        variant='outlined'
                        margin='normal'
                        name='flatName'
                        onChange={(event) =>
                        {this.setState({flatName: event.target.value})}}
                    />
                    <TextField
                        required
                        fullWidth
                        label='Flat Password'
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

export default withStyles(useStyles)(CreateFlat)


