import { Star } from 'lucide-react';
import type { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar">
          {review.name.charAt(0)}
        </div>
        <div className="review-card__meta">
          <span className="review-card__name">{review.name}</span>
          {review.carName && (
            <span className="review-card__car">{review.carName}</span>
          )}
        </div>
        <div className="review-card__stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < review.rating ? 'currentColor' : 'none'}
              className={i < review.rating ? 'review-card__star--filled' : 'review-card__star--empty'}
            />
          ))}
        </div>
      </div>
      <p className="review-card__text">"{review.text}"</p>
      <time className="review-card__date">{review.date}</time>
    </article>
  );
}
