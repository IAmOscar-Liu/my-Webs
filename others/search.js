class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={textValue:'',selectValue:10}
    this.textOnChange = this.textOnChange.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  textOnChange(){
    this.setState({textValue:this.myInput.value});
  }

  selectOnChange(){
    this.setState({selectValue:this.mySelect.value});
  }
  buttonOnClick(){
    let textValue = this.state.textValue;
    let selectValue = this.state.selectValue;
    document.getElementById('productId').innerHTML = textValue;
    document.getElementById('numberId').innerHTML = selectValue;
  }



  render() {
    return (
    <div>
      <Form  inline>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Product </ControlLabel>
          <FormControl type="text" placeholder="search" onChange={this.textOnChange} inputRef={ref => { this.myInput = ref; }}/>

          <FormControl.Feedback />
        </FormGroup>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Number </ControlLabel>{' '}
          <FormControl   componentClass="select"  placeholder={10} onChange={this.selectOnChange} inputRef={ref => { this.mySelect = ref; }}  >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                            <option value={30}>30</option>

           </FormControl>
         </FormGroup>{' '}
         <Button  onClick={this.buttonOnClick}>Send invitation</Button>
      </Form>
      <p id="productId">product</p>
      <p id="numberId">number</p>
      <p >{Math.floor(Math.random() * (200 - 100 + 1)) + 100}</p>


      </div>
    );
  }
}

render(<FormExample />);
