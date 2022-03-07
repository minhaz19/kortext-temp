import Header from './Header'
import Footer from "./Footer";

const HomeLayout = ({children}) => (
    <>
        <Header />
        {
            children
        }
        <Footer />
    </>
)


export default HomeLayout
