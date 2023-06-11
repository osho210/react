import "./Example.css";
// jsが省略されていてもバンドラーが読み込んでくれる
import {Childs} from "./component/Childs.js"

const Example = () => {
  return (
    <Childs />
  );
};

export default Example;

// 基本はdefaultエクスポートで良い
// componentの中で複数のcomponetを出力する必要がある場合は名前付きexportを利用する