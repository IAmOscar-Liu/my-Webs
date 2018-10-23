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
    
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : parseInt(this.numberInput.value)
      const name = target.name;
  
      this.setState({
        [name]: value
      },()=>console.log(this.state.isGoing,this.state.numberOfGuests));
      //this.showResult()
    }
    
    handleCheckboxChange(event){
      //console.log(event.target.tagName)
      let x = [this.checkbox1.checked,this.checkbox2.checked]
      this.setState({isGoing:x},()=>console.log(this.state.isGoing,this.state.numberOfGuests))
      //this.showResult()
    }
  
    render() {
      return (
        <form>
          <label>
            Is going1:
            <input
              ref = {e => this.checkbox1 = e}
              id = "ch1"
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing[0]}
              onChange={this.handleCheckboxChange} />
          </label>
          <label>
            Is going2:
            <input
              ref = {e => this.checkbox2 = e}
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
              ref = {el => this.numberInput = el}
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  