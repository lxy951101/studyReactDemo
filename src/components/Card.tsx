import * as React from 'react';

export const Card = ({
  children,
}) => {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}