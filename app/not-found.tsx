import styles from "./not-found.module.css";
import Link from 'next/link';

export default function Contact() {
    return (
        
        <div className={styles.container}>
        <nav className={cx(styles.nav, isOpen && styles.open)}>
                                 <ul className={styles.items}>
                                   <li>
                                     <Link href="/members">自分について</Link>
                                   </li>
                                   <li>
                                     <Link href="/contact">お問い合わせ</Link>
                                   </li>
                                 </ul>
                                 <button className={cx(styles.button, styles.close)} onClick={close}>
                                   <Image
                                     src="/close.svg"
                                     alt="`閉じる"
                                     width={24}
                                     height={24}
                                     priority
                                   />
                                </button>
                               </nav>
            <dl>
                <dt className={styles.title}>お問合せ</dt>
                <dd className={styles.text}>
                    お問合せいただきありがとうございます。  
                    <br />
                    ご質問やご不明点がございましたら、下記のフォームよりお気軽にお問合せください。
                    <br />
                    下記のフォームからお問合せいただけます。
                </dd>
            </dl>
           
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">お名前</label>
                    <input type="text" id="name" name="name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" id="email" name="email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">メッセージ</label>
                    <textarea id="message" name="message" required className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>送信</button>
            </form>
        </div>
    );
}
