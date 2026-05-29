import Link from "next/link";
import type { GlobalSetting } from "@/lib/global-settings";

type FooterProps = {
  globalSetting: GlobalSetting;
};

export default function Footer({ globalSetting }: FooterProps) {
  return (
    <footer className="foot" data-screen-label="Footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <Link className="brand" href="/">
              <span className="mark" />
              {globalSetting.logoText}
            </Link>

            <p
              style={{
                fontSize: 13,
                color: "var(--d-3)",
                marginTop: 16,
                maxWidth: 260,
                lineHeight: 1.55,
              }}
            >
              {globalSetting.footerDescription}
            </p>

            <p
              style={{
                fontSize: 12,
                color: "var(--d-3)",
                marginTop: 18,
                lineHeight: 1.6,
              }}
            >
              {globalSetting.salesEmail && (
                <>
                  Sales: {globalSetting.salesEmail}
                  <br />
                </>
              )}
              {globalSetting.supportEmail && (
                <>
                  Support: {globalSetting.supportEmail}
                  <br />
                </>
              )}
              {globalSetting.phone && <>Phone: {globalSetting.phone}</>}
            </p>
          </div>

          <div className="foot-col">
            <h5>Product</h5>
            <ul>
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/ai">AI &amp; Intelligence</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Solutions</h5>
            <ul>
              <li>
                <Link href="/candidates">Candidates</Link>
              </li>
              <li>
                <Link href="/employers">Employers</Link>
              </li>
              <li>
                <Link href="/colleges">Colleges</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/resources">Stories</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 CareerXel · ALL RIGHTS RESERVED</span>

          <div className="foot-social">
            {globalSetting.twitterUrl && (
              <Link href={globalSetting.twitterUrl} aria-label="X">
                X
              </Link>
            )}

            {globalSetting.linkedinUrl && (
              <Link href={globalSetting.linkedinUrl} aria-label="LinkedIn">
                in
              </Link>
            )}

            {globalSetting.githubUrl && (
              <Link href={globalSetting.githubUrl} aria-label="GitHub">
                GH
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
