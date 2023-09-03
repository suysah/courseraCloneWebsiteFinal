import "./App.css";
import Header from "./Components/Header";
import Explore from "./Components/Explore";
import ExploreData from "./Components/Expdata";
import Footer from "./Components/Footer";
import Footerimages from "./Components/Footerimages";
import Community from "./Components/Community";
import Intro from "./Components/Intro";
import newAndTrending, {
  title,
  popularSkills,
  coursera,
  community,
  more,
  reviews,
} from "./Components/Footdata";

function App() {
  return (
    <div>
      <Header />

      <Intro />


      <h2 className="ps-5 mt-5">Explore Coursera</h2>
      <div className="container-fluid text-center mb-5 mx-auto ">
        <div className="row">
          {ExploreData.map((data, index) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 m-4
              shadow p-3 bg-body-tertiary rounded"
                key={index}
                style={{ maxHeight: "250px", maxWidth: "300px" }}
              >
                <Explore
                  title={data.title}
                  courses={data.courses}
                  img={data.img}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid text-center mb-5 mt-5">
        <h1>From the Coursera community</h1>
        <h3>124+ million people have already joined Coursera</h3>
        <div className="row">
          {reviews.map((data, index) => {
            return (
                <div className="col-lg-4 ">
              <Community
                key={index}
                name={data.name}
                country={data.country}
                quote={data.quote}
                img={data.img}
              />
            </div>
              );
          })}
        </div>
      </div>

      <div
        className="container-fluid text-center pt-4  "
        style={{
          fontSize: "1rem",
          lineHeight: " 1.5",
          color: "#373a3c",
          backgroundColor: "#ecf0f1",
          width: "100%",
        }}
      >
        <div className="row">
          <div className="col-lg-3 col-md-4 ">
            <h2>{title[0]}</h2>
            {newAndTrending.map((data, index) => {
              return <Footer key={index} value={data} />;
            })}
          </div>

          <div className="col-lg-3 col-md-4">
            <h2>{title[1]}</h2>
            {popularSkills.map((data, index) => {
              return <Footer key={index} value={data} />;
            })}
          </div>

          <div className="col-lg-3 col-md-4">
            <h2>{title[2]}</h2>

            {coursera.map((data, index) => {
              return <Footer key={index} value={data} />;
            })}
          </div>

          <div className="col-lg-3 col-md-4">
            <h2>{title[3]}</h2>

            {community.map((data, index) => {
              return <Footer key={index} value={data} />;
            })}
          </div>

          <div className="col-lg-3 col-md-4 ">
            <h2>{title[4]}</h2>

            {more.map((data, index) => {
              return <Footer key={index} value={data} />;
            })}
          </div>

          <div className="col-lg-3 mt-5 col-md-4 ">
            <Footerimages />
          </div>

          <div >
            <p>© 2023 Coursera Inc. All rights reserved.</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
