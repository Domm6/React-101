function App() {
    const [bart,setBart] = React.useState(false)
    
    return(
      <div className="App">
        <h1>Bart Simpson</h1>
        {bart &&
           <div className="value">
          <iframe src="https://giphy.com/embed/26tPplGWjN0xLybiU" width="400" frameBorder="0" ></iframe>
        </div>}
  
        <button className="btn btn-primary" onClick={() => bart(!bart)}>Toggle Bart</button>
      </div>
    );
   
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );