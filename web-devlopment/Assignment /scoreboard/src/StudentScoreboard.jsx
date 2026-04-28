import { useState } from "react";

const PASS_MARK = 40;

const initialStudents = [
  { name: "Aman", score: 78 },
  { name: "Riya", score: 45 },
  { name: "Karan", score: 90 },
  { name: "Neha", score: 32 },
  { name: "hiii", score: 67 },
];

export default function StudentScoreboard() {
  const [students, setStudents] = useState(initialStudents);
  const [nameInput, setNameInput] = useState("");
  const [scoreInput, setScoreInput] = useState("");
  const [updateValues, setUpdateValues] = useState(
    initialStudents.map((s) => String(s.score))
  );

  const total = students.length;
  const passed = students.filter((s) => s.score >= PASS_MARK).length;
  const avg = total
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / total)
    : 0;

  function addStudent() {
    const name = nameInput.trim();
    const score = parseInt(scoreInput);
    if (!name || isNaN(score)) return;
    setStudents((prev) => [...prev, { name, score }]);
    setUpdateValues((prev) => [...prev, String(score)]);
    setNameInput("");
    setScoreInput("");
  }

  function deleteStudent(i) {
    setStudents((prev) => prev.filter((_, idx) => idx !== i));
    setUpdateValues((prev) => prev.filter((_, idx) => idx !== i));
  }

  function saveScore(i) {
    const val = parseInt(updateValues[i]);
    if (isNaN(val)) return;
    setStudents((prev) =>
      prev.map((s, idx) => (idx === i ? { ...s, score: val } : s))
    );
  }

  const styles = {
    wrap: {
      background: "#1a0a12",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Courier New', monospace",
      color: "#f9c6d8",
    },
    headerLabel: {
      color: "#f48fb1",
      fontSize: "11px",
      letterSpacing: "3px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "8px",
    },
    dash: {
      display: "inline-block",
      width: "24px",
      height: "2px",
      background: "#f48fb1",
    },
    mainTitle: {
      fontSize: "clamp(2rem, 6vw, 3.5rem)",
      fontWeight: 900,
      letterSpacing: "-1px",
      color: "#fff",
      fontFamily: "sans-serif",
      lineHeight: 1,
      marginBottom: "1px",
    },
    accent: { color: "#f48fb1" },
    divider: {
      border: "none",
      borderTop: "1px solid #3d1a2a",
      margin: "1.5rem 0",
    },
    registerBox: {
      background: "#2a1020",
      border: "1px solid #3d1a2a",
      borderRadius: "8px",
      padding: "1rem 1.25rem",
      marginBottom: "1.25rem",
    },
    regLabel: {
      fontSize: "10px",
      letterSpacing: "2px",
      color: "#f48fb1",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "0.75rem",
    },
    dot: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: "#f48fb1",
      display: "inline-block",
    },
    regInputs: { display: "flex" },
    input: {
      background: "#6d4157ff",
      border: "1px solid #3d1a2a",
      color: "#f9c6d8",
      padding: "0.7rem 1rem",
      fontFamily: "'Courier New', monospace",
      fontSize: "14px",
      outline: "none",
      flex: 1,
    },
    addBtn: {
      background: "#f48fb1",
      color: "#1a0a12",
      border: "none",
      padding: "0 1.5rem",
      fontFamily: "'Courier New', monospace",
      fontSize: "13px",
      fontWeight: 700,
      cursor: "pointer",
      borderRadius: "0 4px 4px 0",
      letterSpacing: "1px",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
      marginBottom: "1.25rem",
    },
    statCard: {
      background: "#2a1020",
      border: "1px solid #3d1a2a",
      borderRadius: "8px",
      padding: "1rem 1.25rem",
    },
    statLabel: {
      fontSize: "10px",
      letterSpacing: "2px",
      color: "#c06593ff",
      marginBottom: "6px",
    },
    statVal: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#f48fb1",
      fontFamily: "sans-serif",
    },
    tableBox: {
      background: "#2a1020",
      border: "1px solid #3d1a2a",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "1.5rem",
    },
    tableHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.75rem 1.25rem",
      borderBottom: "1px solid #3d1a2a",
    },
    tableTitle: { fontSize: "10px", letterSpacing: "2px", color: "#f48fb1" },
    colHeaders: {
      display: "grid",
      gridTemplateColumns: "2fr 1.2fr 1.2fr 2.8fr 0.6fr",
      padding: "0.5rem 1.25rem",
      borderBottom: "1px solid #3d1a2a",
    },
    colH: { fontSize: "10px", letterSpacing: "2px", color: "#b2869cff" },
    studentRow: (passed) => ({
      display: "grid",
      gridTemplateColumns: "2fr 1.2fr 1.2fr 2.8fr 0.6fr",
      alignItems: "center",
      padding: "0.85rem 1.25rem",
      borderBottom: "1px solid #3d1a2a",
      borderLeft: `3px solid ${passed ? "#ff6fa1f2" : "#f70101ff"}`,
    }),
    sName: { fontSize: "14px", color: "#f9c6d8" },
    sScore: {
      fontSize: "1.2rem",
      fontWeight: 700,
      fontFamily: "sans-serif",
      color: "#f9c6d8",
    },
    badgePass: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: "4px 10px",
      borderRadius: "4px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1px",
      background: "#1a2e1a",
      color: "#66bb6a",
      border: "1px solid #2e4f2e",
    },
    badgeFail: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: "4px 10px",
      borderRadius: "4px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1px",
      background: "#2e1a1a",
      color: "#e24b4a",
      border: "1px solid #4f2e2e",
    },
    updateCell: { display: "flex", alignItems: "center", gap: "8px" },
    updateInput: {
      background: "#1a0a12",
      border: "1px solid #3d1a2a",
      color: "#f9c6d8",
      padding: "5px 8px",
      fontFamily: "'Courier New', monospace",
      fontSize: "13px",
      width: "60px",
      borderRadius: "4px",
      outline: "none",
    },
    saveBtn: {
      background: "transparent",
      border: "1px solid #3d1a2a",
      color: "#eb90beff",
      padding: "5px 12px",
      fontFamily: "'Courier New', monospace",
      fontSize: "11px",
      cursor: "pointer",
      borderRadius: "4px",
      letterSpacing: "1px",
    },
    deleteBtn: {
      background: "transparent",
      border: "1px solid #3d1a2a",
      color: "#7a3558",
      width: "28px",
      height: "28px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "monospace",
    },
    footer: {
      textAlign: "center",
      fontSize: "10px",
      letterSpacing: "3px",
      color: "#3d1a2a",
      paddingTop: "0.5rem",
    },
  };

  return (
    <div style={styles.wrap}>
      
      <div style={styles.mainTitle}>
        STUDENT <span style={styles.accent}>SCOREBOARD</span>
      </div>
      <hr style={styles.divider} />

      {/* Register */}
      <div style={styles.registerBox}>
        <div style={styles.regLabel}>
          <span style={styles.dot}></span> Enter Student
          <span style={{ marginLeft: "auto", color: "#d38aaeff" }}>NEW ENTRY</span>
        </div>
        <div style={styles.regInputs}>
          <input
            style={{ ...styles.input, borderRight: "none", borderRadius: "4px 0 0 4px" }}
            placeholder="Student name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addStudent()}
          />
          <input
            style={{ ...styles.input, borderRight: "none", borderRadius: 0, maxWidth: "160px" }}
            type="number"
            placeholder="Score"
            value={scoreInput}
            onChange={(e) => setScoreInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addStudent()}
          />
          <button style={styles.addBtn} onClick={addStudent}>
            + ADD
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={styles.statsGrid}>
        {[["TOTAL STUDENT", total], ["PASSED", passed], ["AVG SCORE", avg]].map(([label, val]) => (
          <div key={label} style={styles.statCard}>
            <div style={styles.statLabel}>{label}</div>
            <div style={styles.statVal}>{val}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={styles.tableBox}>
        <div style={styles.tableHeader}>
          <span style={styles.tableTitle}>STUDENT RECORDS</span>
          <span style={{ fontSize: "12px", color: "#f48fb1" }}>{total} entries</span>
        </div>
        <div style={styles.colHeaders}>
          {["NAME", "SCORE", "STATUS", "UPDATE", "DEL"].map((h) => (
            <span key={h} style={styles.colH}>{h}</span>
          ))}
        </div>
        {students.map((s, i) => {
          const isPassed = s.score >= PASS_MARK;
          return (
            <div
              key={i}
              style={{
                ...styles.studentRow(isPassed),
                borderBottom: i === students.length - 1 ? "none" : "1px solid #3d1a2a",
              }}
            >
              <span style={styles.sName}>{s.name}</span>
              <span style={styles.sScore}>{s.score}</span>
              <span style={isPassed ? styles.badgePass : styles.badgeFail}>
                <span style={{ width: "6px", height: "6px", borderRadius: "10%", background: isPassed ? "#66bb6a" : "#e24b4a", display: "inline-block" }}></span>
                {isPassed ? "PASS" : "FAIL"}
              </span>
              <div style={styles.updateCell}>
                <input
                  style={styles.updateInput}
                  type="number"
                  value={updateValues[i]}
                  onChange={(e) => {
                    const copy = [...updateValues];
                    copy[i] = e.target.value;
                    setUpdateValues(copy);
                  }}
                />
                <button
                  style={styles.saveBtn}
                  onClick={() => saveScore(i)}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#f48fb1";
                    e.target.style.color = "#f48fb1";
                    e.target.style.boxShadow = "0 0 8px #f48fb1, 0 0 16px #f48fb155";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#3d1a2a";
                    e.target.style.color = "#7a3558";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  SAVE
                </button>
              </div>
              <button style={styles.deleteBtn} onClick={() => deleteStudent(i)} title="Delete">✕</button>
            </div>
          );
        })}
      </div>

      <div style={styles.footer}>ACADEMIC TERMINAL · SECURE SESSION</div>
    </div>
  );
}
