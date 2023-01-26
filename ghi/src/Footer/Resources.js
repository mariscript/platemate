export default function Resources() {
  return (
    <>
      <img
        src={require("../images/tools.png")}
        width="70px"
        className="mx-auto mt-10"
      />
      <h1 className="text-center font-md mt-7 text-5xl -mb-10">Resources</h1>

      <div className="text-center text-gray-800 py-20 px-6">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-2">
          <div className="flex justify-center drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Figma"
                href="https://www.figma.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/PlateMate_Figma.png")}
                  alt="Figma"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Figma
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  This is an example of how we drew up our development of
                  PlateMate.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Excalidraw"
                href="https://excalidraw.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/PlateMate_Excalidraw.png")}
                  alt="Excalidraw"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Excalidraw
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  This is an example of how we drew up our development of
                  PlateMate.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="PostgreSQL"
                href="https://www.postgresql.org/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/POSTgreSQL.png")}
                  alt="PostgreSQL"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  POSTgreSQL
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used POSTgreSQL to build our databases.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="React"
                href="https://reactjs.org/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/React.png")}
                  alt="React"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  React
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Javascript React to guild out the front end of our
                  website.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Tailwind CSS"
                href="https://tailwindcss.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/Tailwind_CSS.png")}
                  alt="Tailwind CSS"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Tailwind CSS
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Tailwind CSS to format our webpage
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Tailwind Components"
                href="https://tailwindcomponents.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/Tailwind_Components.png")}
                  alt="Tailwind Components"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Tailwind Components
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Tailwind Components to format our webpage
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Tailwind Elements"
                href="https://tailwind-elements.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/Tailwind_Elements.png")}
                  alt="Tailwind Elements"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Tailwind Elements
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Tailwind Elements to format our webpage
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Fast API"
                href="https://fastapi.tiangolo.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/fastapi.png")}
                  alt="Fast API"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Fast API
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Fast API in order to build the backend of our website.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Yelp API"
                href="https://www.yelp.com/developers"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/yelp_api.png")}
                  alt="Yelp API"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Yelp API
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used the Yelp API in order to gather Restaurant information
                  and display it for you so that you can avoid decision fatigue.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="FlatIcon"
                href="https://www.flaticon.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/flaticon.png")}
                  alt="FlatIcon"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Flat Icon
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Flat Icon for a large amount of our moving images and
                  little images.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Redux"
                href="https://redux.js.org/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/redux.png")}
                  alt="Redux"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Redux and Redux-Persist
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  "Redux sets the initial state of your app upon launch. Soon
                  after, Redux Persist fetches your persisted state, overriding
                  any initial state in a process the Redux Persist team calls
                  rehydration."
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center col-auto drop-shadow-md">
            <div className="rounded-lg shadow-lg bg-[#EEE5DD] border-2 border-[#d5beaa] max-w-sm">
              <a
                target="_blank"
                title="Font Awesome"
                href="https://fontawesome.com/"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  className="rounded-t-lg"
                  src={require("../images/fontawesome.png")}
                  alt="Font Awesome"
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Font Awesome
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  We used Font Awesome to add additional icons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
