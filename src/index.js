import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mobile from './Mobile';
import WealthApp from './components/desktop/WealthApp';
import CommercialApp from './components/desktop/CommercialApp';
import registerServiceWorker from './registerServiceWorker';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles/common.css';

const Root = () => {
    return (
        <Router>
            <div className="App">
                <Route exact={true} path="/" component={Mobile} />
                <Route path="/wealth" component={WealthApp} />
                <Route path="/commercial" component={CommercialApp} />
                <Route path="/mobile" component={Mobile} />
            </div>
        </Router>
    )
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
