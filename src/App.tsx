import React from 'react';
import ImageZoom from './components/ImageZoom';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ImageZoom src="https://m.media-amazon.com/images/I/71xuYczfLBL._AC_UL320_.jpg" />
    </div>
  );
};

export default App;
