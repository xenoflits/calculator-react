import React from 'react'
import Button from './button'
export default class Buttonpad extends React.Component{
    
    
    render(){
        const but3 = [
            {name: "MC", value:"mc"},
            {name: "M+", value:"mplus"},
            {name: "M-", value:"mmin"},
            {name: "MR", value:"mr"},
            {name: "C", value:"c"},
            {name: "+/-", value:"plusmin"},
            {name: "/", value:"divide"},
            {name: "*", value:"mult"},
            {name: "7", value:"seven"},
            {name: "8", value:"eight"},
            {name: "9", value:"nine"},
            {name: "-", value:"minus"},
            {name: "4", value:"four"},
            {name: "5", value:"five"},
            {name: "6", value:"six"},
            {name: "+", value:"plus"},
            {name: "1", value:"one"},
            {name: "2", value:"two"},
            {name: "3", value:"three"},
            {name: "=", value:"total"},
            {name: "0", value:"zerob"},
            {name: ".", value:"point"}
        ]
        
        return(<div className="buttonpad">
        {but3.map(x=> <Button buttonname={x.name} cn={x.value} clicked={this.props.clicked}/>)}
        </div>)
    }
}