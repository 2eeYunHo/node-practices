import React, {Fragment} from "react";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

const SiteLayout = () => {
    return (
        <Fragment>
            <Header />
            <Navigation />
            <Footer />
        </Fragment>
    );
};

export default SiteLayout;