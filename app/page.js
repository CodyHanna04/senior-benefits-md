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
            <h1>Confused About Medicare? Let’s Make It Simple.</h1>
            <p>If you’re turning 65 or already enrolled in Medicare and are unsure what to do next, you’re not alone.</p>
            <p>Medicare involves important decisions. The choices you make can affect your costs, coverage, and flexibility for years to come.</p>
            <p>I help you understand your options clearly so you can make confident, informed decisions.</p>
          </div>
        </section>

        {/* Medicare Guidance + image */}
        <section className="section">
          <div className="container grid grid-2" style={{alignItems:"start"}}>
            <div>
              <h2 className="h-serif">Medicare Guidance — Clear, Personal, Unbiased</h2>
              <p className="muted">I provide one-on-one guidance to help you:</p>
              <ul className="clean">
                <li>Understand how Medicare works</li>
                <li>Compare Medicare Supplement (Medigap) and Medicare Advantage plans</li>
                <li>Review prescription drug coverage options</li>
                <li>Evaluate costs, coverage, and long-term implications</li>
              </ul>
              <p>You’ll receive straightforward explanations in plain language — without pressure.</p>
            </div>
            <div className="card">
              <img src="/maze2.jpg" alt="Two seniors in a maze" />
            </div>
          </div>
        </section>

        {/* Three CTAs */}
        <section className="section">
          <div className="container grid grid-3">
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Attend a Medicare Workshop</h3>
              <p className="muted">“This workshop was much easier to understand than other sessions we’ve attended.”<br />"Clear, comprehensive, well-organized."<br />"Wish I’d heard this info several years ago!"</p>
              <a href="/live-workshop" className="btn" style={{marginTop:8}}>Learn more</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request one-on-one help</h3>
              <p className="muted">By phone or in-person. Get clear answers specific to you.</p>
              <a href="/forms/one-on-one" className="btn" style={{marginTop:8}}>Learn more</a>
            </article>
            <article className="card" style={{textAlign:"center"}}>
              <h3 className="h-serif" style={{color:"var(--brand-blue)"}}>Request my Guide to Medicare</h3>
              <p className="muted">An easy-to-understand guide to get you started.</p>
              <a href="/forms/medicare-guide" className="btn" style={{marginTop:8}}>Learn more</a>
            </article>
          </div>
        </section>

        {/* Why Clients Choose Me */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Why Clients Choose Me</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
              <ul>
              <li><strong>Independent Medicare Specialist</strong><br />Licensed life and health insurance agent focused on Medicare planning.</li>
              <li><strong>Multiple Carriers</strong><br />Access to a wide range of Medicare insurance companies.</li>
              <li><strong>Local to Maryland</strong><br />Serving the Greater Baltimore area.</li>
              <li><strong>35+ Years of Insurance Experience</strong><br />Providing insurance solutions with integrity since 1983.</li>
              <li><strong>Objective Guidance</strong><br />I explain your options and the trade-offs so you can decide what fits your needs.</li>
              <li><strong>No Cost for My Help</strong><br />If I assist with enrollment, I’m paid by the insurance company — not by you. Your premium is the same whether you enroll with me or on your own.</li>
              </ul>
            </div>
          </div>
        </section>

      {/* Why Getting Medicare Right Matters */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Why Getting Medicare Right Matters</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
             <p className="muted">Certain Medicare decisions can:</p>
              <ul>
              <li>Create permanent late enrollment penalties</li>
              <li>Limit future coverage options</li>
              <li>Increase out-of-pocket costs</li>
              </ul>
              <p className="muted">Understanding your choices before you enroll — or before you switch plans — can help protect both your healthcare access and your finances.</p>
            </div>
          </div>
        </section>

      {/* Schedule review */}
        <section className="section">
          <div className="container">
            <h2 className="h-serif">Schedule a Medicare Review</h2>
            <div className="rule"></div>
            <div className="gw-help-area">
             <p className="muted">If you’re:</p>
             <ul>
                <li>Turning 65</li>
                <li>New to Medicare</li>
                <li>Leaving employer coverage</li>
                <li>Reviewing your current plan</li>
            </ul>
            <p>I’m here to help.</p>
            <h3 style={{color:"var(--brand-blue)"}}>What you can expect:</h3>
            <ul>
              <li>A personalized Medicare review</li>
              <li>Clear answers to your questions</li>
              <li>Guidance tailored to your health needs and budget</li>
              <li>No pressure</li>
            </ul>
            <div><a href="tel:+14436084018" className="none" style={{marginTop:8}}>📞 Call to schedule a consultation</a></div>
            <div><a href="/forms/one-on-one" className="none" style={{marginTop:8}}>📅 Or request an appointment online</a></div>
            <p>Make your Medicare decisions with clarity and confidence.</p>
            </div>
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

        <Footer />
      </div>
    </>
  );
}
