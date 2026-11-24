
# from pathlib import Path
# import re


# def clean_source(file_path):
#     """
#     Reads an assembly file.
#     Removes comments, blank lines and unnecessary spaces.
#     Preserves original line numbers.
#     """

#     cleaned_instructions = []

#     with open(file_path, "r", encoding="utf-8") as file:

#         for line_number, raw_line in enumerate(file, start=1):

#             # Remove comments
#             instruction = raw_line.split("//", 1)[0].strip()

#             # Remove unnecessary whitespace
#             instruction = "".join(instruction.split())

#             # Ignore blank lines
#             if instruction:
#                 cleaned_instructions.append(
#                     (line_number, instruction)
#                 )

#     return cleaned_instructions


# # Temporary testing
# if __name__ == "__main__":

#     test_file = Path(__file__).with_name("sample.asm")

#     instructions = clean_source(test_file)

#     for line_number, instruction in instructions:
#         print(f"Line {line_number}: {instruction}")





import re
from pathlib import Path


# ==========================================
# PREDEFINED SYMBOL TABLE
# ==========================================

PREDEFINED_SYMBOLS = {
    "SP": 0,
    "LCL": 1,
    "ARG": 2,
    "THIS": 3,
    "THAT": 4,
    "SCREEN": 16384,
    "KBD": 24576
}

# Add R0 to R15
for i in range(16):
    PREDEFINED_SYMBOLS[f"R{i}"] = i


# -----------------

# ==========================================
# C-INSTRUCTION LOOKUP TABLES
# ==========================================

COMP_TABLE = {
    "0":   "0101010",
    "1":   "0111111",
    "-1":  "0111010",
    "D":   "0001100",
    "A":   "0110000",
    "M":   "1110000",

    "!D":  "0001101",
    "!A":  "0110001",
    "!M":  "1110001",

    "-D":  "0001111",
    "-A":  "0110011",
    "-M":  "1110011",

    "D+1": "0011111",
    "A+1": "0110111",
    "M+1": "1110111",

    "D-1": "0001110",
    "A-1": "0110010",
    "M-1": "1110010",

    "D+A": "0000010",
    "D+M": "1000010",

    "D-A": "0010011",
    "D-M": "1010011",

    "A-D": "0000111",
    "M-D": "1000111",

    "D&A": "0000000",
    "D&M": "1000000",

    "D|A": "0010101",
    "D|M": "1010101"
}


DEST_TABLE = {
    "":    "000",
    "M":   "001",
    "D":   "010",
    "MD":  "011",
    "A":   "100",
    "AM":  "101",
    "AD":  "110",
    "AMD": "111"
}


JUMP_TABLE = {
    "":    "000",
    "JGT": "001",
    "JEQ": "010",
    "JGE": "011",
    "JLT": "100",
    "JNE": "101",
    "JLE": "110",
    "JMP": "111"
}

# -----------------


# ==========================================
# STEP 1: CLEAN SOURCE CODE
# ==========================================

def clean_source(file_path):

    cleaned_instructions = []

    with open(file_path, "r", encoding="utf-8") as file:

        for line_number, raw_line in enumerate(file, start=1):

            instruction = raw_line.split("//", 1)[0].strip()

            instruction = "".join(instruction.split())

            if instruction:
                cleaned_instructions.append(
                    (line_number, instruction)
                )

    return cleaned_instructions


# ==========================================
# STEP 2: FIRST PASS
# ==========================================

def first_pass(instructions):

    symbols = PREDEFINED_SYMBOLS.copy()

    executable_instructions = []

    rom_address = 0

    for line_number, instruction in instructions:

        # Check whether instruction is a label
        if instruction.startswith("(") and instruction.endswith(")"):

            label = instruction[1:-1]

            # Validate label name
            if not re.fullmatch(
                r"[A-Za-z_.$:][A-Za-z0-9_.$:]*",
                label
            ):
                raise ValueError(
                    f"Line {line_number}: invalid instruction"
                )

            # Detect duplicate symbols
            if label in symbols:
                raise ValueError(
                    f"Line {line_number}: duplicate label '{label}'"
                )

            # Store label and its ROM address
            symbols[label] = rom_address

        else:

            # Normal instructions occupy one ROM address
            executable_instructions.append(
                (line_number, instruction)
            )

            rom_address += 1

    return symbols, executable_instructions







# ----------------------


# ==========================================
# STEP 3: A-INSTRUCTION ENCODING
# ==========================================

def encode_a(value, line_number):

    # Check whether the value is numeric
    if not value.isdigit():
        raise ValueError(
            f"Line {line_number}: invalid instruction"
        )

    number = int(value)

    # Hack A-instructions support 0 to 32767
    if number < 0 or number > 32767:
        raise ValueError(
            f"Line {line_number}: invalid A-instruction address"
        )

    # Convert to 16-bit binary
    binary = format(number, "016b")

    return binary


# ==========================================
# STEP 4: C-INSTRUCTION ENCODING
# ==========================================

