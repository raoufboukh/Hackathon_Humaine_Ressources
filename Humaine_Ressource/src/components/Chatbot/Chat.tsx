import { useState } from "react";

interface Chat {
  id: number;
  message: string;
  sender: string;
}

interface Question {
  id: number;
  question: string;
  keywords: string[];
  answer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the company culture like?",
    keywords: ["culture", "collaborative", "innovative"],
    answer:
      "Our company culture is collaborative and innovative. We value teamwork, creativity, and open communication.",
  },
  {
    id: 2,
    question: "How do I report a concern or issue?",
    keywords: ["report", "concern", "issue"],
    answer:
      "You can report a concern or issue by reaching out to your supervisor or HR representative. You can also submit a report through our online portal.",
  },
  {
    id: 3,
    question: "What are the company benefits?",
    keywords: ["benefits", "health", "insurance", "retirement"],
    answer:
      "Our company offers a range of benefits, including health insurance, retirement plans, and paid time off.",
  },
  {
    id: 4,
    question: "How do I request time off?",
    keywords: ["time off", "vacation", "leave"],
    answer:
      "You can request time off by submitting a request through our online portal or by reaching out to your supervisor. Please provide at least two weeks' notice for vacation requests.",
  },
  {
    id: 5,
    question: "What is the process for applying for a promotion?",
    keywords: ["promotion", "career", "advancement"],
    answer:
      "The process for applying for a promotion involves submitting an application, meeting with your manager, and participating in an interview. Please refer to our internal job board for open positions and the requirements for each role.",
  },
  {
    id: 6,
    question: "How do I access my pay stubs and tax documents?",
    keywords: ["pay stub", "tax", "documents"],
    answer:
      "You can access your pay stubs and tax documents through our online employee portal. If you need assistance, please contact the payroll department.",
  },
  {
    id: 7,
    question: "What is the company's policy on remote work?",
    keywords: ["remote work", "work from home", "flexible"],
    answer:
      "We have a flexible remote work policy that allows eligible employees to work from home. Please speak with your manager or HR to learn more about the requirements and approval process.",
  },
  {
    id: 8,
    question: "How can I get reimbursed for business expenses?",
    keywords: ["expense", "reimbursement", "business"],
    answer:
      "To get reimbursed for business expenses, you'll need to submit an expense report with receipts through our online expense management system. Please review the company's expense policy for more details.",
  },
  {
    id: 9,
    question:
      "What kind of professional development opportunities are available?",
    keywords: ["training", "development", "learning"],
    answer:
      "We offer a variety of professional development opportunities, including job-specific training, leadership development programs, and tuition reimbursement. Speak with your manager or HR to learn more about the options available to you.",
  },
  {
    id: 10,
    question: "How do I update my personal information in the HR system?",
    keywords: ["update", "personal", "information"],
    answer:
      "You can update your personal information, such as your address, phone number, or emergency contacts, by logging into the employee portal and making the necessary changes. If you need assistance, please contact the HR department.",
  },
];

const Chatbot = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [message, setMessage] = useState("");

  const findAnswerByKeyword = (input: string): string | null => {
    for (const question of questions) {
      for (const keyword of question.keywords) {
        if (input.toLowerCase().includes(keyword.toLowerCase())) {
          return question.answer;
        }
      }
    }
    return null;
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChats((prevChats) => [
        ...prevChats,
        { id: prevChats.length + 1, message, sender: "Employee" },
      ]);

      const answer = findAnswerByKeyword(message);
      setMessage("");

      if (answer) {
        setTimeout(() => {
          setChats((prevChats) => [
            ...prevChats,
            { id: prevChats.length + 1, message: answer, sender: "HR" },
          ]);
        }, 1000);
      } else {
        setTimeout(() => {
          setChats((prevChats) => [
            ...prevChats,
            {
              id: prevChats.length + 1,
              message:
                "I'm sorry, I didn't understand your question. Could you please rephrase?",
              sender: "HR",
            },
          ]);
        }, 1000);
      }
    }
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
            } rounded-lg mb-2`}>
            <p className="text-sm">{chat.message}</p>
          </div>
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
          onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
