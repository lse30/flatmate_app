import React from 'react'
import {Typography} from '@material-ui/core'
import { useLocation } from 'react-router-dom'


export default function Home() {


        const location = useLocation()
        return (
            <Typography variant='h4'>
                {location?.state?.firstName? "Welcome " + location.state.firstName : "Home"}
            </Typography>
        );



}