def encode_c(instruction, line_number):

    # Separate computation and jump
    if ";" in instruction:

        if instruction.count(";") != 1:
            raise ValueError(
                f"Line {line_number}: invalid instruction"
            )

        computation_part, jump = instruction.split(";")

    else:
        computation_part = instruction
        jump = ""

    # Separate destination and computation
    if "=" in computation_part:

        if computation_part.count("=") != 1:
            raise ValueError(
                f"Line {line_number}: invalid instruction"
            )

        dest, comp = computation_part.split("=")

    else:
        dest = ""
        comp = computation_part

    # Validate all three fields
    if dest not in DEST_TABLE:
        raise ValueError(
            f"Line {line_number}: invalid instruction"
        )

    if comp not in COMP_TABLE:
        raise ValueError(
            f"Line {line_number}: invalid instruction"
        )

    if jump not in JUMP_TABLE:
        raise ValueError(
            f"Line {line_number}: invalid instruction"
        )

    # Generate 16-bit machine instruction
    binary = (
        "111"
        + COMP_TABLE[comp]
        + DEST_TABLE[dest]
        + JUMP_TABLE[jump]
    )

    return binary


# --------------------

# ==========================================
# STEP 5: SECOND PASS
# ==========================================

def second_pass(instructions, symbols):

    machine_code = []

    # Copy symbol table so the original is preserved
    symbols = symbols.copy()

    # First available variable address
    next_variable_address = 16

    for line_number, instruction in instructions:

        # A-INSTRUCTION
        if instruction.startswith("@"):

            value = instruction[1:]

            if not value:
                raise ValueError(
                    f"Line {line_number}: invalid instruction"
                )

            # Numeric address
            if value.isdigit():

                binary = encode_a(value, line_number)

            # Symbolic address
            else:

                if not re.fullmatch(
                    r"[A-Za-z_.$:][A-Za-z0-9_.$:]*",
                    value
                ):
                    raise ValueError(
                        f"Line {line_number}: invalid instruction"
                    )

                # Allocate new variable if not already present
                if value not in symbols:

                    symbols[value] = next_variable_address
                    next_variable_address += 1

                binary = encode_a(
                    str(symbols[value]),
                    line_number
                )

        # C-INSTRUCTION
        else:

            binary = encode_c(
                instruction,
                line_number
            )

        machine_code.append(binary)

    return machine_code, symbols




# ==========================================
# STEP 6: COMPLETE ASSEMBLER
# ==========================================

def assemble(input_file):

    input_path = Path(input_file)

    if not input_path.exists():
        raise FileNotFoundError(
            f"File not found: {input_path}"
        )

    # First pass: clean the source
    cleaned_instructions = clean_source(input_path)

    # Second pass: identify labels
    symbols, executable_instructions = first_pass(
        cleaned_instructions
    )

    # Third operation: encode instructions and allocate variables
    machine_code, final_symbols = second_pass(
        executable_instructions,
        symbols
    )

    # Generate output filename
    output_path = input_path.with_suffix(".hack")

    # Write machine code
    with open(output_path, "w", encoding="utf-8") as output:

        if machine_code:
            output.write("\n".join(machine_code) + "\n")

    print("\nASSEMBLY SUCCESSFUL!")
    print(f"Input file:  {input_path}")
    print(f"Output file: {output_path}")
    print(f"Instructions: {len(machine_code)}")

    return output_path, final_symbols


# ==========================================
# TESTING FIRST PASS
# ==========================================



# ==========================================
# MAIN PROGRAM
# ==========================================

if __name__ == "__main__":

    import sys

    if len(sys.argv) != 2:
        print("Usage: python3 assembler.py <file.asm>")
        sys.exit(1)

    try:

        output_file, symbols = assemble(sys.argv[1])

    except (ValueError, FileNotFoundError) as error:

        print(f"ERROR: {error}")
        sys.exit(1)










# if __name__ == "__main__":

#     test_file = Path(__file__).with_name("sample.asm")

#     cleaned = clean_source(test_file)

#     symbol_table, instructions = first_pass(cleaned)

#     print("\nCLEANED INSTRUCTIONS:")

#     for line_number, instruction in instructions:
#         print(f"Line {line_number}: {instruction}")

#     print("\nSYMBOL TABLE:")

#     for symbol, address in symbol_table.items():
#         print(f"{symbol} = {address}")

#     print("\nLABEL CHECK:")

#     print("\nA-INSTRUCTION TESTS:")

#     test_values = [0, 1, 2, 21, 100, 32767]

#     print("\nC-INSTRUCTION TESTS:")

#     c_tests = [
#         "D=A",
#         "D=D+A",
#         "M=D",
#         "D;JGT",
#         "0;JMP",
#         "D=D-1",
#         "D|M",
#         "MD=D+1"
#     ]

#     for instruction in c_tests:

#         binary = encode_c(instruction, 1)

#         print(
#             f"{instruction} -> {binary} ({len(binary)} bits)"
#         )

#     for value in test_values:

#         binary = encode_a(str(value), 1)

#         print(f"@{value} -> {binary} ({len(binary)} bits)")

#     print("LOOP =", symbol_table["LOOP"])



#     print("\nSECOND PASS TEST:")

#     machine_code, final_symbols = second_pass(
#         instructions,
#         symbol_table
#     )

#     for binary in machine_code:
#         print(binary, len(binary), "bits")

#     print("\nVARIABLE TEST:")

#     print("Before allocation: i =", final_symbols.get("i"))

#     # Test a new variable
#     test_instructions = [
#         (1, "@i"),
#         (2, "M=1"),
#         (3, "@count"),
#         (4, "M=0")
#     ]

#     variable_code, variable_symbols = second_pass(
#         test_instructions,
#         symbol_table
#     )

#     print("i =", variable_symbols["i"])
#     print("count =", variable_symbols["count"])
