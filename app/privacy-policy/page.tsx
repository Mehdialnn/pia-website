import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>

        <div className="space-y-6 text-zinc-400">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Introduction
            </h2>
            <p>
              Welcome to Pia. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              as to how we look after your personal data when you visit our
              website and tell you about your privacy rights and how the law
              protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. Data We Collect
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Identity Data: includes first name, last name, username or
                similar identifier.
              </li>
              <li>
                Contact Data: includes email address and telephone number.
              </li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser
                type and version, time zone setting and location, browser
                plug-in types and versions, operating system and platform.
              </li>
              <li>
                Usage Data: includes information about how you use our website,
                products and services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. How We Use Your Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at:{" "}
              <a
                href="mailto:marion@piacall.io"
                className="text-primary hover:underline text-white"
              >
                marion@piacall.io
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
