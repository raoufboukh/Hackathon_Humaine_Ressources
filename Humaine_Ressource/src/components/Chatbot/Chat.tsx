/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

interface Chat {
  id: number;
  message: string;
  sender: string;
}

interface Question {
  id: number;
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the company culture like?",
    answer:
      "Our company culture is collaborative and innovative. We value teamwork, creativity, and open communication.",
  },
  {
    id: 2,
    question: "How do I report a concern or issue?",
    answer:
      "You can report a concern or issue by reaching out to your supervisor or HR representative. You can also submit a report through our online portal.",
  },
  {
    id: 3,
    question: "What are the company benefits?",
    answer:
      "Our company offers a range of benefits, including health insurance, retirement plans, and paid time off.",
  },
  {
    id: 4,
    question: "How do I request time off?",
    answer:
      "You can request time off by submitting a request through our online portal or by reaching out to your supervisor. Please provide at least two weeks' notice for vacation requests.",
  },
  {
    id: 5,
    question: "What is the dress code?",
    answer:
      "Our company dress code is business casual. We encourage you to dress professionally and comfortably.",
  },
  {
    id: 6,
    question: "How do I get in touch with HR?",
    answer:
      "You can reach out to HR by email or phone. Our HR team is available to answer your questions and provide support.",
  },
  {
    id: 7,
    question: "What are the working hours?",
    answer:
      "Our standard working hours are Monday through Friday, 8am to 5pm. However, some teams may have different hours or flexible schedules.",
  },
  {
    id: 8,
    question: "How do I access my pay stubs?",
    answer:
      "You can access your pay stubs through our online portal. If you have any issues, please reach out to our payroll team.",
  },
  {
    id: 9,
    question: "What is the company policy on remote work?",
    answer:
      "Our company allows remote work for certain positions. Please check with your supervisor or HR representative to see if you are eligible.",
  },
  {
    id: 10,
    question: "How do I report a work-related injury?",
    answer:
      "If you experience a work-related injury, please report it to your supervisor or HR representative immediately. We will provide support and guidance to ensure your safety and well-being.",
  },
];

const Chatbot = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [message, setMessage] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChats((prevChats) => [
        ...prevChats,
        { id: prevChats.length + 1, message, sender: "Employee" },
      ]);
      setMessage("");
      setTimeout(() => {
        setChats((prevChats) => [
          ...prevChats,
          {
            id: prevChats.length + 1,
            message: "Thank you for your message. We will respond shortly.",
            sender: "HR",
          },
        ]);
      }, 1000);
    }
  };

  const handleSelectQuestion = (question: Question) => {
    setSelectedQuestion(question);
    setChats((prevChats) => [
      ...prevChats,
      {
        id: prevChats.length + 1,
        message: question.question,
        sender: "Employee",
      },
    ]);
    setTimeout(() => {
      setChats((prevChats) => [
        ...prevChats,
        { id: prevChats.length + 1, message: question.answer, sender: "HR" },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">HR Chatbot</h2>
      <div className="flex flex-col h-80 overflow-y-scroll mb-4">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`p-2 ${
              chat.sender === "Employee" ? "bg-blue-100" : "bg-gray-100"
            } rounded-lg mb-2`}
          >
            <p className="text-sm">{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        {questions.map((question) => (
          <button
            key={question.id}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-2 mr-2"
            onClick={() => handleSelectQuestion(question)}
          >
            {question.question}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-between">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
