import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <div className="page-wrap">
        <Navbar />

        {/* Purple hero banner */}
        <section className="hero">
          <div className="container">
            <h1>Confused About Medicare? You’re Not Alone.</h1>
            <p>If you’re turning 65 soon or are already on Medicare and unsure what to do next, you’re in the right place. Medicare choices can be confusing—and the decisions you make can have long-term financial and coverage consequences.
I help individuals and couples understand their options and make confident Medicare decisions.
</p>
          </div>
        </section>

        {/* Intro + image */}
        <section className="section">
          <div className="container grid grid-2" style={{alignItems:"start"}}>
            <div>
              <p><strong>I can help</strong> with Medicare decisions about Supplemental Insurance Plans (also called Medigap Plans) and Medicare Advantage Plans.</p>
              <p className="muted">I am:</p>
              <ul className="clean">
                <li>An independent life and health insurance agent specializing in Medicare</li>
                <li>Multi-licensed: representing a wide selection of Medicare insurance carriers</li>
                <li>Local to Maryland and the Greater Baltimore Area</li>
                <li>Over 35 years of experience with a variety of insurance products</li>
                <li>Unbiased. I present several alternatives and let you decide</li>
                <li>Able to give personal attention and help devise solutions tailored to your situation</li>
              </ul>
            </div>
            <div className="card">
              <img src="/maze2.jpg" alt="Two seniors in a maze" />
            </div>
          </div>
        </section>

        {/* --- Ignorance is not bliss section --- */}
        <section className="section" aria-labelledby="ignorance-heading">
          <div className="container">
            <h2 id="ignorance-heading" className="h-serif" style={{ marginBottom: 8 }}>
              Ignorance is not bliss when it comes to Medicare . . .
            </h2>
            <p className="muted" style={{ maxWidth: 900 }}>
              Making the wrong choices when joining (or switching) Medicare plans could cost you a lot of money
              and could permanently cut off options for some coverage. Avoid making choices you may regret later!
            </p>
          </div>
        </section>

        {/* Three CTAs */}
        <section className="section">
          <div className="container grid grid-3">
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Attend a Medicare Workshop</h3>
              <p className="muted">“This workshop was much easier to understand than other sessions we’ve attended.”<br />"Clear, comprehensive, well-organized."<br />"Wish I’d heard this info several years ago!"</p>
              <a href="/workshops" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request one-on-one help</h3>
              <p className="muted">By phone or in-person. Get clear answers specific to you.</p>
              <a href="/forms/one-on-one" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request my Guide to Medicare</h3>
              <p className="muted">An easy-to-understand guide to get you started.</p>
              <a href="/forms/medicare-guide" className="btn" style={{marginTop:8}}>Learn More</a>
            </article>
          </div>
        </section>

        {/* Plans columns */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Maryland plans I represent</h2>
            <div className="rule"></div>
            <div className="grid grid-2">
              <div>
                <h3 className="h-serif" style={{marginBottom:6}}>Medicare Supplement Insurance (aka Medigap)</h3>
                <p className="muted">Aetna, Ace Property & Casualty Ins. Co., Aflac, Bankers Fidelity Assurance Company, CareFirst BlueCross BlueShield of Maryland, Cigna, Humana, Mutual of Omaha, United Healthcare (AARP), United American Life Ins. Co., Wellabe/Medico, and many more.</p>
              </div>
              <div>
                <h3 className="h-serif" style={{marginBottom:6}}>Medicare Advantage Plans</h3>
                <p className="muted">CareFirst BlueCross Blue Shield of Maryland, Aetna, Alterwood, Cigna Healthcare, Humana, Johns Hopkins Medicare Advantage plan, Kaiser Permanente, United Healthcare (AARP).</p>
              </div>
            </div>
          </div>
        </section>
        {/* Help column */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">How I Can Help</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
             <p className="muted">I provide guidance on:</p>
              <ul>
              <li>Understanding and navigating Medicare</li>
              <li>Medicare Supplement (Medigap) plans</li>
              <li>Medicare Advantage plans</li>
              <li>Choosing prescription plans</li>
              </ul>
              <p className="muted">I explain how each option works, compare costs and benefits, and help you determine which coverage best fits your health needs and budget.</p>
            </div>
          </div>
        </section>

        {/* work with me column */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Why Work With Me</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
              <ul>
              <li><strong>Independent Medicare specialist</strong><br />Licensed life and health insurance agent focused on Medicare.</li>
              <li><strong>Multiple insurance carriers</strong><br />I represent a wide selection of Medicare insurance companies.</li>
              <li><strong>Local expertise</strong><br />Serving Maryland and the Greater Baltimore Area.</li>
              <li><strong>35+ years of experience</strong><br />Extensive background with Medicare and other insurance products.</li>
              <li><strong>Unbiased guidance</strong><br />I present several options and explain the pros and cons—you make the decision.</li>
              <li><strong>Personalized service</strong><br />Individual attention and solutions tailored to your unique situation.</li>
              <li><strong>No cost to you</strong><br />If I assist you with enrollment, I am compensated by the insurance company--not by you.  Your premium is exactly the same whether you work with me or enroll on your own.</li>
              </ul>
            </div>
          </div>
        </section>

      {/* right matters column */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Why Getting Medicare Right Matters</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
             <p className="muted">When it comes to Medicare, ignorance is not bliss.</p>
             <p className="muted">Making the wrong choice when first enrolling—or when switching plans—can:</p>
              <ul>
              <li>Cost you thousands of dollars over time</li>
              <li>Result in permanent penalties</li>
              <li>Limit or eliminate future coverage options</li>
              </ul>
              <p className="muted">My goal is to help you avoid costly mistakes and choose coverage you can feel confident about—now and in the years ahead.</p>
            </div>
          </div>
        </section>

      {/* next steps column */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Take the Next Step — Get Clear, Confident Medicare Guidance</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
             <p className="muted">You don’t have to figure out Medicare on your own.</p>
             <p className="muted">If you’re turning 65, new to Medicare, or reviewing your current coverage, I can help you understand your options and make informed decisions.</p>
             <h3 style={{color:"var(--brand-blue)"}}>What to Expect</h3>
             <ul>
                <li>A personalized Medicare review</li>
                <li>Clear explanations in plain language</li>
                <li>No pressure</li>
                <li>Guidance tailored to your health needs and budget</li>
            </ul>
            <h3 style={{color:"var(--brand-blue)"}}>Schedule Your Medicare Consultation</h3>
            <div><a href="/forms/one-on-one" className="none" style={{marginTop:8}}>Call today to schedule a free Medicare consultation</a></div>
            <div><a href="mailto:david@seniorbenefitsmd.com" className="none" style={{marginTop:8}}>Or request an appointment online at your convenience</a></div>
            <p>Making the right Medicare choices now can help protect your healthcare options and your finances for years to come.</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
