import stail from '../styles/Halaman.module.scss'

const Banner = () => {
    return (
        <>
            <div className={stail.highlight}>
                <h1>Kami kawan, kami keluarga</h1>
                <h1 className={stail.highlight_gradient}>Bermain Bola Tampar Bersama sejak 2008!</h1>
                <h4>Cari ahli, tatap pencapaian, lihat aktiviti & galeri kami</h4>
            </div>
        </>
    )
}

export default Banner
