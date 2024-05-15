import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";

function Home() {
  return (
    <div>
      <Header />
      <Banner image="home" />
      <Container>      
        { categories.map((category, index) => (<Category key={index} category={category}>{ filterCategory(index).map((video) => (<Card key={video.id} id={video.id} />
              ))}
            </Category>
          ))
        }
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
