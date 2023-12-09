import {useEffect} from 'react'


const API_URL = 'http://www.omdbapi.com?apikey=1dae8ebc' 

const App = () => {

  const searchMovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`);
   const data = await response.json();

   console.log(data.Search);

  }
   
  useEffect(() => {
    
  searchMovies('Spiderman');
    
  }, []);
  

  return (
    <div>App</div>
  );
}

export default App