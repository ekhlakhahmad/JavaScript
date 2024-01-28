const student = [
    {
      studentId: "123456",
      name: "Alice Johnson",
      grades: {
        math: 95,
        english: 88,
        science: 92,
        history: 78
      }
    },
    {
      studentId: "789012",
      name: "Bob Smith",
      grades: {
        math: 85,
        english: 90,
        science: 78,
        history: 92
      }
    },
    {
      studentId: "345678",
      name: "Charlie Brown",
      grades: {
        math: 92,
        english: 94,
        science: 88,
        history: 85
      }
    },
    {
      studentId: "901234",
      name: "Diana Miller",
      grades: {
        math: 78,
        english: 85,
        science: 90,
        history: 88
      }
    },
    {
      studentId: "567890",
      name: "Eva Davis",
      grades: {
        math: 88,
        english: 92,
        science: 85,
        history: 94
      }
    }
  ]
  

const result = student.filter((res) => {
    return res.grades.math >= 80 && res.grades.english > 90 && res.grades.history > 90
})
console.log(result);