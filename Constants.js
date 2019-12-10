import { Dimensions } from 'react-native';

export default constants = {

    MAX_WIDTH: Dimensions.get("screen").width,
    MAX_HEIGHT: Dimensions.get("screen").height,
    REELS: 5,
    REELS_REPEAT: 10,
    SYMBOLS: 3,
    REEL_SYMBOLS: [
        "MSOOODCXBLLGB7PLLPCCGGCC",
        "MOOGBXLL7CCLLOOCCSPPDCCS",
        "SMMXXOOCCLLPXPGP77LLBDBL",
        "MSOOODCXBLLGB7PLLPCCGGCC",
        "MOOGBXLL7CCLLOOCCSPPDCCS",
    ],
    LINES: [
        [
            [0, 0], [1, 0], [2, 0], [3, 0], [4, 0] //TOP LINE
        ],
        [
            [0, 1], [1, 1], [2, 1], [3, 1], [4, 1] //MIDDLE LINE
        ],
        [
            [0, 2], [1, 2], [2, 2], [3, 2], [4, 2] //BOTTOM LINE
        ],
        [
            [0, 0], [1, 1], [2, 2], [3, 1], [4, 0] //V SHAPE STARTING FROM TOP LEFT
        ],
        [
            [0, 2], [1, 1], [2, 0], [3, 1], [4, 2] //V SHAPE STARTING FROM BOTTOM LEFT
        ],
        [
            [0, 0], [1, 2], [2, 0], [3, 2], [4, 0] //W SHAPE STARTING FROM TOP LEFT
        ],
        [
            [0, 2], [1, 0], [2, 2], [3, 0], [4, 2] //M SHAPE STARTING FROM BOTTOM LEFT
        ],
        [
            [0, 1], [1, 0], [2, 1], [3, 0], [4, 1] //M Shape on top half
        ],
        [
            [0, 0], [1, 1], [2, 0], [3, 1], [4, 0] //W Shape on top half
        ],
        [
            [0, 1], [1, 2], [2, 1], [3, 2], [4, 1] //W Shape on bottom half
        ],
        [
            [0, 2], [1, 1], [2, 2], [3, 1], [4, 2] //M Shape on bottom half
        ],
        [
            [0, 0], [1, 1], [2, 1], [3, 1], [4, 0] //U Shape on top half
        ],
        [
            [0, 1], [1, 2], [2, 2], [3, 2], [4, 1] //U Shape on bottom half
        ],
        [
            [0, 2], [1, 1], [2, 1], [3, 1], [4, 2] //INVERSE U Shape on bottom half
        ],
        [
            [0, 1], [1, 0], [2, 0], [3, 0], [4, 1] //INVERSE U Shape on top half
        ],
        [
            [0, 0], [1, 0], [2, 1], [3, 2], [4, 2] //Z shape from top left
        ],
        [
            [0, 2], [1, 2], [2, 1], [3, 0], [4, 0] //Z shape from bottom left
        ]
    ]

}