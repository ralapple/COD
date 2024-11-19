import React, { useState } from 'react';
import './App.css';
import GeneralHeader from './Header';


const OverviewText = () => {
  return (
    <div className='overviewText'>
      <h2>Camouflaged Object Detection using SINET and PSPNet</h2>
      <p>Authored by: Raymond Lyon, Nate Nelson, Junno Yun</p>
      <h3>Overview</h3>
      <p>
        This project explores the detection of camouflaged objects in images using deep learning techniques. 
        Camouflaged object detection is a challenging task as these objects are intentionally designed to blend 
        with their surroundings, making them difficult to identify. To address this, we leverage two state-of-the-art 
        models: SINET (Search-Informed Network) and PSPNet (Pyramid Scene Parsing Network). Both models are known for 
        their exceptional ability to analyze complex scenes and identify hidden patterns.
      </p>
      <p>
        The project involves training and testing these models on carefully curated datasets to evaluate their 
        performance in identifying camouflaged objects. We aim to provide an intuitive demo showcasing the models' 
        capabilities and how they can be applied in real-world scenarios, such as wildlife research, surveillance, 
        and defense applications. The demo allows users to upload their images and see how the models process them 
        to reveal hidden objects.
      </p>
      <p>
        This work combines the strengths of cutting-edge deep learning techniques and domain-specific datasets 
        to push the boundaries of visual recognition technology. The results are documented in our final report, 
        which will discuss model architectures, training pipelines, and evaluation metrics, as well as lessons 
        learned and future directions.
      </p>
    </div>
  );
};


const Demo = () => {
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
    <div className='demo'>
        <h2>Try it for Yourself!</h2>
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

  )
};

function App() {


  return (
    <div className="App">
      <GeneralHeader />
      <div className='AppContent'>
        <OverviewText />
        <Demo />
      </div>
    </div>
  );
}

export default App;
