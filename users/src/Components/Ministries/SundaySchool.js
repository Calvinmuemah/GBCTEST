import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Ministries.css';

function PrayerMeeting() {
  const [modal, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);
    return (
      <div className="container-M2">
      {/*modal */}
        {modal && (
          <div className="modal-content">
            {/* Close button */}
            <Link
              to = "/Home"
            >
            <button onClick={closeModal}>X</button>
            </Link>
            <h1>Sunday School Ministry</h1>
            <h2>8:00 AM - 10:00 AM</h2>
            <h3><strong>On Sundays</strong></h3>
            <h3>At Grey Apartment</h3>
            <p>Don't miss out on this sweet section to floweryour day with God's words. Come for just a minute or the whole hour as we sing hymns to our Lord and shear the word of God.</p>
          </div>
        )}
      </div>
    )
}

export default PrayerMeeting
