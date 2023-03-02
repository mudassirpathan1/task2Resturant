import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Header from './component/Layout/Header';
import MealsImage from './assets/meals.jpg';

const App = () => {
  return (
    <div>
      <Header backgroundImage={MealsImage} />
      <h1>Welcome to our restaurant!</h1>
      <p>Here's some text about our restaurant.</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;