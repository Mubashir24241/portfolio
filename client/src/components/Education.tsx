const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Example University",
      period: "2016 - 2020",
      description: "Focused on software engineering and web development."
    },
    // Add your education details here
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.period}</p>
            <p className="mt-2 text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
