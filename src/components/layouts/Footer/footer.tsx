import React from "react";

const Footer = () => {
  return (
    <>
     <section className="footer bg-blue-600 border-t ">
        <div className="container  mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4 ">
                <div className="first">
                    <p className="text-skin-white">© Kaleab D.</p>
                </div>

                <div className="last float-right text-skin-white">
                    <p>© 2016 EC.</p>
                </div>
        </div>
        </div>
     </section>
    </>
  );
};

export default Footer;
