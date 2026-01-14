# Name: Mehak
# Roll No: 2501410004
# Date: 03-11-2025
# Title: GradeBook Analyzer 

import csv

# stats functions 


# menu 


def menu():
    print("\n")
    print(" Welcome to gradebook ")
    print("")
    print("1. Enter Student names and marks ")
    print("2. Load marks from csv")
    print("3. Exit")



def cal_average(marks):
   
    if not marks:
        return 0
    total = sum(marks.values())
    return total / len(marks)


def find_max(marks):
    
    if not marks:
        return 0
    return max(marks.values())



def find_min(marks):
    
    if not marks:
        return 0
    return min(marks.values())



def cal_median(marks):
    
    if not marks:
        return 0
    scores = sorted(marks.values())
    n = len(scores)
    if n % 2 == 0:
        mid = (scores[n//2 - 1] + scores[n//2]) / 2
    else:
        mid = scores[n//2]
    return mid


# loading the csv file


def load_csv_file(): 

    data = {}
    file = input("Enter CSV file name: ")
    try:
        with open(file, "r", newline="", encoding="utf-8") as f:
            reader = csv.reader(f)
            try:
                next(reader)  # skip header
            except StopIteration:
                print("Empty file.")
                return {}
            for row in reader:
                if len(row) >= 2:
                    name = row[0].strip()
                    try:
                        mark = int(row[1].strip())
                        data[name] = mark
                    except:
                        print(f"Skipping bad mark for {name}.")
                else:
                    print(f"Bad row: {row}")
        print(f"Loaded {len(data)} students.")
    except FileNotFoundError:
        print("File not found.")
    except Exception as e:
        print("Error:", e)
    return data


    return data




# print the results

def print_table(marks, grades):
    print("\n--- Report Card ---")
    print("Name\t\tMarks\tGrade")
    print("----------------------------")
    for name in marks:
        print(f"{name}\t\t{marks[name]}\t{grades[name]}")



# grade function

def assign_grades(marks):
    
    grades = {}
    for name, score in marks.items():
        if score >= 90:
            grades[name] = "A"
        elif score >= 80:
            grades[name] = "B"
        elif score >= 70:
            grades[name] = "C"
        elif score >= 60:
            grades[name] = "D"
        else:
            grades[name] = "F"
    return grades



def grade_count(grades): # counts grades
    count = {"A": 0, "B": 0, "C": 0, "D": 0, "F": 0}
    for a in grades.values():
        if a in count:
            count[a] += 1
    return count



# pass/fail using list comprehension

def pass_or_fail(marks):
    passed = [name for name, score in marks.items() if score >= 40]
    failed = [name for name, score in marks.items() if score < 40]
    return passed, failed




# data entry 


# take input marks (or) enters marks 
def enter_marks():
    data = {}
    print("\nEnter student marks (type 'done' to stop).")
    while True:
        name = input("Student name: ")
        if name == "done":
            break
        mark = input("Enter mark: ")
        try:
            mark = int(mark)
            if 0 <= mark <= 100:
                data[name] = mark
            else:
                print("Please enter a number 0–100.")
        except:
            print("Invalid number.")
    return data






# print the results

def print_table(marks, grades):
    print("\n--- Report Card ---")
    print("Name\t\tMarks\tGrade")
    print("----------------------------")
    for name in marks:
        print(f"{name}\t\t{marks[name]}\t{grades[name]}")




# analysis 

def analyze(marks):
    if not marks:
        print("DATa analysis fail")
        return
    
    print("\nStatus: ")
    print("Average:", round(cal_average(marks), 2))
    print("Median:", cal_median(marks))
    print("Max Marks:", find_max(marks))
    print("Min Marks:", find_min(marks))

    grades = assign_grades(marks)
    dict_ = grade_count(grades)

    print("\nGrade Counts")
    for b, c in dict_.items():
        print(b, ":", c)

    passed, failed = pass_or_fail(marks)
    print("\nPass/fail")
    print("Passed:", len(passed), "-", ", ".join(passed) if passed else "None")
    print("Failed:", len(failed), "-", ", ".join(failed) if failed else "None")

    print_table(marks, grades)





def main():
    while True:
        menu()
        choice = input("choose 1, 2, or 3: ")

        if choice == "1":
            data = enter_marks()
            analyze(data)
        elif choice == "2":
            data = load_csv_file()
            analyze(data)
        elif choice == "3":
            print("Exited Program")
            break
        else:
            print("INVALID CHOICE.")
        if choice in ("1", "2"):
            input("Press ENTER to go back to menu.")




if __name__ == "__main__":
    main()








