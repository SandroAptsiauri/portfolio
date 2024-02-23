import "./portfolio.css";
import profile from "/images/Screenshot_7.png";
export default function Portfolio() {
  return (
    <div className="container">
      <img src={profile} alt="profile-picture" className="profile-picture" />
      <h1 className="title">About me</h1>
      <p className="description">
        Hello, i am sandro aptsiauri, currently learning web-development and
        trying to be better every day!!
      </p>
    </div>
  );
}
