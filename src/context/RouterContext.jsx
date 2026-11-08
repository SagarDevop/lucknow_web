import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  // Normalize current pathname, strip trailing slash except for root
  const getCleanPath = () => {
    let p = window.location.pathname || '/';
    if (p.length > 1 && p.endsWith('/')) {
      p = p.slice(0, -1);
    }
    return p;
  };

  const [currentPath, setCurrentPath] = useState(getCleanPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath());
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path, hash = '') => {
    let target = path || '/';
    if (target.length > 1 && target.endsWith('/')) {
      target = target.slice(0, -1);
    }

    const fullUrl = hash ? `${target}#${hash}` : target;

    if (window.location.pathname !== target || (hash && window.location.hash !== `#${hash}`)) {
      window.history.pushState(null, '', fullUrl);
    }

    setCurrentPath(target);

    if (hash) {
      setTimeout(() => {
        const elem = document.getElementById(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

