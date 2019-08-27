import * as React from 'react';

const Title = () => <h1>标题</h1>;

const Content = () => <div><h2>内容</h2></div>;

const Header = () => {
  return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
  )
}

export const Index = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}