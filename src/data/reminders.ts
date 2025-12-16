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
    "body": "You control the inputs, not the output.\n\nFocus on what you can do. The effort. The habits. The choices.\nLet the results take care of themselves."
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
    "body": "Your ego distorts your view of the world.\n\nIf you want to see things as they really are, be curious. Ask questions.\n\nAnd when people answer, try to really listen.\nAvoid making everything about yourself."
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
    "body": "When you allow yourself to be more you around other people,  \nyou give them permission to be more themselves too."
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
    "body": "Every time you tell someone you will do something and then you don’t do it,  \ntheir trust in you goes down."
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
    "body": "Which things did you commit to a long time ago that you are still doing?\n\nEven if you don’t believe in it anymore?  \nEven if it’s no longer fun?  \nEven if you’re no longer learning?\n\nAsk yourself this every once in a while and adjust accordingly."
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
    "body": "No matter how many of your desires come true, your baseline happiness will not change much.\n\nWhen you get what you want, you feel excited for a short time.  \nThen things go back to baseline pretty fast."
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
    "body": "Do. Then talk.\n\nDon’t:  \nTalk. Then do.\n\nWhen you talk about something before you do it,  \nthe chances of actually doing it go down."
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
    "body": "If you communicate something important to someone verbally and not in writing,  \ndon’t expect them to remember it.\n\nSimilarly, if someone asks something of you, either:  \n- ask them to write it down and send it to you  \n- or write it down yourself immediately"
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
    "body": "If your investment strategy is to put money into something because it will “go up in the future,”  \nwith no understanding of why or how,  \nthen it is a bad investment strategy."
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
    "body": "There are certain narratives that live in your mind about certain people.\n\nThese narratives can be so strong that even when new information appears that contradicts them,  \nyour mind will still try to force the new information to fit the narrative."
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
    "body": "Just because someone gets emotional while talking to you does not mean you also need to get emotional.\n\nTheir reaction is usually shaped by things that happened in the past,  \nthings that may or may not be related to you."
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
    "body": "When people close to you criticize you, they are usually coming from a good place.  \nThey don’t want to belittle you.\n\nListen to them. They see you from a different perspective.\n\nA lot of growth can happen if you listen and start adjusting yourself accordingly."
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
    "body": "Love yourself the way you love your family and friends."
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
    "body": "Any product or service that requires users to significantly change their behavior in order to use it is likely to fail.\n\nPeople don’t change their habits easily.  \nDesign around this."
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
    "body": "There is nothing more beautiful than a person who wants to grow.\n\nSomeone who learns from their past mistakes and tries not to repeat them.  \nSomeone who is not afraid to make new mistakes.\n\nBecause that is the only way to grow."
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
    "body": "It’s not the smartest people who win.  \nIt’s the ones who learn the fastest from their mistakes.\n\nIntelligence has an upper limit.  \nLearning doesn’t."
  },
  {
    "id": 21,
    "slug": "consider-you-might-be-wrong",
    "title": "Consider You Might Be Wrong",
    "date": "2022-12-16",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1603496780544761857",
    "original": "What if you’re wrong and everyone else is right?\n\nAlways consider that scenario. Deeply and seriously.\n\nThere’s usually a very good reason why things are the way they are in the world.",
    "tags": [
      "humility",
      "perspective",
      "reflection"
    ],
    "body": "What if you’re wrong and everyone else is right?\n\nAlways consider that possibility. Take it seriously.\n\nThere is usually a good reason why things are the way they are in the world."
  },
  {
    "id": 22,
    "slug": "do-it-now",
    "title": "Do It Now",
    "date": "2022-12-22",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1605915082688544769",
    "original": "If you do it now, you won’t have to do it later.",
    "tags": [
      "discipline",
      "habits",
      "productivity"
    ],
    "body": "If you do it now, you won’t have to do it later."
  },
  {
    "id": 23,
    "slug": "you-are-good-enough",
    "title": "You Are Good Enough",
    "date": "2022-09-20",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1572309557463982088",
    "original": "You are good enough. There is nothing you must do in the future to prove yourself.\n\nYou have done things in the past that you regret. Everyone does. Forgive yourself, learn from your mistakes and keep on moving.\n\nYou have one life. Have as much fun as you can",
    "tags": [
      "self-compassion",
      "mindset",
      "forgiveness"
    ],
    "body": "You are good enough. You don’t need to achieve anything in the future to prove your worth.\n\nYou’ve done things you regret. Everyone has.  \nForgive yourself, learn from them, and keep going.\n\nYou get one life.  \nHave as much fun as you can."
  },
  {
    "id": 24,
    "slug": "dont-give-unsolicited-advice",
    "title": "Don’t Give Unsolicited Advice",
    "date": "2022-11-12",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1591431781571600385",
    "original": "Don't give unsolicited advice.",
    "tags": [
      "communication",
      "relationships",
      "boundaries"
    ],
    "body": "Don’t give unsolicited advice.  \nMost people aren’t looking for solutions — they’re looking to be understood."
  },
  {
    "id": 25,
    "slug": "be-ok-with-disappointing-people",
    "title": "Be OK With Disappointing People",
    "date": "2022-11-27",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1596807391256911873",
    "original": "You must learn how to be ok with disappointing people.",
    "tags": [
      "boundaries",
      "self-growth",
      "expectations"
    ],
    "body": "You have to learn how to be okay with disappointing people.  \nIt’s impossible to live your life and please everyone at the same time."
  },
  {
    "id": 26,
    "slug": "ask-for-help",
    "title": "Ask For Help",
    "date": "2022-12-02",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1598619508335321088",
    "original": "There is nothing braver than asking for help. Do it as much as you can. It has always helped you.",
    "tags": [
      "vulnerability",
      "support",
      "growth"
    ],
    "body": "There is nothing braver than asking for help.  \nDo it as often as you need.  \nIt has always helped you."
  },
  {
    "id": 27,
    "slug": "problems-are-everywhere",
    "title": "Problems Are Everywhere",
    "date": "2022-12-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1604797015170375680",
    "original": "Looking for project ideas?\n\nGo out into the world and talk to people.\n\nProblems are everywhere.",
    "tags": [
      "creativity",
      "ideas",
      "building"
    ],
    "body": "Looking for project ideas?\n\nGo out into the world and talk to people.  \nProblems are everywhere."
  },
  {
    "id": 28,
    "slug": "direction-over-perfection",
    "title": "Direction Over Perfection",
    "date": "2022-12-28",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1607846497659281408",
    "original": "There is no best or worst.\n\nThere is only better or worse.\n\nWhat’s most important is to always move in the right direction.",
    "tags": [
      "mindset",
      "improvement",
      "progress"
    ],
    "body": "There is no “best” or “worst.”  \nThere’s only better or worse.\n\nWhat matters most is moving in the right direction."
  },
  {
    "id": 29,
    "slug": "everything-will-be-fine",
    "title": "Everything Will Be Fine",
    "date": "2022-07-16",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1548310824787226624",
    "original": "Always remember that everything will (eventually) be fine.\nIt always has and it always will be.",
    "tags": [
      "mindset",
      "calm",
      "perspective"
    ],
    "body": "Everything will be fine eventually.  \nIt always has been, and it always will be."
  },
  {
    "id": 30,
    "slug": "say-the-obvious",
    "title": "Say the Obvious",
    "date": "2022-08-01",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1554028570779033600",
    "original": "Don't not say something just because it seems obvious to you. Every human being has a different brain and life experience.\n\nWhat's obvious to you can be very profound and insightful to another person.",
    "tags": [
      "communication",
      "empathy",
      "perspective"
    ],
    "body": "Say things even if they feel obvious to you.  \nEveryone has a different brain and a different life experience.\n\nWhat feels obvious to you might be profound or eye-opening to someone else."
  },
  {
    "id": 31,
    "slug": "people-dont-think-about-you-that-much",
    "title": "People Don't Think About You That Much",
    "date": "2022-12-10",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1601493688764764161",
    "original": "How much did you think about people other than yourself today? It's reasonable to assume that that's exactly how much other people think about you.",
    "tags": [
      "perspective",
      "mindset",
      "ego"
    ],
    "body": "How much did you think about other people today?  \nThat's probably about the same amount they thought about you.\n\nMost people are too busy thinking about themselves."
  },
  {
    "id": 32,
    "slug": "you-vs-you",
    "title": "You vs You",
    "date": "2022-12-28",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1608172010386997253",
    "original": "You vs you. Always.\n\nComparing yourself to anyone other than yourself is a great way to feel miserable.\n\nLearn from others, but don’t compare.",
    "tags": [
      "mindset",
      "self-growth",
      "comparison"
    ],
    "body": "You vs you. Always.\n\nComparing yourself to anyone else is one of the fastest ways to feel miserable.\n\nLearn from others, but don't compare."
  },
  {
    "id": 33,
    "slug": "direct-your-jealousy",
    "title": "Direct Your Jealousy",
    "date": "2023-12-03",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1731080973096247314",
    "original": "Jealous of the success of others?\n\nDirect your jealousy towards the effort that person put in to achieve the success you're jealous of",
    "tags": [
      "mindset",
      "emotions",
      "discipline"
    ],
    "body": "Jealous of someone else's success?\n\nAim that jealousy at the effort they put in to get there.  \nRespect the work, not the outcome."
  },
  {
    "id": 34,
    "slug": "compare-hours-not-results",
    "title": "Compare Hours, Not Results",
    "date": "2023-12-02",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1731034846187634886",
    "original": "Comparing yourself to your peers?\n\nand feeling that you're far behind?\n\nComparing yourself to others is not a good idea\n\nBut if you're gonna compare something\n\nMake it fair:\n\nCompare the number of hours spent on the thing\n\n- How many hours have they put in during their lifetime?\n- How many have you?",
    "tags": [
      "comparison",
      "mindset",
      "self-growth"
    ],
    "body": "Comparing yourself to your peers and feeling behind?\n\nComparing yourself to others is never a good idea.  \nBut if you're going to compare something, make it fair.\n\nCompare the number of hours put into the thing.\n\nHow many hours have they put in over their lifetime?  \nHow many have you?"
  },
  {
    "id": 35,
    "slug": "listen-beneath-the-words",
    "title": "Listen Beneath the Words",
    "date": "2023-12-03",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1731087994315280739",
    "original": "Talking to someone?\n\nDon't focus on the words\n\nFocus on where the words are coming from",
    "tags": [
      "communication",
      "empathy",
      "listening"
    ],
    "body": "Talking to someone?\n\nDon't focus on the words.  \nFocus on where the words are coming from."
  },
  {
    "id": 36,
    "slug": "care-about-the-problem-not-the-credit",
    "title": "Care About the Problem, Not the Credit",
    "date": "2023-12-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1732000303602360387",
    "original": "Care that an important\n\nproblem gets solved\n\nDon’t care that you\n\nsolve that important problem",
    "tags": [
      "mindset",
      "ego",
      "teamwork"
    ],
    "body": "Care that an important problem gets solved.  \nDon't care that you are the one who solves it."
  },
  {
    "id": 37,
    "slug": "ask-instead-of-explain",
    "title": "Ask Instead of Explain",
    "date": "2023-12-09",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1733455649176985652",
    "original": "Trying to explain something to someone?\n\nIt's very very difficult\n\nBecause there are so many things in the brain\n\nthat have to line up exactly\n\nfor someone to get what you're talking about\n\nSo a better approach I've found\n\nIs to just ask questions\n\nRather than explain",
    "tags": [
      "communication",
      "learning",
      "clarity"
    ],
    "body": "Trying to explain something to someone?\n\nIt's hard. Really hard.  \nThere are so many things in the brain that need to line up for someone to truly understand what you mean.\n\nA better approach?  \nAsk questions instead of explaining."
  },
  {
    "id": 38,
    "slug": "end-meetings-early",
    "title": "End Meetings Early",
    "date": "2023-12-06",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1732395384545181950",
    "original": "Remember\n\nA 45 min meeting\n\nCan end after 11 mins\n\nIf there is nothing more to discuss\n\nThere is no rule that says\n\nyou HAVE to go on for 45 mins",
    "tags": [
      "work",
      "productivity",
      "time"
    ],
    "body": "Remember this:\n\nA 45 minute meeting can end after 11 minutes.  \nIf there is nothing more to talk about, you can stop.  \nThere is no rule that says you must keep going just because the calendar said 45 minutes."
  },
  {
    "id": 39,
    "slug": "be-a-cheerleader",
    "title": "Be a Cheerleader",
    "date": "2023-12-06",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1732332695076647266",
    "original": "Reminder to myself:\n\nForget about being a \"leader\"\n\nInstead\n\nBecome the best cheerleader\n\nFor everyone in your life:\n- parents\n- kids\n- family\n- friends\n- partner\n- students\n- teachers",
    "tags": [
      "leadership",
      "relationships",
      "support"
    ],
    "body": "Forget about being a “leader.”\n\nBe the best cheerleader instead.\n\nCheer for the people in your life.  \nYour parents. Your kids. Your family.  \nYour friends. Your partner.  \nYour students. Your teachers.\n\nEveryone needs someone in their corner."
  },
  {
    "id": 40,
    "slug": "keep-improving-yourself",
    "title": "Keep Improving Yourself",
    "date": "2023-12-15",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1735573132428165450",
    "original": "All good advice boils down to this:\n\nContinuously work on improving yourself\n\nBecause if you do that for long enough\n\nAll the things you want\n\nWill come to you",
    "tags": [
      "growth",
      "self-improvement",
      "patience"
    ],
    "body": "All good advice eventually points to one thing:\n\nKeep improving yourself.\n\nIf you do that long enough, the things you want will come to you.  \nThey always do."
  },
  {
    "id": 41,
    "slug": "your-title-doesnt-matter",
    "title": "Your Title Doesn’t Matter",
    "date": "2023-12-13",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1734878202521174290",
    "original": "You know who cares the most about your title at work?\n\nYou\n\nNo one else cares about your title\n\nThey care about the work you produce\n\nand that you're a joy to work with",
    "tags": [
      "work",
      "career",
      "mindset"
    ],
    "body": "You know who cares the most about your title at work?\n\nYou.\n\nNo one else cares about your title.  \nThey care about the work you do,  \nand that you're someone they enjoy working with."
  },
  {
    "id": 42,
    "slug": "work-in-progress",
    "title": "A Work in Progress",
    "date": "2023-12-16",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1735956226482049179",
    "original": "You’re always gonna be\n\nA work in progress",
    "tags": [
      "growth",
      "mindset",
      "self"
    ],
    "body": "You’re always going to be a work in progress.\n\nAnd that’s exactly how it should be."
  },
  {
    "id": 43,
    "slug": "exponential-growth",
    "title": "Exponential Growth",
    "date": "2023-12-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1737016111319695483",
    "original": "Exponential growth is one of the foundational laws\nof our universe\n\nWhat does that mean for us?\n\nThe people that put in just 30% more effort every day\n(in the right direction)\nCompared to everyone else\n\nWill after 10 years\n\nGet rewarded 1,000,000 times\nmore than the average person",
    "tags": [
      "growth",
      "effort",
      "longterm"
    ],
    "body": "Exponential growth is real. It’s one of the fundamental laws of the universe.\n\nSo what does that mean for you?\n\nIf you consistently put in just a bit more effort than most people — in the right direction —  \nthat small edge compounds.\n\nGive it 10 years.\n\nThe rewards are not a little better.  \nThey’re massively better.  \nOrders of magnitude better."
  },
  {
    "id": 44,
    "slug": "their-limits-not-yours",
    "title": "Their Limits Are Not Yours",
    "date": "2023-12-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1737064996146643026",
    "original": "When someone tells you:\n\n\"I don’t believe you can do that\"\n\nJust remember\n\nThey are actually saying:\n\n\"I don’t believe I can do that\"\n\nDon’t get angry or frustrated :)",
    "tags": [
      "mindset",
      "confidence",
      "perspective"
    ],
    "body": "When someone says  \n\"I don’t believe you can do that\"\n\nWhat they really mean is  \n\"I don’t believe I can do that\"\n\nSo don’t get angry.  \nDon’t get frustrated.  \nTheir limits are not your limits."
  },
  {
    "id": 45,
    "slug": "dont-hold-me-to-old-versions",
    "title": "Don’t Hold Me to Old Versions of Myself",
    "date": "2023-12-22",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1738112773500875004",
    "original": "\"But you said 10 years ago that...\"\n\nWait!\n\nYou’re gonna hold to what I said to you\n\n10 years ago?\n\nPlease hold me to what I told you yesterday\n\nBecause I’m a completely different person now\n\nCompared to 10 years ago",
    "tags": [
      "growth",
      "change",
      "identity"
    ],
    "body": "\"But you said that 10 years ago...\"\n\nWait.\n\nYou’re really going to hold me to something I said  \n10 years ago?\n\nHold me to what I said yesterday.  \nNot to who I was a decade ago.\n\nBecause I’m a completely different person now."
  },
  {
    "id": 46,
    "slug": "self-sacrifice-last-resort",
    "title": "Self Sacrifice Should Be The Last Resort",
    "date": "2023-02-06",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1622562478994382854",
    "original": "Self-sacrifice should be the last resort.\n\nDon't self-sacrifice by default.",
    "tags": [
      "boundaries",
      "relationships",
      "mindset"
    ],
    "body": "Self sacrifice should be the last resort.  \nDo not self sacrifice by default."
  },
  {
    "id": 47,
    "slug": "your-response-matters",
    "title": "Your Response Matters More Than the Mistake",
    "date": "2023-12-23",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1738466227528290630",
    "original": "It's not the fuckup that gets you into trouble\n\nIt's your response to the fuckup\nthat gets you into trouble",
    "tags": [
      "mindset",
      "responsibility",
      "growth"
    ],
    "body": "It’s not the mistake that gets you into trouble.\n\nIt’s how you respond to the mistake  \nthat gets you into trouble."
  },
  {
    "id": 48,
    "slug": "it-is-ok-to-mess-up",
    "title": "It Is Ok To Mess Up",
    "date": "2023-02-11",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1624156681482428437",
    "original": "It’s ok to fuck up.\n\nEveryone does that all the time.\n\nIt’s the only way you know to live.\n\nJust remember that when you do fuck up that you make it right with all\nthe people that were affected as a result of your fuck up.\n\nStart with apologizing.",
    "tags": [
      "mistakes",
      "growth",
      "relationships"
    ],
    "body": "It is ok to mess up.  \nEveryone does. It is part of being alive.\n\nJust make it right with the people who were affected.  \nStart by apologizing."
  },
  {
    "id": 49,
    "slug": "your-default-response",
    "title": "Your Default Response Matters",
    "date": "2023-12-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1737119359540273539",
    "original": "If someone tells you something\n\nand your response is always a:\n\nWorrying and explosive response\n\nThen people will stop telling you\n\nImportant things\n\nNot because they want to lie to you\n\nBut because they can’t deal\n\nwith your default response",
    "tags": [
      "communication",
      "relationships",
      "self-awareness"
    ],
    "body": "If your default response is worry or explosions  \npeople will eventually stop telling you important things.\n\nNot because they want to hide anything  \nbut because they can’t handle your reaction."
  },
  {
    "id": 50,
    "slug": "tiny-daily-improvements",
    "title": "Tiny Daily Improvements",
    "date": "2023-01-28",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1619290578621177857",
    "original": "If you improve just 0.1% every day for 10 years you'll be:\n\n38 times better than when you started.\n\nNow, if you improved 0.2% every day for those 10 years in the end you'll be:\n\n1 469 better than when you started.",
    "tags": [
      "compounding",
      "habits",
      "growth"
    ],
    "body": "Tiny daily improvements add up in ways that feel impossible in the moment.\n\nIf you get just a little better every day the compounding will take care of the rest."
  },
  {
    "id": 51,
    "slug": "two-seconds-of-laughter",
    "title": "Two Seconds of Laughter",
    "date": "2023-12-24",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1738927066236543329",
    "original": "It's crazy how much you can do in this life\n\nIf you're ok with other people\n\nlaughing at you for 2 seconds",
    "tags": [
      "courage",
      "mindset",
      "self-growth"
    ],
    "body": "You can do so much in this life  \nif you're ok with people laughing at you  \nfor two seconds."
  },
  {
    "id": 52,
    "slug": "focus-on-yourself",
    "title": "Focus on Yourself",
    "date": "2023-01-09",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1612179690663604225",
    "original": "Here’s how you change other peoples behaviors:\n\nYou don’t.\n\nFocus on yourself.",
    "tags": [
      "mindset",
      "relationships",
      "self-growth"
    ],
    "body": "You cannot change other people's behavior.  \nYou can only change your own.\n\nSo focus on yourself."
  },
  {
    "id": 53,
    "slug": "how-long-have-you-tried",
    "title": "How Long Have You Tried?",
    "date": "2023-12-25",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1739018867614101707",
    "original": "\"I'm just not born to do that... so why even try?\"\n\nOh really?\n\nSo how long have you been trying, exactly?\n\n1 day?\n1 week?\n1 month?\n1 year?\n2 years?\n5 years?\n10 years?",
    "tags": [
      "persistence",
      "mindset",
      "growth"
    ],
    "body": "\"I'm just not born to do that... so why try?\"\n\nOh really?\n\nHow long have you actually been trying?\n\nOne day?  \nOne week?  \nOne month?  \nA year?  \nTwo years?  \nFive?  \nTen?\n\nMost people never even give themselves a real chance."
  },
  {
    "id": 54,
    "slug": "life-is-struggle",
    "title": "Life Is Struggle",
    "date": "2023-02-08",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1623242204192944134",
    "original": "Reminder to myself:\n\nLife is struggle.\n\nAs you grow you will solve current problems, but those problems will be replaced with new problems.\n\nAccept this and try to enjoy the ride as much as you can :)",
    "tags": [
      "life",
      "acceptance",
      "growth"
    ],
    "body": "Life is struggle.  \nAs you grow, you’ll solve the problems you have now, but new ones will replace them.\n\nAccept this, and try to enjoy the ride as much as you can."
  },
  {
    "id": 55,
    "slug": "dont-try-to-win-arguments",
    "title": "Don't Try to Win Arguments",
    "date": "2023-02-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1622220390813650945",
    "original": "Reminder to myself:\n\nArguments are usually won by those that can speak in a more eloquent way.\n\nDon't be fooled by this.\n\nIn fact, don't even try to win arguments.\n\nIt's not worth it.\n\nYou literally don't get anything for it, except for wasted time.",
    "tags": [
      "communication",
      "mindset",
      "calm"
    ],
    "body": "Arguments are usually won by the person who speaks more eloquently.  \nDon’t be fooled by that.\n\nDon’t try to win arguments.  \nIt’s not worth it.  \nAll you get is wasted time."
  },
  {
    "id": 56,
    "slug": "dont-judge-skill-too-early",
    "title": "Don't Judge Your Skill Too Early",
    "date": "2023-01-28",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1619244890092863492",
    "original": "Reminder to myself:\n\nNew rule.\n\nYou're not allowed to judge your ability to do something before you've done that thing for at least a year.\n\nTry it out for a year, then decide if you want to label yourself as \"good\" or \"bad\" at it.",
    "tags": [
      "learning",
      "growth",
      "patience"
    ],
    "body": "New rule.  \nYou’re not allowed to judge your ability at something until you’ve done it for at least a year.\n\nDo it for a year.  \nThen decide if you’re “good” or “bad” at it."
  },
  {
    "id": 57,
    "slug": "document-your-projects",
    "title": "Document Your Projects",
    "date": "2023-02-03",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1621472210253758465",
    "original": "Reminder to myself:\n\nAfter completing a project, make sure to document it in some way.\n\nHowever small.\n\nThis way, in 10 years when your brain goes\n\n\"What do I have to show for that project I worked on?\"\n\nyou'll have that thing to look back at.",
    "tags": [
      "productivity",
      "creativity",
      "reflection"
    ],
    "body": "After you finish a project, document it.  \nIt can be tiny. It can be rough. Just capture something.\n\nBecause in 10 years, when your brain goes  \n“What do I have to show for that thing I worked on?”  \nyou’ll have something real to look back at."
  },
  {
    "id": 58,
    "slug": "be-shameless-about-learning",
    "title": "Be Shameless About Learning",
    "date": "2023-02-08",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1623346773925285889",
    "original": "Reminder to myself:\n\nBe shameless about learning from other people.\n\nDoesn’t matter the person’s age, gender, ethnicity, money, intelligence,\ntalents, physical appearance, whatever.\n\nIf someone else knows something that you don’t then learn it from them\nand make your life better.",
    "tags": [
      "learning",
      "humility",
      "growth"
    ],
    "body": "Be shameless about learning from other people.  \nAge, background, money, intelligence, appearance... none of it matters.\n\nIf someone knows something you don’t, learn it from them.  \nSteal the insight. Upgrade your life."
  },
  {
    "id": 59,
    "slug": "success-is-freedom",
    "title": "Success Is Freedom",
    "date": "2023-01-20",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1616513907933474817",
    "original": "Reminder to myself:\n\nIn your pursuit of success make sure to not imprison yourself.\n\nIf you get what you always wanted but you are miserable as a result,\nthen you lost.\n\nTrue success is freedom to choose how and with whom you get to spend\nyour limited time on this earth.",
    "tags": [
      "success",
      "freedom",
      "life"
    ],
    "body": "In your pursuit of success, make sure you do not trap yourself.  \nIf you get everything you thought you wanted but end up miserable, that is not success.\n\nReal success is freedom.  \nFreedom to choose how you spend your time  \nand who you spend it with."
  },
  {
    "id": 60,
    "slug": "income-is-a-lagging-indicator",
    "title": "Income Is a Lagging Indicator",
    "date": "2023-02-09",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1623426013806862341",
    "original": "Reminder to myself:\n\nDon’t worry at all about your salary amount.\n\nEspecially don’t compare with others.\n\nYour income is a lagging indicator of what you’ve spent the last 5 years doing.",
    "tags": [
      "money",
      "mindset",
      "comparison"
    ],
    "body": "Do not worry about your salary.  \nAnd do not compare it with anyone else.\n\nYour income is a lagging indicator  \nof what you have been doing for the last five years."
  },
  {
    "id": 61,
    "slug": "be-how-you-are",
    "title": "Be How You Are",
    "date": "2023-02-04",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1621837814424895490",
    "original": "Reminder to myself:\n\nHuman beings mirror each other unconsciously.\n\nBut remember, if you're sad and you're talking to a happy person you don't need to fake being happy.\n\nAlso, if you're happy and you're talking to a sad person you don't need to fake being sad.",
    "tags": [
      "emotions",
      "authenticity",
      "communication"
    ],
    "body": "People mirror each other without realizing it.\n\nBut remember this:  \nIf you are sad and talking to a happy person, you do not need to pretend to be happy.  \nAnd if you are happy and talking to a sad person, you do not need to pretend to be sad.\n\nJust be how you are."
  },
  {
    "id": 62,
    "slug": "dont-live-on-autopilot",
    "title": "Do Not Live on Autopilot",
    "date": "2023-02-09",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1623659298327756800",
    "original": "Reminder to myself:\n\nNothing great will happen if you live your life on autopilot.",
    "tags": [
      "intentionality",
      "focus",
      "discipline"
    ],
    "body": "Nothing great will happen if you live your life on autopilot."
  },
  {
    "id": 63,
    "slug": "you-were-once-bad-at-it",
    "title": "You Were Once Bad at It",
    "date": "2023-02-01",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1620705081459875842",
    "original": "Reminder to myself:\n\nEverything you're good at now, you were once shitty at.\n\nDon't forget this fact as you continue to age.",
    "tags": [
      "growth",
      "learning",
      "patience"
    ],
    "body": "Everything you're good at now was something you were once bad at.\n\nRemember that as you get older.  \nGrowth never stops, and every skill begins at zero."
  },
  {
    "id": 64,
    "slug": "feelings-are-valid",
    "title": "Feelings Are Valid",
    "date": "2023-02-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1622162726708551681",
    "original": "Reminder to myself:\n\nFeelings are never invalid.\n\nExpress those feelings in a safe environment and go on from there.",
    "tags": [
      "emotions",
      "mental-health",
      "self-awareness"
    ],
    "body": "Your feelings are never invalid.\n\nFind a safe place to express them.  \nLet them out.  \nThen move forward from there."
  },
  {
    "id": 65,
    "slug": "do-what-makes-sense-to-you",
    "title": "Do What Makes Sense to You",
    "date": "2023-01-31",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1620463672295591937",
    "original": "Reminder to myself:\n\nAlways strive to do things in a way that make sense to you.\n\nEven if it takes longer.",
    "tags": [
      "process",
      "clarity",
      "self-trust"
    ],
    "body": "Always do things in a way that makes sense to you.\n\nEven if it takes longer.  \nThe extra time is worth it when the process feels right."
  },
  {
    "id": 66,
    "slug": "same-team",
    "title": "Same Team",
    "date": "2023-01-21",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1616726765027889153",
    "original": "You and your life partner are on the same team.\n\nRemember this whenever you find yourself in an argument.",
    "tags": [
      "relationships",
      "mindset",
      "communication"
    ],
    "body": "You and your life partner are on the same team.\n\nRemember this when you find yourself in an argument."
  },
  {
    "id": 67,
    "slug": "look-at-their-life",
    "title": "Look At Their Life",
    "date": "2023-01-08",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1612065589534642176",
    "original": "Before taking someone’s advice, look at their life.\n\nAre they the type of person you want to be more like?\n\nThat’ll give you a lot more useful information than any specific advice they give you.",
    "tags": [
      "wisdom",
      "decision-making",
      "mindset"
    ],
    "body": "Before you take someone's advice, look at their life.\n\nAre they living in a way you want to move toward?\n\nThat will tell you more than the advice itself."
  },
  {
    "id": 68,
    "slug": "better-or-worse",
    "title": "Better Or Worse",
    "date": "2022-12-28",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1607846497659281408",
    "original": "There is no best or worst.\n\nThere is only better or worse.\n\nWhat’s most important is to always move in the right direction.",
    "tags": [
      "mindset",
      "growth",
      "direction"
    ],
    "body": "There is no best or worst.\n\nThere is only better or worse.\n\nWhat matters most is that you keep moving in the right direction."
  },
  {
    "id": 69,
    "slug": "dont-repeat-mistakes",
    "title": "Don't Repeat Mistakes",
    "date": "2022-12-31",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1609207064898768896",
    "original": "Strive to not make the same mistake twice.\n\nIf you do you become truly dangerous.",
    "tags": [
      "learning",
      "growth",
      "mindset"
    ],
    "body": "Try not to make the same mistake twice.\n\nIf you do that consistently, you become truly dangerous."
  },
  {
    "id": 70,
    "slug": "focus-on-the-doing",
    "title": "Focus on the Doing",
    "date": "2023-01-27",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1618936821815341058",
    "original": "The only thing that’s under your control is the doing part.\n\nDo with as much attention as possible.\n\nAfter that leave everything else to the universe to take care of.",
    "tags": [
      "mindfulness",
      "effort",
      "control"
    ],
    "body": "The only thing that’s truly under your control is the doing part.\n\nDo it with as much attention as you can.\n\nAfter that, let the universe take care of the rest."
  },
  {
    "id": 71,
    "slug": "problems-are-everywhere-2",
    "title": "Problems Are Everywhere",
    "date": "2022-12-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1604797015170375680",
    "original": "Looking for project ideas?\n\nGo out into the world and talk to people.\n\nProblems are everywhere.",
    "tags": [
      "creativity",
      "problem-solving",
      "ideas"
    ],
    "body": "Looking for project ideas?\n\nGo out into the world and talk to people.\n\nProblems are everywhere."
  },
  {
    "id": 72,
    "slug": "work-when-excitement-fades",
    "title": "Work When the Excitement Fades",
    "date": "2022-12-31",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1609217311981899776",
    "original": "Ideas should be worked on when the initial excitement of getting the idea has completely worn off.\n\nIn most cases, you'll find that you don't even want to spend time on the idea that made you so excited just a little while ago.",
    "tags": [
      "creativity",
      "ideas",
      "discipline"
    ],
    "body": "Work on an idea only after the initial excitement fades.\n\nIn most cases, once the hype dies down, you will not even want to work on the idea that felt exciting just a little while ago.\n\nThat alone tells you whether it is worth pursuing."
  },
  {
    "id": 73,
    "slug": "put-yourself-into-your-work",
    "title": "Put Yourself Into Your Work",
    "date": "2023-01-27",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1618913815999184896",
    "original": "In whatever you create...\nput as much of yourself into it as possible.",
    "tags": [
      "creativity",
      "authenticity",
      "craft"
    ],
    "body": "In whatever you create, put as much of yourself into it as you can.\n\nYour perspective and your voice are what make the work meaningful."
  },
  {
    "id": 74,
    "slug": "people-arent-thinking-about-you",
    "title": "People Aren't Thinking About You",
    "date": "2023-01-14",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1614241652293652480",
    "original": "It’s tempting to think “what will other people think?” every now and then.\n\nBut the reality is that everyone is self obsessed.\n\nJust think about, how much time do you spend thinking about others?",
    "tags": [
      "mindset",
      "confidence",
      "perspective"
    ],
    "body": "It’s easy to wonder what other people think of you.\n\nBut the truth is that most people are too busy thinking about themselves.\n\nAsk yourself: how much time do you really spend thinking about others?\n\nNot much.  \nSo stop worrying so much about what they think."
  },
  {
    "id": 75,
    "slug": "passion-for-learning",
    "title": "Passion for Learning",
    "date": "2023-01-10",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1612745144557604864",
    "original": "Having a passion for one thing is good.\n\nBut what is even better is to have a passion for learning.\n\nHaving a passion for learning new things will lead you to making connections between things you thought were unrelated.\n\nDoing this consistently over time makes the brain a learning machine.\n\nThe deeper you go into things, the more you'll realise how everything is related to everything else.\n\nUltimately this is the more fun way to live life.\n\nYou'll never be bored!",
    "tags": [
      "learning",
      "curiosity",
      "mindset"
    ],
    "body": "Having a passion for one thing is good.\n\nBut having a passion for learning is even better.\n\nWhen you stay curious, you start seeing connections between things you once thought were unrelated.\n\nDo this consistently and your brain becomes a learning machine.\n\nThe deeper you go, the more you realise how everything connects.\n\nIt’s a more fun way to live.  \nYou’ll never be bored."
  },
  {
    "id": 76,
    "slug": "start-with-the-smallest-step",
    "title": "Start With the Smallest Step",
    "date": "2023-01-12",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1613618009360437248",
    "original": "Whatever \"big\" thing it is that you want to do in the future...\n\nFigure out the smallest step towards that and start today.",
    "tags": [
      "action",
      "progress",
      "momentum"
    ],
    "body": "Whatever big thing you want to do in the future, break it down.\n\nFind the smallest step toward it and start today."
  },
  {
    "id": 77,
    "slug": "put-it-into-the-world",
    "title": "Put It Into the World",
    "date": "2024-04-05",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1775983686615290108",
    "original": "The reality is that it is close to impossible to know if something will work or not before you put it out into the world\n\nBefore that, the thing exists just in your imagination",
    "tags": [
      "creation",
      "uncertainty",
      "action"
    ],
    "body": "You can’t really know if something will work  \nuntil you put it out into the world.\n\nBefore that, it only exists in your head.\n\nAnd ideas that stay there never get tested."
  },
  {
    "id": 78,
    "slug": "enjoy-the-doing",
    "title": "Enjoy the Doing",
    "date": "2024-04-11",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1778438823602458680",
    "original": "If you’re only working hard on things because of the expectation of future success then you’ll be disappointed\n\nBecause success or failure is completely outside of your control\n\nYou have to find enjoyment in the daily doing of things",
    "tags": [
      "process",
      "work",
      "mindset",
      "fulfillment"
    ],
    "body": "If you only work hard  \nbecause you expect future success,  \nyou will end up disappointed.\n\nSuccess and failure are outside your control.\n\nYou have to find enjoyment  \nin the daily act of doing the work."
  },
  {
    "id": 79,
    "slug": "salary-vs-value",
    "title": "Salary vs Value",
    "date": "2024-04-21",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1782023421087395926",
    "original": "A salary programs your brain to believe that you will always get paid as long as you show up and put in the hours\n\nNothing wrong with that\n\nBut remember\n\nIn the real world\n\nA business only makes money when it sells something of value to a customer",
    "tags": [
      "work",
      "money",
      "business",
      "mindset"
    ],
    "body": "A salary trains your brain  \nto believe you will always get paid  \nas long as you show up and put in the hours.\n\nThere is nothing wrong with that.\n\nBut remember.\n\nIn the real world,  \na business only makes money  \nwhen it sells something of value  \nto a customer."
  },
  {
    "id": 80,
    "slug": "call-you-out",
    "title": "People Who Call You Out",
    "date": "2023-10-26",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1717511192300724697",
    "original": "Surround yourself with people that are not afraid to call you out on your bullshit",
    "tags": [
      "growth",
      "relationships",
      "honesty",
      "self-awareness"
    ],
    "body": "Surround yourself with people  \nwho are not afraid to call you out  \non your bullshit.\n\nThose are the people  \nwho actually care about your growth."
  },
  {
    "id": 81,
    "slug": "control-posting",
    "title": "Control Posting",
    "date": "2023-10-21",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1715736666650910722",
    "original": "What you don’t control:\n- Followers\n- Likes\n- Reposting\n- Engagement\n- Reach\n\nWhat you control:\n- Posting",
    "tags": [
      "focus",
      "consistency",
      "creation",
      "mindset"
    ],
    "body": "What you do not control  \nFollowers  \nLikes  \nReposts  \nEngagement  \nReach  \n\nWhat you do control  \nPosting  \n\nThat is the whole game."
  },
  {
    "id": 82,
    "slug": "commit-after-deciding",
    "title": "Commit After Deciding",
    "date": "2023-10-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1714975796316495988",
    "original": "Take your time to make a decision if you need to\n\nBut once you’ve decided\n\nCommit 100%",
    "tags": [
      "decisions",
      "commitment",
      "focus",
      "discipline"
    ],
    "body": "Take your time to make a decision if you need to.\n\nBut once you decide  \nCommit 100%."
  },
  {
    "id": 83,
    "slug": "when-the-world-is-burning",
    "title": "When the World Feels Like It’s Burning",
    "date": "2023-10-19",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1714748528654688318",
    "original": "What do you do when it feels like the world is burning?\n\nContinue doing what you normally do with even more focus\n\nWork, sleep, eat, exercise, rest, spend time with people you love\n\nTake care of yourself and those around you",
    "tags": [
      "focus",
      "resilience",
      "grounding",
      "mental-health"
    ],
    "body": "What do you do when it feels like the world is burning?\n\nContinue doing what you normally do, with even more focus.\n\nWork.  \nSleep.  \nEat.  \nExercise.  \nRest.  \nSpend time with people you love.\n\nTake care of yourself and those around you."
  },
  {
    "id": 84,
    "slug": "think-out-loud",
    "title": "Think Out Loud",
    "date": "2023-10-18",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1714587022378074542",
    "original": "Whenever you're in a meeting trying to solve a problem\n\nYou should always \"think out loud\"\n\nThis makes it easier for everyone else to understand how you're thinking\n\nAnd it gives others the opportunity to correct you where you're wrong",
    "tags": [
      "communication",
      "teamwork",
      "problem-solving",
      "work"
    ],
    "body": "Whenever you are in a meeting trying to solve a problem, think out loud.\n\nIt makes it easier for others to understand how you are thinking.\n\nIt also gives them the opportunity to correct you where you are wrong."
  },
  {
    "id": 85,
    "slug": "automate-after-understanding",
    "title": "Automate After Understanding",
    "date": "2023-10-16",
    "source": "twitter",
    "tweet_url": "https://x.com/rafidhoda/status/1713873086049595643",
    "original": "Only automate a task when you've done it many times before\n\nYou need to understand all parts of the task before you can comfortably outsource it to technology\n\nOtherwise, you'll create a mess that you'll need to clean up and it'll end up taking longer anyway",
    "tags": [
      "automation",
      "productivity",
      "systems",
      "work"
    ],
    "body": "Only automate a task after you have done it many times yourself.\n\nYou need to understand every part of the task before you can comfortably outsource it to technology.\n\nOtherwise, you will create a mess that you will need to clean up later, and it will end up taking longer anyway."
  }
]
