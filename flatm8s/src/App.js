import React from 'react';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Error from './pages/Error';
import UserLogin from "./pages/UserLogin";
import ConnectToFlat from "./pages/ConnectToFlat";
import {Switch, Link, Route, useLocation} from 'react-router-dom'
import {Button, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


function App() {
    const location = useLocation()
  return (
          <NavBar props={location.state}/>
  );
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#3f51b5',
        color: 'white',
        flexGrow: 1,
        borderRadius: 5,
    },
    title: {
        flexGrow: 1,
    },
    colour: {
        color: "white",
    },
}));

function NavBar(props) {
    const classes = useStyles()

    function signOut() {
        console.log('this works', props?.props)
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Authorization", props.props.token);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("http://localhost:4000/users/logout", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)

            })
            .catch(error => console.log('error', error));
    }

    let test
    if (typeof props.props === "undefined") {
        test = 'here'
        return (
            <>
                <div className={classes.root}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>Flatm8s</Typography>
                        <Typography variant="h6" className={classes.title}>{test}</Typography>
                        <Link to={{pathname: '/', state: props.props}}>
                            <Button className={classes.colour} color="inherit">Home</Button>
                        </Link>
                        <Link to='/UserLogin'><Button color="inherit" className={classes.colour}>Login</Button></Link>
                        <Link to='/SignUp'><Button color="inherit" className={classes.colour}>SignUp</Button></Link>
                    </Toolbar>

                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/UserLogin" component={UserLogin} />
                    <Route component={Error} />
                </Switch>
            </>
        )
    } else {
        test = `Hi there ${props.props.firstName}!`
        return (
            <>
                <div className={classes.root}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>Flatm8s</Typography>
                        <Typography variant="h6" className={classes.title}>{test}</Typography>
                        <Link to={{pathname: '/', state: props.props}}>
                            <Button className={classes.colour} color="inherit">Home</Button>
                        </Link>
                        <Link to={{pathname: '/ConnectFlat', state: props.props}}>
                            <Button color="inherit" className={classes.colour}>Find a flat</Button>
                        </Link>
                        <Link to='/'>
                            <Button color="inherit" onClick={signOut} className={classes.colour}>Sign Out</Button>
                        </Link>
                    </Toolbar>

                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/ConnectFlat" component={ConnectToFlat} />
                    <Route component={Error} />
                </Switch>
            </>
        )
    }

}

export default App;