import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const MyComp = () => {
    return (
        <div>
            mounting comp
            <img alt="header" src="/dist/images/header.jpg" className="app-header" />
        </div>
    )
}


async function foo() {
    var s = await bar();
    console.log(s);
  }
  
  function bar() {
    return "bar";
  }

foo();




ReactDOM.render(<MyComp />, document.getElementById('app'));