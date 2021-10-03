import './style.scss';

interface ButtonProps {
  texto: string
}

export const Button = ({texto}: ButtonProps) => {
  return (
    <button className="btn_primary">
      {texto}
    </button>
  )
}