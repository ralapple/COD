import React, { useState } from 'react';
import './App.css';
import GeneralHeader from './Header';

function App() {
  const [uploadedImage, setUploadedImage] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if (e.target.files != null){
      setUploadedImage(URL.createObjectURL(e.target.files![0]));
    };
  };
  
  return (
    <div className="App">
      <GeneralHeader />
      <div className='AppContent'>
      <h2>Camoflauged Object Detection using SINET and PSPNet</h2>
      <p>Authored by: Raymond Lyon, Nate Nelson, Junno Yun</p>
      <h2>Demo</h2>
      <p>Upload or take a picture. The photo will be processed through each model and searched for hidden objects. Your photo is not saved by us.</p>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />}
      <input type='file' accept='.jpg, .jpeg, .png' onChange={handleImageUpload}></input>
      <button type='submit'>Process</button>
      </div>
    </div>
  );
}

export default App;
