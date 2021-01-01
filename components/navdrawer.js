import Link from 'next/link'
import Image from 'next/image'
import stail from './layout.module.scss'

const NavDrawer = () => {
    return (
        <ul className={stail.navdrawer}>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Home.svg"
                                alt="Senarai"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Laman Utama
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Contact.svg"
                                alt="Ahli"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Ahli
                    </a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a className={stail.navdrawer_butang}>
                        <div className={stail.navdrawer_ikon}>
                            <Image
                                src="/ikon/Icon-Mail.svg"
                                alt="Hubungi"
                                width={30}
                                height={30}
                                className={stail.navdrawer_ikon}
                            />
                        </div>
                        Hubungi
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default NavDrawer;