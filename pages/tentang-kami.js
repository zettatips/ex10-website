import { useEffect } from 'react';
import {
    getPostData,
} from '../lib/contents.js'
import stail from '../styles/TentangKami.module.scss'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Image from 'next/image'
import KadTestimoni from '../components/tentang-kami/kadTestimoni'
import SertaiBuletin from '../components/sertaiBuletin'

export const getStaticProps = async() => {
    const pageData = await getPostData('tentang_kami');
    
    return {
        props: {
            pageData
        }
    }
}

const TentangKami = ({ pageData}) => {
    const dikuasakan = () => {
        const gambar = [];
        const pautan = [];
        Object.entries(pageData).forEach(([dataKey, dataValue]) => {
            dataKey.startsWith('dikuasakan_gambar') && gambar.push(dataValue);
            dataKey.startsWith('dikuasakan_pautan') && pautan.push(dataValue);
        });

        const senaraiKuasa = [];
        gambar.forEach((img, index) => senaraiKuasa.push({ gambar: img, pautan: pautan[index] }));

        return senaraiKuasa;
    }

    return (
        <Layout
            tajuk="ex10vc - Tentang Kami"
            huraian="Di sebalik kejayaan web ini, berdirinya satu komuniti di yang terdiri daripada bekas pemain bola tampar UNITEN"
            gambar="https://ex10.club/ex10meta.PNG"
            pautan="https://ex10.club"
        >
            <Banner />
            <div className={stail.page_container}>
                <div className={stail.page_pembangun}>
                    <div className={stail.pembangun}>
                        <div className={stail.pembangun_gambar}>
                            <Image
                                src={pageData.gambar1}
                                alt={pageData.nama1}
                                width={200}
                                height={200}
                            />
                        </div>
                        <p className={stail.pembangun_nama}>{pageData.nama1}</p>
                        <p className={stail.pembangun_kendali}>{pageData.kendali1}</p>
                    </div>
                    <div className={stail.pembangun}>
                        <div className={stail.pembangun_gambar}>
                            <Image
                                src={pageData.gambar2}
                                alt={pageData.nama2}
                                width={200}
                                height={200}
                            />
                        </div>
                        <p className={stail.pembangun_nama}>{pageData.nama2}</p>
                        <p className={stail.pembangun_kendali}>{pageData.kendali2}</p>
                    </div>
                </div>
                <article className={stail.page_huraian}>
                    <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
                </article>
            </div>

            <div className={stail.dikuasakan}>
                <p>Dikuasakan oleh:</p>
                <div className={stail.dikuasakan_senarai}>
                {
                    dikuasakan().map((kuasa) => (
                        <div className={stail.dikuasakan_gambar} key={kuasa.pautan}>
                            <a href={kuasa.pautan} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={kuasa.gambar}
                                    alt={kuasa.gambar}
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                            </a>
                        </div>
                    ))
                }
                </div>
            </div>
    
            {/* testimoni.length !== 0 && <KadTestimoni senaraiTestimoni={testimoni} /> */}

            {/*<SertaiBuletin /> */}
        </Layout>
    );
};

export default TentangKami
