import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Call this component once inside BrowserRouter (near the root).
 * - It will scroll to top on every navigation.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Prevent browser from attempting automatic scroll restoration
        if ("scrollRestoration" in window.history) {
            try {
                window.history.scrollRestoration = "manual";
            } catch (e) {
                // ignore on older browsers or non-standard hosts
            }
        }

        // Jump to top on route change. Use behavior: 'smooth' if you prefer smooth scroll.
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);

    return null;
}