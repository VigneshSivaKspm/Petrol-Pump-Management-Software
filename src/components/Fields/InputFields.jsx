import formatString from "../../../helper/textFormatting";

export const TextInput = ({ onChange, disabled, placeHolder, name, required }) => {
  return (
    <input type="text" name={name ? name : null} id={name ? name : null} required={required ? true : false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange ? onChange : null} disabled={disabled ? true : false} placeholder={placeHolder ? placeHolder : null} />
  );
};
export const NumberInput = ({ onChange, disabled, placeHolder, name, required }) => {
  return (
    <input type="number" name={name ? name : null} id={name ? name : null} required={required ? true : false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange ? onChange : null} disabled={disabled ? true : false} placeholder={placeHolder ? placeHolder : null} />
  );
};
export const PasswordInput = ({ onChange, disabled, placeHolder, name, required }) => {
  return (
    <input type="password" name={name ? name : null} id={name ? name : null} required={required ? true : false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange ? onChange : null} disabled={disabled ? true : false} placeholder={placeHolder ? placeHolder : null} />
  );
};
export const EmailInput = ({ onChange, disabled, placeHolder, name, required }) => {
  return (
    <input type="email" name={name ? name : null} id={name ? name : null} required={required ? true : false} className="input input-bordered input-sm  hover:border-teal-500  " onChange={onChange ? onChange : null} disabled={disabled ? true : false} placeholder={placeHolder ? placeHolder : null} />
  );
};

export const Label = ({ name }) => {
  return (
    <label className="font-medium" htmlFor={name? name: null}>
      {name? formatString(name): null}
    </label>
  )
}