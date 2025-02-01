import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({children}: Props){
  return(
    <>
    <Hero title="about me" sub="自分について" />
    <Sheet>{children}</Sheet>
    </>
  );
}