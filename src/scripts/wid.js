const content = [
  {
    // Hands
    icon: "fa-handshake",
    title: "Hands-free Websites",
    text: `Your time is valuable. That's why we handle all 
    development and maintenance matters for you, so you can 
    focus on what you do best: running your business.`
  },
  {
    // Design / business
    icon: "fa-paintbrush",
    title: "Tailored to your Vision",
    text: `Coded from scratch, tailored to your brand. We 
    collaborate closely during the design phase to understand 
    your goals and bring your unique vision to life.`
  },
  {
    // Infinite / Design
    icon: "fa-infinity",
    title: "Unlimited Edits",
    text: `Businesses need to move fast to stay ahead of 
    changing trends and demands. After launch, we offer 
    unlimited edits — image changes, content rewrites, or 
    information updates — to keep your website up to speed.`
  },
  {
    // search
    icon: "fa-magnifying-glass",
    title: "SEO Integrated",
    text: `Websites aren't just for humans. We stay up to date 
    with ever-changing SEO strategies, including AI-friendly 
    techniques, to give you the best chance of attracting 
    more visitors.`
  },
  {
    // world
    icon: "fa-earth-americas",
    title: "Global Support",
    text: `Owl Vision is based in the UK, but the internet has 
    no borders. We're always happy and able to help, whether 
    you're a neighbour or in a neighbouring country.`
  },
  {
    // phone
    icon: "fa-mobile-screen",
    title: "Mobile-First Design",
    text: `63% of internet use comes from mobile phones. Owl 
    Vision follows a mobile-first design philosophy to ensure 
    your visitors get the best possible first impression, no 
    matter what platform they browse with.`
  },
];

const servicesTemplate = document.getElementById("wid__services-template");
const services = document.getElementById("services");

content.forEach(step => {
  const tpl = servicesTemplate.content.cloneNode(true);
  tpl.querySelector("i").classList.add(step.icon);
  tpl.querySelector("h3").textContent = step.title;
  tpl.querySelector("p").textContent = step.text;
  services.appendChild(tpl);
});
