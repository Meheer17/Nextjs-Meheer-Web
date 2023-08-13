export default function con() {
  return (
    <>
      <div className="p-6 bg-amber-50">
        <h1 className="text-4xl sm:text-5xl text-center mb-3 text-gray-800 font-extrabold tracking-tight">
          Get in touch
        </h1>
      </div>
      <div className="p-6 bg-amber-50 gap-4 grid lg:grid-cols-4 text-center grid-cols-1">
        <div className="flex items-center text-gray-600 mx-auto">
          {/* <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faLocationDot} /> */}
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Karnataka, India
          </div>
        </div>

        <div className="flex items-center mx-auto text-gray-600">
          {/* <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faDiscord} /> */}
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Meheer#2192
          </div>
        </div>

        <div className="flex items-center mx-auto text-gray-600">
          {/* <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faGithub} /> */}
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            <a href="https://github.com/Meheer17" target="_blank">
              Meheer17
            </a>
          </div>
        </div>

        <div className="flex items-center mx-auto text-gray-600">
          {/* <FontAwesomeIcon className=' bg-inherit text-black text-4xl' icon={faEnvelopeCircleCheck} /> */}
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=meherr17.j@gmail.com"
            >
              meherr17.j@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
