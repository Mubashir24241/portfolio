const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Example Tech",
      period: "2020 - Present",
      description: "Led development of multiple web applications using MERN stack."
    },
    // Add your experiences here
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.period}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
