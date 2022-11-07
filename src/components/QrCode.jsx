import "../styles/qr.css";
import image from "../assets/image-qr-code.png";
const QrCode = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={image} alt="QR code" />
      </div>
      <div>
        <h4>Improve your front-end skills by building projects</h4>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCode;
