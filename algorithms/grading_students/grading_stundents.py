def roundToNearesMultiplier(x, base=5):
    return int(base * round(float(x)/base))

def verifyRounding(grade):
  if grade <= 37:
    return grade

  rounded_grade = roundToNearesMultiplier(grade)
  if rounded_grade > grade:
    return rounded_grade
  return grade

def gradingStudents(grades):
  return map(verifyRounding, grades)  

print(gradingStudents([73, 67, 38, 33]))