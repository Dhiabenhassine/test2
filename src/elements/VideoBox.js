import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMAGES } from "../constants/theme";

const VideoBox = () => {
      const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef(null)

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause() // stop video when closing
    }
    setIsOpen(false)
  }
    return (
        <>

            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-8 wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="text-white title mb-4">It's Not <br /> <span className="text-primary">Fitness</span> it's Life</h2>
                    <Link to="/contact-us" className="btn btn-primary btn-skew"><span>Join Now</span></Link>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-4 d-flex justify-content-center align-items-center wow fadeInUp" data-wow-delay="0.4s">
                    <Link 
                    onClick={() => setIsOpen(true)}
                    className="popup-youtube" to="#" 
                    >
                        <span className="video-btn style-2 position-static popup-youtube">
                            <i className="fa fa-play"></i>
                        </span>
                    </Link>
                </div>
            </div>
                {isOpen && (
        <div className="video-modal">
          <div className="video-overlay" onClick={handleClose}></div>
          <div className="video-content">
            <video
              ref={videoRef}
              width="800"
              height="450"
              controls
              autoPlay
            >
              <source src={IMAGES.BgVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
        <style jsx>{`
        .video-modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
        }
        .video-content {
          position: relative;
          z-index: 10000;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
        }
        .video-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: #ff3c00;
          color: #eccd20ff;
          border-radius: 50%;
          font-size: 30px;
          cursor: pointer;
          transition: 0.3s;
        }
        .video-btn:hover {
          transform: scale(1.1);
          background: #ff6600;
        }
      `}</style>
        </>
    )
}

export default VideoBox