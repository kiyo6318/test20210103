import styles from '../styles/Contact.module.css';
import Head from 'next/head';
import MediaQuery from 'react-responsive';

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <MediaQuery query="(min-width: 767px)">
        <form className={styles.form_style + ' ' + styles.pc_container} method="POST" netlify>
          <p className={styles.title}>お問い合わせ</p>
          <div className={styles.tmp_info}>
            <p>nogi store</p>
            <p>contact@nogistore.net</p>
          </div>
          <p className={styles.title}>お問い合わせフォーム　※準備中</p>
          <label className={styles.name} htmlFor="name">
            <span>お名前</span>
            <input type="text" name="name" placeholder="禾乃アイ" />
          </label>

          <label className={styles.kana} htmlFor="kana">
            <span>ふりがな</span>
            <input type="text" name="text" placeholder="のぎのあい" />
          </label>

          <label className={styles.mail} htmlFor="mail">
            <span>メールアドレス</span>
            <input type="email" name="mail" placeholder="xxxxx@xxx.com" />
          </label>

          <label className={styles.tel} htmlFor="tel">
            <span>電話番号</span>
            <input type="tel" name="tel" placeholder="09012345678" />
          </label>

          <label className={styles.zip_code}>
            <input type="hidden" className="p-country-name" value="Japan" />
            <span>郵便番号</span>
            <input type="text" className="p-postal-code" size="8" maxLength="8" placeholder="123456" />
          </label>
          <label className={styles.address}>
            <span>ご住所</span>
            <input
              type="text"
              className="p-region p-locality p-street-address p-extended-address"
              placeholder="xx県xx市xxxx123-4"
            />
          </label>
          <textarea rows="15" cols="100" placeholder="お問い合わせ内容"></textarea>
          <label className={styles.button_wrapper}>
            <button type="submit" className={styles.submit}>
              送信
            </button>
          </label>
        </form>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <form className={styles.sp_form_style} method="POST" netlify>
          <p className={styles.sp_title}>お問い合わせ</p>
          <p>
            <label className={styles.sp_name} htmlFor="name">
              <span>お名前</span>
              <br />
              <input type="text" name="name" placeholder="禾乃アイ" />
            </label>
          </p>
          <p>
            <label className={styles.sp_kana} htmlFor="kana">
              <span>ふりがな</span>
              <br />
              <input type="text" name="text" placeholder="のぎのあい" />
            </label>
          </p>
          <p>
            <label className={styles.sp_mail} htmlFor="mail">
              <span>メールアドレス</span>
              <br />
              <input type="email" name="mail" placeholder="xxxxx@xxx.com" />
            </label>
          </p>
          <p>
            <label className={styles.sp_tel} htmlFor="tel">
              <span>電話番号</span>
              <br />
              <input type="tel" name="tel" placeholder="09012345678" />
            </label>
          </p>
          <p>
            <label className={styles.sp_zip_code}>
              <input type="hidden" className="p-country-name" value="Japan" />
              <span>郵便番号</span>
              <br />
              <input type="text" className="p-postal-code" size="8" maxLength="8" placeholder="123456" />
            </label>
          </p>
          <p>
            <label className={styles.sp_address}>
              <span>ご住所</span>
              <br />
              <input
                type="text"
                className="p-region p-locality p-street-address p-extended-address"
                placeholder="xx県xx市xxxx123-4"
              />
            </label>
          </p>
          <p>
            <textarea className={styles.sp_textarea} placeholder="お問い合わせ内容"></textarea>
          </p>
          <p className={styles.sp_button_wrapper}>
            <label>
              <button type="submit" className={styles.sp_submit}>
                送信
              </button>
            </label>
          </p>
        </form>
      </MediaQuery>
    </div>
  );
}
