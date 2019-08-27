import * as React from 'react';
import WrapWithLoadData from './WrapWithLoadData';

const InputWithUserName = ({data="", onChangeData=(data)=>{}}) => {
  return <input value={data} onChange={(e) => onChangeData(e.target.value)} />
}

export default WrapWithLoadData(InputWithUserName, 'username');