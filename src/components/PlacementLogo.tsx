
// Add your logo URLs below
const logos = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1920px-Accenture.svg.png?20241209170218" },
  { name: "Cisco", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/1920px-Cisco_logo.svg.png?20180706165012" },
  { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1920px-Infosys_logo.svg.png?20100302211036" },
  { name: "PwC", url: "https://1000logos.net/wp-content/uploads/2021/05/PwC-logo.png" },
  { name: "SAP", url: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/1920px-Cognizant_logo_2022.svg.png?20220319083105" },
  { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/1920px-Capgemini_201x_logo.svg.png?20191005030106" },
];

const PlacementLogos = () => (
  <section className="py-8 bg-background overflow-hidden">
    <div className="section-container mb-6">
      <p className="text-center text-black/70 text-sm font-medium uppercase tracking-widest">
        Top Companies Where Our Students Are Placed
      </p>
    </div>
    <div className="relative overflow-hidden">
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: 60, background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{ width: 60, background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-6 flex flex-col items-center justify-center h-20 w-24">
            <img
              src={logo.url}
              alt={logo.name}
              className="h-10 w-auto object-contain mb-2"
              loading="lazy"
              style={{ maxWidth: 80 }}
            />
            <span className="text-black/50 text-xs font-display font-bold whitespace-nowrap text-center">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlacementLogos;
