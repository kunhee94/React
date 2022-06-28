import React,{useState, useRef} from "react";


function InputSample() {

  const [inputs, setInputs] = useState({
    a: '',
    b: '',
  });

const nameInput = useRef();

  const {a, b} = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
 
  const onReset = () => {
    setInputs({
      a: '',
      b: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input name='a' placeholder="이름" onChange={onChange} value={a} />
      <input name="b" placeholder="닉네임" onChange={onChange} value={b} ref={nameInput} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {a} ({b})
      </div>
    </div>
  )
}

export default InputSample;