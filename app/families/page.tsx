'use client'
export default function Families() {
  const families = [
    {
      side: "Bride's Family",
      name: "The Okonkwo Family",
      origin: "Lagos & Anambra, Nigeria",
      members: [
        { role: "Father of the Bride", name: "Chief Emmanuel Okonkwo" },
        { role: "Mother of the Bride", name: "Mrs. Grace Okonkwo" },
        { role: "Maid of Honour", name: "Chisom Okonkwo (Sister)" },
        { role: "Best Bridesmaid", name: "Nneka Adeyemi (Cousin)" },
      ],
      note: "The Okonkwo family is from Anambra State, with deep roots in Igbo culture. They have been based in Lagos for over three decades.",
    },
    {
      side: "Groom's Family",
      name: "The Eze Family",
      origin: "Enugu & Enugu State, Nigeria",
      members: [
        { role: "Father of the Groom", name: "Dr. Chukwuemeka Eze Sr." },
        { role: "Mother of the Groom", name: "Mrs. Ngozi Eze" },
        { role: "Best Man", name: "Tobenna Eze (Brother)" },
        { role: "Groomsman", name: "Kelechi Obi (Cousin)" },
      ],
      note: "The Eze family hails from Enugu State. Known for their warm hospitality, they have family across Nigeria, the UK and the United States.",
    },
  ]

  return (
    <div style={{ paddingTop: '64px' }}>
      <section style={{ background: 'var(--charcoal)', padding: '100px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>✦ Meet the Families ✦</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--cream)', fontStyle: 'italic', fontWeight: 300 }}>
          Two families, one love
        </h1>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px' }}>
          {families.map((fam, i) => (
            <div key={i} style={{ background: i === 0 ? 'var(--cream-dark)' : 'var(--charcoal)', padding: '56px 48px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
                {fam.side}
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontStyle: 'italic', color: i === 0 ? 'var(--charcoal)' : 'var(--cream)', marginBottom: '8px' }}>
                {fam.name}
              </h2>
              <div style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '28px' }}>
                {fam.origin}
              </div>
              <div style={{ marginBottom: '28px' }}>
                {fam.members.map((m, j) => (
                  <div key={j} style={{ padding: '14px 0', borderBottom: `0.5px solid ${i === 0 ? 'rgba(208,138,102,0.2)' : 'rgba(208,138,102,0.15)'}`, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{m.role}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', color: i === 0 ? 'var(--charcoal)' : 'var(--cream)' }}>{m.name}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: i === 0 ? 'var(--stone)' : 'var(--stone-light)' }}>{fam.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Message */}
      <section style={{ background: 'var(--gold)', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 5vw, 52px)', color: 'var(--charcoal)', fontStyle: 'italic', marginBottom: '20px' }}>
          "Family is everything"
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(92,34,51,0.75)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
          We are deeply grateful for the love and support of both our families — near and far — as we begin this new chapter together.
        </p>
      </section>
    </div>
  )
}
