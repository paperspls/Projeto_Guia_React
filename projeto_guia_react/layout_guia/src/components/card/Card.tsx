interface CardProps{
    titulo: string
    descricao: string
    foto: string
}

function Card({titulo, descricao, foto} : CardProps) {
  return (
    <div style={{
        width: "500px",
        border: "2px solid #676750",
        margin: "0 0 1rem 0"
    }}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <p>{foto}</p>

        <button>Curtir</button>
    </div>
  )
}

export default Card