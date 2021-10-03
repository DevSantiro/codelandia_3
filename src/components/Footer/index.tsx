import { Button } from '../Button/Button';
import './style.scss'

export const Footer = () => {
  return (
    <footer className="contact_footer">
      <h1>Entre em contato</h1>
      <form action="" className="form_contact_group">
        <input type="text"   placeholder="Nome" />
        <input type="text"   placeholder="E-mail" />
        <input type="number" placeholder="Telefone" />
        <textarea name="" id="" placeholder="Mensagem..." />
        <Button texto="Enviar mensagem" />
      </form>
    </footer>
  );
}