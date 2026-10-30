import { Link } from 'react-router-dom'
import './KartuItem.css'

export default function KartuItem({ item }) {
  const { id, judul, kategori, sutradara, tahunRilis, rating } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · sutradara {sutradara}
      </p>
    </article>
  )
}