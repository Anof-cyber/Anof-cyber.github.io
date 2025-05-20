import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  children?: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tags,
  children,
  className = '',
  footer
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-accent"></div>
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="card-tag">{tag}</span>
            ))}
          </div>
        )}

        {children}

        {footer && (
          <div className="card-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;