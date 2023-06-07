import { useState } from "react";

const Form = () => {
  const [usrName, setUsrName] = useState("");
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsrName(value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", usrName);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={usrName}
          onChange={onChangeHandler}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Form;
