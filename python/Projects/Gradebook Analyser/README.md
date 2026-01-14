# GradeBook Analyzer

GradeBook Analyzer is a Python console application for managing and analyzing student marks and grades.

# Output

ENTERING MARKS AND CSV FILE HANDLING

<img width="703" height="400" alt="Screenshot 2025-11-05 at 1 03 26 PM" src="https://github.com/user-attachments/assets/40e97882-bf0d-43e0-8e2f-ba5c403f80fb" />

<img width="667" height="399" alt="Screenshot 2025-11-05 at 1 05 17 PM" src="https://github.com/user-attachments/assets/14b79f01-a95e-46e2-b044-f77711344f7c" />

## Features

- Enter student names and marks manually.
- Load student marks from a CSV file.
- Calculate average, median, maximum, and minimum marks.
- Assign letter grades (A, B, C, D, F) based on marks.
- Count the number of students in each grade category.
- Determine pass/fail status for students.
- Display a formatted report card with names, marks, and grades.

## Usage

1. Run the `gradebook.py` script.
2. Choose an option from the menu:
   - `1`: Enter student names and marks manually.
   - `2`: Load marks from a CSV file (e.g., `student_marks.csv`).
   - `3`: Exit the program.
3. If entering marks manually, type the student name and mark. Type `done` to finish.
4. After loading or entering marks, the program will analyze the data and display:
   - Average, median, max, and min marks.
   - Grade distribution counts.
   - List of students who passed and failed.
   - Report card listing each student's name, marks, and grade.
5. Press ENTER to return to the menu.

## CSV File Format

The CSV file should have two columns without a header row:
- Student name
- Student mark (integer between 0 and 100)

Example:
Kirti,78
Palak,92
Ridhima,54
Aishu,81
Agrima,39
Ronak,66
Tani,99

## Requirements

- Python 3.x
- Uses Python's built-in `csv` module.

## Example Output

Welcome to GradeBook Analyzer

Enter Student names and marks

Load marks from csv

Exit
Choose 1, 2, or 3: 2
Enter CSV file name: student_marks.csv
Loaded 7 students.

Status:
Average: 72.71
Median: 78
Max Marks: 99
Min Marks: 39

Grade Counts:
A: 2
B: 1
C: 1
D: 1
F: 2

Pass/Fail:
Passed (6) - Kirti, Palak, Ridhima, Aishu, Ronak, Tani
Failed (1) - Agrima

--- Report Card ---
Name Marks Grade
Kirti 78 C
Palak 92 A
Ridhima 54 F
Aishu 81 B
Agrima 39 F
Ronak 66 D
Tani 99 A
