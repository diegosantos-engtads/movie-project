import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/db.json";


function App() {
  return (
    <div>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Ciência</h2>
        <section className="cards">
          { videos.map((video) => <Card id={video.id} key={video.id} /> )}    
          </section>
        </Container>
      <Footer />
    </div>
  );
}

export default App;
