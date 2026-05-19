import './CorridaCard.css'

interface Corrida {
  id: number
  destinoInicial: string
  destinoFinal: string
  passageira: string
  carro: string
  motorista: string
  preco: number
}

interface CorridaCardProps {
  corrida: Corrida
  onEditar: (id: number) => void
  onDeletar: (id: number) => void
}

export default function CorridaCard({
  corrida,
  onEditar,
  onDeletar
}: CorridaCardProps) {

  return ( 
  <div className="corrida-card">

      <div className="corrida-header">
        <h2>Corrida #{corrida.id}</h2>

        <span className="corrida-preco">
          R$ {corrida.preco.toFixed(2)}
        </span>
      </div>

      <div className="corrida-body">

        <div className="corrida-rota">
          <div>
            <p className="label">Origem</p>
            <span>{corrida.destinoInicial}</span>
          </div>

          <div className="seta">
            →
          </div>

          <div>
            <p className="label">Destino</p>
            <span>{corrida.destinoFinal}</span>
          </div>
        </div>

        <div className="corrida-info">
          <p>
            <strong>Passageira:</strong> {corrida.passageira}
          </p>

          <p>
            <strong>Motorista:</strong> {corrida.motorista}
          </p>

          <p>
            <strong>Carro:</strong> {corrida.carro}
          </p>
        </div>

      </div>

      <div className="corrida-actions">

        <button
          className="btn-editar"
          onClick={() => onEditar(corrida.id)}
        >
          Editar
        </button>

        <button
          className="btn-deletar"
          onClick={() => onDeletar(corrida.id)}
        >
          Excluir
        </button>

      </div>
    </div>
  )
}