# Name: Mehak
# Date: 06-10-2025
# Project: Daily Calorie Tracker CLI


#importing time
import datetime

print("\nWelcome to the Daily Calorie Tracker!")
print("This tool helps you record your meals, count total calories, and compare with your daily calorie limit.\n")

#creating empty list for meal name and calories input
meal_names = []
calories = []

num_meals = int(input("How many meals do you want to enter today? "))

# creating 'for' loop to input meal names and their calorie amounts
for i in range(num_meals):
    meal = input(f"\nEnter name of meal {i+1}: ")
    cal = float(input(f"Enter calories for {meal}: "))
    meal_names.append(meal)
    calories.append(cal)

#total and avg calories calculations
total_calories = sum(calories)
average_calories = total_calories / len(calories)


# user daily calorie limit
limit = float(input("\nEnter your daily calorie limit: "))


#calorie report header
print("\nYour Calorie Report:\n")
print("Meal Name\tCalories")
print("--------------------------------")


#'for' loop to arrange data
for i in range(len(meal_names)):
    print(f"{meal_names[i]}\t\t{calories[i]}")

print("--------------------------------")
print(f"Total:\t\t{total_calories}")
print(f"Average:\t{average_calories:.2f}")


#checking user calorie limit
if total_calories > limit:
    print("\n⚠️  You have exceeded your daily calorie limit!")
else:
    print("\n✅ You are within your daily calorie limit!")



#save session
save = input("\nDo you want to save this session to a file? (yes/no): ").lower()

if save == "yes":
    with open("calorie_log.txt", "w") as f:
        f.write("Daily Calorie Tracker Log\n")
        f.write(f"Date: {datetime.datetime.now()}\n\n")
        f.write("Meal Name\tCalories\n")
        f.write("--------------------------------\n")
        for i in range(len(meal_names)):
            f.write(f"{meal_names[i]}\t\t{calories[i]}\n")
        f.write("--------------------------------\n")
        f.write(f"Total:\t\t{total_calories}\n")
        f.write(f"Average:\t{average_calories:.2f}\n")
        if total_calories > limit:
            f.write("Status: Exceeded daily limit\n")
        else:
            f.write("Status: Within daily limit\n")
    print("\nSession saved successfully to calorie_log.txt!")

    
