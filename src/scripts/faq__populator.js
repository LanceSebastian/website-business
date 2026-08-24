const faqWebsites = [
    {
        question: "How long does it take the website to go from start to launch?",
        answer:
        "Most websites take 2–3 weeks, depending on complexity and the speed of content delivery."
    },
    {
        question: "Who owns the domain and hosting?",
        answer:
        "You own your domain. Subscription sites are hosted and managed by me. Lump-sum sites can be hosted wherever you choose, or managed by me if preferred."
    },
    {
        question: "Who owns the website once it’s built?",
        answer:
        "Lump-sum websites are fully owned by you once payment is complete. Subscription websites remain our property."
    },
    {
        question: "How do I request changes or updates?",
        answer:
        "You can request edits via email or text message."
    }
];

const faqPricing = [
    {
        question: "Is there an upfront cost?",
        answer:
        "For a monthly subscription website, there are no upfront costs. For a lump-sum website, a 50% down payment is required."
    },
    {
        question: "How long does the subscription last?",
        answer:
        "Subscription websites have a 6-month minimum term. This allows me to cover build costs while keeping monthly pricing affordable."
    },
    {
        question: "What happens if I cancel before the 6 months are up?",
        answer:
        "If you cancel before the 6 months, you will owe the remaining balance of the minimum term. Your website will still be up for the remainder of the term."
    },
    {
        question: "What happens if I cancel after the 6 months?",
        answer:
        "I will take the website offline unless you return to our services."
    },
    {
        question: "Can I rejoin later if I cancel?",
        answer:
        "Yes, of course! Your subscription will be restarted, and your site will be rebuilt if needed. Previous work may not always be kept, depending on how long it has been since it was done."
    },
    {
        question: "How do you handle late payments?",
        answer:
        "Late or non-payments result in a temporary suspension of the website. If payment isn’t resolved, the site may be taken down until the account is brought up to date."
    },
    {
        question: "What payment methods do you accept?",
        answer:
        "We send email invoices via Square with a secure payment link. Subscriptions and lump-sum payments are made by credit or debit card, and all major cards are accepted."
    },
    {
        question: "£50 per additional page — is that one time or monthly?",
        answer:
        "It’s a one-time fee per additional page."
    },
    {
        question: "Do you offer refunds?",
        answer:
        "If no agreed design direction is reached before development begins, payments may be refunded. Once development has started, payments are non-refundable. Any refunds after this point are at the Business’s discretion."
    }
];

const faqPlans = [
    {
        question: "What’s the difference between a lump sum and a subscription?",
        answer:
        "A lump-sum website is paid for upfront and fully owned by you, with £10/month hosting. A subscription spreads the cost monthly and includes hosting, maintenance, and support, but ownership remains with us."
    },
    {
        question: "After the 6-month minimum, do I keep paying?",
        answer:
        "Yes. Subscriptions are ongoing and continue monthly after the 6-month minimum unless cancelled."
    },
    {
        question: "Can I cancel after the subscription minimum has passed?",
        answer:
        "Yes. Once the minimum term has passed, you can cancel with notice."
    },
    {
        question: "If I cancel, what happens to my website?",
        answer:
        "For subscriptions, the website is taken offline after cancellation. Websites are stored for a limited period, but long-term retention is not guaranteed."
    },
    {
        question: "Is there an option to buy out and fully own the website?",
        answer:
        "There is currently no option to purchase or transfer ownership of subscription websites."
    },
    {
        question: "Can I add unlimited edits and support to the lump-sum package?",
        answer:
        "Yes. A £20/month add-on covers unlimited edits and support with a 6-month minimum commitment. It can’t be toggled on and off month-to-month."
    },
    {
        question: "Is SEO part of your packages?",
        answer:
        "Basic on-page SEO is included. Off-page SEO and advanced ongoing SEO services are not currently offered."
    },
    {
        question: "Do you offer e-commerce sites as part of the subscription plan?",
        answer:
        "No. E-commerce websites require significantly more work than a standard business website."
    },
    {
        question: "If I cancel my subscription, do I keep my domain?",
        answer:
        "Yes. You always own your domain."
    }
];

const faqSEO = [
    {
        question: "Can you get me to the front page in less than a month?",
        answer:
        "No. Rankings depend on competition, market size, and Google’s algorithms. Even when everything is done correctly, SEO takes time."
    },
    {
        question: "What exactly do you do for SEO?",
        answer:
        "This includes site structure, page speed optimisation, meta tags, headings, mobile optimisation, and basic keyword targeting."
    },
    {
        question: "How long does SEO take to show results?",
        answer:
        "SEO is a long-term process. Initial improvements may appear in weeks, but meaningful results usually take 3–6 months or longer."
    }
];

const faqTemplate = document.getElementById("faq__template");
const websitefaq = document.getElementById("faq__websites");
const pricingfaq = document.getElementById("faq__pricing");
const plansfaq = document.getElementById("faq__plans");
const seofaq = document.getElementById("faq__seo");

faqWebsites.forEach(faq => {
    const clone = faqTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = faq.question;
    clone.querySelector(".faq__answer").textContent = faq.answer;
    websitefaq.appendChild(clone);
});

faqPricing.forEach(faq => {
    const clone = faqTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = faq.question;
    clone.querySelector(".faq__answer").textContent = faq.answer;
    pricingfaq.appendChild(clone);
});

faqPlans.forEach(faq => {
    const clone = faqTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = faq.question;
    clone.querySelector(".faq__answer").textContent = faq.answer;
    plansfaq.appendChild(clone);
});

faqSEO.forEach(faq => {
    const clone = faqTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = faq.question;
    clone.querySelector(".faq__answer").textContent = faq.answer;
    seofaq.appendChild(clone);
});

/* FAQ Function */
document.querySelectorAll(`.faq__query`).forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle("active");
  })
});