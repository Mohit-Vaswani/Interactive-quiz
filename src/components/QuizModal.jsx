import PropTypes from 'prop-types';

const QuizModal = ({ modalActive, closeModal }) => {
    return (
      <div className="main-modal" style={{ display: modalActive ? 'flex' : 'none' }}>
        <div className="quiz_modal p-10">
          {/* Modal content */}
          <h2>Quiz Modal Content</h2>
          <p>This is some quiz-related content.</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  };

  QuizModal.propTypes = {
    modalActive: PropTypes.bool.isRequired,
    closeModal: PropTypes.bool.isRequired,
  };
  
  export default QuizModal;
  