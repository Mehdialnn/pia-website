import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main className="container mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>

        <div className="space-y-6 text-zinc-400">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website, you agree to be bound by these Terms of
              Service and to comply with all applicable laws and regulations. If
              you do not agree with these terms, you are prohibited from using
              or accessing this site or using any other services provided by
              pia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on pia&apos;s website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on pia&apos;s website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or &quot;mirror&quot; the
                materials on any other server.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              3. Disclaimer
            </h2>
            <p>
              The materials on pia&apos;s website are provided on an &apos;as is&apos; basis.
              pia makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              4. Limitations
            </h2>
            <p>
              In no event shall pia or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on pia&apos;s website, even if pia or a
              pia authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              5. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of France and you irrevocably submit to
              the exclusive jurisdiction of the courts in that State or
              location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              6. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:{" "}
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
