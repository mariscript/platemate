function About() {
  // image styling start
  const imgStyle1 = {
    "margin-top": "-75px",
  };

  const imgStyle2 = {
    width: "150px",
  };
  // image styling end

  return (
    <>
      <img
        src={require("../images/idea.png")}
        width="70px"
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-bold mt-7 text-2xl mb-8">
        About PlateMate{" "}
      </h1>
      <div className="flex items-center">
        {/* meet the team start */}
        <section className="mb-32 text-gray-800 text-center">
          <h3 className="text-lg mb-12 bg-[#EEE5DD] rounded-lg p-10 mx-auto">
            PlateMate is an app created by five aspiring software engineers for
            people who are struggling to make a dining decision. Whether you're
            unsure of what's around, can't agree on a restaurant, or are
            overwhelmed by options, PlateMate makes it easy to find a great
            place to eat. Happy Plating!
          </h3>
          <h2 className="text-2xl font-bold mb-32">Meet the Mates!</h2>

          <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-5">
            {/* engineer start */}
            <div className="mb-24 md:mb-0">
              <div className="rounded-lg shadow-2xl h-full block bg-[#D9D9D9] border-2 border-black">
                <div className="flex justify-center">
                  <div className="flex justify-center" style={imgStyle1}>
                    <img
                      src={require("../images/zach.jpg")}
                      className="rounded-full mx-auto shadow-2xl"
                      alt=""
                      style={imgStyle2}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Zachary Macek</h5>
                  <p className="mb-6">blurb</p>
                  <ul className="list-inside flex mx-auto justify-center">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/zachary-macek/"
                      className="px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-[#BB5855]"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                    {/* Git */}
                    <a href="git" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#BB5855"
                        fill="#BB5855"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* engineer start */}
            <div className="mb-24 md:mb-0">
              <div className="rounded-lg shadow-2xl h-full block bg-[#D9D9D9] border-2 border-black">
                <div className="flex justify-center">
                  <div className="flex justify-center" style={imgStyle1}>
                    <img
                      src={require("../images/gina.jpg")}
                      className="rounded-full mx-auto shadow-2xl"
                      alt=""
                      style={imgStyle2}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Gina John</h5>
                  <p className="mb-6">blurb</p>
                  <ul className="list-inside flex mx-auto justify-center">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/gina-john/"
                      className="px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-[#BB5855]"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                    {/* Git */}
                    <a href="git" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#BB5855"
                        fill="#BB5855"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* engineer end */}
            {/* engineer start */}
            <div className="mb-24 md:mb-0">
              <div className="rounded-lg shadow-2xl h-full block bg-[#D9D9D9] border-2 border-black">
                <div className="flex justify-center">
                  <div className="flex justify-center" style={imgStyle1}>
                    <img
                      src={require("../images/natalie.jpg")}
                      className="rounded-full mx-auto shadow-2xl"
                      alt=""
                      style={imgStyle2}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Natalie Tang</h5>
                  <p className="mb-6">blurb</p>
                  <ul className="list-inside flex mx-auto justify-center">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/natalientang/"
                      className="px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-[#BB5855]"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                    {/* Git */}
                    <a href="https://gitlab.com/natalientang" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#BB5855"
                        fill="#BB5855"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* engineer end */}
            {/* engineer start */}
            <div className="mb-24 md:mb-0">
              <div className="rounded-lg shadow-2xl h-full block bg-[#D9D9D9] border-2 border-black">
                <div className="flex justify-center">
                  <div className="flex justify-center" style={imgStyle1}>
                    <img
                      src={require("../images/marison.jpg")}
                      className="rounded-full mx-auto shadow-2xl"
                      alt=""
                      style={imgStyle2}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Marison Muñoz</h5>
                  <p className="mb-6">blurb</p>
                  <ul className="list-inside flex mx-auto justify-center">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/marisonmunoz/"
                      className="px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-[#BB5855]"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                    {/* Git */}
                    <a href="git" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#BB5855"
                        fill="#BB5855"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* engineer end */}
            {/* engineer start */}
            <div className="">
              <div className="rounded-lg shadow-2xl h-full block bg-[#D9D9D9] border-2 border-black">
                <div className="flex justify-center">
                  <div className="flex justify-center" style={imgStyle1}>
                    <img
                      src={require("../images/jason.jpg")}
                      className="rounded-full mx-auto shadow-2xl"
                      alt=""
                      style={imgStyle2}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-4">Jason Olefson</h5>
                  <p className="mb-6">Blurb</p>
                  <ul className="list-inside flex mx-auto justify-center">
                    <a
                      href="https://www.linkedin.com/in/jason-olefson/"
                      className="px-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-4 h-4 text-[#BB5855]"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className="px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#BB5855"
                        fill="#BB5855"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            {/* engineer end */}
            {/* all engineers end */}
          </div>
        </section>
        {/* meet the team end */}
      </div>
    </>
  );
}

export default About;
