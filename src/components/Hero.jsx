import PropTypes from 'prop-types';
import { useState } from "react";
import QuizModal from "./QuizModal";

const Hero = () => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <section className="w-full h-screen bg-primary flex justify-center items-center">
      <nav className="flex justify-between p-5 absolute top-0">
        <h2 className="text-6xl fw-600">Quizzo</h2>
      </nav>
      <main className="text-center">
        <h1 className="text-5xl fw-600">Lets Start The Quiz</h1>
        <button className="p-10 py-2 bottom-2 bg-white text-3xl border-2 mt-8 border-black cursor-pointer" onClick={toggleModal}>Start</button>
      </main>
      <QuizModal modalActive={modalActive} closeModal={toggleModal} />
    </section>
  );
}

Hero.propTypes = {
  modalActive: PropTypes.bool.isRequired,
};

export default Hero;
