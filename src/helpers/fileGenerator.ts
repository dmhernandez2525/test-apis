import fs from 'fs';
import path from 'path';

export function createComponentStructure(
  componentType: string,
  componentName: string
) {
  if (!componentType || !componentName) {
    console.error('Error: Component type and name are required.');
    return;
  }

  const srcPath = path.join('src', componentType, componentName);

  if (fs.existsSync(srcPath)) {
    console.error(
      `Error: The ${componentName} ${componentType} already exists.`
    );
    return;
  }

  // Create component directory and files
  fs.mkdirSync(srcPath, { recursive: true });
  fs.writeFileSync(path.join(srcPath, `${componentName}.tsx`), '');
  fs.writeFileSync(path.join(srcPath, `${componentName}.scss`), '');
  fs.writeFileSync(path.join(srcPath, 'index.ts'), '');

  console.log(`${componentName} ${componentType} created successfully.`);
}

module.exports = createComponentStructure;

// Example usage

// createComponentStructure('components', 'MyComponent');
// createComponentStructure('pages', 'MyPage');
// createComponentStructure('helpers', 'MyHelper');
