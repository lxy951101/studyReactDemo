import * as React from 'react';

const Header = () => {
  const updateThemeColor = () => {

  };
  return <h1>标题</h1>;
}

const ThemeSwitch = () => {
  return (
    <div>
      <button>Red</button>
      <button>Blue</button>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <p>内容</p>
      <ThemeSwitch />
    </div>
  )
}

export const Index = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}