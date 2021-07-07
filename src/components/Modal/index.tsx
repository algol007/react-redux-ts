export const Modal = (props: any) => (
  <div className="modal fixed top-0 left-0 w-full h-full z-30">
    <div className="flex items-center h-full overflow-y-scroll py-8">
      <div
        className={`relative lg:mx-auto ${
          props.widthClass ? props.widthClass : "lg:w-1/2"
        } bg-white w-full rounded p-3 lg:p-5 z-50`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl pr-16">{props.title}</h3>
            <svg
              className="w-5 h-5 cursor-pointer"
              onClick={props.closeModal}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {props.children}
        </div>
      </div>
    </div>
    <div
      className="absolute h-screen w-screen h-full bg-gray-500 opacity-30 outline-none fade top-0 left-0 overflow-y-scroll lg:overflow-auto"
      onClick={props.closeModal}
    />
  </div>
);
