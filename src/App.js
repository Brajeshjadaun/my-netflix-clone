
import './App.css';
import Row from './row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>hey !</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>


    </div>
  );
}

export default App;
