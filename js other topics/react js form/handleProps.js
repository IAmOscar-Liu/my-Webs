
class EmailInput extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        email:  this.props.userEmail,
        prevPropsUserEmail: this.props.userEmail,
        parentCheckboxResult:this.props.checkboxResult
      }
      //this.onClickDiv = this.onClickDiv.bind(this);
    }
    
    static getDerivedStateFromProps(props, state) {
      // Any time the current user changes,
      // Reset any parts of state that are tied to that user.
      // In this simple example, that's just the email.
      if (props.checkboxResult !== state.parentCheckboxResult) {
        return {
          parentCheckboxResult: props.checkboxResult,
        };
      } else if(props.userEmail !== state.prevPropsUserEmail){
           return{

               prevPropsUserEmail: props.userEmail,
              email:  props.userEmail,
           };             
      }
      return null;
    }
  
    handleChange = event => {
      this.setState({ email: event.target.value });
    };
  
    render() {
      return (
       <div>
        <label>
          Email: <input onChange={this.handleChange} value={this.state.email} />
        </label><br/>
         <span>checkbox Result: id1: {this.state.parentCheckboxResult[0]?'true':'false'},   
           id2: {this.state.parentCheckboxResult[1]?'true':'false'},     
           id3: {this.state.parentCheckboxResult[2]?'true':'false'}</span> 
       </div>   
        
      );
    }
    
  }
  
  
  class NumberList extends React.Component {
  //function NumberList(props)
    constructor(props){
      super(props);
      this.state={
         textValue:'',
        userEmail:'karta0989006@gmail.com',
         checkboxResult:[false,false,false]
        }
    }
  
    
    handleCheckbox(e){
      //console.log(e.target.id)
      let getCheckboxResult = this.state.checkboxResult;
      switch(e.target.id){
        case 'box1':  getCheckboxResult[0] = !getCheckboxResult[0]; break;
        case 'box2':  getCheckboxResult[1] = !getCheckboxResult[1]; break;
        case 'box3': getCheckboxResult[2] = !getCheckboxResult[2]; break;
        default: break;  
      }
      //console.log(getCheckboxResult)
      this.setState({checkboxResult:getCheckboxResult},()=>{console.log(this.state.checkboxResult)})
    }
    
    handleTextChange(e){
      this.setState({textValue:e.target.value})
    }
    
    handlePress(){
      console.log(this.state.textValue)
      this.setState({userEmail:this.state.textValue})
    }
    
    componentDidMount(){
      document.querySelector('#h1').style.background = 'yellow'
    }
    
    render(){
      
      return (
       <div>
         <h1 id='h1'>{this.state.order}</h1>                   
          <div>
            <input type="checkbox" id='box1' onClick={e=>this.handleCheckbox(e)} />id1<br/>
            <input type="checkbox" id='box2' onClick={e=>this.handleCheckbox(e)} />id2<br/>
            <input type="checkbox" id='box3'  onClick={e=>this.handleCheckbox(e)}/>id3<br/>
            <input type="text" onChange={e=>this.handleTextChange(e)} />
            <button onClick={()=>this.handlePress()}>Reset</button>
          </div>
          <EmailInput
    
            userEmail={this.state.userEmail}
            checkboxResult = {this.state.checkboxResult}
           />
          
        
       </div>                               
      );
    }
  }  
  
  ReactDOM.render(
    <NumberList  />,
    document.getElementById('root')
  );