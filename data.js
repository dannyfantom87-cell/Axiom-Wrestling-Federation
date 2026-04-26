export const siteData = {
  brand: {
    name: "AXF",
    fullName: "Axiom Wrestling Federation",
    tagline: "Where Power Becomes Legacy",
    continuity: "Continuity locked through Season 3, Episode 9.",
  },
  nav: [
    { label: "Home", href: "./index.html", key: "home" },
    { label: "Superstars", href: "./superstars.html", key: "superstars" },
    { label: "Champions", href: "./champions.html", key: "champions" },
    { label: "Premium Live Events", href: "./events.html", key: "events" },
    { label: "News", href: "./news.html", key: "news" },
    { label: "Storylines", href: "./storylines.html", key: "storylines" },
    { label: "Hall of Legends", href: "./legends.html", key: "legends" },
    { label: "Media", href: "./media.html", key: "media" },
    { label: "Gallery", href: "./gallery.html", key: "gallery" },
    { label: "About AXF", href: "./about.html", key: "about" },
    { label: "Contact", href: "./contact.html", key: "contact" },
  ],
  ticker: [
    "Breaking: Danny's influence continues to reshape the AXF power structure.",
    "Official: Logan Mathews remains the lead challenger in pursuit of Austin.",
    "Backlash Focus: Damian Cooper prepares for the defining test of his ascent against Danny.",
    "Champion Watch: Tyson Creed stands as the verified Intercontinental Champion.",
    "Continuity Note: All records on this platform are locked through Season 3, Episode 9.",
  ],
  heroStats: [
    { value: "12", label: "World titles for Danny" },
    { value: "9", label: "WrestleMania main events" },
    { value: "1", label: "Power center taking shape" },
  ],
  featuredSpotlights: [
    {
      id: "danny",
      name: "Danny",
      title: "The God of Reckoning",
      subtitle: "Legend. Executive. Final Boss.",
      blurb:
        "AXF's most feared competitor is no longer only controlling the ring. Danny's rise inside the corporate structure is turning every decision into a fight for the soul of the company.",
      image: "./assets/roster/danny.png",
      accent: "gold",
      cta: "./storylines.html",
    },
    {
      id: "jayden",
      name: "Jayden",
      title: "The Architect of Survival",
      subtitle: "Veteran mentor with unfinished history.",
      blurb:
        "Jayden knows better than anyone what it costs to stand beside Danny and what it means to fall behind him. Now he is investing that experience into Damian Cooper.",
      image: "./assets/roster/jayden.png",
      accent: "silver",
      cta: "./superstars.html#jayden",
    },
    {
      id: "austin",
      name: "Austin",
      title: "Corporate Standard",
      subtitle: "Champion with power at his back.",
      blurb:
        "Austin sits atop the championship picture as a ruthless corporate heel, carrying the confidence of a champion and the protection of a machine that believes he is the future.",
      image: "./assets/roster/austin.png",
      accent: "crimson",
      cta: "./champions.html",
    },
    {
      id: "logan-mathews",
      name: "Logan Mathews",
      title: "Main Event Heir",
      subtitle: "The next face of AXF.",
      blurb:
        "Logan Mathews refuses to bow to the politics around the title scene. Every appearance feels like a message to Austin and a preview of the man many believe can carry AXF forward.",
      image: "./assets/roster/logan-mathews.png",
      accent: "gold",
      cta: "./storylines.html#logan-vs-austin",
    },
    {
      id: "damian-cooper",
      name: "Damian Cooper",
      title: "The Proof of Potential",
      subtitle: "Protégé under pressure.",
      blurb:
        "Damian Cooper entered this chapter as a champion and now steps toward Backlash with Jayden's guidance, a target on his back, and Danny waiting to measure him.",
      image: "./assets/roster/damian-cooper.png",
      accent: "silver",
      cta: "./storylines.html#damian-vs-danny",
    },
  ],
  rivalries: [
    {
      headline: "Logan Mathews vs Austin",
      tone: "World title pressure",
      summary:
        "Austin rules the title picture through authority-backed control. Logan is forcing the company to answer whether the top prize belongs to power or to performance.",
    },
    {
      headline: "Danny vs The Authority Structure",
      tone: "Corporate war",
      summary:
        "Danny's ascent is no longer symbolic. Every move against TKO-aligned control pushes AXF closer to a new center of influence.",
    },
    {
      headline: "Damian Cooper vs Danny",
      tone: "Backlash proving ground",
      summary:
        "This is not a grudge for the future. It is an immediate test of whether Damian can survive the pressure of facing AXF's most complete force.",
    },
    {
      headline: "Camron Carter vs Austin's past",
      tone: "Authority scars",
      summary:
        "Camron Carter carries history with Austin and the structure that helped build him. Every confrontation feels like unfinished business finding its moment.",
    },
  ],
  results: [
    {
      event: "AXF Television",
      match: "Logan Mathews def. Benjamin Carter",
      note: "Momentum builder in the race toward Austin.",
    },
    {
      event: "AXF Television",
      match: "Tyson Creed retained the Intercontinental Championship",
      note: "The champion continues to add weight to the division.",
    },
    {
      event: "AXF Television",
      match: "Damian Cooper stood tall after a chaotic closing segment",
      note: "Jayden's mentorship remains central before Backlash.",
    },
  ],
  promoOfWeek: {
    title: "Power. Legacy. Destiny.",
    speaker: "Danny",
    summary:
      "AXF's defining voice made it clear that influence is no longer borrowed. The era is shifting, and the people who cannot adapt will be forced to move around him.",
  },
  champions: [
    {
      title: "AXF Championship",
      division: "World Title",
      champion: "Jayden",
      status: "Verified active champion",
      reign: "Official reign active",
      defenses: "On-screen defenses continue under current broadcast record",
      prestige:
        "The flagship prize of the company and one of the clearest symbols of Jayden's all-time main-event standing.",
      historyNote: "Title history archive expands only through confirmed Season 3 Episode 9 records.",
      accent: "gold",
    },
    {
      title: "World Heavyweight Championship",
      division: "World Title",
      champion: "Jayden",
      status: "Verified active champion",
      reign: "Official reign active",
      defenses: "Recognized defenses under current continuity",
      prestige:
        "A premier world championship that reinforces Jayden's place at the top of AXF's competitive hierarchy.",
      historyNote: "Listed directly per the confirmed update for this build.",
      accent: "silver",
    },
    {
      title: "Intercontinental Championship",
      division: "Midcard Title",
      champion: "Tyson Creed",
      status: "Verified active champion",
      reign: "Official reign active",
      defenses: "Recognized televised defenses within current continuity",
      prestige:
        "AXF's proving-ground title for athletes who demand prime-time spotlight and championship-level pressure.",
      historyNote: "Tyson Creed is the only confirmed Intercontinental Champion displayed on this build.",
      accent: "gold",
    },
    {
      title: "United States Championship",
      division: "Midcard Title",
      champion: "Damian Cooper",
      status: "Verified at the beginning of the current arc",
      reign: "Active through the current chapter",
      defenses: "Current on-screen status preserved without future spoilers",
      prestige:
        "A title built around hunger, visibility, and the ability to carry momentum into the main-event picture.",
      historyNote: "Displayed in direct connection to Damian Cooper's active rise.",
      accent: "silver",
    },
    {
      title: "AXF Tag Team Championships",
      division: "Tag Team",
      champion: "Camron Carter and Benjamin Carter",
      status: "Verified active champions",
      reign: "Official reign active",
      defenses: "Recognized televised defenses within current continuity",
      prestige:
        "A division built on chemistry, strategy, and timing, currently anchored by Camron Carter and Benjamin Carter.",
      historyNote: "Current titleholders listed directly per the confirmed update for this build.",
      accent: "gold",
    },
    {
