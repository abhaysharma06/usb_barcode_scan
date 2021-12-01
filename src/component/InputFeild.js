import "../App.css";
function handlevent(myval) {
  // console.log(myval);
}

export const InputFeild = ({ codeValue, setValue }) => {
  return (
    <div>
      <form onSubmit={handlevent(codeValue)}>
        <input
          className="input_box"
          type="input"
          value={codeValue}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
};
