import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const ContactCard = () => {
  return (
    <div>




      <div className="p-10 max-w-6xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Information Section (Left on desktop, top on mobile) */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            {/* Flag Circle */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" // Replace with your flag image URL
                alt="UK Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">BIRMINGHAM</h2>
            </div>
          </div>
          <hr className='h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700'/>


          <div className="space-y-2">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
              <p className="text-gray-700">
               Birmingham 3 Stone Close, B38 8QR
              </p>
            </div>
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              <p className="text-gray-700">
              +44 (0) 2080048744
              </p>
            </div>
            {/* Alternative Phone */}
            {/* <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMobileAlt} className="text-primary" />
              <p className="text-gray-700">0872 115 5215</p>
            </div> */}
            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
              <p className="text-gray-700">Opening Hours: 09:00 - 18:00</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <a
                href="mailto:Accounts@euroholidays.co.uk"
                className="text-gray-700 hover:underline"
              >
                Accounts@euroholidays.co.uk
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <a
                href="mailto:Admin@Euroholidays.co.uk"
                className="text-gray-700 hover:underline"
              >
                Admin@Euroholidays.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Map Section (Right on desktop, bottom on mobile) */}
        <div className="mt-6 lg:mt-0">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8204448375084!2d-1.829121784368308!3d52.42779397963132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48706fe34ed58eb9%3A0xf7a52e63418bb1af!2s3%20Stone%20Close%2C%20Birmingham%2C%20B38%208QR%2C%20UK!5e0!3m2!1sen!2suk!4v1605791284326!5m2!1sen!2suk"
            className="w-full h-56 rounded-lg lg:h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>



    <div className="mt-6 mb-6 p-10 max-w-6xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Information Section (Left on desktop, top on mobile) */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            {/* Flag Circle */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" // Replace with your flag image URL
                alt="UK Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">LONDON</h2>
            </div>
          </div>
          <hr className='h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700'/>


          <div className="space-y-2">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
              <p className="text-gray-700">
               Office 5899 321-323 High Road,Chadwell <br />Heath Essex RM6 6AX ,UK


              </p>
            </div>
            {/* Phone Numbers */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-primary" />
              <p className="text-gray-700">
              +44 (0) 2080048744
              </p>
            </div>
            {/* Alternative Phone */}
            {/* <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMobileAlt} className="text-primary" />
              <p className="text-gray-700">0872 115 5215</p>
            </div> */}
            {/* Opening Hours */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
              <p className="text-gray-700">Opening Hours: 09:00 - 18:00</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <a
                href="mailto:Accounts@euroholidays.co.uk"
                className="text-gray-700 hover:underline"
              >
                Accounts@euroholidays.co.uk
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
              <a
                href="mailto:Admin@Euroholidays.co.uk"
                className="text-gray-700 hover:underline"
              >
                Admin@Euroholidays.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Map Section (Right on desktop, bottom on mobile) */}
        <div className="mt-6 lg:mt-0">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.3412222324597!2d0.09389799999999999!3d51.560075000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e034efb8999%3A0x6fba99f4a994d177!2sOffice%205899%2C%20321-323%20High%20Rd%2C%20Chadwell%20Heath%2C%20Essex%20RM6%206AX%2C%20UK!5e0!3m2!1sen!2suk!4v1689801685557!5m2!1sen!2suk"
            className="w-full h-56 rounded-lg lg:h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
    
    
    
    <div>
      <br />
      <br />
    </div>
    
    
    
    
    
    
    </div>
    
  );
};

export default ContactCard;
