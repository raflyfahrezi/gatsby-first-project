//library
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

//component
import Nav from '../component/nav/nav'
import Home from '../component/home/home'

const Index = () => {
    return (
        <Fragment>
            <Nav/>
            <Home/>
        </Fragment>
    )
}

export default Index