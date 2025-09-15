export default function StudentList() {
  const students = [
    { id: 1, name: "Harshitha", age: 20 },
    { id: 2, name: "Vasu", age: 22 },
    { id: 3, name: "Srujana", age: 21 },
    { id: 4, name: "Mahesh", age: 23 },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#ffffff", // white background
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          marginBottom: "25px",
          fontSize: "24px",
        }}
      >
        Student List
      </h2>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {students.map((student, index) => (
          <li
            key={student.id}
            style={{
              margin: "0",
              padding: "15px 25px",
              borderRadius: "12px",
              backgroundColor: "#f9f9f9", // light gray card
              color: "#333",
              fontWeight: "600",
              fontSize: "16px",
              minWidth: "180px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#e3f2fd"; // light blue on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#f9f9f9"; // revert to light gray
            }}
          >
            {student.name} <br /> (Age: {student.age})
          </li>
        ))}
      </ul>
    </div>
  );
}
