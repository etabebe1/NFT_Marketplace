import React from "react";

// INTERNAL IMPORT
import "./Service.css"; // Assuming your stylesheet path
import images from "../../assets/img/z-index.img";

const serviceData = [
  {
    image: images.service1,
    step: "Step 1",
    subTitle: "Filter & Discover",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
  },
  {
    image: images.service2,
    step: "Step 2",
    subTitle: "Connect Wallet",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
  },
  {
    image: images.service3,
    step: "Step 3",
    subTitle: "Start trading",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
  },
  {
    image: images.service4,
    step: "Step 4",
    subTitle: "Earn money",
    description:
      "Connect with wallet, discover, buy NFTs, sell your NFTs and earn money",
  },
];
function Service() {
  return (
    <section className="service-section">
      <div className="service-flex">
        {serviceData.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.subTitle} />
            <div className="service-content">
              <p>{service.step}</p>
              <h4>{service.subTitle}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
