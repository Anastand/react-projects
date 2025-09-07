---

### 📁 **Project Structure**

Your folder system was clean and scalable:

```
src/
├── components/     ← Reusable UI blocks (MovieCard)
├── pages/          ← Route-based pages (Home, MovieFetcher, Favourite)
├── contexts/       ← App-wide state (MovieContext)
├── services/       ← API logic (TMDB functions)
├── App.jsx         ← App routes + context provider
└── main.jsx        ← Entry point with React Router
```

✅ **Takeaway:** You separated concerns properly — **logic, UI, state, routes** all live in the right places.

---

### ⚛️ **React Core Concepts You Used**

| Concept        | How You Used It                                               |
| -------------- | ------------------------------------------------------------- |
| `useState`     | To manage movies, search input, and favorites                 |
| `useEffect`    | For loading popular movies on page load, syncing localStorage |
| `props`        | Passed single movie objects into `<MovieCard />`              |
| `map()`        | Rendered multiple `MovieCard`s from array of movie objects    |
| `fetch()`      | Called the TMDB API for popular movies + search               |
| `localStorage` | Saved/retrieved favorites persistently                        |
| `useContext`   | Global favorites state with `MovieContext`                    |

---

### 🧠 **State & Props — Key Clarification**

```js
const [movies, setMovies] = useState([]);
```

* `movies` = list of movie objects from the API
* Inside `.map()`, you get `movie` (singular) for each item
* You pass it as a **prop**: `<MovieCard movie={movie} />`
* In `MovieCard`: `function MovieCard({ movie }) { ... }`

✅ **Takeaway:** Naming matters. Use singular for a single object, plural for lists. It avoids confusion and bugs.

---

### 📦 **MovieCard Component**

A reusable visual card showing:

* Poster
* Title
* Release date
* ❤️ Favorite button

It receives **one movie object** via props and uses `useMovieContext()` to:

* Check if it's a favorite (`isFav(movie.id)`)
* Add/remove from favorites on click

✅ **Takeaway:** You kept `MovieCard` dumb and clean. It doesn’t care where the data comes from — just receives it and reacts.

---

### 🧠 **MovieContext**

You built global state using `Context API`:

* Stored all favorites in one place
* Gave every component access via `useMovieContext()`
* Synced favorites with `localStorage`

#### Important Functions:

| Function          | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `addToFav(movie)` | Adds movie to favorites                   |
| `removeFav(id)`   | Removes movie from favorites              |
| `isFav(id)`       | Checks if a movie is already in favorites |

✅ **Takeaway:** `Context + localStorage` = app-wide persistence without external tools.

---

### 🌐 **API Layer (services/api.js)**

You followed best practices:

* Moved API logic out of components
* Separated `getPopularMovies()` and `searchMovies(query)`
* Used `encodeURIComponent()` safely in query strings

✅ **Takeaway:** Separating API logic makes your code clean, testable, and scalable.

---

### 🧭 **Routing**

Using `react-router-dom`, you had multiple pages:

* `/` → Home
* `/movie` → Movie search
* `/fav` → Favorite list
* `/count` → Toy counter page

✅ **Takeaway:** Each route got its own file, kept tidy, and loaded only its own logic.

---

### 🧼 **Other Good Practices**

| Thing                    | You Did Well                                     |
| ------------------------ | ------------------------------------------------ |
| Component splitting      | MovieCard, Favourite page, etc.                  |
| Handling empty states    | "No favorites found" condition                   |
| Use of `key` in `.map()` | Prevented React render bugs                      |
| Console logging          | Used effectively for debugging (then cleaned up) |

---

## 🧠 Mental Models You Now Understand

1. **“State drives UI”**
   → When `movies` or `favorites` change, the UI updates automatically

2. **“Props are how components talk”**
   → `MovieCard` doesn’t own any data — it just displays what it’s given

3. **“Context avoids prop drilling”**
   → You don't have to pass `favorites` or handlers through multiple layers

4. **“Map turns arrays into components”**
   → 1 array of 20 movies = 20 components rendered on the page

5. **“localStorage + useEffect = persistent state”**
   → Save once, reload app, still there

---

## 🧱 What You’re Ready For Now

| Skill                   | You can now\...                             |
| ----------------------- | ------------------------------------------- |
| Build APIs              | Create projects that fetch real data        |
| Global state            | Manage shared state using context           |
| Component design        | Split into clean, reusable components       |
| Deployment              | Use Vercel to host production-ready apps    |
| Build without tutorials | Ask for logic help, but write your own code |

---

## 🔁 If You Ever Forget…

Here’s how you can remind yourself:

* **How to use `.map()`?**
  Go look at how you rendered `<MovieCard movie={movie} />`

* **How did we connect context?**
  Check how `MovieContext` is set up and wrapped in `App.jsx`

* **How did we call TMDB API?**
  Look inside `services/api.js` — cleanly written functions

* **How did we pass a movie to a component?**
  From `.map()` to `<MovieCard />` to `props`

---

## ✅ Final Thought

You didn’t just build a movie app. You learned:

* API integration
* State management
* Prop flow
* Component design
* Routing
* Global state
* Persistence
