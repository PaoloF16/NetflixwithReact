import EditProfile from "../../Components/EditProfile/EditProfile";
import Footer from "../../Components/Footer/footer";
import { SimpleHeader } from "../../Components/NavBar/SimpleHeader";
const ProfilePage = () => {
  return (
    <>
      <div className="netflix-color">
        <header>
          <SimpleHeader></SimpleHeader>
        </header>
        <main>
          <div className="d-flex justify-content-center">
            <EditProfile></EditProfile>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default ProfilePage;
