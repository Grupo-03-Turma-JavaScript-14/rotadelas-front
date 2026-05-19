import { useState } from "react"

import "./FormCorrida.css"
import { ToastAlerta } from "../../../../utils/ToastAlerta"

interface Corrida {
  id: number
  destinoInicial: string
  destinoFinal: string
  passageira: string
  carro: string
  motorista: string
  preco: number
}

interface FormCorridaProps {
  corridaInicial?: Corrida
  onSalvar?: (corrida: Corrida) => void
  onCancelar?: () => void
}

function FormCorrida({corridaInicial, onSalvar, onCancelar }: FormCorridaProps) {

  const [corrida, setCorrida] = useState<Corrida>(
    corridaInicial ?? {
      id: 0,
      destinoInicial: "",
      destinoFinal: "",
      passageira: "",
      carro: "",
      motorista: "",
      preco: 0
    }
  )

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCorrida({
      ...corrida,
      [e.target.name]:
        e.target.name === "preco"
          ? Number(e.target.value)
          : e.target.value
    })
  }

  function enviarFormulario(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    console.log(corrida)

    if (onSalvar) {
      onSalvar(corrida)
    }
    const mensagem = corrida.id === 0 ? "Corrida salva com sucesso!" : "Corrida editada com sucesso!"
    ToastAlerta(mensagem, "sucesso")
  }

  return (
    <div className="form-container">
      <form
        className="form-corrida"
        onSubmit={enviarFormulario}
      >
        <div className="form-header">
          <h1>
            {corridaInicial
              ? "Editar Corrida"
              : "Nova Corrida"}
          </h1>
          <p>
            Preencha as informações da corrida
          </p>
        </div>

        <div className="form-grid">

          <div className="input-group">
            <label>Origem</label>
            <input
              type="text"
              name="destinoInicial"
              placeholder="Digite a origem"
              value={corrida.destinoInicial}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="input-group">
            <label>Destino</label>
            <input
              type="text"
              name="destinoFinal"
              placeholder="Digite o destino"
              value={corrida.destinoFinal}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="input-group">
            <label>Passageira</label>
            <input
              type="text"
              name="passageira"
              placeholder="Nome da passageira"
              value={corrida.passageira}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="input-group">
            <label>Motorista</label>
            <input
              type="text"
              name="motorista"
              placeholder="Nome da motorista"
              value={corrida.motorista}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="input-group">
            <label>Carro</label>

            <input
              type="text"
              name="carro"
              placeholder="Modelo do carro"
              value={corrida.carro}
              onChange={atualizarEstado}
              required
            />
          </div>

          <div className="input-group">
            <label>Preço</label>

            <input
              type="number"
              step="0.01"
              name="preco"
              placeholder="0.00"
              value={corrida.preco}
              onChange={atualizarEstado}
              required
            />
          </div>

        </div>
        <div className="form-actions">

        <button
          type="button"
          className="btn-cancelar"
          onClick={() => onCancelar?.()}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="btn-salvar"
        >
          Salvar Corrida
        </button>

        </div>

      </form>

    </div>
  )
}


export default FormCorrida