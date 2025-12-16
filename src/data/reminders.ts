export type Reminder = {
  id: number;
  slug: string;
  title: string;
  date: string;
  source?: string;
  tweet_url?: string;
  original?: string;
  tags: string[];
  body: string;
};

export const reminders: Reminder[] = [
  {
    "id": 2,
    "slug": "overcommunicate",
    "title": "Overcommunicate",
    "date": "2021-07-08",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1412912127774531590",
    "original": "It is always better to over-communicate than under-communicate.\n\nThings that are obvious to you may not be obvious to others, and vice versa.\n\nDon’t make assumptions, it leads to miscommunication.\n\nAnd remember:\n\nWriting things down > Not writing things down",
    "tags": [
      "communication",
      "clarity",
      "relationships"
    ],
    "body": "It’s almost always better to over-communicate than under-communicate.\n\nWhat’s obvious to you may not be obvious to others, and vice versa.\n\nAvoid assumptions. They are the root of most miscommunication."
  },
  {
    "id": 3,
    "slug": "control-the-inputs",
    "title": "Control the Inputs",
    "date": "2022-03-15",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1503765216345178118",
    "original": "You control the inputs, not the output.",
    "tags": [
      "effort",
      "stoicism",
      "mindset"
    ],
    "body": "You control the inputs, not the output.\n\nFocus on what you can do. The effort. The habits. The choices.\n\nLet the results take care of themselves."
  },
  {
    "id": 4,
    "slug": "see-the-world-clearly",
    "title": "See the World Clearly",
    "date": "2022-04-18",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1516003928365801477",
    "original": "Your ego prevents you from seeing the world, the way it actually is.\n\nWanna know more about how the world actually is?\n\nBe curious → Ask questions\n\nWhen people answer, try to really listen, rather than making everything about yourself.\n\nRepeat.",
    "tags": [
      "ego",
      "curiosity",
      "listening",
      "communication"
    ],
    "body": "Your ego distorts your view of the world.\n\nIf you want to see things as they really are, be curious. Ask questions.\n\nAnd when people answer, try to really listen.\n\nAvoid making everything about yourself."
  },
  {
    "id": 5,
    "slug": "correctness-over-speed",
    "title": "Correctness Over Speed",
    "date": "2022-05-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1522113888166334464",
    "original": "Always prioritize correctness over speed.",
    "tags": [
      "craft",
      "patience",
      "quality"
    ],
    "body": "Always prioritize correctness over speed."
  },
  {
    "id": 6,
    "slug": "be-yourself-so-others-can",
    "title": "Be Yourself So Others Can",
    "date": "2022-05-06",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1522477010681012224",
    "original": "When you are more yourself in an environment with other people → You give permission to other people to be more themselves",
    "tags": [
      "authenticity",
      "relationships",
      "connection"
    ],
    "body": "When you allow yourself to be more you around other people,\n\nyou give them permission to be more themselves too."
  },
  {
    "id": 7,
    "slug": "keep-your-word",
    "title": "Keep Your Word",
    "date": "2022-05-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1522103512200466432",
    "original": "Every time you say you’re going to do something to someone and then you end up not doing it → The trust that person has in you goes down",
    "tags": [
      "trust",
      "integrity",
      "relationships"
    ],
    "body": "Every time you tell someone you will do something and then you don’t do it,\n\ntheir trust in you goes down."
  },
  {
    "id": 8,
    "slug": "revisit-your-commitments",
    "title": "Revisit Your Commitments",
    "date": "2022-05-23",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1528724564917858304",
    "original": "Which things did you commit to a long time ago that you are still doing?\n\nEven if you don’t believe in it anymore? Even if it’s no longer fun? Even if you’re no longer learning?\n\nMake sure to ask yourself this every once in a while and adjust accordingly.",
    "tags": [
      "self-awareness",
      "reflection",
      "growth"
    ],
    "body": "Which things did you commit to a long time ago that you are still doing?\n\nEven if you don’t believe in it anymore?\n\nEven if it’s no longer fun?\n\nEven if you’re no longer learning?\n\nAsk yourself this every once in a while and adjust accordingly."
  },
  {
    "id": 9,
    "slug": "baseline-happiness",
    "title": "Baseline Happiness",
    "date": "2022-05-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1527374923462651914",
    "original": "No matter how many of your current desires come true → Your baseline happiness and mood will not change much\n\nThe attainment of a desire will make you excited for a short amount of time and then things will go back to baseline pretty fast.",
    "tags": [
      "happiness",
      "desire",
      "psychology"
    ],
    "body": "No matter how many of your desires come true, your baseline happiness will not change much.\n\nWhen you get what you want, you feel excited for a short time.\n\nThen things go back to baseline pretty fast."
  },
  {
    "id": 10,
    "slug": "do-then-talk",
    "title": "Do Then Talk",
    "date": "2022-05-27",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1529925491175567361",
    "original": "Do. Then talk.\n\nDon’t:\nTalk. Then Do.\n\nThe chances of you actually doing a thing you said you will do decreases if you talk about it first.",
    "tags": [
      "action",
      "discipline",
      "habits"
    ],
    "body": "Do. Then talk.\n\nDon’t:\nTalk. Then do.\n\nWhen you talk about something before you do it,\n\nthe chances of actually doing it go down."
  },
  {
    "id": 11,
    "slug": "write-things-down",
    "title": "Write Things Down",
    "date": "2022-06-01",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1531936116168970241",
    "original": "If you communicate something important to someone verbally and not in written form → Don’t expect them to remember it\n\nSimilarly, if someone asks something of you, either:\n- Ask them to write it down and send you\n- Write it down immediately yourself",
    "tags": [
      "communication",
      "clarity",
      "habits"
    ],
    "body": "If you communicate something important to someone verbally and not in writing,\n\ndon’t expect them to remember it.\n\nSimilarly, if someone asks something of you, either:\n- ask them to write it down and send it to you\n- or write it down yourself immediately"
  },
  {
    "id": 12,
    "slug": "not-every-idea-needs-to-scale",
    "title": "Not Every Idea Needs to Scale",
    "date": "2022-05-09",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1523609763963346945",
    "original": "Not every product idea needs to eventually become a company.",
    "tags": [
      "creativity",
      "entrepreneurship",
      "expectations"
    ],
    "body": "Not every product idea needs to become a company.\n\nIt is okay to build something just because you want to build it."
  },
  {
    "id": 13,
    "slug": "understand-your-investments",
    "title": "Understand Your Investments",
    "date": "2022-05-16",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1526129211949318145",
    "original": "If your investment strategy is: Put money in it now because it will “go up in the future” with no understanding of why and how. Then it’s a bad investment strategy.",
    "tags": [
      "investing",
      "judgment",
      "decision-making"
    ],
    "body": "If your investment strategy is to put money into something because it will “go up in the future,”\nwith no understanding of why or how,\nthen it is a bad investment strategy."
  },
  {
    "id": 14,
    "slug": "narratives-in-your-mind",
    "title": "Narratives In Your Mind",
    "date": "2022-05-24",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1529053394605953026",
    "original": "There are certain narratives that live inside your brain about certain people.\n\nThese narratives are so strong that even if new data comes to light that oppose the existing narrative, your brain will force it to support the narrative.",
    "tags": [
      "psychology",
      "perception",
      "self-awareness"
    ],
    "body": "There are certain narratives that live in your mind about certain people.\n\nThese narratives can be so strong that even when new information appears that contradicts them,\nyour mind will still try to force the new information to fit the narrative."
  },
  {
    "id": 15,
    "slug": "stay-calm-when-others-are-emotional",
    "title": "Stay Calm When Others Are Emotional",
    "date": "2022-06-02",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1532360687829274626",
    "original": "Just because someone is getting emotional while talking to you doesn’t mean that you also need to become emotional.\n\nTheir emotional response is probably due to a bunch of stuff that happened in the past, that may or may not, be related to you.",
    "tags": [
      "emotions",
      "communication",
      "relationships"
    ],
    "body": "Just because someone gets emotional while talking to you does not mean you also need to get emotional.\n\nTheir reaction is usually shaped by things that happened in the past,\nthings that may or may not be related to you."
  },
  {
    "id": 16,
    "slug": "listen-to-those-who-love-you",
    "title": "Listen To Those Who Love You",
    "date": "2022-05-07",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1522860298146832385",
    "original": "When people close to you criticize you, they are coming from a good place. They don’t want to belittle you.\n\nListen to them, because they see you from a unique perspective.\n\nTremendous growth awaits if you listen and start adapting yourself accordingly.",
    "tags": [
      "growth",
      "relationships",
      "humility"
    ],
    "body": "When people close to you criticize you, they are usually coming from a good place.\nThey don’t want to belittle you.\n\nListen to them. They see you from a different perspective.\n\nA lot of growth can happen if you listen and start adjusting yourself accordingly."
  },
  {
    "id": 17,
    "slug": "love-yourself-too",
    "title": "Love Yourself Too",
    "date": "2022-12-07",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1600444318904291329",
    "original": "Love yourself like you love your family and friends.",
    "tags": [
      "self-love",
      "compassion",
      "mindset"
    ],
    "body": "Love yourself the way you love your family and friends.",
  },
  {
    "id": 18,
    "slug": "design-for-real-behavior",
    "title": "Design For Real Behavior",
    "date": "2022-09-04",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1566512231675748355",
    "original": "Any product or service that requires the user to significantly change their behavior in order to use it is doomed to fail.",
    "tags": [
      "product",
      "design",
      "behavior"
    ],
    "body": "Any product or service that requires users to significantly change their behavior in order to use it is likely to fail.\n\nPeople don’t change their habits easily.\nDesign around this."
  },
  {
    "id": 19,
    "slug": "a-person-who-wants-to-grow",
    "title": "A Person Who Wants To Grow",
    "date": "2022-12-13",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1602557179881553922",
    "original": "There is nothing more beautiful than a person who wishes to grow.\n\nA person who wishes to learn from their past mistakes and try their best not to make the same mistakes again.\n\nBut is not afraid to make new mistakes.\n\nBecause that's the only way to grow.",
    "tags": [
      "growth",
      "mindset",
      "learning"
    ],
    "body": "There is nothing more beautiful than a person who wants to grow.\n\nSomeone who learns from their past mistakes and tries not to repeat them.\nSomeone who is not afraid to make new mistakes.\n\nBecause that is the only way to grow."
  },
  {
    "id": 20,
    "slug": "learning-beats-intelligence",
    "title": "Learning Beats Intelligence",
    "date": "2022-12-12",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1602230143245815808",
    "original": "It's not the smartest who win, it's the ones who can learn the fastest from their mistakes.\n\nIntelligence has an upper limit.\n\nGrowing through learning doesn’t.",
    "tags": [
      "learning",
      "growth",
      "mindset"
    ],
    "body": "It’s not the smartest people who win.\nIt’s the ones who learn the fastest from their mistakes.\n\nIntelligence has an upper limit.\nLearning doesn’t."
  }
]
