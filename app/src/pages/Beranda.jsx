import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'
export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1 id="judulBeranda">Pencatatan Tontonan</h1>
      <div id="beranda">
        <div className = "Kotak">
          <p id="tema">TEMA</p> 
          <p> {mahasiswa.tema}</p>
        </div>

        <div className = "KotakKeterangan">
          {loading ? (
            <p>Memuat ringkasan...</p>
          ) : (
            <p>
              Ada {items.length} tontonan dalam {jumlahKategori} kategori.
            </p>
          )}
        </div>
      </div>

        <div className = "KotakKoleksi">
          <Link to="/koleksi"><strong>Koleksi</strong></Link>
        </div>
    </section>
  )
}