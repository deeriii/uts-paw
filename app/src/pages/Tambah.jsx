import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: '', sutradara: '', tahunRilis: '', rating: '' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')
  const [galatKategori, setgalatKategori] = useState('')
  const [galatSutradara, setGalatSutradara] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()

    setGalat('')
    setgalatKategori('')
    setGalatSutradara('')

    let adaError = false

    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      adaError = true
    }
    if (!form.kategori || form.kategori.trim().length < 3) {
      setgalatKategori('Kategori wajib diisi, minimal 3 karakter.')
      adaError = true
    }
    if (!form.sutradara || form.sutradara.trim().length < 3) {
      setGalatSutradara('Sutradara wajib diisi, minimal 3 karakter.')
      adaError = true
    }
    if (adaError) return

    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tontonan</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <input id="kategori" name="kategori" value={form.kategori} onChange={ubah} />
      {galatKategori && <p role="alert">{galatKategori}</p>}

      <label htmlFor="sutradara">Sutradara</label>
      <input id="sutradara" name="sutradara" value={form.sutradara} onChange={ubah} />
      {galatSutradara && <p role="alert">{galatSutradara}</p>}

      <label htmlFor="tahunRilis">Tahun Rilis</label>
      <input id="tahunRilis" name="tahunRilis" value={form.tahunRilis} onChange={ubah} />

      <label htmlFor="Rating">Rating</label>
      <select id="rating" name="rating" value={form.rating} onChange={ubah}>
        <option>1/10</option>
        <option>2/10</option>
        <option>3/10</option>
        <option>4/10</option>
        <option>5/10</option>
        <option>6/10</option>
        <option>7/10</option>
        <option>8/10</option>
        <option>9/10</option>
        <option>10/10</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}