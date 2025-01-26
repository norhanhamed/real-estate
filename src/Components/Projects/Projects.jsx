
import React, { useState } from 'react';
import img1 from '../../assets/images/1.png';
import img2 from '../../assets/images/2.png';
import img3 from '../../assets/images/3.png';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  function openModal(image) {
    setCurrentImage(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setCurrentImage('');
  }

  return (
    <>
      <section>
        <h2 className="text-7xl text-center translate-y-24 mt-8">our Projects</h2>

        <div className="images grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full max-w-4xl mx-auto mt-30 ">
          {[img1, img2, img3, img4, img5, img1].map((img, index) => (
            <div key={index} className="group relative flex justify-center items-center">
              <img src={img} alt="" />
              <div className="group-hover:opacity-60 transition-all duration-700 opacity-0 absolute inset-0 bg-black"></div>
              <i
                onClick={() => openModal(img)}
                className="group-hover:opacity-60 opacity-0 transition-all duration-700 fa-solid fa-camera text-white absolute fa-2xl cursor-pointer"
              ></i>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={currentImage} 
                className="max-w-full max-h-screen" 
                alt="Project"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-[#B1ACA4] text-white rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
