import '../css/Product.css'

function Product() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-content">
          <span className="product-badge">Produto</span>

          <h1>Rotadelas App</h1>

          <p>
            Uma plataforma de mobilidade voltada para mulheres, com foco em
            segurança, rotas inteligentes, comunidade e apoio durante o trajeto.
          </p>

          <a href="/" className="product-button">
            Voltar para início
          </a>
        </div>

        <div className="product-card">
          <h2>Principais recursos</h2>

          <ul>
            <li>Rotas mais seguras para o deslocamento diário</li>
            <li>Apoio em tempo real durante o trajeto</li>
            <li>Comunidade de suporte entre mulheres</li>
            <li>Interface simples, rápida e intuitiva</li>
            <li>Experiência pensada para confiança e autonomia</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Product