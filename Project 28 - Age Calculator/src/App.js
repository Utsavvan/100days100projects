import { createRoot } from "react-dom/client";
import { useState } from "react";

const App = () => {
  const today = getTodayDate();
  const [birthDate, setBirthDate] = useState(0);
  const [year,setYear] = useState(0);

  function getTodayDate() {
    const date = new Date();
    const todayDate = date.getDate();
    const todayMonth = date.getMonth() + 1;
    const todayYear = date.getYear() + 1900;
    return `${todayYear}-${todayMonth}-${todayDate}`;
  }

  function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    a = new Date(a);
    b = new Date(b);

    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  function handleClick() {
    const dateDiff = dateDiffInDays(birthDate, today);
    const years = Math.floor(dateDiff / 365) + 1;
    setYear(years);
  }

  return (
    <>
      <form action="">
        <label htmlFor="birthdate">Enter your date of birth</label>
        <input
          type="date"
          name="birthdate"
          id=""
          value={birthDate}
          onInput={(e) => setBirthDate(e.target.value)}
        />
      </form>
      <button onClick={handleClick}>Submit</button>
      <div className="year">
        {year!==0 && <b>Your Age is {year}</b>}
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
