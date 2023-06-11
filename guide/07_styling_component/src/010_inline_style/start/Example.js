import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const btnStyle ={
        fontWeight :"bold",
        width: 120,
        height: 60,
        borderRadius: 9999,
        border: 'none',
        margin: 'auto',
        display: 'block',
        background: isSelected? 'pink': ""
    }
    const textStyle = {
        textAlign: "center"
    }

    return (
        <>
            <button onClick={clickHandler} style={btnStyle}>ボタン</button>
            <div style={textStyle}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
