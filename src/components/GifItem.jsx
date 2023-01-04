export const GifItem = ({title, url}) => {
  return (
    <>
    <div className="card">
        <a target="_blank" href={ url }>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
        </a>
    </div>
    </>
  )
}
