import Link from 'next/link'

const IndexPage = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 59.99 },
    { id: 2, name: 'Smart Watch', price: 129.99 },
    { id: 3, name: 'Bluetooth Speaker', price: 39.99 },
    { id: 4, name: 'Gaming Mouse', price: 24.99 },
  ] 
 

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome! Choose your favorite product below:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}>
            <h3>{product.name}</h3>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button
              style={{
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/about">Go to About Page →</Link>
      </div>
    </div>
  )
}

export default IndexPage
