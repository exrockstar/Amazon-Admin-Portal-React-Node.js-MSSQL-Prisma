import React from 'react';

import { Route, Switch} from 'react-router-dom'

import Layout1 from './layouts/Layout1';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Route path="/" component={Layout1} />
            </div>
        );
    }
}

export default App;
