import React from 'react';
import ImageZoom from './components/ImageZoom';

const App: React.FC = () => {
  return (
    <div className="flex m-10 ">
      <ImageZoom   src="https://static.vecteezy.com/system/resources/previews/030/258/039/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg" />
    </div>
  );
};

export default App;
