import stail from './SertaiBuletin.module.scss'

const SertaiBuletin = () => {
    return (
        <>
            <div className={stail.seksyen}>
                <p className={stail.tajuk}>Hubungi kami</p>
                <p className={stail.subtajuk}>Sebarang pertanyaan, sila isi borang di bawah:</p>
                <form className={stail.borang} autoComplete="on">
                    <p>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Nama" />
                    </p>
                    <p>
                    <label for="email">Email</label>
                    <input id="email" type="email" aria-label="email address" placeholder="Taipkan e-mel anda di sini ..." autofill="" inputMode="email" />
                    </p>
                    <p>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Taipkan soalan anda di sini ..."></textarea>
                    </p>
                    <button type="submit">Hantar</button>
                </form>
            </div>
        </>
    )
}

export default SertaiBuletin
