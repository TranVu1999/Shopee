import {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom';

const OwnerRoll = lazy(() => import("./owner"));
const UserRoll = lazy(() => import("./user"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div></div>}>
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
