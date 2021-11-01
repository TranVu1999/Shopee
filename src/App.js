import {Suspense, lazy} from 'react'
import {Route} from 'react-router-dom';

// Components
import Loading from './user/feature/Layout/Loading';

const OwnerRoll = lazy(() => import("./owner"));
const UserRoll = lazy(() => import("./user"));

function App() {
  return (
    <div className="App">
        <Suspense fallback={<Loading/>}>
            <Route 
                path = "/ban-hang"
                component = {OwnerRoll}
            />

            <Route 
                path = "/"
                component = {UserRoll}
            />
            
        </Suspense>
        
    </div>
  );
}

export default App;
