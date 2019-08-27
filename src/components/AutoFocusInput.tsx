import * as React from 'react';
const { useEffect } = React;

export const AutoFocusInput = () => {
  let input;
  useEffect(() => {
    input.focus();
  });
  return (
    <input ref={(el) => input = el} />
  )
}