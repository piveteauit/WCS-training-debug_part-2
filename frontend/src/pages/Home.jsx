import Cupcake from "@components/Cupcake";

export default function Home() {
  return (
    <>
      <h1>Cupcake Chooser</h1>
      <section className="home">
        <div className="home-cupcake">
          <Cupcake />
        </div>
        <div>
          <p>
            Welcome to the Cupcake Chooser ! 🧁
            <br />
            On this application, you are able to create your own uniques
            Cupcakes !
          </p>
          ✔️ List your cupcakes <br />
          ✔️ And filter them by accessory !
        </div>
      </section>
    </>
  );
}
