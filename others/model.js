class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.submitText = this.submitText.bind(this);

    this.state = {
      show: false,
      value:'Enter text',
      number:1
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  printText(text,num){
    document.getElementById('textMessage').innerHTML += "you buy " + text + "<br />";

  }

  submitText(e){
     e.preventDefault();
     let text = this.state.value;
     let num =  parseInt(this.state.number);
     if(num){
          document.getElementById('textValue').innerHTML = text;
          document.getElementById('numValue').innerHTML = num;
          this.setState({ show: false });
          for (let i = 0; i < num; i++){
          //buy that product num times
           this.printText(text,num)
          }
     } else {
       alert("This is not the valid number!!!")
     }


  }


 handleChange(e) {    this.setState({ value:this.myInput.value,number:this.myNum.value});
  }

  render() {
    return (
      <div>
        <p>Click to get the full Modal experience!</p>
        <p id='textValue'>Here are the text value</p>
        <p id='numValue'>Here are the number value</p>
        <p id='textMessage'></p>


        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      <form onSubmit={this.submitText}>
        <FormGroup
          controlId="formBasicText"

        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            placeholder={this.state.value}
           onChange={this.handleChange}
           inputRef={ref => { this.myInput = ref; }}
          />
          <ControlLabel>Number:</ControlLabel>
          <FormControl
            type="text"
            placeholder={1}
           onChange={this.handleChange}
           inputRef={ref => { this.myNum = ref; }}
          />
          <FormControl.Feedback />

        </FormGroup>
      </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitText}>Submit</Button>
            <Button onClick={this.handleClose}>Close</Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

render(<Example />);
