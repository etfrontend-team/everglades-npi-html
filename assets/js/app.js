import { initHeader } from "./header.js";
import { initFooterAccordion } from "./footer.js";
import { initSearchBar } from "./search-bar.js";
import { initPopularAdventures } from "./popular-adventures.js";
import { initThreeCardWrapper } from "./three-card-wrapper.js";

try { initHeader(); } catch (e) { console.error('[header]', e); }
try { initFooterAccordion(); } catch (e) { console.error('[footer]', e); }
try { initSearchBar(); } catch (e) { console.error('[search-bar]', e); }
try { initPopularAdventures(); } catch (e) { console.error('[popular-adventures]', e); }
try { initThreeCardWrapper(); } catch (e) { console.error('[three-card-wrapper]', e); }
