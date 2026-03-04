import React from "react";

export const metadata = {
  title: "Contact Us | Solvorr Tech",
  description:
    "Get in touch with Solvorr Tech to discuss your custom dashboard, workflow automation, or integration project. We would love to hear from you.",
  alternates: {
    canonical: "https://www.solvorrtech.com/contact",
  },
  openGraph: {
    title: "Contact Us | Solvorr Tech",
    description:
      "Get in touch with Solvorr Tech to discuss your custom dashboard, workflow automation, or integration project.",
    url: "https://www.solvorrtech.com/contact",
    siteName: "Solvorr Tech",
    type: "website",
  },
};
import { ContactUs } from "../components";

const ContactPage = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default ContactPage;
