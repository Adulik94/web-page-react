
import React, { useMemo, useEffect } from "react";
import {
  Router as RouterOriginal,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import queryString from "query-string";

// Use a custom history object and pass to Router so that we
// can utilize history.listen() where needed (such as for pageview tracking)
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// Export our <Router> component
// Includes custom history object and component for auto-scrolling to top
export function Router({ children }) {
  return (
    <RouterOriginal history={history} >
      <ScrollToTop />
      {children}
    </RouterOriginal>
  );
}

// Custom useRouter hook for getting route data and methods inside any component.
// NOTE: This hook includes all React Router hooks, which can result in extra re-renders
// in some cases. When needed, you can optimize performance by importing the specific hook
// you need (such as useParams or useLocation) instead of this custom useRouter hook.
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

// Remove or customize if you need more advanced scroll behavior
// and don't want to always scroll to top when location.pathname changes.
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

export {
  Route,
  Switch,
  Link,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";