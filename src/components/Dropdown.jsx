import { useState } from "react";

export const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ['Hectortorrez', 'Collections', 'Favorites', 'Settings', 'Log out']
  return (
    <div className="dropdown">
        <div className="dropdownBtn" onClick={ () => setIsActive(!isActive) }>
            { selected }
        </div>
        {
            isActive && ( <div className="dropdownContent">{
                options.map( (option) => (
                    <div className="dropdownItem" onClick={ () => {setSelected(option);
                        setIsActive(false);
                    }}>
                        { option }
                    </div>
                ))
            }</div>)
        }

    </div>
  )
}
