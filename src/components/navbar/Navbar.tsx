import { NavLink } from "react-router-dom"

function Navbar () {
    return (
        <>
        
            <header className="bg-white shadow-sm sticky top-0 z-50 px-6 w-full">
            <nav className="flex items-center justify-between h-20 max-w-7xl mx-auto">
  <div>
    <img src="/logo.png" alt="logo do rotadelas" className="h-20 w-auto object-contain block" />
  </div>

  <div className="flex items-center gap-6">
    <ul className="flex items-center gap-6">
      <li><NavLink to="/" className="text-gray-700 hover:text-(--color-button)">Home</NavLink></li>
      <li><NavLink to="/sobre" className="text-gray-700 hover:text-(--color-button)">Sobre Nós</NavLink></li>
      <li><NavLink to="/contato" className="text-gray-700 hover:text-(--color-button)">Produto</NavLink></li>
    </ul>

    <button className="bg-(--color-button) hover:bg-(--color-button-hover) text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300">
      Vamos testar
    </button>
  </div>
</nav>
        </header>
        </>
    )
} 
export default Navbar