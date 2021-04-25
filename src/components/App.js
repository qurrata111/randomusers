import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="mt-4 mb-4 text-center">Random User Generator</h2>
            </div>
            <Users/>
          </div>
        </div>
      
    </div>
  );
}

export default App;
