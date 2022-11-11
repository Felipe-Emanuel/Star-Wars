export const Button = ({ text, type }) => {
  return (
    <div className="m-auto">
      <button
        type={type}
        className="
            transition-all font-Cinzel py-2 px-10
            rounded-sm bg-opacity-40 focus:ring-2
             focus:ring-white hover:text-white text-yellow-500
             hover:bg-yellow-600 bg-gray-100
        "
      >
        {text}
      </button>
    </div>
  );
};
