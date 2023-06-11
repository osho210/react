import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "blue" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        {/* <Profile
          {...profile[0]}
        />
        <Profile
          {...profile[1]}
        /> */}
        children{
          [
            <Profile key={profile[0].name} {...profile[0]}/>,
            <Profile key={profile[1].name} {...profile[1]}/>
          ]
          // 配列同じものなのでプロパティ名を指定して表示させることができる
        }
      </Container>
    </div>
  );
};

export default Example;

// chldrenでcomponent自体は呼び込まれていて、そこでオブジェクトの拡張を行うことで利用することが可能になる