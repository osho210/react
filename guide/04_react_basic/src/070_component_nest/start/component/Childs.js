// jsが省略されていてもバンドラーが読み込んでくれる
import {List} from "./List.js"
import "./Childs.css";

export const Childs = () => {
    return(
        <div className="component">
            <h3>Hello Component</h3>
        <List />
        </div>
    )
}

// export default Childs;