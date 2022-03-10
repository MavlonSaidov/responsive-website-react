import Hero from "./components/hero";
import Development from "./components/development";
import Projects from "./components/projects";
import Opinion from "./components/opinion";
import Regions from "./components/regions";
import News from "./components/news";
import Laboratory from "./components/laboratory";
import Questions from "./components/questions";
import Partners from "./components/partners";

const Home = () => {
    return (
        <div>
            <Hero />
            <News />
            <Laboratory />
            <Projects />
            <Development />
            <Opinion />
            <Regions />
            <Questions />
            <Partners />
        </div>
    );
};

export default Home;
