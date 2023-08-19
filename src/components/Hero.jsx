import PropTypes from 'prop-types';
import { useState } from "react";
import QuizModal from "./QuizModal";
import Saly from "/src/assets/Saly.svg"
import { quizData } from '../quizdata';
// import QuizOne from './QuizOne'; 

const Hero = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null); // Added state for selected topic

  const toggleModal = (topicId) => {
    setSelectedTopic(topicId); // Set the selected topic before opening the modal
    setModalActive(!modalActive);
  };

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <aside className='w-4/12 h-screen bg-primary'>
        <nav className="flex items-center justify-center p-5 w-full flex-col">
          <h2 className="text-7xl font-semibold text-center">Quizzo</h2>
          <img src={Saly} alt="" className='mt-16 imageAnimation' />
        </nav>
      </aside>
      <main className="w-8/12 h-screen bg-black text-white p-6 px-10 Handjet flex flex-col items-center">
      <h1 className='text-6xl font-semibold'>Are you Ready For the Quizzo?</h1>
        <h2 className='my-10 text-4xl font-semibold'>Choose One Topic to Start 🏆</h2>
        <div className='flex flex-wrap gap-5 w-9/12 justify-center'>
          {quizData.topics.map((item) => (
            <span
              className='quiz-topic'
              key={item.id}
              onClick={() => toggleModal(item.id)} // Add onClick event to open modal with selected topic
            >
              {item.topic}
            </span>
          ))}
        </div>
      </main>
      <QuizModal modalActive={modalActive} closeModal={toggleModal} selectedTopic={selectedTopic} />
    </section>
  );
}

Hero.propTypes = {
  modalActive: PropTypes.bool.isRequired,
};

export default Hero;
