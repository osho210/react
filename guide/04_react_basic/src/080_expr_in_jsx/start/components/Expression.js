import './expression.css'

const Expression = () =>{
    const title = "Expression"
    const array = ["item1", "item2", "item3", "item4"]
    const jsx = <h3> HELLO JSX</h3>
    console.log(jsx)
    // この式は隠れ亭はいるが戻り値が設定されているので関数を実行した残りの値が変更した値として格納されている
    const hello = (arg) => `${arg} Function`
    return(
        <div className={title.toLocaleLowerCase()}>
            <h3>Hello Expression{title}</h3>
            <h3>{array}</h3>
            <h3>{hello('hello')}</h3>
        </div>
    )
}

export default Expression

// {}の中にjsのプログラムを記述することができる
// 文字列もjsとして認識される