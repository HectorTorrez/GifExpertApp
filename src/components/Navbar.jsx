import { useState } from "react"
import { Dropdown } from "./Dropdown"

export const Navbar = () => {
    const [selected, setSelected] = useState('hectortorrez')

  return (
    <div className="navbar-div">
        <ul className="navbar">
      <h1 className="navbar-h1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" className="IconContainer-sc-zg5bol kCTPrp" style={{width: "1em",
    paddingRight: "0.2em"}}><g fillRule="evenodd" clipRule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path d="M24 16v-4h4M16 0v4h-4"></path></g></svg> GifExpertApp</h1>
           <li className="navbar-list">Reactions</li>
           <li className="navbar-list">Entertaiment</li>
           <li className="navbar-list">Sports</li>
           <li className="navbar-list">:</li>
           <li className="navbar-list">Stickers</li>
           <li className="navbar-list">Artist</li>
        </ul>
           <ul className="ul-dropdown">
                <Dropdown selected={ selected } setSelected={ setSelected }/>
           </ul>
    </div>
  )
}
