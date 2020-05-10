import React,{Component} from 'react';
import Result from './Result';
import calculatePizzasNeeded from './Calculate';
import Input from './Input';


const initialState = {
 
  age:" ",
  numberOfChild: " ",
  numberOfParent: " ",
  slicesPerChild: " ",
  slicesPerParent: " ",
  slicesPerPizza:" ",
  
};

export default class Form extends Component {
  state = { ...initialState };
updateSlicesPerPizza=event=>{
  const slicesPerPizza = parseInt(event.target.value);
  this.setState({slicesPerPizza});
}
updateAge = event =>{
  const age=parseInt(event.target.value);
  this.setState({age});
}


  updateNumberOfChild = event => {
    const numberOfChild = parseInt(event.target.value);
    this.setState({ numberOfChild });
  };
  updateNumberOfParent = event => {
    const numberOfParent= parseInt(event.target.value);
    this.setState({ numberOfParent });
  };
  updateSlicesPerChild = event => {
    const  slicesPerChild= parseInt(event.target.value);
    this.setState({  slicesPerChild });
  };
  updateSlicesPerParent = event => {
    const  slicesPerParent= parseInt(event.target.value);
    this.setState({  slicesPerParent });
  };
  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfChild,numberOfParent,slicesPerChild,  slicesPerParent,
    age} = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfChild,
      numberOfParent,
      slicesPerChild, 
      slicesPerParent,
     
    );
    
    let order=" ";
        
    if(this.state.age>=18){
    order=<div>
    <h3>Select Pizza Sizes</h3>
      <div>
      <input className="form-control" type="input"  onChange={this.updateSlicesPerPizza} placeholder="small/medium/large enter 4/6/8 accordingly"/>
     

   </div>
  </div>
  }
  if(this.state.age<18 && this.state.age!==" "){
      order=<h2>Children cannot order</h2>
  }
  
    return (
      <div>
          <div className="form-control">
          <Input
          label="Age"
          type="number"
          min={0}
          value={age}
          onChange={this.updateAge}
        /><br/>
        <Input
          label="Number of Child"
          type="number"
          min={0}
          value={numberOfChild}
          onChange={this.updateNumberOfChild}
        /><br/>
        <Input
          label="Number of Parent"
          type="number"
          min={0}
          value={numberOfParent}
          onChange={this.updateNumberOfParent}
        /><br/>
        <Input
          label="Slices Per Child"
          type="number"
          min={0}
          value={slicesPerChild}
          onChange={this.updateSlicesPerChild}
        /><br/>
        <Input
          label="Slices Per Parent"
          type="number"
          min={0}
          value={slicesPerParent}
          onChange={this.updateSlicesPerParent}
        /><br/>
        {order}
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={this.reset}>
          Reset
        </button>
      </div>
      </div>
     
    );
  }
 }


