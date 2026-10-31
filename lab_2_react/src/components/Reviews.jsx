import React, { useState, useEffect } from 'react';

function Reviews({ theme }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const variantNumber = 9;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Помилка завантаження відгуків:', err);
        setIsLoading(false);
      });
  }, []);

  const isLight = theme === 'light';

  const cardStyle = {
    backgroundColor: isLight ? '#ffffff' : '#1e1e1e',
    border: isLight ? '1px solid #e1e4e8' : '1px solid #333333',
    borderRadius: '10px',
    padding: '18px',
    boxShadow: isLight ? '0 2px 5px rgba(0,0,0,0.04)' : '0 2px 5px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  return (
    <section>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '15px', borderBottom: isLight ? '2px solid #eaecef' : '2px solid #333', paddingBottom: '8px' }}>
        Відгуки попередніх роботодавців
      </h2>
      
      {isLoading ? (
        <p style={{ color: '#888' }}>Завантаження коментарів...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '16px'
        }}>
          {comments.map((comment) => (
            <div key={comment.id} style={cardStyle}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: isLight ? '#0366d6' : '#58a6ff' }}>
                {comment.name}
              </h4>
              <span style={{ fontSize: '0.85rem', color: isLight ? '#586069' : '#8b949e' }}>
                {comment.email}
              </span>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.92rem', lineHeight: '1.5' }}>
                {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;