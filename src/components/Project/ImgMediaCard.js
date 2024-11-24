import React from "react";
import "./Project.css";
import img1 from "../../assets/ej2-javascript-ui-controls.png";
import img2 from "../../assets/boldbi.png";
export const ImgMediaCard = () => {
  const services = [
    {
      title: "EJ2-Syncfusion Control",
      description:
        "Essential JS 2 is a modern JavaScript UI library built with TypeScript, offering lightweight, responsive, and modular controls compatible with React, Angular, and Vue. It includes data visualization tools like diagrams, barcodes, and QR code generators for creating flowcharts, mind maps, and organizational charts. I contributed to developing the diagram control and the React-based Diagram Builder application.",
      image: img1, // Replace with your actual image path
    },
    {
      title: "Bold BI",
      description:
        "As a part of the Bold BI team, I developed and integrated custom dashboards using React to deliver dynamic data visualization solutions. I enhanced data connectivity by implementing REST APIs and optimizing data integrations, ensuring seamless access across platforms. Focused on performance and scalability, I improved page speed by 20% and enhanced SEO for the Bold BI platform.",
      image: img2, // Replace with your actual image path
    },
  ];

  return (
    
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <div className="service-content">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
