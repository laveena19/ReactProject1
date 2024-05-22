import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CardList from './components/CardList';
import Pagination from './components/Pagination';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Card Viewer</h1>
                <CardList />
                <Pagination />
            </div>
        </Provider>
    );
};

export default App;
