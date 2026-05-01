import EditProfile from "../../Components/EditProfile/EditProfile";
import Footer from "../../Components/Footer/footer";
import { SimpleHeader } from "../../Components/NavBar/SimpleHeader";
const ProfilePage = () => {
  return (
    <>
      <body className="netflix-color">
        <header>
          <SimpleHeader></SimpleHeader>
        </header>
        <main>
          <EditProfile></EditProfile>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};
export default ProfilePage;
