import React, { useState } from 'react';
import './App.css';
import GeneralHeader from './Header';

function App() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [responseText, setResponseText] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedImage(file);
    }
  };

  const handleProcessImage = async () => {
    if (!uploadedImage) {
      alert("Please upload an image before processing!");
      return;
    }

    // Create form data to send to the API
    const formData = new FormData();
    formData.append("image", uploadedImage);
    formData.append("text", "Camouflage detection request");

    try {
      const response = await fetch("http://127.0.0.1:5000/process", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error processing image");
      }

      // Parse the response
      const blob = await response.blob(); // Assuming the API returns the processed image
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);

      const textResponse = response.headers.get("Response-Text") || "Processed successfully";
      setResponseText(textResponse);

    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <GeneralHeader />
      <div className="AppContent">
        <h2>Camouflaged Object Detection using SINET and PSPNet</h2>
        <p>Authored by: Raymond Lyon, Nate Nelson, Junno Yun</p>
        <h2>Demo</h2>
        <p>
          Upload or take a picture. The photo will be processed through each model and searched for hidden objects. Your photo is not saved by us.
        </p>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={handleImageUpload} />
        <button type="submit" onClick={handleProcessImage}>Process</button>

        {uploadedImage && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />
          </div>
        )}

        {processedImage && (
          <div>
            <h3>Processed Image:</h3>
            <img src={processedImage} alt="Processed" style={{ maxWidth: '100%', marginTop: '20px' }} />
          </div>
        )}

        {responseText && (
          <div>
            <h3>API Response:</h3>
            <p>{responseText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
