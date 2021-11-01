import {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom';

// Components
import Loading from './user/feature/Layout/Loading';

const OwnerRoll = lazy(() => import("./owner"));
const UserRoll = lazy(() => import("./user"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route 
                path = "/ban-hang"
                component = {OwnerRoll}
            />
            
            <Route 
                path = "/"
                component = {UserRoll}
            />
            </Switch>

             
            
        </Suspense>
        
    </div>
  );
}

export default App;
