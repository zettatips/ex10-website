import styles from '../styles/Halaman.module.scss'

const callToAction = [
   {
        name: 'figma',
        icon: './Icon-Figma.svg',
        url: 'https://www.figma.com/file/fUtGE6vo9zmpnWgpkrYY0T/?node-id=0%3A1',
    },
    {
        name: 'github',
        icon: './Icon-Github.svg',
        url: 'https://github.com/zettatips/ex10-website',
    },
    {
        name: 'telegram',
        icon: './Icon-Telegram.svg',
        url: 'https://t.me/zettatipschannel',
    },
];

const Footer = ({ display = "all" }) => (
    <footer className={styles.footer} data-visible={display}>
        <div>
            <div className={styles.author}>
                Dibina oleh&nbsp;
                <a href="https://zettatips.com" target="_blank" rel="noreferrer noopener">Zetta Tips</a>&nbsp;
            </div>
            <div className={styles.cta}>
                <ul>
                    {
                        callToAction.map(cta => (
                            <li key={cta.name}>
                                <a className={styles.cta_link}  href={cta.url} target="_blank" rel="noreferrer noopener">
                                    <img className={styles.cta_icon}  src={cta.icon} alt={cta.name}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer


