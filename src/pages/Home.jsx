import * as C from "../components/index"

const Home = () => {
    return (
        <div className="relative z-0 bg-primary">

            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

                <C.Hero />

            </div>

            <C.About />
            <C.Experience />
            <C.Tech />
            <C.Works />
            <C.Feedbacks />

            <div className="relative z-0">

                <C.Contact />
                <C.StarsCanvas />

            </div>

        </div>
    )
}

export default Home