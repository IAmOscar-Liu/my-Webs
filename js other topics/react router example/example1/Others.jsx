import React from 'react';

class Others extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
      //console.log(this.props.location.pathname);
      this.props.getPathname(this.props.location.pathname)
    }
    handleClick(){
      this.props.history.push('/')
    }



    render(){
      return (
        <div>
           <p>This is the other route</p>
           <p>It's {this.props.weather}</p>
           <button onClick={()=>this.handleClick()}>Go back</button> 
        </div>
      )
    }


}

export default Others