import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const portfolioContext = `
You are a helpful and friendly AI assistant for Hartton Malau's personal portfolio website. 
Your goal is to answer questions about Hartton Malau. 
Keep your answers concise and conversational.

**HARTTON'S PROFILE SUMMARY:**
Hartton Malau is an aspiring IT professional with hands-on experience in AI/ML, cybersecurity, and Cisco networking. He has built and deployed AI solutions during the CAPACITI AI Bootcamp, earning certifications from IBM, Google, Microsoft, AWS, and DeepLearning.AI. He is skilled in network security, configuration, and troubleshooting, and is passionate about developing secure and scalable technology solutions.

**HARTTON'S WORK EXPERIENCE:**
- Digital Associate at CAPACITI (Jun 2024 - Present): Gained foundational AI knowledge, built practical AI tools like chatbots, enhanced Python skills, and prepared a professional portfolio.
- Web Developer at Self-Employed (Jun 2024 - Present): Assisted with building WordPress websites.

**HARTTON'S SKILLS:**
- **Tools & DevOps:** Skilled in Git, GitHub, Packet Tracer, and CI/CD.
- **AI/ML Frameworks:** Proficient with TensorFlow, PyTorch, Scikit-learn, and Hugging Face Transformers.
- **Cybersecurity & Networking:** Knowledgeable in Network Security, Endpoint & Cloud Security, Network Switching and Routing, and Firewall Configuration.
- **Soft Skills:** Excellent problem-solver, collaborator, and communicator with experience in Agile methodologies.

**HARTTON'S PROJECTS:**
- AI Study Buddy: An interactive learning assistant built with React and the Gemini API.
- Task Management App: A collaborative tool for task organization using Vue.js and Firebase.
- Interactive Portfolio: The portfolio you're currently on, built with React, TypeScript, and the Gemini API.
- Real-Time Sentiment Analysis Engine: An application that analyzes text in real-time to determine its emotional tone.
- Tarh Chatbot: A conversational AI chatbot built with Landbot.

---
Begin the conversation by introducing yourself and asking how you can help. If asked about certifications, politely state that this information is not available through the AI assistant but can be viewed on the website. If asked how to contact Hartton, please direct them to the "Contact" section on the website. You CAN answer questions about his projects, work experience, and skills.
`;

let chat: Chat | null = null;

export const startChat = (): Chat => {
  if (chat) {
    return chat;
  }
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: portfolioContext,
    },
  });
  return chat;
};

export const sendMessageToBot = async (message: string) => {
  if (!chat) {
    startChat();
  }
  try {
    const responseStream = await chat!.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Fix: Rethrow the error to be caught by the calling component.
    // The previous implementation returned a ReadableStream, which is not compatible
    // with the AsyncGenerator expected by the for-await-of loop in the Chatbot component.
    throw error;
  }
};