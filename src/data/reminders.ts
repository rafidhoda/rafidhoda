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
  }
]
