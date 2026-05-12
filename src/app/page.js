"use client";

import { useState } from 'react';
import styles from './page.module.css';

const reviews = [
  {
    id: 1,
    name: "Michael T.",
    location: "United States",
    rating: 5,
    date: "January 15, 2024",
    title: "Life-changing platform!",
    content: "I deposited $50,000 and started trading 3 months ago. Already made $127,000 in profits! The execution speeds are lightning fast and analytics tools are professional grade. This platform has completely changed my financial situation. Customer support is incredible - they helped me optimize my trading strategy. Highly recommend!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "United Kingdom", 
    rating: 4,
    date: "February 8, 2024",
    title: "Great customer service",
    content: "The customer support team is exceptional - they helped me through the entire verification process and answered all my questions about margin trading. The platform is very user-friendly and the educational resources are comprehensive. Only 4 stars because I'd like to see more cryptocurrency options.",
    verified: true
  },
  {
    id: 3,
    name: "David K.",
    location: "Germany",
    rating: 5,
    date: "March 5, 2024",
    title: "Professional and profitable!",
    content: "Deposited $75,000 and platform matched my expectations perfectly. Execution is institutional-grade with zero slippage. Made $23,000 in my first month! The risk management tools are exactly what serious traders need. This is the real deal!",
    verified: true
  },
  {
    id: 4,
    name: "Jennifer M.",
    location: "Canada",
    rating: 3,
    date: "April 3, 2024",
    title: "Good platform with some issues",
    content: "The trading interface is clean and professional, but I've experienced some lag during high volatility periods. Customer service is responsive though. The mobile app needs improvement - crashes sometimes. Overall decent for beginners but experienced traders might want more features.",
    verified: true
  },
  {
    id: 5,
    name: "Robert H.",
    location: "Australia",
    rating: 5,
    date: "May 28, 2024",
    title: "Game-changer for serious traders!",
    content: "Been trading for 10 years and this is by far the best platform I've used. Deposited $200,000 and liquidity is unmatched. Made $58,000 last quarter! The advanced charting and analytics tools are better than platforms charging $500/month. Exceptional!",
    verified: true
  },
  {
    id: 6,
    name: "Emma S.",
    location: "France",
    rating: 4,
    date: "June 25, 2024",
    title: "Solid trading experience",
    content: "The platform stability is excellent and I've never had issues with withdrawals. The variety of trading instruments is impressive - forex, crypto, indices, and stocks all in one place. Customer service is knowledgeable. Would give 5 stars if the mobile app was more feature-rich.",
    verified: true
  },
  {
    id: 7,
    name: "James W.",
    location: "Singapore",
    rating: 5,
    date: "July 22, 2024",
    title: "Professional trading at its finest!",
    content: "Deposited $35,000 and execution speed is phenomenal. Zero downtime and instant trade confirmations. Already up $42,000 from my initial investment in just 6 weeks! The platform's security gives me complete confidence trading large amounts.",
    verified: true
  },
  {
    id: 8,
    name: "Maria G.",
    location: "Spain",
    rating: 3,
    date: "August 18, 2024",
    title: "Decent but has room for improvement",
    content: "The platform is reliable and customer support is available 24/7, which is great. However, the fees are slightly higher than competitors and the charting tools could be more advanced. Good for beginners but serious traders might want more sophisticated features.",
    verified: true
  },
  {
    id: 9,
    name: "Thomas B.",
    location: "Netherlands",
    rating: 5,
    date: "September 10, 2024",
    title: "Outstanding service quality!",
    content: "What impressed me most is the level of service. The verification process was smooth and took only 24 hours. The account manager assigned to me is very helpful and provides market insights. Trading fees are competitive and execution is fast. Highly recommended!",
    verified: true
  },
  {
    id: 10,
    name: "Lisa K.",
    location: "Sweden",
    rating: 4,
    date: "October 5, 2024",
    title: "Good overall platform",
    content: "The platform offers great features and the educational webinars are very helpful for learning. Customer support responds quickly and is professional. The only drawback is the limited number of indicators available on charts. Otherwise, very satisfied with the service.",
    verified: true
  },
  {
    id: 11,
    name: "Alex M.",
    location: "Italy",
    rating: 5,
    date: "November 12, 2024",
    title: "Best platform I've used!",
    content: "The variety of assets available is incredible - from major forex pairs to exotic cryptocurrencies. The risk management tools are top-notch and the platform never crashes even during high volatility. Customer service is available in multiple languages. Excellent!",
    verified: true
  },
  {
    id: 12,
    name: "Rachel P.",
    location: "New Zealand",
    rating: 4,
    date: "December 2, 2024",
    title: "Reliable and trustworthy",
    content: "Been using for 8 months and never had issues with withdrawals. The platform is stable and the mobile app works well. Customer service is helpful but sometimes takes time to respond. The analytics tools are comprehensive. Good value for money.",
    verified: true
  }
];

const starDistribution = [
  { stars: 5, count: 142, percentage: 72 },
  { stars: 4, count: 35, percentage: 18 },
  { stars: 3, count: 12, percentage: 6 },
  { stars: 2, count: 5, percentage: 3 },
  { stars: 1, count: 3, percentage: 1 }
];

