import { motion } from 'motion/react'

import '../css/Home.css'

const cardRise = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, ease: 'easeOut' as const },
}

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" id="inicio">
        <div className="hero-backdrop" />

        <div className="hero-content">
          <span className="hero-tag">Transporte seguro para mulheres</span>

          <h1>Segurança em cada trajeto</h1>

          <p>
            A Rota Delas conecta passageiras e motoristas mulheres em uma
            experiência de transporte mais segura, acolhedora e confiável.
          </p>

          <div className="hero-actions">
            <button className="button-primary">Pedir uma corrida</button>
            <button className="button-secondary">Quero ser motorista</button>
          </div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="hero-visual-layout"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.aside
              className="hero-banner-panel interactive-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
              whileHover={{ y: -10, rotate: -1.4 }}
            >
              <span className="banner-pill">Rota Delas em movimento</span>

              <div className="hero-banner-viewport">
                <motion.img
                  src="/clientes_rota_delas.png"
                  alt="Clientes felizes utilizando a Rota Delas"
                  className="hero-banner"
                  initial={{ scale: 1.04, x: -10 }}
                  animate={{ x: [-10, 10, -10], y: [0, -5, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              <div className="banner-copy">
                <strong>Comunidade que acolhe</strong>
                <p>
                  Mais conforto, mais autonomia e uma experiência feita para
                  mulheres.
                </p>
              </div>
            </motion.aside>

            <motion.div
              className="hero-card interactive-card"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
            >
              <div className="card-header">
                <span>Corrida segura</span>
                <strong>Ativa</strong>
              </div>

              <div className="driver-info">
                <div className="driver-avatar">RD</div>
                <div>
                  <h3>Motorista verificada</h3>
                  <p>Acompanhamento de rota em tempo real</p>
                </div>
              </div>

              <div className="route-progress">
                <div className="route-stop">
                  <div className="route-marker route-marker-start" />
                  <div className="route-stop-content">
                    <span>Origem</span>
                    <strong>Av. Paulista</strong>
                  </div>
                </div>

                <div className="route-line" />

                <div className="route-stop">
                  <div className="route-marker route-marker-end" />
                  <div className="route-stop-content">
                    <span>Destino</span>
                    <strong>Estação Vila Madalena</strong>
                  </div>
                </div>
              </div>

              <div className="safe-status">
                <span>Rota compartilhada</span>
                <strong>Online</strong>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="benefits-section" id="seguranca">
        <div className="section-title">
          <h2>Por que escolher Rota Delas?</h2>
        </div>

        <div className="benefits-grid">
          <motion.article
            className="benefit-card transparent-card interactive-card"
            {...cardRise}
            whileHover={{ y: -10, rotate: -1 }}
          >
            <div className="benefit-icon">🛡️</div>
            <h3>Trajetos mais seguros</h3>
            <p>
              Recursos pensados para aumentar a sensação de proteção antes,
              durante e depois da corrida.
            </p>
          </motion.article>

          <motion.article
            className="benefit-card solid-card interactive-card"
            {...cardRise}
            transition={{ ...cardRise.transition, delay: 0.08 }}
            whileHover={{ y: -10 }}
          >
            <div className="benefit-icon">📍</div>
            <h3>Rota acompanhada</h3>
            <p>
              Acompanhamento do trajeto e possibilidade de compartilhamento
              para pessoas de confiança.
            </p>
          </motion.article>

          <motion.article
            className="benefit-card light-card interactive-card"
            {...cardRise}
            transition={{ ...cardRise.transition, delay: 0.16 }}
            whileHover={{ y: -10, rotate: 1 }}
          >
            <div className="benefit-icon">👩‍✈️</div>
            <h3>Motoristas mulheres</h3>
            <p>
              Uma rede feita para conectar passageiras e motoristas mulheres
              com mais acolhimento.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="steps-section" id="como-funciona">
        <div className="section-title">
          <h2>Como funciona</h2>
        </div>

        <div className="steps-grid">
          <motion.article
            className="step-card interactive-card"
            {...cardRise}
            whileHover={{ y: -8 }}
          >
            <span>01</span>
            <h3>Cadastre-se</h3>
            <p>Crie sua conta e informe seus dados principais.</p>
          </motion.article>

          <motion.article
            className="step-card interactive-card"
            {...cardRise}
            transition={{ ...cardRise.transition, delay: 0.08 }}
            whileHover={{ y: -8 }}
          >
            <span>02</span>
            <h3>Escolha seu destino</h3>
            <p>Informe origem, destino e acompanhe a solicitação.</p>
          </motion.article>

          <motion.article
            className="step-card interactive-card"
            {...cardRise}
            transition={{ ...cardRise.transition, delay: 0.16 }}
            whileHover={{ y: -8 }}
          >
            <span>03</span>
            <h3>Viaje com segurança</h3>
            <p>Encontre uma motorista e compartilhe sua rota.</p>
          </motion.article>
        </div>
      </section>

      <motion.section
        className="community-section interactive-card"
        id="comunidade"
        {...cardRise}
        whileHover={{ y: -8 }}
      >
        <div>
          <span>Comunidade Rota Delas</span>
          <h2>Mobilidade com cuidado não é luxo. É direito.</h2>
          <p>
            Uma plataforma pensada para fortalecer autonomia, segurança e
            confiança nos deslocamentos do dia a dia.
          </p>
        </div>

        <button className="button-light">Começar agora</button>
      </motion.section>
    </main>
  )
}

export default Home