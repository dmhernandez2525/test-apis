import React from 'react';
import { createComponentStructure } from '../../helpers/fileGenerator';

const ExamplePage: React.FC = () => {
  const handleButtonClick = () => {
    createComponentStructure('components', 'MyComponent');
    createComponentStructure('pages', 'MyPage');
    createComponentStructure('helpers', 'MyHelper');
  };

  return (
    <div>
      <h1>Example Page</h1>
      <button onClick={handleButtonClick}>Generate Files</button>
    </div>
  );
};

export default ExamplePage;
