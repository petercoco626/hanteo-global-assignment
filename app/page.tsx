import { BannerList } from '@/components/banner/banner-list';
import { Content } from '@/components/content';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <main className="w-full h-full">
      <section className="w-full max-w-[425px] h-full bg-gray-200 mx-auto">
        <Navbar />
        <BannerList />
        <Content />
        <Footer />
      </section>
    </main>
  );
}
