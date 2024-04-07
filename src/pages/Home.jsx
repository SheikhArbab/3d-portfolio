import * as C from "../components/index"

const Home = () => {
    return (
        <div className="relative z-0 bg-primary">

            <div className="bg-hero-pattern bg-cover bg-fixed bg-no-repeat bg-center relative">

                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-black opacity-90"/>

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