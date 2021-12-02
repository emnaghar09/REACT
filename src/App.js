import logo from './logo.svg';
import './App.css';
import {Form, Button} from 'react-bootstrap'; 
function App() {
  return (
    <div className= "APP" >
     <div className= "container" >
    <Form>

    <div className= "row">
    <div className= "col">  

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

    </div>
    <div className= "col">  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </div>
  <div className= "col">  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
  </div>
</Form>
</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div className= "container">
    <div className= "row">
    <div className= "col">     VIRTUAL DOM      </div>
    <div className= "col">   VS      </div>
      <div className= "col">      REAL DOM      </div>

    </div>
    <div className= "row">
    <div className= "col">   
    The V.DOM React maintains two Virtual DOMs at once, one contains the updated Virtual DOM and one which is just the pre-updated version.
    </div>
      <div className= "col">
      Now, it compares the pre-updated version with the updated Virtual DOM and figures out what exactly has changed in the DOM.
      </div>
      <div className= "col">
      This process is known as ‘diffing’. Once React finds out what exactly has changed, it only updates the affected objects on Real DOM
        </div>
    <div className= "col">
      This significantly improves its performance and it is the main reason why Virtual DOM is loved by developers everywhere.
      </div>
      </div>
    </div>
    </div>

  );
}

export default App;
