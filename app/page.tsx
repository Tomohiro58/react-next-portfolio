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
       <h1 className={styles.title}>Welcome to the TOMO Home Page</h1>
       <p className={styles.description}>
       This is the home page of the website.</p>
      </div>
    <Image
      className={styles.bgimg}
      src="/写真.jpg"
      alt=""
      width={4000}
      height={2000}
      />
    </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}></h2>

        <div className={styles.newsLink}>
        </div>
      </section>
    </>
  );
}

