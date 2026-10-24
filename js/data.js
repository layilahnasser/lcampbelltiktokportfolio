/* ==========================================================================
   PORTFOLIO CONTENT — edit this one file to update the whole site.

   • Facts from your resume and UXfolio about page are already filled in.
   • Any text that starts with "TODO:" shows up on the site with a dashed
     pink outline so you can spot what still needs your own words (mostly
     the case-study details your resume doesn't cover: insights, iterations,
     screenshots). Replace the whole string, including "TODO:".
   • Images: drop files into  assets/img/  and put the path in "src",
     e.g.  src: "assets/img/usda-hero.png". An empty src shows a placeholder.
   • Save the file, then refresh the browser tab to see the change.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------- Profile ---------- */
  profile: {
    firstName: "Layilah",
    lastName: "Campbell",
    title: "UX Research & Design", // shows under your name in the neon logo
    heroTitle: "From Big Tech Recruiting to UX.", // big cyan line on the home page
    headline: "Seven years recruiting at Google, Adobe & Meta shaped how I understand people. Now I bring that perspective to research and design.",
    // Stat readouts under the home photo card. Use the word "projects" to show the live project count.
    stats: [
      { value: "7", label: "Years in tech" },
      { value: "projects", label: "Case studies" },
      { value: "15+", label: "Interviews" }
    ],
    // Text on the player card (home page + About)
    school: "University of Michigan",
    degreeLine: "Master’s Candidate · School of Information",
    gradLine: "", // leave empty to hide the third card line
    status: "Open to opportunities", // HUD pill
    location: "Ann Arbor, MI",
    email: "layilah@umich.edu",
    phone: "", // removed from the public site
    linkedin: "https://www.linkedin.com/in/layilah-campbell-831b32107/",
    resumePdf: "assets/resume.pdf",
    photo: "assets/img/layilah.jpg", // swap this file for a higher-resolution photo any time
    photoAlt:
      "Portrait of Layilah Campbell smiling with long curly dark hair, wearing a navy University of Michigan sweatshirt with her hands on her hips"
  },

  /* ---------- About Me (your UXfolio words, laid out as frames) ----------
     Kept separate from the home page on purpose: the home page has the "7 years
     recruiting" story, so About leads with your perspective, your why, and you. */
  about: {
    kicker: "Who I am",
    title: "Meet Layilah",
    pronunciation: "Lay-La",
    lede: "After seven years connecting people with careers at some of the biggest tech companies, I now research and design the products they use. I listen first, then design.",
    card: {
      header: "Hello",
      title: "Layilah Campbell",
      lines: ["Pronounced Lay-La", "Ann Arbor, MI"],
      photo: "assets/img/layilah-about-street.jpg",
      photoAlt: "Layilah Campbell standing in a narrow street, wearing sunglasses, a dark sweater, and black leather pants, with a tall pagoda behind her"
    },

    // Frame 1 — your path, told as: find the problem, fix it from the hiring side, learn the craft
    path: {
      heading: "My path into UX",
      lead: "It began with a simple realization:",
      quote: "When tools are confusing or inaccessible, people are often expected to adapt to the product.",
      bridge: "I started where I already was: in hiring, finding problems and fixing them.",
      steps: [
        {
          label: "Spot the problem",
          org: "Adobe",
          text: "As Adobe’s DEI Program Lead, I ran qualitative and quantitative research to find our talent gaps and presented it to the CEO. The findings supported a $3M donation to HBCUs and HSIs."
        },
        {
          label: "Fix it from the hiring side",
          org: "Adobe",
          text: "I partnered with design teams to add 200+ diverse UX design candidates, widening the pipelines for product and research roles, and trained 500+ recruiters and hiring managers on inclusive hiring."
        },
        {
          label: "Run the research myself",
          org: "Southwest Airlines",
          text: "I interviewed hiring managers and candidates to find process pain points, redesigned the recruiting workflow, and built tracking tools that improved recruiter efficiency by 25%."
        },
        {
          label: "Teach myself the craft",
          org: "Google UX Design Course",
          text: "I built the Crowning Calendar, a scheduling app, end to end: 10+ structured interviews across five states, personas, journey maps, and affinity diagrams, then low-fidelity wireframes in Figma refined with usability feedback to improve task success."
        },
        {
          label: "Go all in",
          org: "University of Michigan",
          text: "I’m completing an M.S. in UX Research & Design while doing the work: usability research for the USDA, an AI-powered education initiative at Instructure, and research internships at Root Insurance and UK Digital Health Systems."
        }
      ],
      turn: "Now I want to reverse that relationship, through research, thoughtful design, and solutions that work for more people.",
      extra: "Outside of UX, I also run a global pageant consulting business, which has strengthened my skills in communication, strategy, leadership, and understanding people."
    },

    // Frame 2
    toolsHeading: "How I turn insight into product direction",
    tools: [
      "Figma", "Miro", "Adobe Photoshop",
      "Claude", "ChatGPT", "Copilot", "Gemini", "Claude Code",
      "VS Code", "Python", "R", "HTML", "CSS",
      "NVivo", "Lookback", "User Interviews"
    ],
    capabilities: [
      {
        title: "Qualitative & mixed-methods research",
        text: "Interviews, usability testing, surveys, field research, and contextual inquiry."
      },
      {
        title: "Research synthesis & insight generation",
        text: "Thematic analysis, affinity mapping, personas, journey maps, and opportunity framing."
      },
      {
        title: "UX design & prototyping",
        text: "Wireframes, interaction design, Figma prototypes, information architecture, and usability-driven iteration."
      },
      {
        title: "Stakeholder influence",
        text: "Executive storytelling, workshops, product recommendations, prioritization, and cross-functional alignment."
      }
    ],

    // Frame 3
    educationHeading: "Where I trained",
    education: [
      {
        school: "University of Michigan",
        program: "Master of Science in UX Research & Design · May 2027",
        text: "I’m developing my research and design practice through coursework and client projects in usability testing, interaction design, accessibility, and data analysis. My work connects insights about people with practical product decisions."
      },
      {
        school: "Spelman College",
        program: "Bachelor of Arts in Psychology · 2017",
        text: "My psychology background shaped how I understand human behavior, motivation, and decision-making. Studying positive psychology in Copenhagen expanded my perspective on how context and culture influence people’s experiences."
      }
    ],

    // Bonus frame
    accessNote: {
      title: "Built to be accessible",
      text: "As a UX researcher and designer, I treat accessibility as part of the work, so I built this portfolio to meet WCAG 2.1 AA.",
      points: [
        "Automated testing with axe on every page, with no violations.",
        "Color contrast checked against AA targets, including text on every background.",
        "Works with a keyboard alone, with a skip link and visible focus.",
        "Every image has a description for screen readers.",
        "Respects reduced-motion settings, and works on phones as small as 320 pixels wide."
      ]
    },
    moreHeading: "A little more about me",
    more: [
      {
        value: "$5,000+",
        title: "in scholarships",
        text: "Through my consulting business, I’ve supported young women across the country in pursuing their goals."
      },
      {
        value: "#1",
        title: "Award-winning entrepreneur",
        text: "Named Pageant Planet’s #1 pageant coach in 2023 and ranked among the Top 5 for interview and overall coaching in 2024."
      },
      {
        value: "25+",
        title: "countries explored",
        text: "Travel is one of my favorite ways to experience different cultures and perspectives."
      }
    ],
    league: {
      title: "A little friendly competition",
      text: "I joined a bowling league, adding another kind of practice to my weekly routine.",
      tie: "",
      image: { src: "assets/img/bowling.jpg", alt: "Layilah releasing a bowling ball down the lane at a bowling alley" }
    }
  },

  /* ---------- Projects (scoreboard + My Work) ----------
     Each project gets a case study page: project.html?p=<id>
     Frames: Problem → Research → Define → Ideate → Iterate → Execution → Outcome
     Facts below come from your resume; "TODO" lines are for your story.
  ---------------------------------------------------------------------- */
  projects: [
    {
      id: "milk-and-froth",
      title: "Milk & Froth Redesign",
      subtitle: "Reimagining a Detroit ice cream brand’s website through UX and visual design.",
      focus: "Web design",
      approach: "Redesigned a Detroit ice cream brand’s website to showcase flavors, help visitors find a shop, and make browsing more visual.",
      summary: "A website redesign concept for a Detroit-born ice cream brand, focused on showcasing distinctive flavors, improving location discovery, and creating a more visual browsing experience.",
      glance: { problem: "The site did not showcase the flavors, had no way to order online, made shops hard to find, and offered little visual browsing.", did: "Audited the current site and built the design system first, then designed the location, e-commerce, and 404 pages, and supported the rest of the site.", changed: "A redesign of the entire website for desktop and mobile. Highest grade in the course.", role: "UX Designer. One of two designers." },
      ballColor: "#ff5a3c",
      year: "2026",
      tags: ["Web design", "Competitive analysis", "Design system"],
      role: "UX Designer",
      team: "2 designers\nMicaela Ciambrone & Layilah Campbell",
      timeline: "Jan–Mar 2026",
      toolsLabel: "Methods & deliverables",
      tools: "Competitive analysis · Figma wireframes\nComponent library · Visual identity",
      iterLabels: ["What changed", "How I checked it"],
      hero: { src: "assets/img/milk-homepage.jpg", caption: "The redesigned homepage: an image-forward hero for the season’s flavors." },

      problem: {
        statement:
          "How can Milk & Froth’s website do justice to small-batch ice cream made from scratch, with flavors that stand out, shops that are easy to find, and a more visual way to browse?",
        context:
          "Milk & Froth is a Detroit-born ice cream brand focused on small-batch ice creams made with real ingredients. Every flavor is made from scratch in the Eastern Market kitchen with fresh dairy, premium ingredients, and in-house pasteurization, and the shop’s bold red interior reflects an energetic, indulgent approach. We started by reviewing the current site and comparing it with other ice cream brands.",
        goal:
          "Redesign the digital experience around three goals, listed below, so the website feels as vibrant and handcrafted as the shop.",
        contribution:
          "The brand had no design system, so I built one from the ground up: color tokens, type scale, buttons, and components, before designing a single page."
      },

      research: {
        summary:
          "We audited Milk & Froth’s homepage, About page, and Find Pints page, then compared two local and two national ice cream brands across eight website features: online ordering, mobile app availability, search, store locator, 404 pages, product catalog, navigation, and contact information. Before-and-after comparisons appear at the end of this case study.",
        methods: [
          { name: "Current-site review", detail: "Walked through the live homepage, About page, and Find Pints page to see how the brand, flavors, story, and stockists were presented." },
          { name: "Competitive analysis", detail: "Compared Milkshake Factory, Michigan Creamery, Jeni’s, and Van Leeuwen across eight features." }
        ],
        insights: [
          "All four brands offered online ordering and a store locator, so both are expected features rather than differentiators.",
          "Only one of the four, Jeni’s, had a mobile app, and one local brand had no search bar, so there was room to stand out on mobile and search.",
          "TODO: What the current site did well or poorly for flavors, shops and browsing."
        ],
        image: [
          { src: "assets/img/milk-competitive.jpg", caption: "Competitive analysis: two local and two nationwide brands across eight features." }
        ]
      },

      define: {
        goalCards: [
          { tag: "Goal 1", text: "Show off distinctive flavors and the handcrafted process" },
          { tag: "Goal 2", text: "Make shops easy to find across Michigan" },
          { tag: "Goal 3", text: "Make browsing image-forward and intuitive" }
        ],
        callout: "The shop already feels vibrant, playful, and indulgent. The redesign’s job was to carry that same energy, and the craft behind it, into the website.",
        lists: [
          {
            heading: "How we planned to achieve them",
            items: [
              "Goal 1, flavors and craft: the original site never listed the flavors. We planned a dedicated flavors page with product pages for each one, and a full-bleed seasonal hero, so visitors can see what is available and how it is made.",
              "Goal 2, finding a shop: the original location page did not show where the shops physically are. We planned a card for each shop with its address, hours, photo, and directions, so a visitor can choose a location and get there.",
              "Goal 3, readable and visual: the original typography was hard to read. We planned a type system built for legibility across desktop, tablet, and mobile, and image-led layouts so products come first."
            ]
          }
        ],
      },

      ideate: {
        summary:
          "Wireframes mapped five pages and the content each one needs, with a shared header and footer. Home: a hero, a creamy banner, best sellers, a marquee scroller, a customer quote, Scoop Shops (Ann Arbor and Detroit) and a Who We Are section. Menu: an All Flavors header, filter chips, a dripping-ice-cream banner, and product cards. About Us: Who Is Milk & Froth, rotating images, and process text. Contact Us: customer service, FAQs, partnerships, wholesale, find a shop, and a message form. E-commerce: a grid of flavors.",
        image: [{ src: "assets/img/milk-wireframes.jpg", fit: "wide", caption: "Wireframes: Home, Menu, About Us, E-commerce, and Contact Us." }]
      },

      designSystem: {
        intro: "Built from the ground up: the brand’s colors and type first, then the buttons and components built on top of them.",
        colorImage: { src: "assets/img/milk-color-system.jpg", fit: "wide", caption: "Color system: primitives and semantic tokens for primary, secondary, success, error, and greyscale." },
        typography: { src: "assets/img/milk-typography.jpg", fit: "wide", caption: "Type system: Nunito Sans and Montserrat, with a scale for desktop, tablet, and mobile." },
        buttons: { src: "assets/img/milk-buttons.jpg", fit: "wide", caption: "Buttons: primary, secondary, and tertiary, in three sizes and five states." },
        components: { src: "assets/img/milk-components.jpg", fit: "wide", caption: "Components: logo lockups, product cards (list, grid, and quick-add), order summary, add button, and the ticker." }
      },

      iterations: [
        {
          version: "Round 1: Wireframes to a design system",
          change: "Moved from the grey wireframes above to a design system built on the brand: Roasted Strawberry as the primary color, plus a golden secondary, success green, error red, and a greyscale. Each color has a 10-step primitive scale and semantic roles (surface, border, text, and icon in subtle, lighter, default, and darker steps). Type pairs Nunito Sans with Montserrat, with a scale for desktop, tablet, and mobile.",
          feedback: "I checked the palette against accessibility targets. White text on Roasted Strawberry is 4.65:1 and black on Blushed Froth is 15.8:1, both above the 4.5:1 AA target. Roasted Strawberry on Blushed Froth is only 3.5:1, so it is used for large text and graphics, never small body copy.",
          palette: [
            { name: "Roasted Strawberry", hex: "#E02B00" },
            { name: "Blushed Froth", hex: "#FFD6D4" },
            { name: "Midnight Cocoa", hex: "#000000" },
            { name: "Sweet Cream", hex: "#FFFFFF" }
          ],
          typefaces: [
            { role: "Primary typeface", name: "Nunito Sans" },
            { role: "Secondary typeface", name: "Montserrat" }
          ],
          image: [
            { src: "assets/img/milk-color-system.jpg", fit: "wide", caption: "Color system: primitives and semantic tokens for primary, secondary, success, error, and greyscale." },
            { src: "assets/img/milk-typography.jpg", fit: "wide", caption: "Type system: Nunito Sans and Montserrat, with a scale for desktop, tablet, and mobile." }
          ]
        },
        {
          version: "Round 2: Components",
          change: "Built the component library on those tokens: primary, secondary, and tertiary buttons in three sizes, each with default, hover, selected, focused, and disabled states; navigation links; add-to-cart and quantity controls; product cards in grid, list, and quick-add layouts; the order summary; and the Churned, Scooped, Chilled, Repeat ticker. Pages were designed for desktop and mobile in a light (blush) and a dark (cocoa) theme.",
          feedback: "I reviewed the components against the competitive analysis, which showed online ordering and a store locator are expected, so the product cards, order summary, and quick-add button were built for those flows.",
          image: [
            { src: "assets/img/milk-buttons.jpg", fit: "wide", caption: "Buttons: primary, secondary, and tertiary, in three sizes and five states." },
            { src: "assets/img/milk-components.jpg", fit: "wide", caption: "Components: logo lockups, product cards (list, grid, and quick-add), order summary, add button, and the ticker." }
          ]
        }
      ],

      execution: {
        summary: "The final screens, desktop and mobile. Before and afters are at the end.",
        newPagesHeading: "New pages the original site didn’t have",
        newPagesNote: "The original site had no flavors page, product pages, cart, checkout, or 404 page. All five are designed from scratch and shown below.",
        newPages: ["Our Flavors", "Product page", "Cart", "Checkout", "404 page"],
        designs: [
          {
            label: "About",
            images: [{ src: "assets/img/milk-about-after.jpg", fit: "full", caption: "The About story, now on the homepage: small batches, big flavor, and the team." }]
          },
          {
            label: "Our Flavors", isNew: true,
            images: [{ src: "assets/img/milk-flavors.jpg", fit: "full", caption: "Flavors page: desktop and mobile, light theme." }]
          },
          {
            label: "Find Pints",
            images: [{ src: "assets/img/milk-find-pints.jpg", fit: "full", caption: "A card for each shop with hours, address, directions, and order now. Desktop and mobile." }]
          },
          {
            label: "Product page", isNew: true,
            images: [{ src: "assets/img/milk-product.jpg", fit: "full", caption: "A product page with reviews, delivery details, and suggestions, desktop." }]
          },
          {
            label: "Cart", isNew: true,
            images: [{ src: "assets/img/milk-cart.jpg", fit: "full", caption: "Shopping cart and order summary, desktop and mobile." }]
          },
          {
            label: "Checkout", isNew: true,
            images: [{ src: "assets/img/milk-checkout.jpg", fit: "full", caption: "Delivery or pick up, payment options, and pay now, desktop and mobile." }]
          },
          {
            label: "404 page", isNew: true,
            images: [{ src: "assets/img/milk-404.jpg", fit: "full", caption: "A 404 page that stays on brand: a melted cone and a way back home. Desktop and mobile." }]
          }
        ],
        decisionsHeading: "Why it looks and works this way",
        decisions: [
          { title: "A homepage that leads with flavor", why: "The hero showcases seasonal flavors in a full-bleed photo, making the ice cream the focal point from the first glance. This brings the shop’s bold, indulgent personality online and lets visitors explore flavors visually." },
          { title: "Shop details in one clear card", why: "The original Find Pints page listed markets by city. Individual shop cards bring photos, hours, addresses, directions, and ordering together so visitors can quickly find a location and plan their visit." },
          { title: "The brand story within the first scroll", why: "Small batches, bold flavors, and the people behind them now appear directly on the homepage. Bringing this story into the first scroll helps visitors discover the craft behind the ice cream without opening another page." },
          { title: "A palette inspired by the shop", why: "Roasted Strawberry translates the shop’s bold red interior into a signature website color. Blushed Froth adds softness, while Midnight Cocoa creates depth. Each text and background pairing was checked against contrast targets." },
          { title: "A complete online ordering experience", why: "All four comparison brands offered online ordering, while Milk & Froth’s original site did not. Product pages, a shopping cart, and checkout address this gap and give visitors a clear path from browsing to purchase." },
          { title: "An error page with brand personality", why: "The original site lacked a custom 404 page. A melted cone illustration and a clear link home help visitors recover from an error while keeping the experience playful and consistent with the brand." }
        ],
        images: [],
        prototypeUrl: ""
      },

      outcome: {
        compare: [
          {
            label: "Homepage",
            before: { src: "assets/img/milk-current-home.jpg", caption: "Before: the current homepage." },
            after: [
              { src: "assets/img/milk-home-after-desktop.jpg", alt: "Redesigned Milk and Froth homepage at desktop width: a red navigation bar with Home, Our Story, Menu, Find Pints, Shop, and an Order Now button, over a full-bleed photo of strawberry ice cream with the headline Sweet, Creamy and back in season.", fit: "full", caption: "After: desktop. A full-bleed hero for the season’s flavors, a clear navigation bar, and an Order Now button." },
              { src: "assets/img/milk-home-after-mobile.jpg", alt: "Redesigned Milk and Froth homepage at mobile width: the logo and menu button over a full-bleed photo of a spoon of strawberry ice cream with the headline Sweet, Creamy and back in season.", fit: "full", caption: "After: mobile. The same hero, with a simple menu button." }
            ],
            why: "The original homepage featured a slogan and three links, with no way to order. The redesign leads with a full-bleed seasonal flavor photo and brings navigation, search, the cart, and an Order Now button within reach, making it easier to explore flavors and start an order."
          },
          {
            label: "Find Pints",
            before: { src: "assets/img/milk-current-locations.jpg", caption: "Before: the current Find Pints page, a text list of markets by city." },
            after: { src: "assets/img/milk-find-pints.jpg", fit: "full", caption: "After: Ann Arbor, Detroit, and Royal Oak, each with hours, address, photo, and directions. Desktop and mobile." },
            why: "The original Find Pints page listed markets by city. Individual shop cards now bring photos, hours, addresses, directions, and ordering together, helping visitors quickly find a location and plan their visit."
          },
          {
            label: "About, now on the homepage",
            before: { src: "assets/img/milk-current-about.jpg", caption: "Before: the current About page." },
            after: { src: "assets/img/milk-about-after.jpg", fit: "full", caption: "After: the About story, now part of the homepage: small batches, big flavor, and the team." },
            why: "The brand story previously lived on a separate About page. Small batches, bold flavors, and the team behind them now appear within the homepage’s first scroll, helping visitors discover the craft behind the ice cream."
          }
        ],
        results: [
          { value: "3", label: "design goals, each with a feature" },
          { value: "4", label: "brands compared" },
          { value: "8", label: "features benchmarked" },
          { value: "2", label: "layouts designed: desktop and mobile" },
          { value: "Highest", label: "grade in the course for this redesign" }
        ],
        reflection: "Our redesign received the highest grade in the course. Designing for a food brand taught me that the site has to feel like the shop. The bold red interior and the from-scratch flavors set the tone, so I built the design system first and let color, type, and photography carry the personality. Comparing four brands across eight features showed me what customers expect from an ice cream site, like a clear store locator, and where the original site fell short."
      }
    },

    {
      id: "root-insurance",
      layout: "research",
      title: "Root Insurance",
      subtitle: "Understanding why customers leave and what could make them stay.",
      focus: "Retention research",
      approach: "Completed the full research cycle to explore customer retention, from interviews and usability testing to synthesis and 15 retention concepts.",
      summary: "Improving retention for 500,000+ policyholders while empowering CS agents with the tools and insights to better support customers.",
      glance: { problem: "Customers leave Root, and the teams who could keep them lacked a clear picture of why.", did: "12 stakeholder and 6 customer interviews, affinity mapping, desk research reports, and live usability testing.", changed: "15 net-new retention concepts, shared out to leadership. Built a centralized research repository with Claude Code.", role: "UX Research Intern. I wrote the research plan, moderated customer interviews, synthesized findings, and presented readouts, with a product design intern." },
      ballColor: "#ff7a45",
      year: "2026",
      tags: ["Mixed-methods", "Journey maps", "Retention"],
      role: "UX Research Intern",
      team: "Product Development\nDesign, Product & Customer Support",
      timeline: "Jun–Aug 2026 · 11 weeks",
      toolsLabel: "Methods & tools",
      tools: "Stakeholder & customer interviews\nAffinity mapping · Journey mapping\nLookback · Figma · User Interviews Platform · Desk Research · Live Usability Testing",
      hero: { src: "assets/img/root-final-shareout.jpg", fit: "full", caption: "Presenting the CS & Retention Levers final shareout." },

      problem: {
        statement: "Which customer-service moments, non-price benefits, and retention levers do Root customers actually value, and how can Root use them to keep customers from leaving?",
        context: "Root’s customer-service structure was exposed against nationwide market leaders, in an industry where operational consistency is the real advantage. Voice-of-customer data pointed to the same friction again and again: rigid automated loops, opaque billing messages, little flexibility in support (for example no partial payments), boilerplate explanations for rate increases, and app login roadblocks. Each one could trigger a customer’s decision to leave.",
        challenge: "Improve retention for 500,000+ policyholders while giving customer-service agents better tools and insights to support them, focusing on two customer groups: Stressful Survivors and Achievers in Control.",
        role: "UX Research Intern. I wrote the research plan and led the CS and retention work: planning, moderating customer interviews, synthesizing findings, and presenting readouts, in partnership with a product design intern."
      },
      objectives: {
        summary: "The objective: identify exactly which customer-service touchpoints, non-price benefits, and retention levers Root customers value and desire, and use foundational discovery interviews to deliver actionable UX recommendations.",
        items: [
          "Which customer-service touchpoints do customers value, and where does service break down?",
          "Which non-price benefits matter to customers beyond price?",
          "Which retention levers could frontline agents use as proactive “save” moves for customers about to leave?",
          "How do we un-break the digital self-service experience?"
        ]
      },
      methods: {
        summary: "A mixed-methods plan across 18 sessions: desk research and stakeholder interviews first, then live customer interviews and usability testing.",
        items: [
          { name: "Desk research", detail: "Audited the support approaches of top carriers and Root’s own voice-of-customer data, plus cancellation, retention, and rate-shock data by customer segment, written up as a desk research report with separate reports on CS levers and retention levers." },
          { name: "Competitor benchmarking", detail: "Collected screenshots of competitor experiences, grouped under one question: what does it mean to be a member beyond just pricing?" },
          { name: "Stakeholder interviews", detail: "12 interviews with internal stakeholders, three times the four we first planned, to get deeper cross-functional alignment. Notes were captured per person on a shared board." },
          { name: "Customer interviews", detail: "6 live, moderated interviews with people insured across different insurance companies, run on Lookback after a pilot session, from a written research plan, moderator guide, and screener." },
          { name: "Usability testing", detail: "Ran live usability testing of early concepts in those interviews, using stimuli and a moderator guide built with the design intern." },
          { name: "Scoping the plan", detail: "Brainstormed ideas, sized them as pebbles, rocks, and boulders, and plotted them by how sure we were of the solution and of its value to customers. The most uncertain, highest-value quadrant set the scope." }
        ],
        image: [
          { src: "assets/img/root-desk-report.jpg", fit: "full", caption: "The desk research report: context and findings on customer service levers and retention levers, with the oversight and design lead names covered." },
          { src: "assets/img/root-benchmark.jpg", caption: "Screenshots from competitor experiences, grouped under the question “What does it mean to be a member beyond just pricing?”" },
          { src: "assets/img/root-data.jpg", fit: "full", caption: "Quantitative data reviewed alongside the interviews: cancellations, 30-day retention, rate changes, and rate shock by customer segment." },
          { src: "assets/img/root-stakeholder-notes.jpg", caption: "Notes from every stakeholder conversation, organized per person (names covered), then read across columns to surface the general patterns and hypotheses shared between teams." },
          { src: "assets/img/root-test-plan.jpg", fit: "full", caption: "The research plan for the six customer interviews: objective, related documents, moderator guide, screener, and pilot notes." },
          { src: "assets/img/root-ideas.jpg", caption: "Every idea from the brainstorms grouped into themed clusters, then sized as pebbles, rocks, and boulders so we could weigh effort against impact before choosing directions." },
          { src: "assets/img/root-prioritization.jpg", caption: "Ideas plotted against how sure we were of the solution and of its value to customers. The most uncertain, highest-value quadrant became the scope of the research plan." }
        ]
      },
      findings: {
        summary: "Every interview went into one shared matrix, one column per participant, so patterns could be read across the group instead of living in individual sessions. A poster journey map then followed an auto policyholder from first bind through cancellation, showing where emotions dip.",
        items: [
          "Price came up first: “I’m more loyal to pricing than anything.”",
          "Participants liked rewards tied to how long they had stayed, and one wouldn’t leave a reputable brand for a small saving.",
          "One participant liked seeing discounts broken out, and disliked a competitor’s list that didn’t show the breakdown.",
          "Reactions to driving tracking were mixed: some liked earning more for driving well, others were wary of being watched.",
          "Service moments stood out, such as a free ride after an accident and attentive agents."
        ],
        image: [
          { src: "assets/img/root-interview-notes.jpg", caption: "Every interview transcribed into a shared matrix (participants anonymized): one column per participant, rows for pain points, behaviors, quotes, and concept reactions, so patterns read across the group instead of living in individual sessions." },
          { src: "assets/img/root-journey-map.jpg", caption: "The Root auto policyholder post-bind experience as a single poster map: stages, actions, and the emotional curve across first bind, first drive, the 30-day grace period, payments, claims, renewal, and cancellation." }
        ]
      },
      insights: {
        summary: "Two customer groups guided the reading of the data. Stressful Survivors need support and flexibility when money or life gets hard. Achievers in Control value transparency and want to see the math behind their price. Across both, the patterns pointed away from price alone. We turned them into how-might-we questions under five themes: Balancing Value and Communication, Tailoring and Personalization, Timing and Contextual Messaging, Simplifying the Complex, and Community and Social Proof.",
        lists: [
          {
            heading: "Patterns and what they mean",
            items: [
              "Loyalty isn’t only price. Customers stay when they feel recognized and when service is attentive, so retention levers can go beyond a lower rate.",
              "Transparency is a retention lever. Showing the math behind a price or a discount builds trust, especially for Achievers in Control.",
              "Care that arrives before the customer asks is remembered. Proactive help around an accident or a renewal says the company is on their side.",
              "Rewards have to feel earned, and tracking needs care. Tenure and good-driving rewards landed, but some customers disliked being watched."
            ]
          },
          {
            heading: "How-might-we questions we prioritized for design",
            items: [
              "How might we gamify the customer experience so that discovering new benefits feels like a reward in itself?",
              "How might we allow customers to curate their own benefit packages, so they inherently understand the value of what they chose?",
              "How might we create an annual “Year in Review” that quantifies and visualizes all the benefits a customer used?",
              "How might we visually map out the whole benefit ecosystem so a customer can grasp the full scope of value in under 10 seconds?"
            ]
          }
        ],
        image: [{ src: "assets/img/root-coding.jpg", fit: "full", caption: "From notes to questions: the design lead’s and my own notes, the coding board, how-might-we questions grouped by theme, and the four starred questions we prioritized for design." }]
      },
      recommendations: {
        summary: "The research shaped the concepts the design partner built. Here is what we heard and the concept it became, then the five concepts from the final shareout.",
        map: {
          heading: "From research to design",
          rows: [
            { tag: "Gamified Tenure Rewards", need: "Participants responded to rewards that grow with how long they stay, and wanted proof they’re actually saving money.", design: "A rewards screen with years with Root, total savings, and perks that unlock at each milestone.", where: "Interviews" },
            { tag: "Drive for Rewards", need: "Customers liked earning more the better they do, but some were wary of being tracked.", design: "A driving-score reward system where benefits are earned by driving well, with a score customers can see and retake.", where: "Interviews" },
            { tag: "Sympathetic Proactive Communication", need: "Customers noticed when the company showed it cared, and wanted help before they had to ask.", design: "Birthday and renewal gifts, plus gentle payment reminders and one-time passes, that show sympathy through benefits.", where: "Interviews, CS data" },
            { tag: "Discount Opportunities", need: "Customers wanted to see exactly which discounts they have and how much each saves, without doing the math.", design: "A renewal screen that lists every discount (applied, not applied, expired) with total savings.", where: "Interviews" },
            { tag: "Updated Email Comms", need: "Rate-increase and billing messages felt generic and opaque, a pain point in the voice-of-customer data.", design: "Reworded renewal and payment emails that explain why the price changed and point to ways to save.", where: "Voice of customer" }
          ]
        },
        designs: [
          { label: "Gamified Tenure Rewards", images: [{ src: "assets/img/root-concept-tenure.png", fit: "full", caption: "Provide customers with discounts and rewards based off their tenure." }] },
          { label: "Drive for Rewards", images: [{ src: "assets/img/root-concept-drive.png", fit: "full", caption: "A driving score based reward system where customers can gain benefits based on their driving." }] },
          { label: "Sympathetic Proactive Communication", images: [{ src: "assets/img/root-concept-sympathy.png", fit: "full", caption: "Make customers feel valued by showing sympathy through benefits and rewards." }] },
          { label: "Discount Opportunities", images: [{ src: "assets/img/root-concept-discounts.png", fit: "full", caption: "Provide customers with opportunities to lower their rate by showcasing the different discounts that are available." }] },
          { label: "Updated Email Comms", images: [{ src: "assets/img/root-concept-email.png", fit: "full", caption: "Rewording existing email communications to make them more personable and friendly." }] }
        ]
      },
      impact: {
        decisionsHeading: "Where the research reached the business",
        decisions: [
          { title: "Mid-point stakeholder readout", statement: "Gave stakeholders, including the Director of Product Design, a data-driven view of findings and concepts before customer interviews began.", why: "Partnered with the product design intern on a readout for stakeholders, including the Director of Product Design. I opened by synthesizing additional findings and key metrics, and the intern turned them into high-fidelity charts and a concept matrix, giving a data-driven view before customer interviews began." },
          { title: "Updated frontline CS scripts", statement: "Turned findings into immediate fixes: the scripts customer service agents use today were updated.", why: "Worked with the Customer Service team to turn research findings into immediate operational improvements, by updating the scripts agents use today." },
          { title: "Scope pivot: from static maps to a living tool", statement: "Stakeholder feedback that static maps go stale started an initiative for a dynamic internal tool.", why: "The first scope included a static journey map and a sitemap. After stakeholder interviews and talks with leadership, it was clear a production-ready version needed more time than the internship allowed, so we delivered a high-fidelity first draft as a foundation. Stakeholders pointed out that static maps go stale almost as soon as they ship, which started an initiative for a dynamic internal tool for end-to-end visibility into the customer experience." },
          { title: "Made research visible", statement: "Published 7 insights posts to the research Slack channel, on top of the required weekly update.", why: "After feedback about broader team engagement, I published 7 insights posts in the team’s research Slack channel, on top of the required weekly update." },
          { title: "“New to Root Research” onboarding playbook", statement: "Co-built an onboarding playbook so future researchers don’t have to rebuild context from scratch.", why: "Co-developed with a teammate so future researchers don’t have to rebuild critical context from scattered conversations, Slack history, and repository searches. It covers Root and auto-insurance context; key research partners and communication channels; standard operating procedures from intake and planning through evidence handling, analysis, review, and handoff; the Voice of the Customer program; a worked NPS example that keeps small samples visible; the customer quote library and retention context; Slack directories and knowledge repositories; and a governed workflow for applying AI research skills to a new dataset." }
        ],
        results: [
          { value: "18", label: "research sessions" },
          { value: "3", label: "executive readouts" },
          { value: "15", label: "net-new retention concepts" },
          { value: "7", label: "insights posts shared" }
        ],
        reflection: "All of the project’s goals were met. If I were to do it again, I’d prepare more thoroughly for unexpected issues during live sessions. When Lookback experienced an outage, I kept usability testing on track by switching to Google Meet. Although I received positive feedback on how I handled the disruption, I’d prefer to have a backup plan ready. Next time, I’d include backup video links in calendar invites and run a second recording tool locally. I’m also interested in tracking the long-term impact of the CS script updates and using Claude Code to support consistent implementation."
      }
    },

    {
      id: "crown-code",
      title: "Crown Code",
      subtitle: "Designed a pageant interview prep app that combines flashcards, practice reminders, and progress tracking to help contestants prepare with confidence.",
      focus: "Mobile design",
      approach: "Designed a pageant interview prep app with flashcards, practice reminders, and a readiness dashboard to help contestants prepare with confidence.",
      summary: "A mobile app that brings interview flashcards, text-based reminders, and a full prep dashboard into one place, helping pageant contestants build a consistent preparation routine.",
      glance: { problem: "Pageant contestants prepare for interviews with scattered notes, screenshots, and messages.", did: "Talked with 100+ contestants, wrote a design brief, and built a light and dark design system and final designs.", changed: "One app for flashcards, practice reminders, and a readiness dashboard.", role: "Solo UX Designer. I built the design system and designed every screen, from brief to final." },
      ballColor: "#c6f24a",
      year: "2026",
      tags: ["Mobile app", "Design system", "Light & dark mode"],
      role: "UX Designer",
      team: "Solo project",
      timeline: "Jan–Apr 2026",
      toolsLabel: "Deliverables",
      tools: "Design brief · Component library\nLight & dark mode",
      iterLabels: ["What changed", "How I checked it"],
      hero: { src: "assets/img/crown-cover.png", fit: "phones", caption: "Crown Code’s home, readiness dashboard, flashcards, and Share Your Journey screens." },

      problem: {
        statement:
          "Pageant contestants often prepare for interviews with scattered tools like paper notes, screenshots, text messages, PDFs, and social media advice, which makes it hard to stay organized, practice consistently, and know whether their answers are improving.",
        context:
          "The app is an extension of the Crown Code brand, which already sells interview flashcards. Many contestants also need support beyond interview questions: reminders, readiness tracking, and personalized practice that matches their pageant system and division. I saw this need first-hand through my own pageant consulting work, where contestants kept their interview prep scattered across notes, screenshots, and messages.",
        contribution:
          "Solo designer. I built the Crown Code design system from the ground up: color, type, buttons, navigation, and cards, in light and dark mode.",
        goal:
          "Create a single, easy-to-use platform that combines interview preparation, accountability, and competition organization, so pageant prep feels manageable, consistent, and effective."
      },

      research: {
        summary:
          "I started by talking with more than 100 contestants about what is missing from the pageant world, and the answer kept coming back to scattered, inconsistent interview prep. The project then began from a design brief with an executive summary, problem statement, scope, and requirements, and I compared the tools contestants use today to find the gap Crown Code could fill.",
        methods: [
          { name: "Design brief", detail: "A written brief defining the product, problem, seven core features, and ten requirements, including iOS and Android support." },
          { name: "Competitor analysis", detail: "Compared Pageant Planet, Quizlet / PDFs, and CrownChat across five features to find where the market falls short." },
          { name: "Conversations with contestants", detail: "Talked with 100+ contestants about what is missing from the pageant world." }
        ],
        insights: [
          "Most tools solve only one part of pageant interview prep.",
          "CrownChat is the closest direct competitor, with AI feedback, but it is less focused on structured, season-long progress.",
          "Crown Code can own the space between generic study tools and one-off coaching."
        ],
        competitors: {
          heading: "Where the market falls short",
          intro: "Most tools solve only one part of pageant interview prep.",
          items: [
            { name: "Pageant Planet", tag: "Content + coaching", text: "Strong pageant resources, but no built-in daily practice loop or readiness tracking." },
            { name: "Quizlet / PDFs", tag: "Question review", text: "Easy to study with, but static and missing personalized feedback or accountability." },
            { name: "CrownChat", tag: "AI interview practice", text: "Closest direct competitor, with AI feedback, but less focused on structured season-long progress." }
          ],
          matrixHeading: "Feature gap",
          cols: ["Pageant Planet", "Quizlet", "CrownChat", "Crown Code"],
          rows: [
            { label: "Pageant-specific content", has: [true, false, true, true] },
            { label: "Structured practice routine", has: [false, false, true, true] },
            { label: "Personalized feedback", has: [false, false, true, true] },
            { label: "Progress / readiness tracking", has: [false, false, false, true] },
            { label: "Coach-guided ecosystem", has: [true, false, false, true] }
          ],
          differentiator: "One pageant-focused system for practice, feedback, accountability, and measurable competition readiness."
        },
        image: []
      },

      define: {
        goalCards: [
          { tag: "Dashboard", text: "Deadlines, practice, and action items in one place" },
          { tag: "Flashcards", text: "Practice answers with a clear structure" },
          { tag: "Sharing", text: "Coaches get feedback tied to real progress" }
        ],
        persona:
          "A pageant contestant preparing for interviews and competition, often busy, who needs quick, efficient prep tools and wants support beyond interview questions: reminders, readiness tracking, and practice that matches her pageant system and division.",
        journey:
          "Today, preparation lives in notes, screenshots, texts, PDFs, and social media advice. That makes consistent practice, growth tracking, and organization hard, and it leaves contestants unsure whether their answers are actually getting better.",
        lists: [
          {
            heading: "Scope: seven core features",
            items: [
              "Interview flashcards and practice: study flashcards that help build thoughtful, polished, confident responses.",
              "Text message practice mode: daily interview questions, weekly confidence prompts, quick-response challenges, reminders, and pageant-week check-ins.",
              "Full prep dashboard: a preparation timeline, packing checklist, paperwork reminders, goal tracker, answer bank, and pageant-week readiness tracker.",
              "System-specific practice: personalize by pageant type, division, and competition focus.",
              "Smarter answer feedback: answer scores, clarity suggestions, stronger rewritten versions, and guidance on confidence, relevance, and specificity.",
              "Progress tracking: practice streaks, saved responses, readiness scores, and weekly summary reports.",
              "Accountability tools: reminders, nudges, and progress-based encouragement to keep users motivated and consistent."
            ]
          },
          {
            heading: "Requirements",
            items: [
              "Works on both iOS and Android.",
              "Secure accounts that keep practice history, saved responses, flashcards, and progress.",
              "View, save, and interact with digital interview flashcards.",
              "Optional text-message practice: daily questions, reminders, countdown texts, and practice prompts.",
              "Personalization by pageant system, division, and competition focus.",
              "Answer feedback with scoring and suggestions for improvement.",
              "Progress monitoring of consistency, improvement, and readiness over time.",
              "Preparation tools: timelines, checklists, deadline reminders, and answer banks.",
              "Push notifications for practice sessions, preparation tasks, deadlines, and pageant-week milestones.",
              "A visually clean, easy-to-navigate, supportive interface for busy users."
            ]
          }
        ],
        callout: "The main benefit: a structured, accessible system that makes pageant prep feel manageable, consistent, and effective.",
        map: {
          heading: "From the brief to the screens",
          rows: [
            { tag: "Dashboard", need: "Track deadlines, practice, and action items in one place", design: "A readiness score with a mastery streak and a practice streak, for structure, visibility, and accountability.", where: "Home and Progress" },
            { tag: "Flashcards", need: "Practice interview answers and learn a clear answer structure", design: "Tap-to-reveal flashcards in decks, with an answer structure to build stronger, more confident responses.", where: "Cards" },
            { tag: "Sharing", need: "Get more continuous support from coaches", design: "A readiness profile and a Share Your Journey view, so feedback is personal, timely, and tied to real progress.", where: "Profile" }
          ]
        }
      },

      ideate: {
        summary:
          "I started on paper, sketching ten screens: the profile, home dashboard, daily tips, decks, two flashcard states (reveal and answer structure), competition readiness, submission confirmation, strategic feedback, and email notifications. The bottom navigation changed from sketch to sketch while I worked out what belonged there, and the final design settled on four tabs: Home, Cards, Progress, and Profile.",
        image: [{ src: "assets/img/crown-sketches.jpg", fit: "wide", caption: "Ten paper sketches: profile, home dashboard, daily tips, decks, flashcards (reveal and answer structure), competition readiness, submission confirmation, strategic feedback, and email notifications." }]
      },

      designSystem: {
        intro: "Built from the ground up: the brand’s colors and type first, then the components the screens are built from.",
        colorImage: { src: "assets/img/crown-color-system.jpg", fit: "wide", caption: "Color system: primitives and semantic tokens for teal, gold, success green, error red, and greyscale." },
        typography: { src: "assets/img/crown-typography.jpg", fit: "wide", alt: "Crown Code type system: Manrope for headings and labels, Newsreader for paragraphs and buttons, with sizes, line heights, and letter spacing for H1 to H6, three paragraph, button, and label sizes.", caption: "Type scale: Manrope for headings and labels, Newsreader for paragraphs and buttons." },
        components: { src: "assets/img/crown-components.jpg", fit: "wide", caption: "Component library: buttons, navigation, flashcards, progress, and readiness cards." }
      },

      iterations: [
        {
          version: "Round 1: Sketches and low-fidelity",
          change: "Started with ten paper sketches covering the profile, home dashboard, daily tips, decks, flashcards, competition readiness, submission confirmation, strategic feedback, and email notifications, then moved the strongest ideas into low-fidelity screens.",
          feedback: "I checked each sketch against the scope and requirements in the design brief before moving to screens.",
          image: { src: "assets/img/crown-lowfi.jpg", caption: "Low-fidelity wireframes." }
        },
        {
          version: "Round 2: Design system and high fidelity",
          change: "Built a component library (primary, secondary, and tertiary buttons in three sizes, navigation, flashcards, progress, and readiness cards, top bar, and action footer), then designed profile, home, and progress, and flashcard screens in light mode, then redesigned each one for dark mode.",
          feedback: "I ran a contrast check on the palette. Gold on black is 11.6:1, but gold on white is only 1.8:1, so gold is used only on dark surfaces, for moments of progress like the readiness score. White text on Crowning Blue is 4.35:1, just under the 4.5:1 AA target for small text, so small labels need a larger size or a slightly darker teal.",
          image: [
            { src: "assets/img/crown-components.jpg", caption: "Component library: buttons, navigation, flashcards, progress, and readiness cards." },
            { src: "assets/img/crown-screens-light.png", caption: "Screen set, light mode: profile pages, home, and progress pages, and flashcards." },
            { src: "assets/img/crown-screens-dark.png", caption: "Screen set, dark mode." }
          ]
        }
      ],

      execution: {
        summary:
          "Three design decisions shaped the app, all in service of one goal: making pageant prep feel more consistent, focused, and effective. Together they bring preparation and organization into one place.",
        palette: [
          { name: "Crowning Blue", hex: "#00878A" },
          { name: "Golden Rush", hex: "#E4BD3C" },
          { name: "Stunning Black", hex: "#000000" },
          { name: "Sweet White", hex: "#FFFFFF" }
        ],
        typefaces: [
          { role: "Primary typeface", name: "Manrope" },
          { role: "Secondary typeface", name: "Newsreader" }
        ],
        decisions: [
          {
            title: "Readiness dashboard",
            why: "Built a dashboard to help users track deadlines, practice, and action items in one place. This creates more structure, visibility, and accountability throughout pageant prep."
          },
          {
            title: "Interview flashcards",
            why: "Designed flashcards that support interview practice while also teaching users a clear answer structure. This helps contestants build stronger, more confident responses."
          },
          {
            title: "Progress sharing",
            why: "Created a readiness profile that users can share with coaches for more continuous support. This makes feedback more personalized, timely, and connected to the user’s real progress."
          },
          {
            title: "Brand, type and color",
            why: "Teal is associated with calm, focus, and trust, which suits a tool people use to steady their nerves before an interview. Gold signals achievement, confidence, and prestige, the feeling of the crown, so it is saved for moments of progress like the readiness score. Newsreader, a serif, adds the polish and elegance of pageant culture, while Manrope keeps buttons, labels, and body text clean and easy to read on a small screen."
          }
        ],
        screenReasonsHeading: "Why each screen works this way",
        screenReasons: [
          { screen: "Home", why: "Puts the readiness score first, so a contestant sees where she stands the moment she opens the app, with the checklist and answer bank one tap away." },
          { screen: "Competition readiness", why: "Turns the next competition into a countdown with packing progress and paperwork status, so deadlines become visible tasks." },
          { screen: "Daily reminders and tips", why: "Short daily strategy tips and two clear next actions keep practice consistent without overwhelming her." },
          { screen: "Your decks", why: "Leads with a five-minute daily drill, then decks by level with progress on each, so it is clear what to practice next." },
          { screen: "Flashcards practice", why: "A tap-to-reveal card with a drill timer adds a little interview pressure and keeps each session short." },
          { screen: "Answer structure", why: "The answer side teaches a three-step structure, so contestants learn how to answer, not only what to answer." },
          { screen: "Profile", why: "Shows the readiness score and competition focus in one place, as the starting point for what she shares with coaches." },
          { screen: "Share Your Journey", why: "Lets coaches see real progress and give strategic feedback tied to it." },
          { screen: "Submitted for Review", why: "Confirms what was sent and sets a clear turnaround, so the contestant knows what happens next." },
          { screen: "Email notifications", why: "Puts reminders and weekly reports under the contestant’s control, so they help instead of nag." }
        ],
        designs: [
          {
            label: "Readiness dashboard",
            phones: true,
            images: [
              { src: "assets/img/crown-home-full.jpg", caption: "Home: readiness score, mastery streak, answer bank, and pageant checklist." },
              { src: "assets/img/crown-road.jpg", caption: "Competition readiness: a countdown to the next milestone, packing progress, coach notes, and paperwork status." },
              { src: "assets/img/crown-tips.jpg", caption: "Daily reminders and tips: strategy, daily intentions, and digital representation." }
            ]
          },
          {
            label: "Interview flashcards",
            phones: true,
            images: [
              { src: "assets/img/crown-decks.jpg", caption: "Your decks: a daily drill and a deck for each level, with progress on every one." },
              { src: "assets/img/crown-flashcards-practice.jpg", caption: "Flashcards practice: card 1 of 24, tap to reveal, with a five-minute drill timer." },
              { src: "assets/img/crown-answer-structure.jpg", caption: "The answer side: a three-step answer structure for each question, so responses are clear and confident." }
            ]
          },
          {
            label: "Progress sharing",
            phones: true,
            images: [
              { src: "assets/img/crown-profile.jpg", caption: "Profile: readiness score, personal information, and competition focus." },
              { src: "assets/img/crown-share-journey.jpg", caption: "Share Your Journey: a readiness profile, checklist, and strategic feedback from coaches." },
              { src: "assets/img/crown-submitted.jpg", caption: "Submitted for Review: a paperwork summary and a 48-hour turnaround." },
              { src: "assets/img/crown-email.jpg", caption: "Email notifications: control daily reminders, weekly reports, and pageant-week check-ins." }
            ]
          }
        ],
        images: [],
        darkScreens: [
          { src: "assets/img/crown-dark-home.jpg", alt: "Dark mode home screen: Good morning, Layilah, with the readiness score card, and bottom navigation.", caption: "Home" },
          { src: "assets/img/crown-dark-road.jpg", alt: "Dark mode Competition Readiness screen: Your Road to the Crown, with the next milestone USA National Miss, 42 days and 18 hours away, and a packing progress ring at 74 percent.", caption: "Competition readiness" },
          { src: "assets/img/crown-dark-tips.jpg", alt: "Dark mode Daily Reminders and Tips screen with Practice Interview Q’s and Go Home buttons and a Strategy section.", caption: "Daily reminders and tips" },
          { src: "assets/img/crown-dark-decks.jpg", alt: "Dark mode Your Decks screen with a Daily Drill card, Start Today’s Drill button, and a list of curated decks.", caption: "Your decks" },
          { src: "assets/img/crown-dark-flashcards.jpg", alt: "Dark mode Flashcards Practice screen: card 1 of 24 with an Onstage tag and a tap to reveal prompt.", caption: "Flashcards practice" },
          { src: "assets/img/crown-dark-answer.jpg", alt: "Dark mode answer side of a flashcard: an interview question and a numbered answer structure starting with Systemic Accountability.", caption: "Answer structure" },
          { src: "assets/img/crown-dark-profile.jpg", alt: "Dark mode profile screen: a member photo with a readiness score of 85, an Elite Member tag, and bottom navigation.", caption: "Profile" },
          { src: "assets/img/crown-dark-share-journey.jpg", alt: "Dark mode Share Your Journey screen: a readiness score of 85 and a 12 day mastery streak.", caption: "Share Your Journey" },
          { src: "assets/img/crown-dark-submitted.jpg", alt: "Dark mode Submitted for Review screen: a confirmation that the dossier was sent to two coaches, with buttons to go to Daily Tips or view the progress page.", caption: "Submitted for Review" },
          { src: "assets/img/crown-dark-email.jpg", alt: "Dark mode Email Notifications screen in the Preference Center, with a Performance Track section for daily and weekly metrics.", caption: "Email notifications" }
        ],
        prototypeUrl: ""
      },

      outcome: {
        results: [
          { value: "7", label: "core features scoped" },
          { value: "10", label: "requirements defined" },
          { value: "2", label: "display modes: light and dark" },
          { value: "1", label: "place for all of pageant prep" }
        ],
        reflection: "Working solo meant I made every decision, from the design system to the flows, and the biggest lesson was to keep the app focused. Contestants already juggle notes, screenshots, and messages, so each screen had to make the next step to practice obvious and not add one more thing to manage. Building the system in light and dark mode from the start kept the screens consistent as the app grew. Next I would design the answer-feedback flow."
      }
    },

    {
      id: "usda-acir",
      layout: "research",
      title: "USDA ACIR Portal",
      subtitle: "Improving how importers, brokers, and officials find and trust agricultural import requirements.",
      focus: "Usability research",
      approach: "Combined interviews, a survey, comparative and heuristic evaluations, and usability testing to identify barriers to finding and understanding agricultural import requirements.",
      summary: "Helping importers, brokers, and government officials find and trust agricultural import requirements in the USDA ACIR portal.",
      glance: { problem: "Importers, brokers, and officials struggle to find and trust import requirements in the ACIR portal.", did: "Five methods: interviews, a survey, comparative and heuristic evaluation, and usability tests.", changed: "Three recommendations, and new features now live on USDA’s national portal.", role: "UX Researcher on a five-person team. I built our presentations, ran team meetings, supported the interviews, and wrote parts of the final report." },
      ballColor: "#ff2fb4",
      year: "2026",
      tags: ["Usability testing", "Interviews", "Heuristic evaluation"],
      role: "UX Researcher",
      team: "5 UX researchers\nWith USDA APHIS stakeholders",
      timeline: "Jan–Apr 2026",
      toolsLabel: "Methods & tools",
      tools: "Interviews · Survey\nComparative & heuristic evaluation\nUsability testing",
      hero: { src: "assets/img/usda-title.jpg", fit: "full", caption: "Harvesting Insights: the final report presentation for the USDA ACIR usability study." },

      problem: {
        statement: "How can importers, brokers, and government officials find, and feel confident interpreting, the import requirements they need in USDA’s ACIR portal?",
        context: "ACIR is the public-facing entry point for U.S. agricultural import rules, with over 100,000 country and commodity combinations and about 16,000 Commodity Import Requirement documents. Its users are importers and customs brokers, CBP agriculture specialists, APHIS and PPQ staff, and the general public. They often need an answer in under five minutes.",
        challenge: "Where do search, navigation, and help content break down for each group, and what would improve findability and interpretive confidence?",
        role: "UX Researcher on a five-person team. I put together all of our presentations, ran our team meetings, supported the interviews, and wrote parts of several sections of the final report."
      },
      objectives: {
        summary: "The study set out to find where the portal’s search, navigation, and help content get in people’s way.",
        items: [
          "How well can users find the right requirement for their shipment?",
          "How confident are they that they interpreted it correctly?",
          "Which help resources are missing or hard to find?",
          "How does the portal hold up on mobile and small screens?"
        ]
      },
      methods: {
        summary: "Five methods in sequence, so each one tested what the last one found, plus an interaction map that marked the friction. A finding counted only if it showed up in at least three of them.",
        items: [
          { name: "Interviews", detail: "15+ semi-structured interviews of 45 to 60 minutes with USDA staff across departments and states, plus a private-sector seed importer." },
          { name: "Survey", detail: "A 9-question survey in four sections (background, findability, interpretation, help and support). Piloted with USDA staff, which led to four changes, such as asking about how requirements are organized rather than how they are worded." },
          { name: "Comparative evaluation", detail: "Compared ACIR with eCFR, APHIS Manuals, Microsoft Learn, and GOV.UK on navigation, search, hierarchy, scannability, and terminology." },
          { name: "Heuristic evaluation", detail: "Five evaluators each scored the portal on six of Nielsen’s heuristics, merged 60+ issues and agreed severity on a 0 to 4 scale." },
          { name: "Usability testing", detail: "10+ moderated think-aloud sessions on Zoom after a client pilot, with participants of varying ACIR experience. Three tasks: search workflow, cross-referencing manuals to documents, and taxonomy and name resolution." },
          { name: "Interaction map", detail: "Mapped the main search journey in Figma and marked friction in red, then reviewed it with stakeholders." }
        ],
        image: [
          { src: "assets/img/usda-methods.jpg", fit: "full", caption: "Five methods, and the rule that a finding had to appear in at least three." },
          { src: "assets/img/usda-interview-guide.png", alt: "Interview guide with an introduction, background questions, twelve numbered open-ended questions about searching for import requirements, and a conclusion.", fit: "tall", caption: "Interview guide: open-ended questions on search workflow, comprehension, and collaboration." },
          { src: "assets/img/usda-consent.png", alt: "Interview consent form for the UX research study on agricultural import information systems, covering purpose, what to expect, participant rights, confidentiality, and questions, with a signature and printed name line. Names and contact details are covered.", fit: "tall", caption: "Interview consent form (names and contact details removed): voluntary, recorded, anonymized quotes." },
          { src: "assets/img/usda-survey.jpg", fit: "full", caption: "Survey design: the Findability section of the piloted survey." },
          { src: "assets/img/usda-heuristic-sheet.jpg", alt: "Spreadsheet titled Heuristic Analysis with columns for screen, problem identified, heuristic used, severity, how many reviewers mentioned it, screenshots, recommendations, and resolution. Rows list issues such as blank screens during loading and search that needs an exact country and commodity name.", fit: "full", caption: "Heuristic evaluation workbook (reviewer names and notes removed): each issue logged with the heuristic violated, severity, and a recommendation." },
          { src: "assets/img/usda-annotated.jpg", alt: "Screenshot of the ACIR search page and a commodity import requirements page, annotated with three problems: search rigidity, no breadcrumbs, and scattered help resources.", fit: "full", caption: "Heuristic evaluation: search rigidity, scattered help, and no breadcrumbs, marked on the portal." },
          { src: "assets/img/usda-interaction.jpg", fit: "full", caption: "Interaction map: core search and organization, pre-filtering, and mobile layout." },
          { src: "assets/img/usda-testmethods.jpg", fit: "full", caption: "Usability test design: three tasks and a debrief." }
        ]
      },
      findings: {
        summary: "Three patterns held across every method. Each finding below came from at least three of them.",
        items: [
          "Search fails on imperfect input. Heuristic evaluators rated it severity 4 of 4, and it appeared in every method. Autocomplete dropped out on full names and there was no country-only search.",
          "Help is disconnected from the task. Help lives across the Help page, the Videos and Guides Hub, the glossary, and manuals. One participant called cross-referencing “taxing.”",
          "Small inconsistencies misplace trust. In one documented case a plant was classified differently across tiles, and an officer gave incorrect guidance and had to call back to reverse it."
        ],
        image: [
          { src: "assets/img/usda-finding1.jpg", fit: "full", caption: "Finding 1: search fails on imperfect input." },
          { src: "assets/img/usda-finding2.jpg", fit: "full", caption: "Finding 2: help is disconnected from the task." },
          { src: "assets/img/usda-finding3.jpg", fit: "full", caption: "Finding 3: small inconsistencies misplace user trust." }
        ]
      },
      insights: {
        summary: "ACIR is a thorough and authoritative source, and its heaviest users rely on it daily. The portal struggles in three places: it is hard to enter without insider knowledge, hard to get help mid-task, and small inconsistencies erode trust in the answer.",
        lists: [
          {
            heading: "Patterns and what they mean",
            items: [
              "Experts are fine and new users are not. Exact scientific names work for veterans and lock out everyone else.",
              "Help has to live inside the task. Users should never have to leave their work to understand it.",
              "Trust is built on small details. Conflicting tiles, blank loading screens, and a back button that loses the search all lower confidence."
            ]
          },
          {
            heading: "What this study can and cannot tell us",
            items: [
              "Small samples. 15+ interviews and 10+ usability sessions show patterns, not statistics. That is why a finding only counted when at least three of the five methods supported it.",
              "Recommendations were not prototype-tested. They come from evidence, and a prototype of forgiving search is the first next step.",
              "Accessibility and the general public were outside the scope and are listed as future research."
            ]
          }
        ],
        image: [
          { src: "assets/img/usda-users.jpg", fit: "full", caption: "Primary users and an example use case: Maria, a customs broker who needs an answer in under five minutes." },
          { src: "assets/img/usda-persona1.jpg", alt: "Fictional persona card for Marcus Bennett, operations manager at an agricultural import company, with his background, how he uses ACIR, frustrations with dense regulatory language, and needs for plain-language summaries, and a guided decision path.", fit: "full", caption: "Fictional persona: Marcus Bennett, an operations manager at an agricultural import company who skips complex filters and wants plain-language answers." },
          { src: "assets/img/usda-persona2.jpg", alt: "Fictional persona card for Angela Rivera, trade director in international agricultural policy, with her background, how she uses ACIR, frustration that the database is siloed by commodity and country, and needs for concept-based search, and linked definitions.", fit: "full", caption: "Fictional persona: Angela Rivera, a trade director in international agricultural policy who needs concept-based search and links back to legacy manuals." },
          { src: "assets/img/usda-persona3.jpg", alt: "Fictional persona card for Claire Thompson, a plant protection and quarantine officer at an inspection station, with her background, how she uses ACIR, frustrations with inconsistent tiles, and ambiguous wording, and needs for conflict alerts, and embedded definitions.", fit: "full", caption: "Fictional persona: Claire Thompson, a plant inspection officer who needs a clear yes or no, and why, under time pressure." }
        ]
      },
      recommendations: {
        summary: "Three recommendations, one for each pattern, backed by what each method found.",
        map: {
          heading: "From research to recommendation",
          rows: [
            { tag: "Make the portal forgive small mistakes", need: "Users fall out of search the moment their input is not an exact name.", design: "Forgiving autocomplete that accepts partial input, common names and synonyms, country-only and commodity-only queries, and plain-language sub-labels on the homepage tiles.", where: "All five methods" },
            { tag: "Bring help into the task", need: "Help is scattered, and even experts cannot link manual guidance to the right document.", design: "A single Help Hub, hover tooltips for technical terms, and direct links between manual sections and matching CIR documents.", where: "Heuristics, comparison, usability tests" },
            { tag: "Close the trust gaps", need: "Conflicting tiles, no breadcrumbs, and no loading feedback lower confidence.", design: "Cross-reference checks for tile data, standard status language, breadcrumbs, consistent link behavior, and loading indicators.", where: "Interviews, heuristics, usability tests" }
          ]
        },
        designs: [
          { label: "Make the portal forgive small mistakes", images: [{ src: "assets/img/usda-testrecs.jpg", fit: "full", caption: "Usability test recommendations: flexible search, status banners, and direct links." }] },
          { label: "Bring help into the task", images: [{ src: "assets/img/usda-heurrecs.jpg", fit: "full", caption: "Heuristic evaluation recommendations: faceted search, a single Help Hub, and breadcrumbs." }] },
          { label: "Close the trust gaps", images: [{ src: "assets/img/usda-summary.jpg", fit: "full", caption: "Overall conclusions across all five methods." }] }
        ]
      },
      impact: {
                image: [
          { src: "assets/img/usda-banner.jpg", fit: "wide", caption: "New features now live on the ACIR portal: a Reports page for data export, embedded procedure search on each manual page, a reworked procedure search page, and a taxonomic group notes field." }
        ],
        decisionsHeading: "Where the research went",
        decisions: [
          { title: "New features live on the ACIR portal", statement: "The portal now has embedded procedure search on each manual page and a taxonomic group notes field, both in areas our study examined.", why: "The ACIR portal’s “New ACIR Features” announcement lists a Reports page for data export, embedded procedure search on each manual page, a reworked procedure search page, and a new taxonomic group notes field. Cross-referencing between manuals and documents, and finding taxonomy information, were two of the problem areas our usability tests and heuristic evaluation looked at." },
          { title: "Delivered to USDA APHIS", why: "The full report, with the evidence (reports, presentations, and videos) for every method, was sent to the USDA APHIS team." },
          { title: "Weekly stakeholder check-ins", why: "Met weekly with USDA stakeholders to share emerging findings on navigation, search filters, and help resources." },
          { title: "Next research steps", why: "Recommended a card-sorting study to redesign the help architecture, a prototype of forgiving search, and a larger-scale survey. Mobile, accessibility, and the general public were out of scope." }
        ],
        results: [
          { value: "5", label: "research methods" },
          { value: "60+", label: "usability issues found, narrowed to 5" },
          { value: "3", label: "patterns across every method" },
          { value: "100,000+", label: "country-commodity combinations in the portal" }
        ],
        reflection: "No single method gave the full picture. The interviews, survey, evaluations, and usability tests each caught different problems, and requiring a finding to appear in at least three methods kept us honest about what mattered. I learned how much a complex federal tool depends on expert knowledge users never say out loud. As the person who built our presentations and ran our team meetings, I also learned that a clear story is part of the research: the findings only helped once stakeholders could follow them. If I did it again, I would recruit first-time importers earlier, and next I would run the card-sorting study we recommended to redesign how help is organized."
      }
    },

    {
      id: "instructure-elevated",
      layout: "research",
      title: "Instructure: ElevateED",
      subtitle: "Exploring how Instructure can support learning and career growth beyond traditional education.",
      focus: "Strategy research",
      approach: "Conducted 10 interviews with learners, HR professionals, and an Instructure partner, then translated five learning barriers into three product recommendations.",
      summary: "Research that built the case for an AI-powered learning initiative advancing inclusive, alternative education pathways.",
      glance: { problem: "Instructure mostly serves traditional schools, while 79% of people in the US do not attend a traditional university.", did: "10 interviews with learners, HR professionals, and an Instructure partner, followed by the Pugh matrix and building a Figma Make prototype of the recommendations.", changed: "Turned five barriers into three product recommendations, and our team was selected to present them to 180+ students and the strategy team.", role: "Lead UX Researcher, and the only one on a team of four. I led research planning, interviews, and affinity analysis, and helped present the work." },
      ballColor: "#27d9f5",
      year: "2025",
      tags: ["Stakeholder interviews", "Affinity mapping", "Prototyping"],
      role: "Lead UX Researcher",
      team: "4-person interdisciplinary team\nUniversity of Michigan",
      timeline: "Aug–Dec 2025",
      toolsLabel: "Methods & tools",
      tools: "10 stakeholder interviews\nCompetitive analysis · Affinity mapping\nPersonas · Pugh matrix",
      hero: { src: "assets/img/elevated-cover.jpg", fit: "full", caption: "Instructure: Life Changing Education, the final presentation to the client." },

      problem: {
        statement: "How might Instructure better support learners pursuing bootcamps, micro-credentials, and self-directed learning to build skills and improve their career opportunities?",
        context: "Our project explored how Instructure could support learning beyond traditional academic pathways. We examined the needs of alternative-pathway learners, including clearer learning roadmaps, soft-skill development, and ways to communicate their skills to employers.",
        challenge: "Understand the barriers these learners face and translate the findings into actionable product recommendations aligned with Instructure’s strategy.",
        role: "As the only UX researcher on a four-person interdisciplinary team, I led research planning, interview protocol development, interviews, and affinity analysis. I also helped translate our findings into recommendations and present the team’s work."
      },
      objectives: {
        summary: "Understand learners’ needs and identify opportunities for Instructure to support their learning and career goals.",
        items: [
          { title: "Identify barriers", text: "Explore challenges with time, guidance, and career readiness." },
          { title: "Understand learning journeys", text: "Learn how people navigate alternative pathways and where they need support." },
          { title: "Guide product opportunities", text: "Recommend solutions aligned with learner needs and Instructure’s strategy." }
        ]
      },
      methods: {
        summary: "A five-step research process: background research, a live project plan, recruitment and interviews, qualitative analysis, then recommendations.",
        items: [
          { name: "Background research", detail: "Identified core problems, scanned the market (including D2L Brightspace and Coursera) and found gaps in Instructure’s ecosystem." },
          { name: "Live project plan", detail: "Defined context, stakeholders, methods, and outputs, and divided tasks across the team." },
          { name: "Interviews", detail: "10 semi-structured interviews with alternative-pathway learners, HR professionals, and an Instructure partner. After feedback that two early participants shared one cultural context, we recruited an American learner to close the gap." },
          { name: "Affinity diagram", detail: "Clustered hundreds of interview notes into themes over several rounds, working from the raw notes rather than our own ideas." },
          { name: "Pugh matrix", detail: "Scored ideas against scalability, feasibility, and differentiation to choose the final recommendations." }
        ],
        image: [
          { src: "assets/img/elevated-process.jpg", fit: "full", caption: "The five-step research process." },
          { src: "assets/img/elevated-interviews.jpg", fit: "full", caption: "Interview recruitment, protocol, and who we spoke to." },
          { src: "assets/img/elevated-competitor.jpg", fit: "full", caption: "Competitor analysis: what D2L Brightspace, Cornerstone, and Blackboard offer, and the gap it leaves." },
          { src: "assets/img/elevated-affinity.jpg", fit: "full", caption: "The affinity wall: interview notes clustered into themes." },
          { src: "assets/img/elevated-pugh.jpg", fit: "full", caption: "Prioritization matrix: the top three recommendations." }
        ]
      },
      findings: {
        summary: "Five findings came out of the affinity wall. Each one is backed by what learners and stakeholders told us.",
        items: [
          "Structural incompatibility: learners have 20 minutes on a commute, not a 45-minute lecture. “I don’t have hours to study. I need effective learning.”",
          "Need-driven engagement: they learn what they need now. “I learn because I need the skill.”",
          "Mid-journey disorientation: self-learners lose track of where they stand. “I’m not sure where I stand in my progress.”",
          "The employability gap: certificates carry little weight with employers. “Will this effort actually help me land a job?”",
          "Soft skill barrier: self-paced learning is isolating and skips teamwork and communication."
        ],
        image: [
          { src: "assets/img/elevated-findings.jpg", fit: "full", caption: "The five research findings, each with a learner quote." },
          { src: "assets/img/elevated-problem.jpg", fit: "full", caption: "The problem in numbers: 79%, 61% and 29%." }
        ]
      },
      insights: {
        summary: "Together the findings point to a flexible, guided, employability-focused learning ecosystem. We turned them into a persona and a clear target for each recommendation.",
        lists: [
          {
            heading: "What the findings mean",
            items: [
              "Time is the first barrier. Learning has to fit into minutes, not hours.",
              "Learners need a map. Without grades or classmates, they can’t tell if they are ahead or behind.",
              "Credentials only matter if employers trust them.",
              "Soft skills are the missing half of alternative pathways."
            ]
          }
        ],
        image: [
          { src: "assets/img/elevated-keyinsights.jpg", fit: "full", caption: "Three key insights: a flexible, learner-centered opportunity; soft skills and connections; and high motivation with low structure." },
          { src: "assets/img/elevated-persona.jpg", fit: "full", caption: "Primary persona, Lauren Case: pain points, motivations, and goals." },
          { src: "assets/img/elevated-persona2.jpg", fit: "full", caption: "Secondary persona, an HR professional hiring without degree filters." }
        ]
      },
      recommendations: {
        summary: "Three recommendations, each aimed at one pain point and shown as a prototype I built in Figma Make.",
        map: {
          heading: "From research to recommendation",
          rows: [
            { tag: "Personalized modular learning platform", need: "Learners have almost no time, so they need small, flexible pieces.", design: "A feed of bite-sized lessons personalized by search and recommendations, for curiosity-based learning with low pressure.", where: "Lack of time" },
            { tag: "Skill tree roadmap", need: "Learners lose direction without a clear map of their progress.", design: "A tree-structured roadmap that visualizes progress and shows what to learn next.", where: "Lack of guidance" },
            { tag: "Soft-skill development tool", need: "Soft skills are neglected, and learners freeze up in interviews.", design: "An AI chatbot that acts like an interviewer, helping learners reflect on and practice articulating their experience.", where: "Soft skills" }
          ]
        },
        designs: [
          { label: "Personalized modular learning platform", images: [{ src: "assets/img/elevated-rec1.jpg", fit: "full", caption: "Target pain point: lack of time." }] },
          { label: "Skill tree roadmap", images: [{ src: "assets/img/elevated-rec2.jpg", fit: "full", caption: "Target pain point: lack of guidance." }] },
          { label: "Soft-skill development tool", images: [{ src: "assets/img/elevated-rec3.jpg", fit: "full", caption: "Target pain point: lack of evaluation and practice of soft skills." }] }
        ],
        image: [{ src: "assets/img/elevated-conclusion.jpg", fit: "full", caption: "Together the three functions are scalable, feasible, and a market differentiator." }]
      },
      impact: {
        image: [
          { src: "assets/img/elevated-presenting.jpg", fit: "full", alt: "Presenting the ElevateED strategy to Instructure’s team and a University of Michigan audience." },
          { src: "assets/img/elevated-audience.jpg", fit: "full", alt: "A full lecture hall during Recommendation 3, the soft-skill development tool." }
        ],
        imageCaption: "Presenting our product recommendation to stakeholders and 180+ attendees in our lecture hall.",
        quote: { text: "Your team delivered one of the strongest, most future-focused strategies we’ve seen.", source: "Instructure’s client consultant" },
        decisionsHeading: "Where the research reached people",
        decisions: [
          { title: "Presented to Instructure’s strategy team", why: "Presented the final strategy and the Figma Make prototype to Instructure’s full strategy team, and to over 180 University of Michigan students, to drive alignment with Instructure’s long-term strategic goals." },
          { title: "Client consultant feedback", statement: "The client consultant praised the strategy and flagged two constraints to plan for: content partnerships for the modular platform, and how to measure soft skills.", why: "Instructure’s client consultant called our team’s strategy one of the strongest and most future-focused they had seen. The consultant also flagged constraints to plan for: content partnerships for the modular platform, and how to measure soft skills." },
          { title: "Widened who we design for", why: "Interviews showed that alternative-pathway learners are often already working, so the design covers in-career learners and not only recent high-school graduates." }
        ],
        results: [
          { value: "10", label: "interviews across stakeholder groups" },
          { value: "5", label: "research findings" },
          { value: "3", label: "product recommendations" },
          { value: "180+", label: "students and the strategy team presented to" }
        ],
        reflection: "Three things I would carry into the next project. First, who you recruit shapes what you learn: after feedback that our first two learner interviews shared one cultural context, we added an American participant, and the differences were real. Second, the interviews changed the question. We began with high-school graduates skipping college and learned that most alternative-pathway learners are already working and learning for life, so the design had to serve them. Third, synthesis is the hard part. Sorting hundreds of notes into themes was the most demanding stage, and it produced our strongest findings. If I did it again, I would bring education policymakers into the interviews, since we have no insight into how credentials are governed or recognized, and I would test the soft-skill tool first, because that is where Instructure’s strategy and our research met."
      }
    }
  ],

  /* ---------- Resume (from your PDF) ---------- */
  resume: {
    summary:
      "UX Research & Design graduate student at the University of Michigan with seven years in tech recruiting. I pair user research with prototyping and iteration to make products clearer and easier to use.",
    sections: [
      {
        title: "Research & project experience",
        items: [
          {
            role: "UX Researcher",
            org: "United States Department of Agriculture · Remote",
            dates: "Jan 2026 – Apr 2026",
            points: [
              "Lead usability testing with 10+ employees nationwide to identify interaction challenges and workflow inefficiencies.",
              "Conduct user interviews with 15+ importers, brokers, and government officials to evaluate search functionality and mobile experience for the USDA’s ACIR portal.",
              "Design and deploy surveys to assess findability and interpretive confidence across users.",
              "Collaborate weekly with 4 USDA stakeholders to uncover usability pain points in navigation, search filters, and help resources."
            ]
          },
          {
            role: "Student Representative",
            org: "Adobe Student Ambassador · Ann Arbor, MI",
            dates: "Jan 2026 – Current",
            points: [
              "Collecting and communicating student feedback to Adobe to inform campus initiatives and improve student experiences.",
              "Representing Adobe on campus by promoting Adobe Creative Cloud and Adobe Express to diverse student communities.",
              "Planning and hosting workshops, demos, and pop-up events to increase student engagement and adoption of Adobe tools.",
              "Serving as a peer resource, providing guidance and support to students learning Adobe tools."
            ]
          },
          {
            role: "UX Designer",
            org: "Milk & Froth Website Redesign",
            dates: "Jan 2026 – Mar 2026",
            points: [
              "Audited the brand’s homepage, About, and Find Pints pages and ran a competitive analysis of two local and two national ice cream brands across eight website features, such as online ordering, search, and store locator.",
              "Built the brand’s design system from the ground up in Figma, including color tokens, a type scale, buttons, and a component library, before designing any pages.",
              "Designed the location, e-commerce, and 404 pages in Figma and supported the rest of the site as one of two designers, delivering a responsive redesign for desktop and mobile.",
              "Mapped five pages in Figma wireframes with a shared header and footer and developed the visual identity for the brand."
            ]
          },
          {
            role: "UX Researcher",
            org: "Instructure · Ann Arbor, MI",
            dates: "Aug 2025 – Dec 2025",
            points: [
              "Built the case for ElevateED through UX research and AI-assisted prototyping in Figma Make, proposing inclusive, alternative education pathways to support Instructure’s expansion.",
              "Conducted stakeholder interviews, analyzed needs, and synthesized qualitative data to identify barriers in access, credentialing, and user experience for non-traditional learners.",
              "Collaborated cross-functionally with researchers, designers, and organization stakeholders to develop prototypes, affinity walls, and actionable design recommendations presented to over 180 students and corporate employees.",
              "Presented final deliverables to all stakeholders, including high-fidelity wireframes, to drive alignment with Instructure’s long-term strategic goals amid the rapidly evolving EdTech landscape."
            ]
          },
          {
            role: "UX Designer and Researcher",
            org: "Google UX Designer Course · Remote",
            dates: "Jul 2025 – Oct 2025",
            points: [
              "Developed a scheduling application called the “Crowning Calendar” through a comprehensive UX research and design process.",
              "Designed and executed an end-to-end UX research and design process for a scheduling/calendar app.",
              "Conducted 10+ structured interviews with consultants and clients across five states to identify key user pain points in time management and scheduling.",
              "Translated raw data into user personas, journey maps, and affinity diagrams, ensuring research-driven design outcomes.",
              "Developed and tested low-fidelity wireframes and prototypes in Figma, iterating based on usability feedback to improve task success rates."
            ]
          }
        ]
      },
      {
        title: "Work experience",
        items: [
          {
            role: "UX Research Intern",
            org: "Root Insurance · Remote",
            dates: "Jun 2026 – Aug 2026",
            points: [
              "Executed an end-to-end mixed-methods research strategy across 18 sessions, including 12 internal stakeholder interviews and 6 competitor policyholder interviews conducted via User Interviews and Lookback across key competitor cohorts.",
              "Evaluating Lookback session recordings via thematic coding and affinity mapping to create high-fidelity Customer Journey Maps, DIG-based personas, and a prioritized Retention Levers Matrix.",
              "Delivered three executive research readouts to cross-functional stakeholders, including the Director of Design and SVP of Product, presenting research progress, emerging insights, and strategic recommendations to align leadership on retention opportunities and product direction.",
              "Translated research insights into 15 net-new retention concepts in Figma, developing high-fidelity experience recommendations that addressed identified churn drivers and gave Product stakeholders tangible, research-backed opportunities for improving policyholder retention.",
              "Built a centralized research repository using Claude Code’s AI-powered development tools, enabling teams across the company to access user insights and inform product decisions."
            ]
          },
          {
            role: "UX Research Intern",
            org: "UK Digital Health Systems · Ann Arbor",
            dates: "Jun 2026 – Sep 2026",
            points: [
              "Conduct qualitative coding and thematic analysis in NVivo for a mixed-methods health equity study spanning 48 patient and staff interviews (29 patient, 19 staff) and insights from 130+ hours of ethnographic fieldwork examining UK primary care delivery.",
              "Execute Round 2 qualitative coding of staff interviews and field notes using a standardized research protocol, identifying patterns related to digital access, healthcare equity, patient experience, and “Remote by Default” primary care.",
              "Perform transcript verification and de-identification across sensitive healthcare research data, strengthening data accuracy, participant confidentiality, and research integrity prior to formal analysis.",
              "Apply structured codebooks and qualitative coding frameworks across 2 primary research data sources, interviews and ethnographic field notes, documenting coding decisions to improve consistency and reliability across researchers.",
              "Analyze evidence from a 48-interview research corpus to surface barriers and disparities in technology-enabled healthcare access, contributing qualitative findings to a broader mixed-methods research study and future academic publication.",
              "Used ChatGPT to analyze and summarize relevant published research on technology-enabled healthcare access, identifying key themes to support the study’s research context."
            ]
          },
          {
            role: "Technical/Corporate Recruiter",
            org: "Southwest Airlines · Dallas, TX",
            dates: "Jan 2023 – Jan 2025",
            points: [
              "Recruited and hired 12+ technical and revenue management roles across the U.S. with a 100% candidate acceptance rate, ensuring both organizational fit and positive candidate experience.",
              "Conducted stakeholder interviews with hiring managers and candidates to identify process pain points, using feedback to redesign recruitment workflows and enhance communication across teams.",
              "Designed and implemented organizational tracking tools that streamlined the hiring pipeline, improved recruiter efficiency by 25%, and delivered clearer visibility for team decision-making.",
              "Partnered cross-functionally with HR, immigration specialists, and global mobility teams to map employee onboarding workflows, improving usability and compliance for Green Card and immigration programs."
            ]
          },
          {
            role: "Technical Recruiter",
            org: "Meta · Dallas, TX",
            dates: "Nov 2021 – Nov 2022",
            points: [
              "Managed 50+ Software Engineering interns across 10 U.S. offices, coordinating onboarding, mentorship, and program evaluation.",
              "Partnered with sourcing, recruiting, and DEI teams to integrate diversity and equity strategies into internship pipelines, boosting URM representation.",
              "Delivered a 98% Candidate Review Score (CRS) by consistently monitoring candidate experience touchpoints.",
              "Exceeded hiring goals by 130% in the first 6 months, leveraging data analysis and customized recruiting strategies to improve conversion."
            ]
          },
          {
            role: "DEI Program Lead and University Talent Sourcer",
            org: "Adobe · Austin, TX",
            dates: "Jan 2020 – Nov 2021",
            points: [
              "Designed and launched Adobe’s first Diversity Talent Acquisition team, establishing scalable DEI recruiting strategies.",
              "Conducted qualitative and quantitative research to identify talent gaps and presented to the CEO; findings supported Adobe’s $3M donation to HBCUs/HSIs.",
              "Program-managed career readiness initiative for 70+ underrepresented students, resulting in 25 internship offers and global adoption of the model.",
              "Partnered with design teams to increase diverse UX design candidates by 200+, expanding pipelines for product and research roles.",
              "Created and facilitated training on diversity hiring and inclusive practices, attended by 500+ recruiters and hiring managers globally.",
              "Designed and delivered a 4-week Career Readiness Program that exceeded hiring goals by producing eight hires, achieved a 100% participant NPS, and was scaled for global adoption to increase underrepresented talent."
            ]
          },
          {
            role: "Recruiting Coordinator and Recruiting Sourcer",
            org: "Google (Onsite through Nelson) · Austin, TX",
            dates: "Aug 2017 – Mar 2019",
            points: [
              "Reviewed and sourced 800+ applications weekly across 7+ technical requisitions for Software Engineering Internship programs, generating 200+ offers extended and 100 hires accepted (50% conversion rate).",
              "Partnered with diversity teams to expand HBCU outreach by 40%, driving a 15% increase in underrepresented minority participation in the Engineering Practicum program.",
              "Coordinated 1,500+ interviews across 17 client groups and 33 offices, maintaining SLA compliance with 80%+ requests actioned within 24 hours.",
              "Received the Google Champ Award (2018) for advancing DEI initiatives and enhancing the candidate experience."
            ]
          }
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in UX Research and Design",
        school: "University of Michigan · Ann Arbor, MI",
        dates: "May 2027",
        detail: "GPA 4.00"
      },
      {
        degree: "Bachelor of Arts in Psychology",
        school: "Spelman College · Atlanta, GA",
        dates: "May 2017",
        detail: ""
      }
    ],
    coursework: [
      "Advanced Interactive Design",
      "Python",
      "UX Principles",
      "Generative Artificial Intelligence",
      "Web Design and Accessibility",
      "Advanced UX Research",
      "Graphic Design",
      "IoT and AR/VR"
    ],
    skills: {
      Research: ["Usability studies", "Interviews", "Surveys", "Personas", "Journey mapping", "Affinity mapping"],
      "Design & prototyping": ["Prototyping", "Figma", "Miro", "Adobe Photoshop"],
      "Code & data": ["Python", "R", "HTML", "CSS"],
      "AI tools": ["Claude", "ChatGPT", "Copilot", "Gemini"]
    }
  }
};
