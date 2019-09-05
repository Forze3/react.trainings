import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './streams/SreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

import Header from './Header';

const App = () => {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
};

export default App;
