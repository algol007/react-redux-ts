export const Input = (props: any) => (
  <div className="flex flex-col">
    <label
      htmlFor={props.name}
      className="capitalize mb-1 font-bold text-gray-600"
    >
      {props.label ? props.label : props.name}
    </label>
    <input
      type={props.type ? props.type : "text"}
      id={props.name}
      name={props.name}
      defaultValue={props.defaultValue}
      className={`border py-2 px-3 ${props.className && props.className}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  </div>
);

export const Radio = (props: any) => (
  <label htmlFor={props.name} className="flex items-center text-gray-600">
    <input
      type="radio"
      id={props.name}
      name={props.name}
      defaultValue={props.defaultValue}
      className={`border py-2 px-3 mt-0.5 mr-2 ${
        props.className && props.className
      }`}
      onChange={props.onChange}
    />
    <span>{props.label}</span>
  </label>
);
