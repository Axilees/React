import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from "./components/ui/ButtonAppBar";
import PaperSheet from "./components/ui/PaperSheet";
import UserPage from "./components/pages/UserPage";
import ToDoPage from "./components/pages/ToDoPage";
import {Route,Switch,withRouter} from 'react-router-dom';

class App extends Component {

    handleRouteChange = (route) => {
        this.props.history.push("/"+route);
    }
    render() {
        return (
                <div className="App">
                    <ButtonAppBar handlePageOpen={this.handleRouteChange}/>
                    <Switch>
                        <Route path={"/users"} exact={true} component={UserPage}/>
                        <Route path={"/todos"} exact={true} component={ToDoPage}/>
                        <Route path={"/"} exact={true} render={() => (
                            <PaperSheet title={"This is test React Material Application"}
                                        text={"Please Choose Page"}/>
                        )}/>
                    </Switch>
                </div>
        );
    }
}

export default withRouter(App);
