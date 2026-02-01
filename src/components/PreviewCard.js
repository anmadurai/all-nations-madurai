import React, { useRef } from 'react';
import '../styles/HoverPreview.css';

const PreviewCard = ({ videoId }) => {
  const videoRef = useRef(null);

  return (
    <div
      className="preview-card"
      onMouseEnter={() => videoRef.current.play()}
      onMouseLeave={() => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }}
    >
      <video
        ref={videoRef}
        muted
        loop
        className="preview-video"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <div className="preview-overlay"></div>
    </div>
  );
};

export default PreviewCard;
