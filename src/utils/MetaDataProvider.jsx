/** @format */

import { useEffect, useState } from 'react';
import { MetadataContext } from './MetadataContext.js';

function MetadataProvider({ children }) {
  const defaultTitle = 'Yogesh Dhuri | Full Stack Web Developer Portfolio';
  const defaultDescription =
    'Yogesh Dhuri | Aspiring Full Stack Developer | Building Projects with React, Node.js & MongoDB | Open to Internship Opportunities';

  const [metadata, setMetadata] = useState({
    title: defaultTitle,
    description: defaultDescription,
  });

  useEffect(() => {
    document.title = metadata.title || defaultTitle;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', metadata.description || defaultDescription);
  }, [metadata, defaultTitle, defaultDescription]);

  return <MetadataContext value={setMetadata}>{children}</MetadataContext>;
}

export default MetadataProvider;
