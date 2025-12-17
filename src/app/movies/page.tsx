import MoviesClient from "./MoviesClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type RankedMovie = { rank: number; title: string; year: number };
type TMDBMovie = {
  title: string;
  name?: string; // for TV results
  overview: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string; // for TV
  vote_average?: number;
  id?: number;
};

const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

const rankedList: RankedMovie[] = [
  { rank: 1, title: "The Shawshank Redemption", year: 1994 },
  { rank: 2, title: "3 Idiots", year: 2009 },
  { rank: 3, title: "The Imitation Game", year: 2014 },
  { rank: 4, title: "Taare Zameen Par", year: 2007 },
  { rank: 5, title: "School of Rock", year: 2003 },
  { rank: 6, title: "Lagaan: Once Upon a Time in India", year: 2001 },
  { rank: 7, title: "Back to the Future", year: 1985 },
  { rank: 8, title: "Dilwale Dulhania Le Jayenge", year: 1995 },
  { rank: 9, title: "Super 30", year: 2019 },
  { rank: 10, title: "The Wolf of Wall Street", year: 2013 },
  { rank: 11, title: "Rocky", year: 1976 },
  { rank: 12, title: "12 Angry Men", year: 1957 },
  { rank: 13, title: "The Big Short", year: 2015 },
  { rank: 14, title: "Toy Story", year: 1995 },
  { rank: 15, title: "The Dark Knight", year: 2008 },
  { rank: 16, title: "The Martian", year: 2015 },
  { rank: 17, title: "The Prestige", year: 2006 },
  { rank: 18, title: "Padman", year: 2018 },
  { rank: 19, title: "Ford v Ferrari", year: 2019 },
  { rank: 20, title: "Jurassic Park", year: 1993 },
  { rank: 21, title: "The Last Dance", year: 2020 },
  { rank: 22, title: "A Bug's Life", year: 1998 },
  { rank: 23, title: "Tarzan", year: 1999 },
  { rank: 24, title: "Jo Jeeta Wohi Sikandar", year: 1992 },
  { rank: 25, title: "Before Sunrise", year: 1995 },
  { rank: 26, title: "Forrest Gump", year: 1994 },
  { rank: 27, title: "Pirates of Silicon Valley", year: 1999 },
  { rank: 28, title: "Super Size Me", year: 2004 },
  { rank: 29, title: "Monsters, Inc.", year: 2001 },
  { rank: 30, title: "Spotlight", year: 2015 },
  { rank: 31, title: "Dangal", year: 2016 },
  { rank: 32, title: "WarGames", year: 1983 },
  { rank: 33, title: "Andaaz Apna Apna", year: 1994 },
  { rank: 34, title: "1917", year: 2019 },
  { rank: 35, title: "Fight Club", year: 1999 },
  { rank: 36, title: "Pulp Fiction", year: 1994 },
  { rank: 37, title: "Se7en", year: 1995 },
  { rank: 38, title: "Bo Burnham: Inside", year: 2021 },
  { rank: 39, title: "Munna Bhai M.B.B.S.", year: 2003 },
  { rank: 40, title: "The Dark Knight Rises", year: 2012 },
  { rank: 41, title: "Rescue Dawn", year: 2006 },
  { rank: 42, title: "Bean", year: 1997 },
  { rank: 43, title: "The Truman Show", year: 1998 },
  { rank: 44, title: "Catch Me If You Can", year: 2002 },
  { rank: 45, title: "Good Will Hunting", year: 1997 },
  { rank: 46, title: "Steve Jobs", year: 2015 },
  { rank: 47, title: "Remember the Titans", year: 2000 },
  { rank: 48, title: "Argo", year: 2012 },
  { rank: 49, title: "Animal", year: 2023 },
  { rank: 50, title: "Chak De! India", year: 2007 },
  { rank: 51, title: "Zodiac", year: 2007 },
  { rank: 52, title: "Moon", year: 2009 },
  { rank: 53, title: "Dumb Money", year: 2023 },
  { rank: 54, title: "Indie Game: The Movie", year: 2012 },
  { rank: 55, title: "Klaus", year: 2019 },
  { rank: 56, title: "The Social Network", year: 2010 },
  { rank: 57, title: "A Beautiful Mind", year: 2001 },
  { rank: 58, title: "Office Space", year: 1999 },
  { rank: 59, title: "Gangs of Wasseypur", year: 2012 },
  { rank: 60, title: "Coco", year: 2017 },
  { rank: 61, title: "The Terminal", year: 2004 },
  { rank: 62, title: "Django Unchained", year: 2012 },
  { rank: 63, title: "Swades: We, the People", year: 2004 },
  { rank: 64, title: "Aladdin", year: 1992 },
  { rank: 65, title: "Training Day", year: 2001 },
  { rank: 66, title: "Spider-Man: Across the Spider-Verse", year: 2023 },
  { rank: 67, title: "Batman Begins", year: 2005 },
  { rank: 68, title: "Superbad", year: 2007 },
  { rank: 69, title: "The Empire Strikes Back", year: 1980 },
  { rank: 70, title: "Star Wars", year: 1977 },
  { rank: 71, title: "There Will Be Blood", year: 2007 },
  { rank: 72, title: "October Sky", year: 1999 },
  { rank: 73, title: "Before Midnight", year: 2013 },
  { rank: 74, title: "Jumanji", year: 1995 },
  { rank: 75, title: "Whiplash", year: 2014 },
  { rank: 76, title: "Hot Fuzz", year: 2007 },
  { rank: 77, title: "Memento", year: 2000 },
  { rank: 78, title: "Up in the Air", year: 2009 },
  { rank: 79, title: "Separation", year: 2011 },
  { rank: 80, title: "First Man", year: 2018 },
  { rank: 81, title: "Margin Call", year: 2011 },
  { rank: 82, title: "The Exorcist", year: 1973 },
  { rank: 83, title: "Sholay", year: 1975 },
  { rank: 84, title: "127 Hours", year: 2010 },
  { rank: 85, title: "The Pursuit of Happyness", year: 2006 },
  { rank: 86, title: "Cast Away", year: 2000 },
  { rank: 87, title: "The Lion King", year: 1994 },
  { rank: 88, title: "Donnie Darko", year: 2001 },
  { rank: 89, title: "A Quiet Place", year: 2018 },
  { rank: 90, title: "The Unbearable Weight of Massive Talent", year: 2022 },
  { rank: 91, title: "The Intouchables", year: 2011 },
  { rank: 92, title: "Silver Linings Playbook", year: 2012 },
  { rank: 93, title: "Ferris Bueller's Day Off", year: 1986 },
  { rank: 94, title: "The Batman", year: 2022 },
  { rank: 95, title: "District 9", year: 2009 },
  { rank: 96, title: "The Last King of Scotland", year: 2006 },
  { rank: 97, title: "The Substance", year: 2024 },
  { rank: 98, title: "Amar Akbar Anthony", year: 1977 },
  { rank: 99, title: "Animal Farm", year: 1954 },
  { rank: 100, title: "The Revenant", year: 2015 },
];

