import { useState } from "react";
import "./App.css";

const PASS_MARK = 40;

const initialStudents = [
  { roll: "2501730042", name: "Tannu", course: "BCA", score: 78 },
  { roll: "2501730053", name: "Tushar", course: "BTech", score: 93 },
  { roll: "2501460034", name: "Nimesh", course: "BCA", score: 90 },
  { roll: "2501720020", name: "Pulkit", course: "BCom", score: 32 }
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);

  const [rollInput, setRollInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [courseInput, setCourseInput] = useState("");
  const [scoreInput, setScoreInput] = useState("");

  const [updateValues, setUpdateValues] = useState(
    initialStudents.map(s => String(s.score))
  );

  const total = students.length;
  const passed = students.filter(s => s.score >= PASS_MARK).length;

  const avg = Math.round(
    students.reduce((sum, s) => sum + s.score, 0) / students.length
  );

  function addStudent() {
    const roll = rollInput.trim();
    const name = nameInput.trim();
    const course = courseInput.trim();
    const score = parseInt(scoreInput);

    if (!roll || !name || !course || isNaN(score)) return;

    setStudents(prev => [
      ...prev,
      { roll, name, course, score }
    ]);

    setUpdateValues(prev => [
      ...prev,
      String(score)
    ]);

    setRollInput("");
    setNameInput("");
    setCourseInput("");
    setScoreInput("");
  }

  function deleteStudent(index) {
    setStudents(prev =>
      prev.filter((_, i) => i !== index)
    );

    setUpdateValues(prev =>
      prev.filter((_, i) => i !== index)
    );
  }

  function saveScore(index) {
    const val = parseInt(updateValues[index]);

    if (isNaN(val) || val < 0 || val > 100) return;

    setStudents(prev =>
      prev.map((s, i) =>
        i === index
          ? { ...s, score: val }
          : s
      )
    );
  }

  return (
    <div className="dashboard">

      <div className="leftPanel">
        <h1>
          STUDENT
          <span>SCOREBOARD</span>
        </h1>

        <div className="regLabel">
          <span className="dot"></span>
          Enter Student
          <span className="entryText">
            NEW ENTRY
          </span>
        </div>

        <div className="regInputs">

          <input
            placeholder="Roll Number"
            value={rollInput}
            onChange={e => setRollInput(e.target.value)}
          />

          <input
            placeholder="Student Name"
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
          />

          <input
            placeholder="Course"
            value={courseInput}
            onChange={e => setCourseInput(e.target.value)}
          />

          <input
            type="number"
            placeholder="Marks"
            value={scoreInput}
            onChange={e => setScoreInput(e.target.value)}
          />

          <button onClick={addStudent}>
            + ADD
          </button>

        </div>
      </div>



      <div className="rightPanel">

        <div className="statsGrid">
          <div className="statCard">
            <p>TOTAL</p>
            <h2>{total}</h2>
          </div>

          <div className="statCard">
            <p>PASSED</p>
            <h2>{passed}</h2>
          </div>

          <div className="statCard">
            <p>AVG</p>
            <h2>{avg}</h2>
          </div>
        </div>



        <div className="tableBox">

          <div className="tableHeader">
            <span>STUDENT RECORDS</span>
            <small>{total} entries</small>
          </div>


          <div className="colHeaders">
            <span>ROLL</span>
            <span>NAME</span>
            <span>COURSE</span>
            <span>SCORE</span>
            <span>STATUS</span>
            <span>UPDATE</span>
            <span>DEL</span>
          </div>


          {students.map((s, i) => {
            const isPassed = s.score >= PASS_MARK;

            return (
              <div
                key={i}
                className={`studentRow ${
                  isPassed ? "passRow" : "failRow"
                }`}
              >

                <div>{s.roll}</div>

                <div>{s.name}</div>

                <div>{s.course}</div>

                <div className="scoreBox">
                  {s.score}
                </div>


                <div>
                  <span
                    className={
                      isPassed
                        ? "badgePass"
                        : "badgeFail"
                    }
                  >
                    {isPassed ? "PASS" : "FAIL"}
                  </span>
                </div>



                <div className="updateCell">

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={updateValues[i]}
                    onChange={e => {
                      const copy = [...updateValues];
                      copy[i] = e.target.value;
                      setUpdateValues(copy);
                    }}
                  />

                  <button
                    className="saveBtn"
                    onClick={() => saveScore(i)}
                  >
                    SAVE
                  </button>

                </div>


                <div>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteStudent(i)}
                  >
                    ✕
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}