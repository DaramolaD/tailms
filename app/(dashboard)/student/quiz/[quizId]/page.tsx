"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Question {
    id: number;
    question: string;
    options: string[];
    selectedAnswer?: string;
}

export default function QuizActivityPage() {
    const params = useParams();
    const router = useRouter();
    const quizId = params.quizId as string;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Sample quiz data - replace with real data from API
    const quizData = {
        module: "Module 1",
        title: "Introduction to Design Thinking",
        totalQuestions: 10,
        questions: [
            {
                id: 1,
                question: "What is the primary goal of the Empathize phase in Design Thinking?",
                options: [
                    "To understand users' needs, experiences, and motivations",
                    "To generate as many ideas as possible",
                    "To build a working prototype",
                    "To test the final product with users"
                ],
            },
            {
                id: 2,
                question: "Which of the following is NOT one of the five stages of Design Thinking?",
                options: [
                    "Empathize",
                    "Define",
                    "Prototype",
                    "Market Research"
                ],
            },
            {
                id: 3,
                question: "What does 'Ideate' mean in the Design Thinking process?",
                options: [
                    "Generate creative solutions and ideas",
                    "Test the product with users",
                    "Define the problem statement",
                    "Create detailed user personas"
                ],
            },
            {
                id: 4,
                question: "In which phase do you create a clear problem statement?",
                options: [
                    "Empathize",
                    "Ideate",
                    "Define",
                    "Prototype"
                ],
            },
            {
                id: 5,
                question: "What is the purpose of prototyping in Design Thinking?",
                options: [
                    "To create detailed marketing materials",
                    "To test and validate ideas quickly and cheaply",
                    "To finalize the product design",
                    "To train the development team"
                ],
            },
            {
                id: 6,
                question: "What is a key characteristic of Design Thinking?",
                options: [
                    "It is a linear, step-by-step process",
                    "It is human-centered and iterative",
                    "It focuses only on technical feasibility",
                    "It requires expensive tools and software"
                ],
            },
            {
                id: 7,
                question: "Which technique is commonly used during the Empathize phase?",
                options: [
                    "A/B Testing",
                    "User interviews and observations",
                    "Code reviews",
                    "Performance optimization"
                ],
            },
            {
                id: 8,
                question: "What does 'Fail fast, fail cheap' mean in Design Thinking?",
                options: [
                    "Test ideas quickly to learn and iterate",
                    "Avoid taking any risks",
                    "Only build perfect solutions",
                    "Work slowly to prevent mistakes"
                ],
            },
            {
                id: 9,
                question: "In the Test phase, what should you focus on?",
                options: [
                    "Gathering feedback and refining solutions",
                    "Launching the final product",
                    "Writing documentation",
                    "Marketing the product"
                ],
            },
            {
                id: 10,
                question: "What makes Design Thinking different from traditional problem-solving?",
                options: [
                    "It focuses on user needs and iterative improvement",
                    "It requires advanced technical skills",
                    "It always produces perfect solutions on the first try",
                    "It can only be used for digital products"
                ],
            },
        ] as Question[],
    };

    // Correct answers mapping - matching the realistic options above
    const correctAnswers: Record<number, string> = {
        0: "To understand users' needs, experiences, and motivations", // Question 1
        1: "Market Research", // Question 2
        2: "Generate creative solutions and ideas", // Question 3
        3: "Define", // Question 4
        4: "To test and validate ideas quickly and cheaply", // Question 5
        5: "It is human-centered and iterative", // Question 6
        6: "User interviews and observations", // Question 7
        7: "Test ideas quickly to learn and iterate", // Question 8
        8: "Gathering feedback and refining solutions", // Question 9
        9: "It focuses on user needs and iterative improvement", // Question 10
    };

    // Timer effect
    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeRemaining === 0) {
            // Time's up - auto submit
            handleConfirmSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRemaining]);

    // Load saved answer when question changes
    useEffect(() => {
        const savedAnswer = answers[currentQuestion];
        setSelectedAnswer(savedAnswer || "");
    }, [currentQuestion, answers]);

    // Format time as HH:MM:SS
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const handleAnswerSelect = (option: string) => {
        setSelectedAnswer(option);
        setAnswers((prev) => ({
            ...prev,
            [currentQuestion]: option,
        }));
    };

    const handleNext = () => {
        if (currentQuestion < quizData.totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleQuestionNavigation = (questionIndex: number) => {
        setCurrentQuestion(questionIndex);
    };

    const handleSubmitClick = () => {
        // Show confirm modal instead of directly submitting
        setShowConfirmModal(true);
    };

    const handleConfirmSubmit = () => {
        // Handle quiz submission
        console.log("Submitting quiz with answers:", answers);
        // Mark quiz as submitted to show correct/incorrect answers
        setIsSubmitted(true);
        setShowConfirmModal(false);
        setShowSuccessModal(true);
    };

    const handleCompleteQuiz = () => {
        // Navigate to quiz list after success
        setShowSuccessModal(false);
        router.push("/student/quiz");
    };

    const handleCancelSubmit = () => {
        // Close the modal
        setShowConfirmModal(false);
    };

    // Calculate score
    const calculateScore = () => {
        let correct = 0;
        Object.keys(answers).forEach((key) => {
            const questionIndex = parseInt(key);
            if (answers[questionIndex] === correctAnswers[questionIndex]) {
                correct++;
            }
        });
        return correct;
    };

    const score = calculateScore();
    const totalQuestions = quizData.totalQuestions;

    // Check if question is answered
    const isQuestionAnswered = (questionIndex: number) => {
        return answers[questionIndex] !== undefined;
    };

    // Check if answer is correct
    const isAnswerCorrect = (questionIndex: number, option: string) => {
        return correctAnswers[questionIndex] === option;
    };

    // Get answer status for question navigation
    const getQuestionStatus = (questionIndex: number) => {
        if (!isQuestionAnswered(questionIndex)) {
            return "unanswered";
        }
        const userAnswer = answers[questionIndex];
        return isAnswerCorrect(questionIndex, userAnswer) ? "correct" : "incorrect";
    };

    const currentQuestionData = quizData.questions[currentQuestion];
    const questionLetters = ["A", "B", "C", "D"];

    return (
        <div className="flex overflow-hidden bg-gray-06">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/icons/logoBig.svg"
                            alt="TAILMS Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                    </div>
                    <Link
                        href="/student/quiz"
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Leave Quiz
                    </Link>
                </header>

                {/* Quiz Content */}
                <main className="flex-1 flex flex-col overflow-y-auto bg-gray-06">
                    <div className="flex-1 bg-orange-500 min-h-60 flex items-center justify-between px-6">
                    </div>
                    <div className="flex flex-1 gap-11 relative top-[-160px] mx-auto">
                        <div className="max-w-4xl mx-auto py-6">
                            {/* Module Banner */}
                            <div className="flex items-center justify-between">
                                <div className="mb-0 rounded-lg py-5">
                                    <p className="text-sm text-white/90 mb-1">{quizData.module}</p>
                                    <h1 className="text-2xl font-bold text-white">{quizData.title}</h1>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-2xl font-medium text-white/80">
                                        {score}/{totalQuestions} points
                                    </span>
                                </div>
                            </div>

                            {/* Quiz Card */}
                            <div className="flex gap-10">
                                <div className="bg-white rounded-2xl p-6 shadow">
                                    {/* Question Indicator */}
                                    <div className="mb-4">
                                        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                            Question {currentQuestion + 1}
                                        </span>
                                    </div>

                                    {/* Question Text */}
                                    <p className="text-base text-gray-900 mb-6 leading-relaxed">
                                        {currentQuestionData.question}
                                    </p>

                                    {/* Answer Options */}
                                    <div className="space-y-3 mb-6">
                                        {currentQuestionData.options.map((option, index) => {
                                            const isSelected = selectedAnswer === option;
                                            const isCorrect = isAnswerCorrect(currentQuestion, option);
                                            const isIncorrect = isSelected && !isCorrect;

                                            // Before submission: only show selected answer with orange
                                            // After submission: show correct/incorrect with green/red
                                            let circleColor = "bg-gray-400";
                                            let bgColor = "bg-white";
                                            let borderColor = "border-gray-200";
                                            let textColor = "text-gray-900";

                                            if (isSubmitted) {
                                                // After submission: show correct/incorrect answers
                                                if (isCorrect) {
                                                    circleColor = "bg-green-500";
                                                    bgColor = "bg-green-50";
                                                    borderColor = "border-green-500";
                                                    textColor = "text-green-700";
                                                } else if (isSelected && isIncorrect) {
                                                    circleColor = "bg-red-500";
                                                    bgColor = "bg-red-50";
                                                    borderColor = "border-red-500";
                                                    textColor = "text-red-700";
                                                }
                                            } else {
                                                // Before submission: only show selected answer
                                                if (isSelected) {
                                                    circleColor = "bg-gray-400";
                                                    bgColor = "bg-orange-50";
                                                    borderColor = "border-orange-500";
                                                    textColor = "text-gray-900";
                                                }
                                            }

                                            return (
                                                <div
                                                    key={index}
                                                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${!isSubmitted ? "cursor-pointer" : "cursor-default"} flex items-center gap-3 ${bgColor} ${borderColor} ${textColor}`}
                                                    onClick={() => !isSubmitted && handleAnswerSelect(option)}
                                                >
                                                    <div className={`w-8 h-8 ${circleColor} rounded-full flex items-center justify-center shrink-0`}>
                                                        <span className="text-white font-bold text-sm">
                                                            {questionLetters[index]}
                                                        </span>
                                                    </div>
                                                    <span className="font-medium">
                                                        {option}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Navigation Buttons */}
                                    {!isSubmitted && (
                                        <div className="flex items-center justify-end pt-4 border-t border-gray-200">
                                            <button
                                                onClick={handleNext}
                                                disabled={currentQuestion === quizData.totalQuestions - 1 || !isQuestionAnswered(currentQuestion)}
                                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${currentQuestion === quizData.totalQuestions - 1 || !isQuestionAnswered(currentQuestion)
                                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    : "bg-orange-500 text-white hover:bg-orange-600"
                                                    }`}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                    {isSubmitted && (
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <button
                                                onClick={handlePrevious}
                                                disabled={currentQuestion === 0}
                                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${currentQuestion === 0
                                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                            >
                                                Previous
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                disabled={currentQuestion === quizData.totalQuestions - 1}
                                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${currentQuestion === quizData.totalQuestions - 1
                                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {/* Right Sidebar */}
                                <div className="w-80 shrink-0 bg-white rounded-2xl border-l border-gray-200 flex flex-col">
                                    {/* Timer Card */}
                                    <div className="p-6">
                                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                                            <p className="text-sm font-medium text-gray-700 mb-2">Timer</p>
                                            <p className="text-3xl font-bold text-gray-900">
                                                {formatTime(timeRemaining)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Questions Navigation */}
                                    <div className="px-6 pb-6 flex-1">
                                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                                            <p className="text-sm font-medium text-gray-700 mb-4">Questions</p>
                                            <div className="grid grid-cols-5 gap-2">
                                                {Array.from({ length: quizData.totalQuestions }, (_, index) => {
                                                    const isCurrent = index === currentQuestion;
                                                    const status = getQuestionStatus(index);

                                                    let buttonClass = "w-10 h-10 rounded-lg text-sm font-medium transition-colors ";

                                                    if (isSubmitted) {
                                                        // After submission: show correct/incorrect status
                                                        if (isCurrent) {
                                                            buttonClass += "bg-red-500 text-white";
                                                        } else if (status === "correct") {
                                                            buttonClass += "bg-green-500 text-white hover:bg-green-600";
                                                        } else if (status === "incorrect") {
                                                            buttonClass += "bg-red-500 text-white hover:bg-red-600";
                                                        } else {
                                                            buttonClass += "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50";
                                                        }
                                                    } else {
                                                        // Before submission: show current question, answered questions
                                                        if (isCurrent) {
                                                            buttonClass += "bg-orange-500 text-white";
                                                        } else if (isQuestionAnswered(index)) {
                                                            // Answered but not yet submitted - show with light gray to indicate answered
                                                            buttonClass += "bg-gray-100 text-gray-700 hover:bg-gray-200";
                                                        } else {
                                                            // Unanswered questions
                                                            buttonClass += "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50";
                                                        }
                                                    }

                                                    return (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleQuestionNavigation(index)}
                                                            className={buttonClass}
                                                        >
                                                            {index + 1}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit/Finish Button */}
                                    <div className="p-6 pt-0">
                                        <button
                                            onClick={handleSubmitClick}
                                            disabled={isSubmitted || !isQuestionAnswered(currentQuestion)}
                                            className={`w-full bg-orange-500 text-white rounded-lg px-6 py-3 font-bold hover:bg-orange-600 transition-colors ${isSubmitted || !isQuestionAnswered(currentQuestion) ? "opacity-50 cursor-not-allowed" : ""}`}
                                        >
                                            {currentQuestion === quizData.totalQuestions - 1 ? "Finish" : "Submit"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Confirm Submit Modal */}
            {showConfirmModal && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={handleCancelSubmit}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900">
                                    Confirm submit
                                </h2>
                                <button
                                    onClick={handleCancelSubmit}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content */}
                            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>

                            {/* Modal Buttons */}
                            <div className="flex items-center gap-3 justify-end">
                                <button
                                    onClick={handleCancelSubmit}
                                    className="px-6 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmSubmit}
                                    className="px-6 py-2 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Quiz Completed Success Modal */}
            {showSuccessModal && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 z-50"
                        onClick={handleCompleteQuiz}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="bg-white rounded-lg shadow-xl max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h2 className="text-sm font-medium text-gray-01">
                                    Quiz completed
                                </h2>
                                <button
                                    onClick={handleCompleteQuiz}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="grid p-6">
                                <div className="grid gap-4">

                                    {/* Green Checkmark Circle */}
                                    <div className="relative flex justify-center items-center">
                                        <Image src="/icons/sucessIcon.svg" alt="Check" width={24} height={24} className="w-[165px] h-auto text-white" />
                                    </div>

                                    <div className="grid gap-2">

                                        {/* Success Message */}
                                        <h3 className="text-lg font-medium text-gray-01 text-center mb-4">
                                            Job well done!
                                        </h3>

                                        {/* Modal Content */}
                                        <p className="text-sm text-gray-700 mb-6 text-center leading-relaxed">
                                            Lorem ipsum dolor sit amet consectetur. Aliquam nunc ipsum senectus varius dui eu fusce.
                                        </p>
                                    </div>
                                </div>
                                {/* Complete Button */}
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleCompleteQuiz}
                                        className="w-full px-8 py-3 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                                    >
                                        Complete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
