import React from "react"
import "./styles/App.css"
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Footer from "./components/Footer/Footer"


import { GlobalProvider } from "./Context/GlobalState"
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";

import { Switch, Route } from "react-router-dom"
import LandingPage from "./components/pages/LandingPage";
import Contact  from "./components/pages/Contact";
import Plans from "./components/pages/Plans";
import ModalOverlay  from "./components/pages/ModalOverlay";


class App extends React.Component {



render(){
    return <GlobalProvider>
        <Route exact path={`/portfolio/:eachItem`} render={ ({match}) => <ModalOverlay {...match} /> } /> 

        <div className="main">
            
        <Menu/>
        <Header/>

{/* dontforget De on mouse move event(Delet this after reading it project well come back)
and che the note file on the desktop */}

        <div className="container">
        <Switch>
            <Route exact path="/" render={()=> <LandingPage/>}/>
            <Route  path="/plans"  render={()=> <Plans/>}/>
            <Route  path="/about" render={()=> <About/>}/>
            <Route  path="/portfolio" render={()=> <Portfolio/>}/>
            <Route  path="/contact" render={()=> <Contact/>}/>
        </Switch>

        </div>
        <Footer/>


        </div>
        </GlobalProvider>
        
    }
}
export default App;