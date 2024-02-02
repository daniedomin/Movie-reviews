import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const sampleMovies = [
    {
      title: 'Happy Gilmore',
      image: 'happygilmore.jpg',
      synopsis: 'An aspiring professional hocky player finds his calling in professional golf.',
    },
    {
      title: 'Willy Wonka and the Chocolate Factory',
      image: 'willywonka.jpg',
      synopsis: 'A poor boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonkas mysterious chocolate factory.',
    },
    
  ];

  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={sampleMovies} />
    </div>
  );
};

export default App;

