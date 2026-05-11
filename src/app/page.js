"use client";

import { useState } from 'react';
import styles from './page.module.css';

const reviews = [
  {
    id: 1,
    name: "Michael T.",
    location: "United States",
    rating: 5,
    date: "May 10, 2026",
    title: "Life-changing platform!",
    content: "I deposited $50,000 and started trading 3 months ago. Already made $127,000 in profits! The execution speeds are lightning fast and the analytics tools are professional grade. This platform has completely changed my financial situation. Customer support is incredible - they helped me optimize my trading strategy. Highly recommend!",
    verified: true
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "United Kingdom", 
    rating: 5,
    date: "May 8, 2026",
    title: "Best decision I ever made!",
    content: "Started with $25,000 deposit, now my account is at $89,000! The platform is so intuitive and the withdrawal process is instant - no delays whatsoever. The educational resources helped me understand advanced trading concepts. Made my first $10,000 profit last month. Absolutely thrilled!",
    verified: true
  },
  {
    id: 3,
    name: "David K.",
    location: "Germany",
    rating: 5,
    date: "May 5, 2026",
    title: "Professional and profitable!",
    content: "Deposited $75,000 and the platform matched my expectations perfectly. Execution is institutional-grade with zero slippage. Made $23,000 in my first month! The risk management tools are exactly what serious traders need. This is the real deal!",
    verified: true
  },
  {
    id: 4,
    name: "Jennifer M.",
    location: "Canada",
    rating: 5,
    date: "May 3, 2026",
    title: "Absolutely incredible!",
    content: "I was skeptical at first, but after depositing $100,000, I've already withdrawn $145,000 in profits! The platform is rock-solid and the mobile app works flawlessly. Customer service responds within minutes. This has exceeded all my expectations!",
    verified: true
  },
  {
    id: 5,
    name: "Robert H.",
    location: "Australia",
    rating: 5,
    date: "April 28, 2026",
    title: "Game-changer for serious traders!",
    content: "Been trading for 10 years and this is by far the best platform I've used. Deposited $200,000 and the liquidity is unmatched. Made $58,000 last quarter! The advanced charting and analytics tools are better than platforms charging $500/month. Exceptional!",
    verified: true
  },
  {
    id: 6,
    name: "Emma S.",
    location: "France",
    rating: 5,
    date: "April 25, 2026",
    title: "Exceeded my wildest dreams!",
    content: "Started with $15,000 and now I'm consistently making $8,000-12,000 per month! The platform's stability is unmatched - never had a single issue with withdrawals. The community of successful traders is inspiring. Life-changing opportunity!",
    verified: true
  },
  {
    id: 7,
    name: "James W.",
    location: "Singapore",
    rating: 5,
    date: "April 22, 2026",
    title: "Professional trading at its finest!",
    content: "Deposited $35,000 and the execution speed is phenomenal. Zero downtime and instant trade confirmations. Already up $42,000 from my initial investment in just 6 weeks! The platform's security gives me complete confidence trading large amounts.",
    verified: true
  },
  {
    id: 8,
    name: "Maria G.",
    location: "Spain",
    rating: 5,
    date: "April 18, 2026",
    title: "Outstanding platform!",
    content: "I've tried dozens of platforms but nothing compares to Pnlmarkets. Deposited $60,000 and the profit potential is incredible. Made $18,000 last month alone! Customer support is available 24/7 and actually knows their stuff. This is the future of trading!",
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
          <button className={styles.writeReviewBtn}>
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
    </div>
  );
}
