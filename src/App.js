import logo from './logo.svg';
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                         
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
