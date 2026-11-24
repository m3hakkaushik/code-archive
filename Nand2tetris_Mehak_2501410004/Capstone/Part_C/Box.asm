
(LOOP)
    @KBD
    D=M
    @DRAW
    D;JNE
    @ERASE
    0;JMP

(DRAW)
    @SCREEN
    D=A
    @128
    D=D+A
    @addr
    M=D

    @20
    D=A
    @count
    M=D

(DRAW_LOOP)
    @addr
    A=M
    M=-1

    @32
    D=A
    @addr
    M=D+M

    @count
    M=M-1
    D=M
    @DRAW_LOOP
    D;JGT

    @LOOP
    0;JMP

(ERASE)
    @SCREEN
    D=A
    @128
    D=D+A
    @addr
    M=D

    @20
    D=A
    @count
    M=D

(ERASE_LOOP)
    @addr
    A=M
    M=0

    @32
    D=A
    @addr
    M=D+M

    @count
    M=M-1
    D=M
    @ERASE_LOOP
    D;JGT

    @LOOP
    0;JMP

