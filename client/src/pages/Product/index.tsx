import { useParams } from 'react-router-dom'

export function Product() {
  const { id } = useParams()
  return (
    <div>
      <h1>Produto</h1>
      <p>Produto: {id}</p>
    </div>
  )
}
