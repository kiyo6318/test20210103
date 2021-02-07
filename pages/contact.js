import styles from '../styles/Contact.module.css'
import Head from 'next/head'

export default function Contact() {
  return(
    <div className={styles.container}>
      <Head>
        <script src="https://yubinbango.github.io/yubinbango/yubinbango.js" charSet="UTF-8"></script>
      </Head>
      <p className={styles.title}>お問い合わせ</p>
        <form className={"h-adr" + " " + styles.form_style}>
          <label className={styles.name} htmlFor="name"><span>お名前</span><input type="text" name="name" placeholder="禾乃アイ" /></label>

          <label className={styles.kana} htmlFor="kana"><span>ふりがな</span><input type="text" name="text" placeholder="のぎのあい" /></label>

          <label className={styles.mail} htmlFor="mail"><span>メールアドレス</span><input type="email" name="mail" placeholder="xxxxx@xxx.com" /></label>

          <label className={styles.tel} htmlFor="tel"><span>電話番号</span><input type="tel" name="tel" placeholder="09012345678" /></label>

          <label className={styles.zip_code}>
            <input type="hidden" className="p-country-name" value="Japan" />
            <span>郵便番号</span>
            <input type="text" className="p-postal-code" size="8" maxLength="8" placeholder="123456" />
          </label>
          <label className={styles.address}>
            <span>ご住所</span>
            <input type="text" className="p-region p-locality p-street-address p-extended-address" placeholder="xx県xx市xxxx123-4" />
          </label>
          <textarea rows="15" cols="100" placeholder="お問い合わせ内容"></textarea>
          <label className={styles.button_wrapper}>
            <button type="submit" className={styles.submit}>
                送信
            </button>
          </label>
        </form>
    </div>
  )
}