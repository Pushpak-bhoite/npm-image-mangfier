import React from 'react';
import ImageZoom from './components/ImageZoom';
import ImageMagnifier from './components/ImageMagnifier';

const App: React.FC = () => {
  return (
    <div className="flex m-10 ">
      {/* <ImageZoom   src="https://static.vecteezy.com/system/resources/previews/030/258/039/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg" /> */}
      <ImageMagnifier
        src={'https://media.istockphoto.com/id/1347455404/photo/shot-of-an-unrecognizable-woman-spending-a-day-in-the-city.jpg?s=612x612&w=0&k=20&c=W3-QMPd9D-ok_upk94ooFtb3wnWUZW4Gu8dtYRH3fKI='}
        width={300}
        height={300}
        // enabled={false}
         />
    </div>
  );
};

export default App;
