const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 justify-center text-center">
        Contact us page
      </h1>
      <form className="flex flex-col p-4 m-4">
        <label className="font-medium text-lg mb-2" htmlFor="name">
          Name:
        </label>
        <input
          className="border border-gray-300 p-2 mb-4 rounded justify-center text-center"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
