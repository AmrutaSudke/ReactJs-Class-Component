
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />

      <h1> This Is App Component</h1>
     <hr />
      <Section />
      <hr />
      <h1> This Is App Component</h1>
     <hr />
    
     <Footer />
     <hr />
    </div>
  );
}

export default App;



class Header extends React.Component {
render(){
return <h1 className="section">This is Class Header Component</h1>
}
}


class Section extends React.Component {
  render(){
  return <h1 className="section">This is Class Section Component</h1>
  }
  }
  
  

class Footer extends React.Component {
render(){
return <h1 className="footer">This is Class Footer Component</h1>
}
}
