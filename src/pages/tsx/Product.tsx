import { useEffect, useState } from "react"
import "../css/Product.css"
import CorridaCard from "../../components/corrida/corridacard/CorridaCard"
import FormCorrida from "../../components/corrida/corridacard/formcorrida/formcorrida"
import { ToastAlerta } from "../../utils/ToastAlerta"

interface Corrida {
  id: number
  destinoInicial: string
  destinoFinal: string
  passageira: string
  carro: string
  motorista: string
  preco: number
}

function Product () {

    const [formAberto, setFormAberto] = useState(false)
    const [corridaEditando, setCorridaEditando] = useState<Corrida | null>(null)
    const [proximoId, setProximoId] = useState(4)

     const [corridas, setCorridas] = useState<Corrida[]>([
    {
      id: 1,
      destinoInicial: "Guarulhos",
      destinoFinal: "São Paulo",
      passageira: "Helena",
      carro: "Honda Civic",
      motorista: "Giovanna",
      preco: 45.90
    },

    {
      id: 2,
      destinoInicial: "Campinas",
      destinoFinal: "Sorocaba",
      passageira: "Claire",
      carro: "Toyota Corolla",
      motorista: "Amanda",
      preco: 89.50
    },

    {
      id: 3,
      destinoInicial: "Osasco",
      destinoFinal: "Santos",
      passageira: "Jill",
      carro: "Jeep Compass",
      motorista: "Fernanda ",
      preco: 120.00
    }
  ])

  function salvarCorrida(corrida: Corrida) {
  if (corrida.id === 0) {
    // CRIAR NOVA CORRIDA
    const novaCorrida: Corrida = {
      ...corrida,
      id: proximoId
    }

    setCorridas([...corridas, novaCorrida])
    setProximoId(proximoId + 1)
  } else {
    // EDITAR
    const atualizadas = corridas.map((c) =>
      c.id === corrida.id ? corrida : c
    )

    setCorridas(atualizadas)
  }

  setFormAberto(false)
  setCorridaEditando(null)
}

function editarCorrida(id: number) {
  const corrida = corridas.find(c => c.id === id)


  if (corrida) {
    setCorridaEditando(corrida)
    setFormAberto(true)
  }
}

   function deletarCorrida(id: number) {

    const novaLista = corridas.filter(
      corrida => corrida.id !== id
    )
    ToastAlerta("Corrida excluída com sucesso!", "sucesso")

    setCorridas(novaLista)
  }

  function abrirNovaCorrida() {
  setCorridaEditando(null)
  setFormAberto(true)
}

function fecharFormulario() {
  setFormAberto(false)
  setCorridaEditando(null)
}

  return (
    <div className="corridas-container">

    <div className="corridas-header">
      <div className="titulo-area">
        <h1>Corridas</h1>

        <p>
          Gerencie todas as corridas cadastradas na plataforma
        </p>
      </div>

        <button
            className="btn-criar"
            onClick={abrirNovaCorrida}
        > 
        + Nova Corrida
        </button>
    </div>

      <div className="corridas-grid">

        {corridas.map((corrida) => (
          <CorridaCard
            key={corrida.id}
            corrida={corrida}
            onEditar={editarCorrida}
            onDeletar={deletarCorrida}
          />
        ))}

      </div>
    {formAberto && (
  <div className="modal-overlay">
    <div className="modal-content">
      <FormCorrida
        corridaInicial={corridaEditando ?? undefined}
        onSalvar={salvarCorrida}
        onCancelar={() => {
          setFormAberto(false)
          setCorridaEditando(null)
        }}
      />
    </div>
  </div>
)}

    </div>
  )

}

export default Product
