### **Table of Contents**  

1. Overview  
2. Accessing the Project  
3. Installation and Setup  
4. Key Features  
5. Limitations and Future Enhancements  
6. Architecture  
7. Technology Stack  
8. Demo & screenshots
9. About the Team  


### **Overview**  

- **Web-Based AI Agent**: This is a web-based AI calling agent designed to simulate real-time conversations. A phone-based agent was not implemented due to verification challenges and other constraints.  
- **High-Speed Performance**: The agent is optimized for speed and can be deployed for real-world applications like customer service and sales agents with minor modifications and enhancements.  
- **Real-Time Text-to-Speech (TTS)**: Utilizes **Smallest.ai's ultra-fast lightning model** for real-time TTS, ensuring seamless and natural voice interactions.  
- **Versatility**: The solution is adaptable to various industries requiring conversational agents, such as retail, healthcare, and technical support.  
- **Real-World Potential**: While optimized for quick development, the system is designed to be easily extended and adapted for larger-scale, real-world deployments.

**Backend Code Repository**:  
[Link to Backend Repository](https://github.com/Chinmayadas2003/Call-Agent-Backend)


### **Accessing the Project**  

- **Web Agent**: The AI-Calling Agent frontend is deployed and accessible at [https://ai-calling-agent.netlify.app/](https://ai-calling-agent.netlify.app/).  
- **Backend**: The backend services are hosted on Azure, ensuring reliable and scalable processing. The backend code can be found in the repository: [Backend Code Repository](https://github.com/Chinmayadas2003/Call-Agent-Backend).  
- Please visit the web agent in Chrome browser for best experience.

---

### **Key Features**  

- **Real-Time Performance**:  
  Utilizes the Web Speech API in browsers for Speech-to-Text (SST), reducing latency and enhancing user experience.  
- **Ultra-Realistic Voice Output**:  
  Employs **Smallest.ai's lightning-fast model** for Text-to-Speech (TTS) in the backend, delivering highly realistic voice output with minimal delay.  
- **Advanced Query Processing**:  
  Powered by the GPT-4o API to generate accurate, context-aware responses for user queries, commands, or interactions.  
- **Contextual Conversations**:  
  Maintains a history of interactions between users and GPT-4o in the prompt, enabling contextual and realistic dialogues.  
- **Scalable and Adaptive**:  
  Designed to handle a wide range of use cases with minimal modifications, including customer support, sales, and virtual assistants.  
- **User-Centric**:  
  Focused on delivering a smooth and responsive experience that mimics human-like interactions.  

And more!  


### **Installation and Setup**  

#### **Running the Frontend Locally**  
1. Clone this repository:  
   ```bash  
   git clone <repository-link>  
   cd <repository-folder>  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Update the `.env` file:  
   - Change the backend URL to `http://localhost:<backend-port>` for local testing.  

4. Start the development server:  
   ```bash  
   npm run dev  
   ```  
   The application will be accessible at `http://localhost:5173` (default Vite port).  

#### **Running the Backend**  
Please refer to the [Backend Repository's README](https://github.com/Chinmayadas2003/Call-Agent-Backend) for detailed setup instructions.  

---

### **Technology Stack**  

#### **Frontend**  
- **React.js**: Component-based framework for building the user interface.  
- **Vite**: Fast development build tool for modern web projects.  

#### **Backend**  
- **Node.js**: Server-side runtime environment.  
- **Express.js**: Framework for handling backend logic and APIs.  

#### **Other Technologies**  
- **Browser Web Speech Feature**: For real-time Speech-to-Text (SST).  
- **GPT-4o API**: Used for generating responses based on user inputs.  
- **Smallest.ai API**: Lightning-fast TTS model for realistic voice output.  

### **Limitations and Future Enhancements**  

#### **Limitations**  
1. **API Free Tier**:  
   - Currently, the project utilizes the free tier of Smallest.ai and GPT-4o APIs, which may have limitations in terms of response speed, concurrency, and daily usage caps.  
   - Deploying this project for real-world applications would require upgrading to paid plans to handle larger workloads effectively.  
2. **Limited Scope**:  
   - The solution is designed as a web-based agent and does not currently integrate with phone systems.  
3. **Speech-to-Text (STT) Capabilities**:  
   - While the browser Web Speech API provides decent STT performance, more advanced STT systems are required for deployment in phone-based agents to ensure better accuracy and versatility.  
4. **API Errors**: 
   - The Smallest.ai TTS API occasionally encounters errors that cannot be consistently handled due to incomplete or insufficient documentation of the API, affecting reliability in some scenarios.

#### **Future Enhancements**  
1. **Full Integration with Phone Agents**:  
   - Automate workflows to independently call and interact with potential customers/clients when integrated into a phone-agent framework.  
2. **Improved STT**:  
   - Employ advanced STT models, such as Whisper AI or similar, for better performance and multi-language support in phone-based scenarios.  
3. **Workflow Automation**:  
   - Extend the agent's capabilities to handle multi-step processes, such as appointment scheduling, payment processing, or dynamic CRM updates.  
4. **Scalability and Multilingual Support**:  
   - Optimize for handling higher volumes of requests and support multiple languages for broader usability.  

---

### **Architecture**  

The architecture of the AI-Calling Agent is designed for modularity and real-time performance. Below is an overview of the workflow:  

1. **Frontend (React + Vite)**:  
   - Provides an intuitive web interface for users to interact with the agent.  
   - Utilizes the **Browser Web Speech API** for real-time Speech-to-Text (STT).  
   - Sends the transcribed query to the backend for processing.  

2. **Backend (Node + Express)**:  
   - Handles incoming queries from the frontend.  
   - Uses **GPT-4o API** for generating intelligent, context-aware responses.  
   - Employs **Smallest.ai API** to convert the GPT-4o response into ultra-realistic speech (Text-to-Speech).  

3. **APIs and Models**:  
   - **Web Speech API**: Converts user speech into text on the frontend.  
   - **GPT-4o API**: Provides contextual responses to user queries.  
   - **Smallest.ai API**: Produces high-quality, real-time TTS output.  

4. **Data Flow**:  
   - User speech → Frontend (STT) → Backend (query processing) → GPT-4o → Backend (TTS conversion) → Frontend (voice response).  

This modular architecture ensures flexibility, allowing for easy integration of additional workflows or advanced models in the future.

### **Future Architecture for Phone Agent with Enhanced Features**  

In its phone agent version, the architecture will be extended to include additional functionality for handling automated calls to potential customers while offering high concurrency and personalization. Below is a short description of the envisioned system:  

1. **Data Input and Preprocessing**:  
   - The agent will accept input in the form of a CSV or similar file containing customer names, phone numbers, and metadata.  
   - It will analyze and shortlist potential customers using keyword matching or other filtering techniques based on the provided metadata.  

2. **Automated and Concurrent Calls**:  
   - The agent will initiate simultaneous calls to shortlisted customers.  
   - Each session will be uniquely identified using session IDs, enabling the system to maintain personalized interactions.  

3. **Context-Aware Conversations**:  
   - The chat history for each session will be stored and used to provide contextual and realistic conversations throughout the interaction.  

4. **Workflow Integration**:  
   - The system will be connected to customizable workflows to automate actions based on conversation outcomes, such as:  
     - Scheduling a meeting.  
     - Booking a table.  
     - Closing a sale.  
   - These workflows can be tailored to specific use cases or industries.  

5. **Scalability and Optimization**:  
   - Designed for high scalability to handle multiple concurrent calls efficiently.  
   - Built to ensure low latency and high accuracy for seamless real-time interactions.  

This planned enhancement aims to transform the system into a comprehensive, multi-functional phone agent suitable for a variety of industries, from sales to customer support and beyond.  


### **Demo Video**
Watch the demo video here: [Demo Video](https://youtu.be/-dWEOUKdiDc?si=QoZTWI78bfPz1oVZ)

Or view it directly below:  
[![Demo Video](https://img.youtube.com/vi/-dWEOUKdiDc/0.jpg)](https://youtu.be/-dWEOUKdiDc?si=QoZTWI78bfPz1oVZ)


### **Team**
#### Aman Jain
#### Chinmaya Kumar Das
