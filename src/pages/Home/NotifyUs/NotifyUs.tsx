const NotifyUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] flex flex-col items-center justify-center py-20 gap-2">
      <h1 className="text-4xl text-white font-bold">Keep Updated</h1>
      <p className="text-gray-200 text-lg">
        Keep pace with SecureCloud advancements! Join our mailing list for
        selective, noteworthy updates.
      </p>
      <div className="flex items-center gap-3">
        <input
          className="border border-gray-300 py-3 text-gray-300 text-xl px-5 w-full rounded-lg"
          type="email"
          name="email"
          placeholder="Enter your email"
          id=""
        />
        <button className="bg-white text-black p-3 text-xl  rounded-lg whitespace-nowrap hover:bg-gray-300">
          Notify me
        </button>
      </div>
    </div>
  );
};

export default NotifyUs;
