import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { Navbar } from "./components/Navbar";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( onNewCategory ) => {

        if( categories.includes( onNewCategory )) return;
        // setCategories( oldArray => [...oldArray, 'Valorant']) // una forma
        setCategories([ onNewCategory, ... categories])

    };
    
    const handleOnRemove = categoryToRemove => [
        setCategories(
            categories.filter((category) => category !== categoryToRemove)
        )
    ]

    const onDeleteCategory = () => {
        setCategories([''])
    }
    console.log(categories)
    
  return (
    <div className="container">
        <Navbar/>
        <AddCategory 
        onNewCategory = { onAddCategory }
        />
        <button className="btn-reset" onClick={ onDeleteCategory }>Reset</button>
        <ol>
            {categories.map( category => 
                <>
                <button className="btn-delete" onClick={()=> handleOnRemove(category)}>Delete</button>
                <GifGrid
                 key={ category }
                 category = { category }   
                />
                </>

            )}

        </ol>

        
    </div>
  )
}
