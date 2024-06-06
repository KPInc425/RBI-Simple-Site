import GradientTitle from "./shared/GradientTitle";

const WhyUs = () => {
  return (
    <div className="flex flex-col container mx-auto p-4 lg:p-12">
      <GradientTitle title="Our Why" />
      <p className="text-lg my-4">
        At RobotBuildersInc, we're not just another software development
        company. We are innovators, creators, and problem solvers. With 30+ years
        in industry our small on-shore team still absolutely loves building
        software and crafting user experiences. We cover all the usual suspects
        from data big and small, to websites, and mobile apps, to more advanced
        things such highly interactive signalr based disconnected lazy loaded
        wasm clients, custom trained bots and AI based on your data, to
        automating that pesky document, spreadsheet, or common business task.
      </p>
      <p className="text-lg mb-4">
        One of the key reasons clients choose us is our pay-as-you-go model. We
        understand that traditional project structures can be cumbersome and
        lead to misunderstandings and challenged projects. With our approach, we
        will build the most important items, together, in order. You will see
        tangible progress each week and have the opportunity to pay for that
        progress. This not only provides you with a clear picture of the
        project's development but also ensures that you're only paying for what
        you and your users can see and experience.
      </p>
      <p className="text-lg mb-4">
        Our expertise extends across the entire Microsoft software development
        ecosystem. From languages to patterns to practices, we've got you
        covered. If you have an internal team, we are happy to help upskill and
        modernize. If not we can help you find the right long term product
        support and hosting solution.
      </p>
    </div>
  );
};

export default WhyUs;
