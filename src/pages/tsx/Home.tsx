import '../css/Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-content">
          <span className="home-badge">Rotadelas</span>

          <h1>Mobilidade segura feita para mulheres</h1>

          <p>
            O Rotadelas é um aplicativo pensado para apoiar mulheres em seus
            deslocamentos diários, trazendo mais segurança, confiança e
            autonomia durante o caminho.
          </p>

          <div className="home-actions">
            <a href="/aboutus" className="home-button">
              Conheça o projeto
            </a>

            <a href="/product" className="home-button-outline">
              Ver produto
            </a>
          </div>
        </div>

        <div className="home-card">
          <h2>Por que existe?</h2>

          <p>
            Porque toda mulher merece se deslocar com mais tranquilidade,
            informação e suporte.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home