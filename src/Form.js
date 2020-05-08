import React,{Component} from 'react';



const url="http://localhost:8000/details";
class Form extends Component{
    constructor(){
        super()
        this.state={
            
            firstname:" ",
            lastname:" ",
            Age:" ",
            quantity:" ",
            Person:" ",
            price:" ",
            size:" "
           
        }
        
      } 
      
        
          
    handleChangeFname(event){
        this.setState({firstname:event.target.value})
    }
    handleChangeLname(event){
        this.setState({lastname:event.target.value})
    }
    handleChangeAge(event){
        this.setState({Age:event.target.value})
    }
    handleChangeSQuant(event){
        this.setState({quantity:event.target.value})
        
  }
    handleChangePerson(event){
        this.setState({Person:event.target.value})
    }
    handleChangeSize(event){
      this.setState({size:event.target.value})
    }
    handleSubmit(){
      var id = Math.floor(Math.random()*10000)
      var data={
          "id":id,
          "firstname":this.state.firstname,
          "lastname":this.state.lastname,
          "Age":this.state.Age,
          "quantity":this.state.quantity,
          "Person":this.state.Person,
          "price":this.state.price
          
            }
           
   fetch(url,{
       method:'POST',
       headers:{
          'Accept':'application/json',
           'Content-Type':'application/json'
       },
       body:JSON.stringify(data)

   })
  
}
    
    render(){
        let order=" ";
        
            if(this.state.Age>=18){
            order=<div>
            <h3>Select Pizza Sizes</h3>
              <div>
              <input className="form-control" type="input"  onChange={this.handleChangeSize.bind(this)} placeholder="small/medium/large"/>
             
       
           </div>
          </div>
                if(this.state.size==="small"){
                  console.log("hi")
                  if(this.state.quantity===1 && this.state.Person==="child")
                  {
                    this.setState({price:150})
                    
                  }
                  if(this.state.quantity===1 && this.state.Person==="parent")
                  {
                    this.setState({price:300})
          
                  }
                  if(this.state.quantity===2 && this.state.Person==="child")
                  {
                    this.setState({price:200})
                  }
                  if(this.state.quantity===2 && this.state.Person==="parent")
                  {
                    this.setState({price:400})
                  }
                  if(this.state.quantity===3 && this.state.Person==="child")
                  {
                    this.setState({price:350})
                  }


                  if(this.state.quantity===3 && this.state.Person==="parent")
                  {
                    this.setState({price:600})
                  }
                  if(this.state.quantity===4 && this.state.Person==="child")
                  {
                    this.setState({price:400})
                  }
                  if(this.state.quantity===4 && this.state.Person==="parent")
                  {
                    this.setState({price:800})
                  }
                  if(this.state.quantity===5 && this.state.Person==="child")
                  {
                    this.setState({price:550})
                  }
                  if(this.state.quantity===5 && this.state.Person==="parent")
                  {
                    this.setState({price:1000})
                  }
                  if(this.state.quantity===6 && this.state.Person==="child")
                  {
                    this.setState({price:600})
                  }
                  if(this.state.quantity===7 && this.state.Person==="child")
                  {
                    this.setState({price:750})
                  }
                  if(this.state.quantity===8 && this.state.Person==="child")
                  {
                    this.setState({price:800})
                  }
                  if(this.state.quantity===9 && this.state.Person==="child")
                  {
                    this.setState({price:950})
                  }
                }
               
            
               
                
            }
            if(this.state.Age<18 && this.state.Age!==" "){
                order=<h2>Children cannot order</h2>
            }
            
            
           
        return(
            <div>
                   
            <div className="form-group">
                <h1>Fill Your Details Here</h1>
                <input className="form-control" type="input"  onChange={this.handleChangeFname.bind(this)} placeholder="First Name"/>
                <input className="form-control" type="input" onChange={this.handleChangeLname.bind(this)} placeholder="Last Name"/>
                <input className="form-control" type="input"  onChange={this.handleChangeAge.bind(this)} placeholder="Age"/>
                <input className="form-control" type="input"  onChange={this.handleChangeSQuant.bind(this)} placeholder="quantity"/>
               <input className="form-control" type="input"  onChange={this.handleChangePerson.bind(this)} placeholder="Child/Parent"/>
                
               {order}
               
              </div>
              
              <button type="button" className="btn btn-success" onClick={this.handleSubmit.bind(this)}>Submit</button>
        
         </div>
          
         
        )
    }
}

export default Form;