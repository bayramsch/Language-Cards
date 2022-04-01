
import reactSvg from"../../assets/react.svg"
import "./Header.css"

const Header = () => {
  return (
    <div className="svg-container">
        <img className="reactSvg" src={reactSvg} alt="" />
    </div>
  )
}

export default Header