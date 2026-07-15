import React from 'react';

const User = (props) => {
  const { 
    name = "Unknown User", 
    age, 
    college, 
    Semester, 
    semester, 
    skills = []   // ← This fixes the error
  } = props;

  const currentSemester = Semester || semester;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 max-w-md border border-gray-100">
      <h1 className="bg-red-800 text-amber-100 text-3xl font-bold py-3 px-5 rounded-xl inline-block">
        {name}
      </h1>

      {age && <p className="mt-3 text-lg"><strong>Age:</strong> {age}</p>}

      {college && <h2 className="text-xl mt-2">{college}</h2>}

      {currentSemester && (
        <h3 className="text-lg text-gray-600 mt-1">
          Semester: <strong>{currentSemester}</strong>
        </h3>
      )}

      <div className="mt-6">
        <h4 className="font-semibold mb-3 text-gray-800">Skills:</h4>
        
        {skills.length > 0 ? (
          <ul className="list-disc pl-6 space-y-1">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No skills provided</p>
        )}
      </div>
    </div>
  );
};

export default User;