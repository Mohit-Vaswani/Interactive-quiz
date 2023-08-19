import { quizData } from "../quizdata";

const QuizOne = ({ selectedTopic }) => { // Pass the selectedTopic as a prop
  return (
    <div className="quiz_modal p-10 flex justify-center items-center flex-col gap-10 absolute">
      {selectedTopic !== null && (
        <h2 className="text-2xl font-semibold">Questions related to {quizData.topics[selectedTopic - 1].topic}:</h2>
      )}
      {/* Display questions based on the selected topic */}
      {selectedTopic !== null && (
        // Map and display questions based on the selected topic
        quizData.questions
          .filter((question) => question.topicId === selectedTopic)
          .map((question) => (
            <p key={question.id} className="text-xl">
              {question.question}
            </p>
          ))
      )}
    </div>
  );
}

export default QuizOne;
