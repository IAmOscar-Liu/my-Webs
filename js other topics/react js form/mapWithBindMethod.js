// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

class ListItem extends React.Component {
  constructor(props){
    super(props);
    //this.onClickDiv = this.onClickDiv.bind(this);
  }
  
  onClickDiv(d){
    console.log(d)
    this.props.onClick(this.props.value);
  }
  
  render(){
    return <li><div onClick={()=>this.onClickDiv('press')} >abe{this.props.value}</div></li>;
  }
}


class NumberList extends React.Component {
//function NumberList(props)
  constructor(props){
    super(props);
    this.state={theNumber:[1,2,3,4,5,6,7,8,9,10,11,12],order:0}
    //this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(i){
    //e.preventDefault(); 
    this.setState({order:i});
  }
  
  render(){
    
    //const numbers = this.props.numbers;
    const numbers = this.state.theNumber;
    
    var show=(k)=>{
          var listItems = numbers.map((number,index) =>{
            if(index === k){
           return(
          <ListItem key={number.toString()}
                    value={number}
                    onClick={e=>this.handleClick(e)}
             />)}
        },this);
       return listItems;
           
    }
    
    // const listItems = numbers.map((number) =>{
    //    return(
    //   <ListItem key={number.toString()}
    //             value={number}
    //             onClick={this.handleClick}
    //      />)
    // },this);
    return (
     <div>
       <h1>{this.state.order}</h1>                             
      <ul>
        {show(3)}
        {show(8)}
        {show(10)}
      </ul>
     </div>                               
    );
  }
}  

ReactDOM.render(
  <NumberList  />,
  document.getElementById('root')
);