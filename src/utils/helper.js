import LottieThree from "../lottie/documents-layer.json"
import LottieOne from "../lottie/enterprise.json"
import LottieTwo from "../lottie/trade-layer.json"

export const HOW_WORKS = [
    {
        image: LottieOne,
        alt: 'Animation-one',
        description: 'Websites, documents and images are pushed into our Analysis API.',
    },

        {
        image: LottieTwo,
        alt: 'Animation-two',
        description:
            'Using highly optimized and trained AI models, we analyze, vectorize and extract semantic information and relations from your content.',
    },

    {
        image: LottieThree,
        alt: 'Animation-three',
        description:
            'Our enterprise-grade semantic search engine allows you to query your content in many ways. You’ll be amazed by the speed, precision and relevance of the results!',
    },

];


export const workItems = [
    {
        src: LottieOne,
        alt: 'Animation 1',
        description: "Websites, documents and images are pushed into our Analysis API."
    },
    
    {
        src: LottieTwo,
        alt: 'Animation 2',
        description: "Using highly optimized and trained AI models, we analyze, vectorize and extract semantic information and relations from your content."
    },

    {
        src: LottieThree,
        alt: 'Animation 3',
        description: "Our enterprise-grade semantic search engine allows you to query your content in many ways. You’ll be amazed by the speed, precision and relevance of the results!"
    }
];

export const SECURITY_DATA = [
    'SaaS => we provide the search infrastructure so you can focus on your applications',
    'Hosted in a Swiss datacenter by Microsoft',
];

export const HEADLESS_DATA = [
    'API-First / Headless => integrate seamlessly with your applications',
    'Combine data from multiple sources',
    'Push / Crawl => Your choice: Push your data to our APIs or let our crawlers crawl your content',
];

export const KEY_DATA = [
    'Let customers discover your content using AI-generated questions and answers',
    'Seamlessly integrated into the Semantic Search experience',
    'LLM-powered Question Answering',
];

export const ACCORDION_DATA = [
    {
        heading: 'Accordion Heading #one',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: ['/assets/images/webp/faq-one-image.webp',
            '/assets/images/webp/faq-image-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },

    {
        heading: 'Accordion Heading #two',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: ['/assets/images/webp/faq-one-image.webp',
            '/assets/images/webp/faq-image-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },

    {
        heading: 'Accordion Heading #three',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: [
            '/assets/images/webp/faq-one-image.webp',
            '/assets/images/webp/faq-image-two.webp',
        ],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },

    {
        heading: 'Accordion Heading #four',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        images: ['/assets/images/webp/faq-one-image.webp',
            '/assets/images/webp/faq-image-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
];


export const FORM_DATA = [
    { id: 'name', label: 'Name', placeholder: 'Name', required: true },
    { id: 'email', label: 'Email', placeholder: 'Email', required: true },
    { id: 'company', label: 'Company', placeholder: 'Company', required: true },
    { id: 'phone', label: 'Phone (optional)', placeholder: 'Phone (optional)', required: false },
];