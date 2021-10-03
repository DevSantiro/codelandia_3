import image from "../assets/image/image.svg";
import { Button } from "../Button/Button";
import { Card } from "../Card";
import { Footer } from "../Footer";
import './style.scss';

export const Apresentacao = () => {
  return (
    <>
      <section className="container_apresentacao">
        <div className="container_apresentacao_text">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            inventore, pariatur tempore consequatur voluptas, dolorum itaque
            beatae non aut quasi neque? Amet facilis voluptatem commodi nisi
            explicabo fugit veritatis minima.
          </p>
          <Button texto="Botão" />
        </div>
        <img src={image} alt="" />
      </section>

      <section>
        <main className="card_container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </section>

      <Footer />
    </>
  );
};
