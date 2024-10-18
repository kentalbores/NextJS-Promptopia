import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidde"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia a prompt that can help you to do things that you wanted to do before but you can not do it now because you do not know how to do it therefore this app will help you do those things
        </p>

        <Feed/>

    </section>
  )
}

export default Home