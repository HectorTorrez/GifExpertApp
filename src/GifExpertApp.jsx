import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

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
    <>
        <button className="btn btn-danger" onClick={ onDeleteCategory }>Delete</button>
        <h1>GifExpertApp</h1>
        <AddCategory 
        onNewCategory = { onAddCategory }
        />
        <ol>
            {categories.map( category => 
                <>
                <button onClick={()=> handleOnRemove(category)}>Delete</button>
                <GifGrid
                 key={ category }
                 category = { category }   
                />
                </>

            )}

        </ol>
    </>
  )
}