export default function PnlmarketsReviews() {
  const [filter, setFilter] = useState('all');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    title: '',
    content: ''
  });
  
  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === parseInt(filter));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        className={styles.star}
        fill={i < rating ? "currentColor" : "none"}
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.companyInfo}>
            <div className={styles.companyLogo}>
              <img 
                src="https://pnlmarkets.com/assets/images/logo.png" 
                alt="Pnlmarkets Logo" 
                className={styles.logoImage}
              />
            </div>
            <div className={styles.ratingSection}>
              <div className={styles.overallRating}>4.6</div>
              <div className={styles.stars}>{renderStars(5)}</div>
              <div className={styles.reviewCount}>197 reviews</div>
            </div>
          </div>
          <button 
            className={styles.writeReviewBtn}
            onClick={() => setShowReviewForm(true)}
          >
            Write a review
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img 
          src="/images/nplmarket.png" 
          alt="Pnlmarkets Hero Section" 
          className={styles.heroImage}
        />
      </div>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentGrid}>
          {/* Left Column - Stats */}
          <div className={styles.statsColumn}>
            <div className={styles.statsCard}>
              <h3 className={styles.statsTitle}>Rating distribution</h3>
              <div className={styles.distribution}>
                {starDistribution.map((item) => (
                  <div key={item.stars} className={styles.distributionRow}>
                    <div className={styles.starsLabel}>{item.stars} ★</div>
                    <div className={styles.barContainer}>
                      <div 
                        className={styles.bar} 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className={styles.countLabel}>{item.count}</div>
                  </div>
                ))}
              </div>
              <div className={styles.categories}>
                <h4 className={styles.categoriesTitle}>Categories</h4>
                <div className={styles.category}>
                  <span>Trading Platform</span>
                  <div className={styles.categoryRating}>
                    {renderStars(5)}
                    <span>4.8</span>
                  </div>
                </div>
                <div className={styles.category}>
                  <span>Customer Service</span>
                  <div className={styles.categoryRating}>
                    {renderStars(5)}
                    <span>4.7</span>
                  </div>
                </div>
                <div className={styles.category}>
                  <span>Value for Money</span>
                  <div className={styles.categoryRating}>
                    {renderStars(5)}
                    <span>4.6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reviews */}
          <div className={styles.reviewsColumn}>
            <div className={styles.reviewsHeader}>
              <h2 className={styles.reviewsTitle}>Reviews</h2>
              <div className={styles.filters}>
                <button 
                  className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`${styles.filterBtn} ${filter === '5' ? styles.active : ''}`}
                  onClick={() => setFilter('5')}
                >
                  5 star
                </button>
                <button 
                  className={`${styles.filterBtn} ${filter === '4' ? styles.active : ''}`}
                  onClick={() => setFilter('4')}
                >
                  4 star
                </button>
                <button 
                  className={`${styles.filterBtn} ${filter === '3' ? styles.active : ''}`}
                  onClick={() => setFilter('3')}
                >
                  3 star
                </button>
                <button 
                  className={`${styles.filterBtn} ${filter === '2' ? styles.active : ''}`}
                  onClick={() => setFilter('2')}
                >
                  2 star
                </button>
                <button 
                  className={`${styles.filterBtn} ${filter === '1' ? styles.active : ''}`}
                  onClick={() => setFilter('1')}
                >
                  1 star
                </button>
              </div>
            </div>

            <div className={styles.reviewsList}>
              {filteredReviews.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.reviewerAvatar}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className={styles.reviewerName}>{review.name}</div>
                        <div className={styles.reviewLocation}>{review.location}</div>
                      </div>
                    </div>
                    <div className={styles.reviewDate}>{review.date}</div>
                  </div>
                  <div className={styles.reviewRating}>
                    {renderStars(review.rating)}
                  </div>
                  <h3 className={styles.reviewTitle}>{review.title}</h3>
                  <p className={styles.reviewContent}>{review.content}</p>
                  {review.verified && (
                    <div className={styles.verifiedBadge}>
                      <svg className={styles.verifiedIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  )}
                  <div className={styles.reviewActions}>
                    <button className={styles.helpfulBtn}>
                      <svg className={styles.thumbIcon} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v7.333l-2-2z" />
                      </svg>
                      Helpful
                    </button>
                    <button className={styles.reportBtn}>Report</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>Pnlmarkets</div>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>About</a>
            <a href="#" className={styles.footerLink}>Terms</a>
            <a href="#" className={styles.footerLink}>Privacy</a>
            <a href="#" className={styles.footerLink}>Contact</a>
          </div>
          <div className={styles.copyright}>© 2026 Pnlmarkets. All rights reserved.</div>
        </div>
      </footer>

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Write a Review</h2>
              <button 
                className={styles.closeBtn}
                onClick={() => setShowReviewForm(false)}
              >
                ×
              </button>
            </div>
            
            <div className={styles.modalContent}>
              <div className={styles.formGroup}>
                <label>Your Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Location</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter your location"
                  value={newReview.location}
                  onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Rating</label>
                <div className={styles.starRating}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className={`${styles.starBtn} ${newReview.rating >= star ? styles.starBtnActive : ''}`}
                      onClick={() => setNewReview({...newReview, rating: star})}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Review Title</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Summarize your experience"
                  value={newReview.title}
                  onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                />
              </div>

              <div className={styles.formGroup}>
                <label>Your Review</label>
                <textarea
                  className={styles.textarea}
                  placeholder="Share your experience with Pnlmarkets..."
                  rows="5"
                  value={newReview.content}
                  onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                />
              </div>

              <button 
                className={styles.submitBtn}
                onClick={() => {
                  setReviewSubmitted(true);
                  setTimeout(() => {
                    setShowReviewForm(false);
                    setReviewSubmitted(false);
                    setNewReview({
                      name: '',
                      location: '',
                      rating: 5,
                      title: '',
                      content: ''
                    });
                  }, 2000);
                }}
              >
                Submit Review
              </button>
            </div>

            {reviewSubmitted && (
              <div className={styles.successMessage}>
                ✓ Review submitted successfully!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
