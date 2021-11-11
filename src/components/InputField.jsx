// NPM packages
import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, placeholder, type, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <label className="input-field">
      <input
        onChange={() => onChange(key, inputReference.current.value)}
        placeholder={placeholder}
        ref={inputReference}
        name={key}
        type={type}
        value={state}
        required={required}
      />
    </label>
  );
}