import React from 'react';
import Screen from './screen';
import Buttonpad from './buttonpad'

export default class Calculator extends React.Component {
    constructor(){
        super();
        this.state = {
          screenvalue: 0,
          curcalc: 0,
        };
      }

      clicked(e){
        alert(`clicked`+e.target.id);
        this.setState({screenvalue: this.state.screenvalue + 1})
    }
    
    
    
    render(){
        return(<div className="calculator"><div></div>
        <h1 className="calcname">Beta Calculator</h1>
<Screen screenvalue={this.state.screenvalue}/>
<Buttonpad clicked={this.clicked}/>
             </div>)
    }
}