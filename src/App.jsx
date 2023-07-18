import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/CrearInversion/CrearInversion";

function App() {
    return(
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="inicio">
                        <Inicio/>

                        </Route>

                    <Route path="crear-inversion">
                        <CrearInversion />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
