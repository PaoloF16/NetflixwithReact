import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/footer";
import AccountPage from "../../Components/AccountPage/AccountPage";
const SettingsPage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <AccountPage></AccountPage>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SettingsPage;
