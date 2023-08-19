export const quizData = {
    topics: [
        { id: 1, topic: "Random" },
        { id: 2, topic: "Geography" },
        { id: 3, topic: "History" },
        { id: 4, topic: "Science" },
        { id: 5, topic: "Literature" },
        { id: 6, topic: "Art" },
        { id: 7, topic: "Music" },
        { id: 8, topic: "Movies" },
        { id: 9, topic: "Sports" },
        { id: 10, topic: "Technology" },
        { id: 11, topic: "Mathematics" },
        { id: 12, topic: "Nature" },
        { id: 13, topic: "Cuisine" },
        { id: 14, topic: "General Knowledge" },
        { id: 15, topic: "Language" },
        { id: 16, topic: "Pop Culture" }
    ],
    questions: [
        // Random
        { id: 1, topicId: 1, question: "What is the capital of France?" },
        { id: 2, topicId: 1, question: "Which gas do plants use for photosynthesis?" },
        { id: 3, topicId: 1, question: "What is the square root of 144?" },
        { id: 4, topicId: 1, question: "Who painted the Mona Lisa?" },

        // Geography
        { id: 5, topicId: 2, question: "What is the largest continent by land area?" },
        { id: 6, topicId: 2, question: "Which river is the longest in the world?" },
        { id: 7, topicId: 2, question: "In which country is the Great Barrier Reef located?" },
        { id: 8, topicId: 2, question: "What is the tallest mountain on Earth?" },

        // History
        { id: 9, topicId: 3, question: "Who was the first President of the United States?" },
        { id: 10, topicId: 3, question: "Which ancient civilization built the Great Pyramids of Giza?" },
        { id: 11, topicId: 3, question: "What year did World War II end?" },
        { id: 12, topicId: 3, question: "Who is known for leading the civil rights movement in the United States?" },

        // Science
        { id: 13, topicId: 4, question: "What is the chemical symbol for gold?" },
        { id: 14, topicId: 4, question: "What is the process by which plants make their own food using sunlight?" },
        { id: 15, topicId: 4, question: "What type of energy is stored in the nucleus of an atom?" },
        { id: 16, topicId: 4, question: "What is the unit of measurement for electric current?" },
    ],
    options: [
        // Options for questions
        { id: 1, questionId: 1, options: ["Paris", "London", "Berlin", "Madrid"], correctOption: 0 },
        { id: 2, questionId: 2, options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correctOption: 1 },
        { id: 3, questionId: 3, options: ["12", "9", "10", "15"], correctOption: 2 },
        { id: 4, questionId: 4, options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], correctOption: 0 },
        // ... (continue adding options for other questions)
    ],
    answers: [
        // Answers for questions
        { questionId: 1, correctOption: 0 },
        { questionId: 2, correctOption: 1 },
        { questionId: 3, correctOption: 2 },
        { questionId: 4, correctOption: 0 },
        // ... (continue adding answers for other questions)
    ]
};
