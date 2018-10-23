 /** Method 1:Using bind(this) ** */

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: [false,false],
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    
    showResult(){
      console.log(this.state.isGoing,this.state.numberOfGuests)
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
      const name = target.name;
  
      this.setState({
        [name]: value
      });
      this.showResult()
    }
    
    handleCheckboxChange(event){
      let x = this.state.isGoing;
      if(event.target.id === "ch1"){
        x[0] = event.target.checked;
        this.setState({isGoing:x})      
      }else{
        x[1] = event.target.checked;
        this.setState({isGoing:x})     
      }
      this.showResult()
    }
  
    render() {
      return (
      <div>   
        <form>
          <label>
            Is going1:
            <input
              id = "ch1"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing[0]}
              onChange={this.handleCheckboxChange} />
          </label>
          <label>
            Is going2:
            <input
              id = "ch2"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing[1]}
              onChange={this.handleCheckboxChange} />
          </label>
  
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
        <p>{this.state.isGoing[0]?'True':'False'}{this.state.isGoing[1]?'True':'False'};{this.state.isGoing,this.state.numberOfGuests}</p> 
      </div>  
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );


  /** Method 2:Using callback function ** */
  
  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: [false,false],
        numberOfGuests: 2
      };
  
      //this.handleInputChange = this.handleInputChange.bind(this);
      //this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    
    // showResult(){
    //   console.log(this.state.isGoing,this.state.numberOfGuests)
    // }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
      const name = target.name;
  
      this.setState({
        [name]: value
      },()=>console.log(this.state.isGoing,this.state.numberOfGuests));
     // this.showResult()
    }
    
    handleCheckboxChange(event){
      let x = this.state.isGoing;
      if(event.target.id === "ch1"){
        x[0] = event.target.checked;
        this.setState({isGoing:x},()=>console.log(this.state.isGoing,this.state.numberOfGuests))      
      }else{
        x[1] = event.target.checked;
        this.setState({isGoing:x},()=>console.log(this.state.isGoing,this.state.numberOfGuests))     
      }
      //this.showResult()
    }
  
    render() {
      return (
      <div>    
        <form>
          <label>
            Is going1:
            <input
              id = "ch1"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing[0]}
              onChange={e=>this.handleCheckboxChange(e)} />
          </label>
          <label>
            Is going2:
            <input
              id = "ch2"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing[1]}
              onChange={e=>this.handleCheckboxChange(e)} />
          </label>
  
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={e=>this.handleInputChange(e)} />
          </label>
        </form>
        <p>{this.state.isGoing[0]?'True':'False'}{this.state.isGoing[1]?'True':'False'};{this.state.isGoing,this.state.numberOfGuests}</p> 
      </div>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  
