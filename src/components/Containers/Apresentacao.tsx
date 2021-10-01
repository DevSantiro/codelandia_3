import image from "../assets/image/image.svg";
import { Button } from "../Button/Button";
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
          <Button />
        </div>
        <img src={image} alt="" />
      </section>

      <section>
        <main>
          <div>
            <div></div>
            <div>
              <h1>Titulo do Card</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus consequuntur distinctio deleniti totam sapiente, iste
                quod dolorum magni voluptates eveniet.
              </p>
            </div>
          </div>
        </main>
      </section>

      <footer>
        <h1>Entre em contato</h1>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <textarea name="" id=""></textarea>
          <button>Enviar Mensagem</button>
        </form>
      </footer>
    </>
  );
};
