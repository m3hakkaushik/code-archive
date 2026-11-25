
import re
import sys
from pathlib import Path

# Hack predefined symbols
SYMBOLS = {
    "SP": 0, "LCL": 1, "ARG": 2,
    "THIS": 3, "THAT": 4,
    "SCREEN": 16384, "KBD": 24576
}

for i in range(16):
    SYMBOLS[f"R{i}"] = i

# Hack computation instructions
COMP = {
    "0": "0101010", "1": "0111111",
    "-1": "0111010", "D": "0001100",
    "A": "0110000", "!D": "0001101",
    "!A": "0110001", "-D": "0001111",
    "-A": "0110011", "D+1": "0011111",
    "A+1": "0110111", "D-1": "0001110",
    "A-1": "0110010", "D+A": "0000010",
    "D-A": "0010011", "A-D": "0000111",
    "D&A": "0000000", "D|A": "0010101",
    "M": "1110000", "!M": "1110001",
    "-M": "1110011", "M+1": "1110111",
    "M-1": "1110010", "D+M": "1000010",
    "D-M": "1010011", "M-D": "1000111",
    "D&M": "1000000", "D|M": "1010101"
}

DEST = {
    "": "000", "M": "001", "D": "010",
    "MD": "011", "A": "100",
    "AM": "101", "AD": "110", "AMD": "111"
}

JUMP = {
    "": "000", "JGT": "001", "JEQ": "010",
    "JGE": "011", "JLT": "100",
    "JNE": "101", "JLE": "110", "JMP": "111"
}

def valid_symbol(symbol):
    return re.fullmatch(r"[A-Za-z_.$:][A-Za-z0-9_.$:]*",
                        symbol) is not None

def assemble(filename):
    path = Path(filename)
    lines = path.read_text().splitlines()

    # Keep original line numbers for error reporting
    instructions = []

    for number, original in enumerate(lines, start=1):
        line = original.split("//")[0]
        line = re.sub(r"\s+", "", line)

        if line:
            instructions.append((number, line))

    errors = []
    rom_address = 0

    # PASS 1: Find labels
    for number, line in instructions:
        if line.startswith("(") or line.endswith(")"):
            if (not line.startswith("(") or
                not line.endswith(")") or
                line.count("(") != 1 or
                line.count(")") != 1):
                errors.append((number, "invalid label"))
                continue

            label = line[1:-1]

            if not valid_symbol(label):
                errors.append((number, "invalid label"))
            elif label in SYMBOLS:
                errors.append((number, "duplicate or reserved label"))
            else:
                SYMBOLS[label] = rom_address
        else:
            rom_address += 1

    # PASS 2: Convert instructions
    output = []
    next_variable = 16

    for number, line in instructions:
        if line.startswith("(") or line.endswith(")"):
            continue

        try:
            if line.startswith("@"):
                symbol = line[1:]

                if not symbol:
                    raise ValueError()

                if symbol.isdigit():
                    address = int(symbol)
                    if address > 32767:
                        raise ValueError()
                else:
                    if not valid_symbol(symbol):
                        raise ValueError()

                    if symbol not in SYMBOLS:
                        SYMBOLS[symbol] = next_variable
                        next_variable += 1

                    address = SYMBOLS[symbol]

                output.append(format(address, "016b"))

            else:
                if line.count(";") > 1 or line.count("=") > 1:
                    raise ValueError()

                if ";" in line:
                    instruction, jump = line.split(";")
                else:
                    instruction, jump = line, ""

                if "=" in instruction:
                    dest, comp = instruction.split("=")
                else:
                    dest, comp = "", instruction

                if dest not in DEST or comp not in COMP:
                    raise ValueError()

                if jump not in JUMP:
                    raise ValueError()

                binary = (
                    "111" + COMP[comp] +
                    DEST[dest] + JUMP[jump]
                )

                output.append(binary)

        except (ValueError, KeyError):
            errors.append((number, "invalid instruction"))

    # K = 01, so report errors instead of crashing
    if errors:
        for number, message in errors:
            print(f"Line {number}: {message}")
        print("Assembly failed. No .hack file generated.")
        return

    output_file = path.with_suffix(".hack")
    output_file.write_text("\n".join(output) + "\n")

    print("Assembly successful!")
    print("Output:", output_file)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python assembler.py filename.asm")
    else:
        assemble(sys.argv[1])
