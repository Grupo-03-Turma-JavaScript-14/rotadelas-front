import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#6F1AB6]/95 via-[#4D1E8F] to-[#330A4D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-[minmax(220px,1fr)_repeat(2,minmax(180px,1fr))]">
        <div className="space-y-4">
          <img src="/navbar_footer/logo.png" alt="Logo Rota Delas" className="h-12 w-auto object-contain" />
          <p className="text-sm leading-7 text-white/85 max-w-md">
            Rota Delas conecta seu caminho com confiança, estilo e comunidades inspiradoras.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Navegação
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className="text-white/85 hover:text-[#FF4FD8] transition duration-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" className="text-white/85 hover:text-[#FF4FD8] transition duration-200">
                Sobre Nós
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className="text-white/85 hover:text-[#FF4FD8] transition duration-200">
                Produto
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Contato
          </h3>
          <p className="text-sm text-white/80">contato@rotadelas.com</p>
          <p className="text-sm text-white/80">+55 11 99999-9999</p>
          <p className="text-sm text-white/80">Av. Exemplo, 123 — São Paulo, SP</p>
        </div>
      </div>

      <div className="border-t border-white/15 py-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Rota Delas. Todos os direitos reservados.
      </div>
    </footer>
  )
}