import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, {fakeAuth} from "./Login";
import Others from "./Others";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      classlist: ['Lili']
    }
  }

  toggleItalic = () =>{
    //console.log(this.state.classlist.includes('myLili'))
      if(this.state.classlist.includes('myLili')){
        let cl = this.state.classlist;
        cl.splice(cl.indexOf('myLili'),1)
        this.setState({classlist: cl}, ()=>console.log(this.state.classlist))
      } else {
        let cl = this.state.classlist;
        cl.push('myLili')
        this.setState({classlist : cl})
      }
  }
  getPathname(k){
     console.log('Here is the pathname',k)
  }

  render() {
    //console.log('this is App',this.props)
    return (
      <div>
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin area</Link>
            </li>
            <li>
              <Link to="/others/hello-world">Others</Link>
            </li>
          </ul>
        </nav>

        <button onClick= {this.toggleItalic} >Toggle italic</button>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
          <Route path="/others/:something" render={(props)=>{
            return (<Others {...props}  weather={'sunny'} getPathname={k=>this.getPathname(k)} />)
          }} />
        </Switch>
      </div>
    );
  }
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};

//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

//Admin component
const Admin = ({ match, history }) => {
  //console.log(history)
  return (
    <div>
      {" "}
      <h2>Welcome admin </h2>
      <button onClick={()=>{
        fakeAuth.authenticate(()=>history.push('/'))
      }}>Log out</button>
    </div>
  );
};


export default App;
