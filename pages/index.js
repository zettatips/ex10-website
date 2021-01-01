import { useState, useEffect } from 'react'
import stail from '../styles/Halaman.module.scss'
import Layout from '../components/layout'
import KadAhli from '../components/halaman/kadAhli'
import Banner from '../components/banner'


const tapisData = (dataArray, searchParam) => {
    const filteredData = dataArray.filter(data => {
        const splitName = data.nama.split(' ');
        let flag = false;
        splitName.forEach(word => {
            if(word.toLowerCase().startsWith(searchParam.toLowerCase())) flag = true;
        })
        return flag;
    })
    return filteredData;
};

export const getStaticProps = async () => {
    //const komuniti = await fetch(`https://v1.nocodeapi.com/alserembani/google_sheets/XQsvzGyRcILpJBNG?tabId=komuniti`).then(res => res.json());

    const ahli = await fetch(`https://v1.nocodeapi.com/zettatips/google_sheets/awebfYtxHfzPhHYW?tabId=ahli`).then(res => res.json());

    return {
        props: {
            message: "Hello Swag!",
            data: {
                komuniti: ahli.data,
            }
        }
    }
};

const Home = ({ message, data }) => {
    const [komunitiTertapis, setKomunitiTertapis] = useState([]);

    const [carian, setCarian] = useState('');

    // * Category section
    const senaraiKategori = [
        { nama: 'semua', label: 'semua' },
        { nama: 'ahli', label: 'ahli' },
        { nama: 'galeri', label: 'galeri' },
        { nama: 'pencapaian', label: 'pencapaian' }];
    const [kategori, setKategori] = useState(senaraiKategori[0].nama);

    const ubahKategori = (kategoriTerpilih) => {
        setKategori(() => kategoriTerpilih);
    };

    useEffect(() => {
        setKomunitiTertapis(() => data.komuniti);
    }, [])

    useEffect(() => {
        setKomunitiTertapis(() => tapisData(data.komuniti, carian));
    
    }, [carian])

    return (
        <Layout
            tajuk="ex10 - Kelab Bola Tampar"
            huraian="Kami kawan, kami keluarga. Bermain bola tampar sejak 2008!"
            gambar="https://ex10.vercel.app/ex10meta.png"
            pautan="https://ex10.vercel.app"
        >
            <section className={stail.body}>
                <Banner />

                <div className={stail.search_area}>
                    <ul className={stail.search_filter}>
                        {
                            senaraiKategori.map(kat => (
                                <li key={kat.nama} onClick={() => ubahKategori(kat.nama)} data-active={kat.nama === kategori}>{kat.label}</li>
                            ))
                        }
                    </ul>
                    <input
                        id="carian"
                        className={stail.search}
                        type="text"
                        value={carian}
                        onChange={({ currentTarget: { value } }) => setCarian(() => value)}
                        placeholder="Anda cari, dan kami akan senaraikan untuk anda"
                    />
                    <label htmlFor="carian">Carian</label>
                </div>

                {/* Penghasilan Komponen Kad Ahli */}
                {
                    ((kategori === 'semua' || kategori === 'ahli') && komunitiTertapis.length !== 0) && (
                        <>
                            <div className={stail.tajukBahagian}>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_pendek}`} />
                                <p>Ahli</p>
                                <div className={`${stail.tajukBahagian_pengasing} ${stail.tajukBahagian_pengasing_panjang}`} />
                            </div>
                            <KadAhli senaraiKomuniti={komunitiTertapis} />
                        </>
                    )
                }

           </section>
        </Layout>
    )
}

export default Home;
