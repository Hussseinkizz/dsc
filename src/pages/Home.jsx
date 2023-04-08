import HeroSection from '../components/HeroSection';
import BlogCards from '../components/BlogCards';
import AppBar from '../components/AppBar';

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <AppBar />
      <section className="w-full flex flex-col justify-start items-center">
        <HeroSection />
        {/* The Blogs */}
        <BlogCards />
        {/* The Events */}
        {/* The Projects */}
      </section>
      {/* Spacer Div Hack */}
      <div className="flex w-full h-full flex-auto min-h-16"></div>
      {/* The Footer */}
      <footer className="flex w-full justify-center items-center gap-4 px-4 py-2 bg-slate-800 text-slate-600">
        &copy; DSC UCU Community 2023
      </footer>
    </div>
  );
};

export default Home;
