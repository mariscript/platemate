function Resources() {
  return (
    <div className="text-center text-gray-800 py-20 px-6">
    <h3 className="text-3xl font-bold mt-0 mb-6">Our used Resources:</h3>

      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-2">
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/PlateMate_Figma.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Figma</h5>
              <p className="text-gray-700 text-base mb-4">
                This is an example of how we drew up our development of PlateMate.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/PlateMate_Excalidraw.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Excalidraw</h5>
              <p className="text-gray-700 text-base mb-4">
                This is an example of how we drew up our development of PlateMate.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/POSTgreSQL.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">POSTgreSQL</h5>
              <p className="text-gray-700 text-base mb-4">
                We used POSTgreSQL to build our databases.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/React.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">React</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Javascript React to guild out the front end of our website.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/Tailwind_CSS.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Tailwind CSS</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Tailwind CSS to format our webpage
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/Tailwind_Components.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Tailwind Components</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Tailwind Components to format our webpage
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/Tailwind_Elements.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Tailwind Elements</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Tailwind Elements to format our webpage
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/fastapi.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Fast API</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Fast API in order to build the backend of our website. 
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/yelp_api.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Yelp API</h5>
              <p className="text-gray-700 text-base mb-4">
                We used the Yelp API in order to gather Restaurant information and display it for you so that you can avoid decision fatigue.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/flaticon.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Flat Icon</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Flat Icon for a large amount of our moving images and little images.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/redux.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Redux and Redux-Persist</h5>
              <p className="text-gray-700 text-base mb-4">
                "Redux sets the initial state of your app upon launch. Soon after, Redux Persist fetches your persisted state, overriding any initial state in a process the Redux Persist team calls rehydration."
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center col-auto drop-shadow-md">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img className="rounded-t-lg" src={require("../images/fontawesome.png")} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Font Awesome</h5>
              <p className="text-gray-700 text-base mb-4">
                We used Font Awesome to add additional icons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
