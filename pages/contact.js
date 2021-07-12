import { Fragment } from "react";
import Head from "next/head";

import ContactForm from "../components/contact/contact-form";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact | BlogFun</title>
        <meta name="description" content="contact me!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default Contact;
