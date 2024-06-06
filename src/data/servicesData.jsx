import FlaskIcon from "../components/shared/icons/FlaskIcon";

const servicesData = [
  {
    name: "Custom Software",
    subTitle: "Transforming Ideas into Reality",
    image: "./Feature1.jpg",
    description:
      "Customized solutions to turn your ideas into powerful applications. We bring together creativity, technology, and expertise to deliver exceptional results.",
    logo: <FlaskIcon />,
  },
  {
    name: ".NET C# Development",
    subTitle: "Full-Stack .NET Applications",
    image: "./Feature1.jpg",
    description: `
    Blazor, Blazor WebAssembly (WASM), and .NET MAUI integrate seamlessly with your .NET C# ecosystem, supporting web, installed, or mobile deployments. Our Blazor services leverage C# to build dynamic, scalable web applications.

    Blazor WebAssembly delivers interactive web apps with near-native performance, ensuring seamless user experiences. 

    With .NET MAUI, we create cross-platform applications for consistent user experiences on Windows, Mac, Android, and iOS.

    Our custom development platform offers strong security, lazy-loading, and multitenant support from the first week.
      `,
    logo: <FlaskIcon />,
  },
  // {
  //   name: "Blazor WebAssembly (WASM)",
  //   subTitle: "Native-Like Web Experiences",
  //   image: "./Feature1.jpg",
  //   description:
  //     "With Blazor WebAssembly, we create wildly interactive web applications that redefine user experiences. By harnessing the power of WebAssembly, we deliver near-native performance, guaranteeing a seamless and engaging application for your users. Our in-shop custom development platform provides projects industry strength security, secure application lazy-loading, and multitenant support by the end of the first week.",
  //   logo: <FlaskIcon />,
  // },
  // {
  //   name: ".NET MAUI Development",
  //   subTitle: "One Codebase, Every Platform",
  //   image: "./Feature1.jpg",
  //   description:
  //     ".NET MAUI enables us to develop cross-platform applications that offer a consistent user experience across various devices such as Windows, Mac, Android, and iOS/Apple.",
  //   logo: <FlaskIcon />,
  // },
  {
    name: "Microsoft Project Rehab & Rescue",
    subTitle: "Turning Challenges into Opportunities",
    image: "./Feature1.jpg",
    description:
      "We specialize in rehabilitating and rescuing Microsoft projects. With our expertise, we can identify issues, implement best practices, and get your project back on track. Whether you're facing challenges with architecture, performance, or scalability, we have the experience to turn things around and ensure successful project delivery.",
    logo: <FlaskIcon />,
  },
  // {
  //   name: "",
  //   subTitle: "",
  //   image: "./Feature1.jpg",
  //   description: "",
  //   logo: <FlaskIcon />,
  // },
];

export default servicesData;
