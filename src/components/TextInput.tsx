import "./TextInput.scss";

interface TextInputProps {
  text: string;
  setText: React.Dispatch<string>;
  labelText: string;
}

export const TextInput = (props: TextInputProps) => {
  const { text, setText, labelText } = props;

  return (
    <div className="text-input">
      <label htmlFor="">{labelText}</label>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
    </div>
  );
};
