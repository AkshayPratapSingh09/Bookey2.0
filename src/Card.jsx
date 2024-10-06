import React from 'react';
import './card.css';
import ErrorImage from "../public/error.png"; // Assuming you have error.png

const Card = ({ url, id, images, title, description, favicons }) => {
  console.log(favicons);

  const maxDescriptionLength = 100; // Set your desired max length
  const truncatedDescription = description && description.length > 0 
    ? (description.length > maxDescriptionLength 
       ? description.substring(0, maxDescriptionLength) + '...' // Add ellipsis if truncated
       : description)
    : "No Data Provided";

  // Determine the image for the web avatar (favicons take priority here)
  const webAvatarImage = favicons && favicons.length > 0
    ? favicons[0] // Use the first favicon if available
    : (images && images.length > 0
      ? images[0] // If no favicons, use first image from images array if available
      : ErrorImage); // Fallback to error image if neither favicons nor images are available

  // Determine the image for the image preview (images take priority here)
  const previewImage = images && images.length > 0
    ? images[0] // Use the first image from images array
    : (favicons && favicons.length > 0
      ? favicons[0] // If no images, fallback to favicons
      : ErrorImage); // Fallback to error image if both are unavailable

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="card">
        <div className="info">
          <div className="webavatar">
            {/* Web avatar gets favicons first priority */}
            <img src={webAvatarImage} alt="Avatar" className="avatar" />
          </div>
          <div className="card-title">{title}</div>
          <div className="description">{truncatedDescription}</div>
          <div className="img-preview">
            {/* Image preview gets images array first priority */}
            <img src={previewImage} alt="Preview" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
