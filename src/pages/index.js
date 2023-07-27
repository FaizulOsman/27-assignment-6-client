import Navbar from "@/components/UI/Navbar";
import RootLayout from "@/components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
