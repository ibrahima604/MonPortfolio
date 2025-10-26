import React, { useState } from "react";
import dataset from "./dataset.json";
import stringSimilarity from "string-similarity";
import { px } from "framer-motion";

export default function Iphone15Pro({ width = 400, height = 50, ...props }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour ! Pose-moi une question sur mon parcours 👨‍💻" },
  ]);
  const [input, setInput] = useState("");

  // ✅ Normalisation du texte (accents, majuscules, caractères spéciaux)
  const normalize = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9 ]/g, "")
      .trim();

  // ✅ Synonymes → Amélioration de compréhension
  const synonyms = {
    etudes: ["ecole", "formation", "domaine", "fais quoi comme etudes"],
    diplome: ["certificat", "parcours scolaire"],
    developpement: ["programmation", "dev", "coder"],
    langage: ["code", "programmation"],
    experience: ["travail", "job", "stage"],
  };

  const expandUserInput = (input) => {
    let text = normalize(input);
    for (const key in synonyms) {
      if (synonyms[key].some((s) => text.includes(normalize(s)))) {
        text += " " + key;
      }
    }
    return text;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const processedInput = expandUserInput(input);

    const normalizedQuestions = dataset.map((item) =>
      normalize(item.question)
    );

    const matches = stringSimilarity.findBestMatch(
      processedInput,
      normalizedQuestions
    );

    const bestMatch = matches.bestMatch;
    let botResponse;

    // ✅ Score plus tolérant
    if (bestMatch.rating < 0.35) {
      botResponse =
        "Je ne suis pas sûr d’avoir compris 🤔. Essaie avec des mots comme “études”, “diplôme”, “langages”, “expérience”...";
    } else {
      botResponse = dataset[matches.bestMatchIndex].answer;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    }, 200);

    setInput("");
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z" className="fill-[#E5E5E5] dark:fill-[#404040]" />
      <path d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z" className="fill-white dark:fill-[#262626]" />

      <foreignObject
        x="21.25"
        y="19.25"
        width="389.5"
        height="843.5"
        style={{ overflow: "hidden", borderRadius: "55.75px" }}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4"
        >
          <div className="flex-1 overflow-y-auto mb-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[70%] p-2 rounded-lg ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-300 dark:bg-gray-700 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tape ta question..."
              className="flex-1 rounded-lg border border-gray-400 px-3 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </foreignObject>
    </svg>
  );
}
