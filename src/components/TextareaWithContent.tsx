import * as React from 'react';
import WrapWithLoadData from './WrapWithLoadData';

const TextareaWithContent = ({data}) => {
  return <textarea value={data} />
}

export default WrapWithLoadData(TextareaWithContent, 'content');