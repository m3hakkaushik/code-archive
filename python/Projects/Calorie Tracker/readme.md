## Daily Calorie Tracker CLI

Author: Mehak

Date: 06-10-2025

Course: Programming for Problem Solving using Python


---
## output :
<img width="645" height="385" alt="output" src="https://github.com/user-attachments/assets/a1d28a4f-0abd-4530-8ca9-068e202ac1e9" />
<img width="308" height="312" alt="calorie_txt" src="https://github.com/user-attachments/assets/3c4f4a08-3396-4a7b-9259-796965144195" />


Project Overview

The Daily Calorie Tracker is a simple Python-based CLI (Command Line Interface) tool that helps students and users track their daily calorie intake. Users can:

Log meals and their calorie values.

Calculate total and average calories consumed.

Compare against a personal daily calorie limit.

Receive warnings if the daily limit is exceeded.

Save session summaries to a text file for future reference.


This project helps beginners practice Python input/output, lists, arithmetic, conditional statements, string formatting, and file handling.


---

Features

Enter multiple meals with calorie amounts.

Calculate total and average calories automatically.

Compare with a user-defined daily calorie limit.

Display a neatly formatted summary table in the terminal.

Optional: Save session logs with timestamp into calorie_log.txt.



---

Usage Instructions

1. Clone or download the repository:



git clone <your-github-repo-url>
cd daily_calorie_tracker

2. Run the Python script:



python tracker.py

3. Follow the prompts:

Enter the number of meals.

Enter the meal name and calories for each meal.

Enter your daily calorie limit.

Choose whether to save the session log to a file.



4. Example of terminal interaction:



Sample Run 1 – Within Calorie Limit

Welcome to the Daily Calorie Tracker!
This tool helps you record your meals, count total calories, and compare with your daily calorie limit.

How many meals do you want to enter today? 3

Enter name of meal 1: Breakfast
Enter calories for Breakfast: 350
Enter name of meal 2: Lunch
Enter calories for Lunch: 600
Enter name of meal 3: Dinner
Enter calories for Dinner: 400

Enter your daily calorie limit: 1500

Your Calorie Report:

Meal Name    Calories
--------------------------------
Breakfast       350.0
Lunch           600.0
Dinner          400.0
--------------------------------
Total:          1350.0
Average:        450.00

✅ You are within your daily calorie limit!

Do you want to save this session to a file? (yes/no): yes

Session saved successfully to calorie_log.txt!


---

Files in Repository

tracker.py – Main Python script for the project.

calorie_log.txt – Sample output file (generated when you save a session).



---

Learning Outcomes

By completing this project, students practice:

Python input/output operations.

Working with lists and storing user data.

Arithmetic and comparison operators.

Conditional statements for limit warnings.

String formatting using f-strings and tabs.

File handling to save logs.

Building a real-world CLI application from scratch.



---

References

Python official documentation: https://docs.python.org/3/

Beginner tutorials for Python CLI input/output.
