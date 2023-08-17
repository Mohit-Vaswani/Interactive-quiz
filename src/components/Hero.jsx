import PropTypes from 'prop-types';
import { useState } from "react";
import QuizModal from "./QuizModal";
import Saly from "/src/assets/Saly.svg"
import { quizData } from '../quizdata';

const Hero = () => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
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
        <h1 className='text-6xl'>Are you Ready For the Quizzo?</h1>
        <h2 className='my-10 text-4xl'>Choose One Topic 🏆</h2>
        <div className='flex flex-wrap gap-5 w-9/12 justify-center'>
          {quizData.topics.map((item) => (
            <span className='quiz-topic' key={item.id}>
              {item.topic}
            </span>
          ))}
        </div>

        <button className="p-10 py-3 border-2 border-white text-3xl font-semibold my-10" onClick={toggleModal}>Start the Quiz</button>
      </main>
      <QuizModal modalActive={modalActive} closeModal={toggleModal} />
    </section>
  );
}

Hero.propTypes = {
  modalActive: PropTypes.bool.isRequired,
};

export default Hero;
