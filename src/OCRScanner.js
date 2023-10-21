import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";

const OCRScanner = () => {
  const [scannedText, setScannedText] = useState("");


  // useEffect(()=>{
  //   setTimeout(()=>{
      
  //   }, 3000)
  // },[])

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const image = new Image();
      image.src = reader.result;

      const result = await Tesseract.recognize(image, "eng" , {
        logger: (info) => console.log(info),
      
        
      });

      setScannedText(result.data.text);
    };

    reader.readAsDataURL(file);
  };

  const renderRows = () => {
    const rows = scannedText.split("\n");
    return rows.map((row, index) => (
      <div
        style={{ borderBottom: "1px solid gray", padding: "10px" }}
        key={index}
      >
        {index} {row}
      </div>
    ));
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width:"100%",
    paddingTop: "50px",
  };
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
      <div style={containerStyle}>
        <input
          style={{
            padding: "10px 20px",
            backgroundColor: "#212112",
            color: "white",
          }}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {scannedText && (
          <div
            style={{
              color: "#ffffff",
              padding: "10px 20px",
              width: "100%",
              height: "100vh",

              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
            }}
          >
            <div
              style={{
                width: "800px",
                height: "500px",
                overflow: "scroll",
                marginTop: "100px",
              }}
            >
              Scanned Text: {renderRows()}
            </div>
            
            
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRScanner;
