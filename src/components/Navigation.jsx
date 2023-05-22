import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products Page </Link>
          </li>
          <li>
            <Link to="/">HomePage</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;