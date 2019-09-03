import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
    return( 
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact componet={StreamList} />
            <Route path="/streams/new" exact componet={StreamCreate} />
            <Route path="/streams/edit" exact componet={StreamEdit} />
            <Route path="/streams/delete" exact componet={StreamDelete} />
            <Route path="/streams/show" exact componet={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
};

export default App;
