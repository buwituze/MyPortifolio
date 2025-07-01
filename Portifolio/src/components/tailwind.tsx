// Test component to verify Tailwind is working
const TailwindTest = () => {
  return (
    <div className="bg-blue-500 text-red-500 p-4 rounded-lg m-4">
      <h1 className="text-2xl text-yellow-500 font-bold">
        Tailwind is working!
      </h1>
      <p className="text-sm text-white opacity-75">
        If you see this styled, Tailwind is installed correctly.
      </p>
    </div>
  );
};

export default TailwindTest;
