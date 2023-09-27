import { useState } from 'react';

import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

import "./styles.css";
function App() {
    const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };
  return (
    <div className='wrapper'>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imageList={images} />
    </div>
  );
}

export default App;
