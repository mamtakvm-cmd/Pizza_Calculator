import React,{Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Form from './Form';
import Home from './Home';


class Router extends Component{

    constructor(){
        super()
            
        this.state={
            id:'',
            name:'',
            

        }
    }
   
    render(){
        return(
         <BrowserRouter>
           <header>
               <h1><Link to ="/"></Link></h1>
           </header>
<Route exact path="/" component={Home}></Route>
<Route  path="/Form" component={Form}></Route>


 </BrowserRouter>


        )
    }
}

export default Router;