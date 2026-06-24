'use client'
export default function Gifts() {
  const wishlist = [
    { item: 'Kitchen Aid Stand Mixer', desc: 'For Temitope\'s love of baking', price: '₦250,000 / £180' },
    { item: 'Honeymoon Experience', desc: 'Contribute to our dream honeymoon', price: 'Any amount' },
    { item: 'Home Starter Fund', desc: 'Help us build our first home together', price: 'Any amount' },
    { item: 'Luxury Bedding Set', desc: 'For a beautiful bedroom', price: '₦120,000 / £85' },
    { item: 'Fine Dining Experience', desc: 'A romantic dinner for us in Lagos', price: '₦80,000 / £55' },
    { item: 'Garden/Outdoor Set', desc: 'For our dream outdoor space', price: '₦180,000 / £130' },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Gifts ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Gift registry
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--stone-light)', marginTop: '20px', maxWidth: '500px', margin: '20px auto 0', lineHeight: 1.8 }}>
          Your presence is our greatest gift. If you wish to celebrate with a gift, we have a few ideas below.
        </p>
      </section>

      {/* Payment methods */}
      <section style={{ background: 'var(--gold)', padding: '48px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(92,34,51,0.6)', marginBottom: '16px', textAlign: 'center' }}>How to give</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
            {[
              { method: 'Bank Transfer (Nigeria)', details: ['Bank: GTBank', 'Account Name: Temitope Okonkwo', 'Account No: 0123456789'], action: null },
              { method: 'Flutterwave', details: ['For Nigerian guests', 'Pay in Naira', 'Instant & secure'], action: 'Pay via Flutterwave' },
              { method: 'PayPal / International', details: ['For diaspora guests', 'Pay in any currency', 'paypal.me/oyelekeandtemitope'], action: 'Pay via PayPal' },
            ].map((m, i) => (
              <div key={i} style={{ background: 'rgba(92,34,51,0.08)', padding: '28px 24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '12px', letterSpacing: '0.05em' }}>{m.method}</div>
                {m.details.map((d, j) => <div key={j} style={{ fontSize: '13px', color: 'rgba(92,34,51,0.75)', marginBottom: '4px' }}>{d}</div>)}
                {m.action && (
                  <a href="#" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 20px', background: 'var(--charcoal)', color: 'var(--cream)', textDecoration: 'none', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {m.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wishlist */}
      <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>Our Wishlist</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontStyle: 'italic' }}>A few ideas</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2px' }}>
          {wishlist.map((w, i) => (
            <div key={i} style={{ padding: '32px', background: 'var(--cream-dark)', borderTop: '2px solid var(--gold)' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: 'var(--charcoal)', marginBottom: '8px' }}>{w.item}</h3>
              <p style={{ fontSize: '13px', color: 'var(--stone)', marginBottom: '16px', lineHeight: 1.6 }}>{w.desc}</p>
              <div style={{ fontSize: '13px', color: 'var(--gold)', fontWeight: 500 }}>{w.price}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
