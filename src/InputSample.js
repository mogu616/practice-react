import React, {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nicknameinput = useRef();
    const {name, nickname} = inputs;

    const onChange = e => { // 1. 이벤트가 발생
        const {value, name} = e.target; // 2. 비구조화 할당해서 e.target 에서 value, name을 빼와 각각의 이름으로 할당
        setInputs({ // 3. setInputs를 통해 inputs에 값 할당
            ...inputs, // 4. 이전 input 값을 받아옴
            [name]: value // 5. 
        });
    };
    
    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nicknameinput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} ref={nicknameinput}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname}
            </div>
        </div>
    );
}

export default InputSample;