import React from "react"
import "./styles/App.css"
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Footer from "./components/Footer/Footer"


import { GlobalProvider } from "./Context/GlobalState"
import LandingPage from "./components/pages/LandingPage";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact  from "./components/pages/Contact";
import Plans from "./components/pages/Plans";

import { Switch, Route } from "react-router-dom"
import ModalOverlay  from "./components/pages/ModalOverlay";


class App extends React.Component {


render(){
    return <GlobalProvider>
        <Route exact path={`/portfolio/:active_tab/:index/:eachItem`} render={ ({match}) => <ModalOverlay {...match}  /> } /> 

        <div className="main">
        <Menu/>
        <Header/>
        <Switch>
            <Route exact path="/" render={()=> <LandingPage/>}/>
            <Route  path="/plans"  render={()=> <Plans/>}/>
            <Route  path="/about" render={()=> <About/>}/>
            <Route  path="/portfolio" render={()=> <Portfolio/>}/>
            <Route  path="/contact" render={()=> <Contact/>}/>
        </Switch>

        
        <Footer/>


        </div>
        </GlobalProvider>
        
    }
}
export default App;