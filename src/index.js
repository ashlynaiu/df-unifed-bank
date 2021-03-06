import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mobile from './Mobile';
import WealthApp from './components/desktop/WealthApp';
import CommercialApp from './components/desktop/CommercialApp';
import SmartNote from './components/smart-notes/SmartNote';
import Analytics from './components/desktop/Analytics';
import registerServiceWorker from './registerServiceWorker';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles/common.css';

const Root = () => {
    return (
        <Router>
            <div className="App">
                <Route exact={true} path="/" component={Mobile} />
                <Route path="/wealth" component={() => <WealthApp demoState={1} />} />
                <Route path="/smart-note" component={SmartNote} />
                <Route path="/wealth-complete" component={() => <WealthApp demoState={4} />} />
                <Route path="/commercial" component={CommercialApp} />
                <Route path="/analytics" component={Analytics} />
            </div>
        </Router>
    )
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
