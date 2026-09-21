# job sequencing code
def job_sequencing(jobs):
    jobs.sort(key=lambda x: x[2], reverse=True)

    max_deadline = max(job[1] for job in jobs)
    slots = [False] * max_deadline
    result = []
    profit = 0

    for job in jobs:
        job_id, deadline, p = job

        for j in range(deadline - 1, -1, -1):
            if not slots[j]:
                slots[j] = True
                result.append(job_id)
                profit += p
                break

    print("Jobs:", result)
    print("Total Profit:", profit)


jobs = [
    ('J1', 2, 100),
    ('J2', 1, 19),
    ('J3', 2, 27),
    ('J4', 1, 25),
    ('J5', 3, 15)
]

job_sequencing(jobs)