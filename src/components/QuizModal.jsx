import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImCross } from 'react-icons/im'
import { GoTrophy } from 'react-icons/go'
import classNames from 'classnames';
import QuizOne from './QuizOne';

const QuizModal = ({ modalActive, closeModal }) => {
  const [active, setActive] = useState('active');

  const toggleClassName = () => {
    if(active === 'active') {
      setActive('inactive')
    } else{
      setActive('active')
    }
  }

  const combinedClassNames = classNames('quiz_modal', 'p-10', 'relative', 'flex', 'justify-center', 'items-center', 'flex-col', 'gap-10', active);

    return (
      <div className="main-modal bg-white" style={{ display: modalActive ? 'flex' : 'none' }}>
        <QuizOne/>
        <div className={combinedClassNames}>
          <span className='border-2 p-6 border-black rounded-md'><GoTrophy fontSize={'30px'}/></span>
          <h2 className='text-5xl font-semibold'>Now Game On</h2>
          <p className='text-xl font-medium'>Answer 5 simple questions to win the quiz</p>
          <button onClick={toggleClassName} className='text-white rounded-full px-8 py-3 text-xl font-medium bg-gray-700 hover:bg-gray-800 transition-all duration-500 flex gap-3 items-center' > <span><GoTrophy fontSize={'20px'}/></span> Lets take the quiz</button>
          <button onClick={closeModal} className='absolute top-0 right-0 m-3'><ImCross/></button>
        </div>
      </div>
    );
  };

  QuizModal.propTypes = {
    modalActive: PropTypes.bool.isRequired,
    closeModal: PropTypes.bool.isRequired,
  };
  
  export default QuizModal;
  