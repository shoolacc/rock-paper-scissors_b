input.onButtonPressed(Button.A, function () {
    computer_choice = randint(0, 2)
    if (computer_choice == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (computer_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (computer_choice == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    if (computer_choice == player1_choice) {
        basic.showString("Draw!")
    } else {
        if (computer_choice < player1_choice) {
            if (computer_choice == 0 && player1_choice == 2) {
                basic.showString("Player Wins!")
                game.setScore(1)
                basic.showString("" + (game.score()))
            } else {
                basic.showString("Computer Wins!")
            }
        } else {
            if (player1_choice == 0 && computer_choice == 2) {
                basic.showString("Player Loses")
            } else {
                basic.showString("Computer Loses")
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    player1_choice = randint(0, 2)
    if (player1_choice == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (player1_choice == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (player1_choice == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let player1_choice = 0
let computer_choice = 0
basic.showString("Shake to play")
game.setScore(0)
