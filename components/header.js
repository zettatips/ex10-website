import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Halaman.module.scss'
import { IconContext } from 'react-icons'
import { IoMenu } from 'react-icons/io5'
import Footer from './footer'

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <header className={styles.header} data-trigger={false}>
            <div className={styles.header_desktop}>
                <Link href='/'>
                    <a>
                        <img className={styles.brand} src='./Logo-ex10.svg' alt="ex10" />
                    </a>
                </Link>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                Laman Utama
                            </a>
                        </Link>
                    </li>
                    <li className={styles.header_submit}>
                        <Link href='/tentang-kami'>
                            <a>
                                Tentang Kami
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.header_tablet}>
                <Link href='/'>
                    <a>
                        <img className={styles.brand} src='./Logo-ex10.svg' alt="ex10vc" />
                    </a>
                </Link>
                <button onClick={() => setShowDrawer(prevState => !prevState)}>
                    <IconContext.Provider value={{ className: "Icon" }}>
                        <IoMenu />
                    </IconContext.Provider>
                </button>
            </div>

            <div className={styles.header_laci} data-visible={showDrawer}>
                <div>
                    <ul>
                        <li className={styles.header_laci_item}>
                            <Link href='/'>
                                <a>
                                    Senarai
                                </a>
                            </Link>
                        </li>
                         {/*<li className={styles.header_laci_item}>
                            <Link href='/'>
                                <a>
                                    Iklan
                                </a>
                            </Link>
                        </li>*/}
                        <li className={styles.header_laci_item}>
                            <Link href='/tentang-kami'>
                                <a>
                                    Tentang Kami
                                </a>
                            </Link>
                        </li>
                        
                    </ul>

                    <Footer display="mobile" />
                </div>
            </div>
        </header>
    )
};

export default Header
