export type Clip = {
  slug: string;
  title: string;
  date: string;
  duration?: string;
  summary?: string;
  article?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  audioUrl?: string;
  transcriptUrl?: string;
  transcriptText?: string;
};

export const clips: Clip[] = [
  {
    slug: "how-i-started-coding-at-age-9-using-flash-and-actionscript",
    title: "How I Started Coding at Age 9 Using Flash and ActionScript",
    date: "2025-12-15",
    duration: "01:46",
    summary:
      "A quick story about getting into coding at nine years old through Flash and ActionScript, and how that early curiosity set the tone for everything after.",
    article:
      "I got my start on the early social web: Friendster and MySpace. You had to tweak HTML and CSS to make your profile look right, and that little bit of code pulled a lot of us in.\n\nAt nine I found Flash and ActionScript. It was one tool where you could make animations, tiny games, even full sites. There wasn’t much online, so I grabbed a couple of books and wrote simple scripts: click a button, jump to frame 50, play that part. It barely felt like programming, but it was code, and it made building things feel visual and doable.\n\nThat mix of art and interactivity is what hooked me on software, and I never really let go.",
    spotifyUrl: "https://open.spotify.com/episode/1TAogfWdEKmTkwNpsbb1Gq?si=ktaa4scyTzC-ulnx8RoCRA",
    youtubeUrl: "https://www.youtube.com/watch?v=Iuz83h4C0D8",
    audioUrl: "/clips/how-i-started-coding-at-age-9-using-flash-and-actionscript.m4a",
    transcriptUrl: "/clips/transcripts/how-i-started-coding-at-age-9-using-flash-and-actionscript.json",
    transcriptText:
      "Yeah. Uh, it was really, uh, cool Avi to hear that you started on Friendster, because I also remember Friendster and also MySpace. And that was the beginnings of social media. And then, of course, Mark Zuckerberg came in and then just destroyed everything. But I thought that was so nice back then, that to customize your profile you had to know a little bit of code.\n\nI thought that really taught a lot of that generation coding—an introduction to CSS, HTML, things like that, even a bit of JavaScript. So it's nice to hear that you're from that time. I also started around your age; I was a little bit younger, like nine years old or something. And I started in something called ActionScript, which probably not a lot of you have heard about.\n\nI'd be surprised if a lot of people know here. But there used to be something called Flash back in the day, and then it got replaced by JavaScript. But Flash was really interesting because you could kind of do anything in it. You had one program that one company owned and you could download it and make movies in it—animation films and websites and games and all sorts of things. It was a really interesting creative tool.\n\nAt the time I was very young, around nine years old, and I wanted to make my own little games and things like that. I was a big video game person. And so I remember picking up a book or two back then—there was very little stuff on the internet—and just writing some scripts. It was something like: you press this button and you go from this frame to frame number 50 and you play that portion of it. You couldn't really call it programming, but technically it was code.\n\nSo it kind of started like that in a very visual way. That was my beginning, a long time ago.",
  },
];

