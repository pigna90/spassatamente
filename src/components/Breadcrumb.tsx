import React from 'react';
import './Breadcrumb.css';

interface BreadcrumbItem {
  label: string;
  url?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb navigation">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.url && !item.active ? (
              <a href={item.url} className="breadcrumb-link">
                {item.label}
              </a>
            ) : (
              <span className={`breadcrumb-text ${item.active ? 'active' : ''}`}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};