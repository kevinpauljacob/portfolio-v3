export default function Contact() {
  return (
    <div id="contact" className="group transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Contact
      </h2>
      <div className="flex flex-col gap-4 text-white/50 group-hover:text-white/60 text-sm bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg p-3.5">
        <form className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hello, I'm interested in your work!"
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
            />
          </div>
          <button className="w-full border-2 border-white/5 bg-white/10 hover:bg-white/0 hover:border-white/10 transition-all duration-300 ease-in-out rounded-md text-sm text-center p-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
