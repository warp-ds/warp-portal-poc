export const mapFrameworkStatuses = (data) => data.reduce((acc, framework) => {
  if (framework.status) {
    acc[framework.name.toLowerCase()] = framework.status
  }
  return acc;
}, {});


// Create dynamic imports based on framework names in data.json

import { defineAsyncComponent } from 'vue';

// Create dynamic imports based on framework names
const loadMarkdownComponent = (frameworkName) => {
  return defineAsyncComponent({
    loader: () => import(`./${frameworkName.toLowerCase()}.md`),
  });
};

// Load the framework docs based on the provided data
export const useFrameworkDocs = (data) => {
  const frameworkdoc = {};
  data.frameworks.forEach((framework) => {
    if (framework.status === 'released') {
      const docName = framework.name.toLowerCase();
      frameworkdoc[docName] = loadMarkdownComponent(docName);
    }
  });

  // Return the docs for the relevant frameworks
  return {
    vueDoc: frameworkdoc['vue'],
    reactDoc: frameworkdoc['react'],
    elementsDoc: frameworkdoc['elements'],
    androidDoc: frameworkdoc['android'],
    iosDoc: frameworkdoc['ios'],
  };
};