

class NavDropdownExample extends React.Component {
  constructor(){
    this.state = {
      number:0,
      searchValue:'Search',
      JumbotronDisplay:"none"

    };
    this.onChange = this.onChange.bind(this);
    this.submitText= this.submitText.bind(this);


  }

  handleSelect(eventKey) {
    event.preventDefault();
    this.setState({number:eventKey});
    //alert(`selected ${eventKey}`);
  }
  onChange(){
    this.setState({searchValue:this.myInput.value});
  }

 submitText(e){
   e.preventDefault();
   let text = this.state.searchValue;
   document.getElementById('pText').innerHTML = text;
   document.getElementById('productTitle').innerHTML = text + ' No.1';

   this.setState({searchValue:'', JumbotronDisplay:"block"});
   //this.myInput.placeholder = 'search' ;

 }



  render() {
    return (
    <div>
     <Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav activeKey={this.state.number}  onSelect={k => this.handleSelect(k)}>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  <Navbar.Collapse>
  <Navbar.Form pullRight>
      <FormGroup>
        <FormControl type="text"  placeholder={this.state.searchValue}  onChange={this.onChange}
           inputRef={ref => { this.myInput = ref; }} />
      </FormGroup>{' '}
      <Button onClick={this.submitText}>Submit</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
<p id='pText'>Here are the result</p>
<Jumbotron style={{display:this.state.JumbotronDisplay}}>
  <h1 id='productTitle'>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button bsStyle="primary">buy now</Button>
  </p>
</Jumbotron>
</div>
    );
  }
}

render(<NavDropdownExample />);
