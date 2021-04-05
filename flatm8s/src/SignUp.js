import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {TextField, Container, Button, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        alignItems: 'center'
    },
}));




export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        console.log(firstName, surname, email, password);
        event.preventDefault();
    }

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography variant='h4'>
                Create Account
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label='First Name'
                    variant='outlined'
                    margin='normal'
                    name='firstName'
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <TextField
                    required
                    label='Surname'
                    variant='outlined'
                    margin='normal'
                    name='surname'
                    onChange={(event) => setSurname(event.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    label='Enter your Email'
                    variant='outlined'
                    margin='normal'
                    name='email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    label='Password'
                    variant='outlined'
                    margin='normal'
                    type='password'
                    name='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button fullWidth variant='contained' color='primary' type='submit'>Submit</Button>



            </form>
        </Container>
    );
}

