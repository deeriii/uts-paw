import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/deeriii/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section id = "tentang">
      <h1>Tentang</h1>
      <dl className="biodata">
        <dt>Nama</dt>
        <dd>{nama}</dd>
        <dt>NIM</dt>
        <dd>{nim}</dd>
        <dt>Kelas</dt>
        <dd>{kelas}</dd>
        <dt>Tema</dt>
        <dd>{tema}</dd>
      </dl>
      <div id="srccode">
        <p>
            Kode sumber:
        </p>
        <a id="link" href={REPO}>{REPO}</a>
      </div>
    </section>
  )
}