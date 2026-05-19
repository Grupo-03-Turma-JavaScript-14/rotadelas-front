import { motion } from 'motion/react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 px-6 w-full">
      <nav className="flex items-center justify-between h-20 max-w-7xl mx-auto">
        <div>
          <NavLink to="/">
            <img
              src="/navbar_footer/logo.png"
              alt="logo do rotadelas"
              className="h-20 w-auto object-contain block"
            />
          </NavLink>
        </div>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <motion.li whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/"
                className="text-gray-700 hover:text-[var(--color-button)] transition duration-200"
              >
                Home
              </NavLink>
            </motion.li>

            <motion.li whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/aboutus"
                className="text-gray-700 hover:text-[var(--color-button)] transition duration-200"
              >
                Sobre Nós
              </NavLink>
            </motion.li>

            <motion.li whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <NavLink
                to="/product"
                className="text-gray-700 hover:text-[var(--color-button)] transition duration-200"
              >
                Produto
              </NavLink>
            </motion.li>
          </ul>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/product')}
            className="bg-[var(--color-button)] hover:bg-[var(--color-button-hover)] text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
          >
            Vamos testar
          </motion.button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar