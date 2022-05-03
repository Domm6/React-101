const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const [count,setCount] = React.useState(0)

  return(
    <div className="App">
      <h1>Counter App</h1>
      <div className="value">
        {count}
      </div>
        <button className="btn btn-primary" onClick={() => setCount(count+1)}>Plus One</button>
    </div>
  );

}