const pickBestMatch = (title: string, year: number, results: TMDBMovie[]): TMDBMovie | null => {
  if (!results?.length) return null;

  // Prefer exact year and fuzzy title match
  const normalized = title.trim().toLowerCase();
  const byYear = results.filter((m) => {
    const d = m.release_date || m.first_air_date || "";
    return d.startsWith(String(year));
  });
  const exact =
    byYear.find((m) => (m.title || m.name)?.trim().toLowerCase() === normalized) ||
    byYear.find((m) => (m.title || m.name)?.trim().toLowerCase().includes(normalized)) ||
    null;

  if (exact) return exact;

  // Fallback to best available
  return results[0] ?? null;
};

const overrides: Record<string, { searchType: "movie" | "tv" }> = {
  // The Michael Jordan doc is a TV miniseries on TMDB
  "the last dance|2020": { searchType: "tv" },
};

const fetchMovieDetails = async (
  title: string,
  year: number,
  searchType: "movie" | "tv" = "movie"
): Promise<TMDBMovie | null> => {
  const token = process.env.TMDB_READ_TOKEN;
  if (!token) return null;

  const url =
    searchType === "tv"
      ? `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
          title
        )}&first_air_date_year=${year}&language=en-US&page=1`
      : `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          title
        )}&year=${year}&language=en-US&page=1`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "force-cache",
    next: { revalidate: 60 * 60 * 24 }, // 1 day
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { results: TMDBMovie[] };
  return pickBestMatch(title, year, data.results || []);
};

const enrichMovies = async () => {
  const hasToken = Boolean(process.env.TMDB_READ_TOKEN);
  if (!hasToken) {
    return { hasToken, movies: rankedList.map((m) => ({ ...m, tmdb: null })) };
  }

  const movies = await Promise.all(
    rankedList.map(async (m) => {
      const key = `${m.title.trim().toLowerCase()}|${m.year}`;
      const override = overrides[key];
      const tmdb = await fetchMovieDetails(m.title, m.year, override?.searchType ?? "movie");
      return { ...m, tmdb };
    })
  );

  return { hasToken, movies };
};

export default async function MoviesPage() {
  const { movies } = await enrichMovies();

  const clientMovies = movies.map((movie: any) => {
    const tmdb = movie.tmdb as TMDBMovie | null;
    return {
      rank: movie.rank,
      title: tmdb?.title || tmdb?.name || movie.title,
      year: movie.year ?? tmdb?.release_date?.slice(0, 4) ?? "----",
      overview: tmdb?.overview || null,
      poster: tmdb?.poster_path ? `${TMDB_IMG}${tmdb.poster_path}` : null,
    };
  });

  return <MoviesClient movies={clientMovies} />;
}

