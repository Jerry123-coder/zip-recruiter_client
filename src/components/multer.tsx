import React, { useState } from 'react';

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);



  const handleSubmit = async () => {
    // preventDefault();

    const formData = new FormData();

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('File uploaded successfully');
      } else {
        console.error('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
  

  return (
    <form onSubmit={(e) => handleSubmit()} > 
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadForm