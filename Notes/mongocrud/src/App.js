import './App.css';
import {BrowserRouter, Link, Route ,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return ( 
      <BrowserRouter>
      <div className="App">
            <div>
                <ul style={{display:'flex',justifyContent:'space-around'}}>
                    <Link to="/">User</Link>
                    <Link to="/createuser">CreateUser</Link>
                    <Link to="/updateuser">UpdateUser</Link>
                </ul>
            </div>

        <Routes>
          <Route path='/' element={<User />}/>
          <Route path='/createuser' element={<CreateUser />}/>
          <Route path='/updateuser' element={<UpdateUser />}/>
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;