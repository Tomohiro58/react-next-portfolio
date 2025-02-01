import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
    
export default async function Home(){

  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  return (
    <>
    <section className={styles.top}>
      <div>
       <h1 className={styles.title}>トモの夜景</h1>
       <p className={styles.description}>
      こんにちは</p>
      </div>
    <Image
      className={styles.bgimg}
      src="/Image.jpeg"
      alt=""
      width={4000}
      height={2000}
      />
    </section>
    <section className={styles.news}>
        <h2 className={styles.newsTitle}>一覧</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
        </div>
      </section>
    </>
  );
}

