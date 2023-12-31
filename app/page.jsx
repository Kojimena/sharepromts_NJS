import Feed from "@/components/Feed"
const Home = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
        <h1 className="head_text text-center">Discover and Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts!!!</span>
        </h1>
        <p className="desc text-center w-full">
            KoPromts is an open-source project that aims to help people to discover and share AI-Powered Prompts.
        </p>
        <Feed/>
    </section>
  )
}

export default Home