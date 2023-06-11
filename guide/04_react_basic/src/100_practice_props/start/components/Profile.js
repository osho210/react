import "./Profile.css";

const Profile = ({name="John Doe",age,country="Japan"}) => {
  return (
    <div className="profile">
      <h3>Name:{name? name: "??"}</h3>
      <h3>Age:{age? age: "??"}</h3>
      <h3>From:{country? country: "??"}</h3>
    </div>
  );
};


export default Profile;
