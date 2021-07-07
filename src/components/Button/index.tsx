export const Primary = (props: any) => (
  <button
    className={`bg-red-500 py-2 px-4 text-white hover:bg-red-600 font-bold ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
