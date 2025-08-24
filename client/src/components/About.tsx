const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700 mb-4">
          I am a passionate Full Stack Developer with expertise in the MERN stack.
          I enjoy creating efficient, scalable, and user-friendly applications.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-3 rounded">React.js</div>
            <div className="bg-gray-100 p-3 rounded">Node.js</div>
            <div className="bg-gray-100 p-3 rounded">Express.js</div>
            <div className="bg-gray-100 p-3 rounded">MySQL</div>
            <div className="bg-gray-100 p-3 rounded">TypeScript</div>
            <div className="bg-gray-100 p-3 rounded">Tailwind CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
