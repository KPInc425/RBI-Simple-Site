import FlaskIcon from "../components/shared/icons/FlaskIcon";

const projectData = [
  {
    logo: <FlaskIcon />,
    name: "Stand Alone Customer Service",
    description:
      "We successfully delivered a conversational AI running on local hardware trained against private data to provide an elaborate, seamless, and intuitive user experience by voice or touch.",
    tagLine: "Speech to Text, Text to AI, AI to Text, Text to Voice",
    tagLineDescription: "Technologies Involved: Hybrid Maui .NET Microsoft .EXE, TextToSpeech hot-mic Listener, SpeechToText, Multiple printers, lidar scanner, credit card terminal, multi-sourced prompting, embeddings, vectorized-data and rags leveraging anything llm, loras leveraging oogabooga, local LLM hosting using ollama, llama3 gpt 8B model.",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "Dynamic Custom Prompting for Large Documents",
    description:
      "Delivered a custom prompting service to enable chatBot text or voice interactions with large documents, web or other data sources. We delivered an engaging user experience to make complex and vast amounts of information more accessible and engaging.",
    tagLine: "Text or Voice interaction with local chat bots trained on various sources of customer data",
    tagLineDescription: "Technologies Involved: Hybrid Maui .NET, Document consumer and indexer to map the source to marked-up single-source .PDFs, multi-sourced prompting, embeddings, vectorized-data and rags leveraging anything llm, loras leveraging oogabooga, local LLM hosting using ollama, llama3 gpt model.",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "TMRA - The Most Ridiculous Adventure",
    description:
      "We developed TMRA, the world's first AI & player interactive story builder. Players input information about their story, character, and goals. Our AI then generates a backstory, current scene, and next steps, guiding players through a co-narrated adventure or other types of stories. Stablediffusion generates images in the background to (sometimes) match the narrative, creating an immersive if not fun storytelling experience.",
    tagLine: "User Generated Content, Automated Content Moderation, Advanced Cooperative Storytelling, Historical Contexting, multi modal image and conversational AI.",
    tagLineDescription: "Technologies Involved: Blazor Wasm rich client browser interaction, MSSQL, leveraging OpenAI Gpt3.5turbo and StableDiffusion on a private host",
    link: "",
  },
  // {
  //   logo: <FlaskIcon />,
  //   name: "Stand Alone Customer Service Kiosk",
  //   description:
  //     "We designed and developed a stand-alone customer service kiosk with advanced voice and AI capabilities. The kiosk includes voice-to-text, text-to-local AI, local AI-to-text, and text-to-voice functionalities. It also features on-screen navigation display, lidar for user and height detection, and supports various printer integrations for stickers, receipts, and cardstock. Additionally, it supports custom voices and multiple languages for text-to-speech and spoken interactions.",
  //   tagLine: "65.25%",
  //   tagLineDescription: "Increase time to prototype",
  //   link: "",
  // },
  {
    logo: <FlaskIcon />,
    name: "AI Driven Recommendation System",
    description:
      "Our AI-driven recommendation system accepts any topic, builds a profile for comparing items of that topic, and evaluates three of the user's favorite instances of the topic. It then suggests other recommendations based on the user's preferences, providing an overview of what the user is most likely enjoying about their original 3.",
      tagLine: "User Generated Content, dynamic item comparison profiling, multi stage item profiling, suggestion engine",
      tagLineDescription: "Technologies Involved: Blazor Wasm rich client browser interaction, leveraging OpenAI Gpt3.5turbo and StableDiffusion on a private host",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "LiveVotingApp - Real-time Crowd Interaction Software",
    description: "LiveVotingApp is a real-time crowd interaction software that enables seamless connections between hundreds of thousands of devices. Using SignalR, our team developed a robust solution for live audience interactions, voting, and more, providing an engaging experience for users.",
    tagLine: "Massive instant real-time audience interactions, turn all internet connected devices into any interactive gadget you wish",
    tagLineDescription: "Technologies Involved: Blazor Wasm rich client browser interaction, MSSQL, SignalR, clean architecture, automated testing, jenkins build pipeline, nginx reverse proxy to multiple running docker containers",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "Security Scanning Application",
    description: "We co-developed a security scanning application business in a box with one of our clients. This application combines dozens of available APIs to provide comprehensive network security scanning and related services to provide regular checkups on everything from the corporate network to darkweb files to ensure the network, and the business domains and workers email addresses are all as safe as possible.",
    tagLine: "Reoccuring corporate security scanning and compromised email monitoring as a service",
    tagLineDescription: "Technologies Involved: Blazor Wasm rich client browser interaction, MSSQL, multi-tennancy, automated state machine, clean architecture, automated testing, jenkins build pipeline, nginx reverse proxy to multiple running docker containers",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "Online Referral and Vendor Backend System",
    description: "We developed an online referral and vendor backend system that allows peer vendors to provide site visitors with an opportunity to make direct email referrals. This system enhances user engagement and provides vendors with valuable leads, increasing sales and revenue.",
    tagLine: "Online Referral Campaigns Management, Online Referral Forms, Participant Tracking, Tax Reporting",
    tagLineDescription: "Technologies Involved: Blazor Wasm rich client browser interaction, BlazorWasm",
    link: "",
  },
  {
    logo: <FlaskIcon />,
    name: "Automation Application",
    description: "We delivered an automation application wrapped around an elaborate state machine to act as a general office worker, automating 80% of other staffs' workload. We automated common tasks often initiatied from reading, sending, and processing emails.  We were able to provide much needed assistance to the front line workers that enabled them to provide their full focus to the rare and needful accounts.",
    tagLine: "General Office Workflow Automation",
    tagLineDescription: "Technologies Involved: Angular, dotnet APIs, MSSQL, Identity Server, AD SAML2 SSO, Stateless",
    link: "",
  }
  // {
  //   logo: <FlaskIcon />,
  //   name: "",
  //   description: "",
  //   tagLine: "65.25%",
  //   tagLineDescription: "Increase time to prototype",
  //   link: "",
  // },
];

export default projectData;