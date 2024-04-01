import { Audio } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Audio height={80} width={80} color="#48BB78" ariaLabel="Loading" />
        <p className="text-gray-600 mt-4 text-center">Loading...</p>
      </div>
    </div>
  );
};

export default LoaderSpinner;
