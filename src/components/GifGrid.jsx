import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs ( category );
  // const [clear, setClear] = useState([])
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const newClear = getGifs(category);
  //   clear

  // }

  
  
  return (

    <>
    {/* <form action="">
      <button onClick={onSubmit}>Clear</button>

    </form> */}
    <h3>{ category }</h3>
    {
      isLoading && (<h2>Cargando...</h2>)
      
    }
    <div className="card-grid">
    {
        images.map( (image) =>  (
          <GifItem key={ image.id }
          { ...image }
          />
        ))
      }
      
    </div>
    </>

  )
}
