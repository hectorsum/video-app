import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Button from './components/Button';

ReactDOM.render(<HelloWorld/>,document.getElementById('app'));
ReactDOM.render(<Button text={"Click Me"} text2={"Click Me 2"}/>, document.getElementById('buttons'));