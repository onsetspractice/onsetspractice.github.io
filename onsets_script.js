let setTimer = new Date()
// Start of functions
function clone(arr) {
    return JSON.parse(JSON.stringify(arr))
}
function test() {
    let stopTimer = new Date(); console.log((stopTimer.getTime() - setTimer.getTime())/1000 + " SECONDS");
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
function deleteFirstArrItem(array, item) {
    if (!array.includes(item)) return array;
    let index = array.indexOf(item);
    return array.slice(0, index).concat(array.slice(index + 1));
};
function filterDuplicates(arr) {
    return [...new Set(arr)]
};
function randomSort(input) {
    let arr = [...input]
    for (let i = arr.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = arr[i];
      arr[i] = arr[j];
      arr[j] = k;
    }
    return arr;
};
function calcScore(inputArr, type = 1) {
    let score = [0, 0, 0, 0, 0, false, false, false]
    if (type === 2) {
        for (let i = 0, l = inputArr.length; i < l; i += 2) {
            for (let j = 0, l = inputArr[i].length; j < l; j++) {
                switch (inputArr[i].charAt(j)) {
                    case "B": score[0]++; break;
                    case "R": score[1]++; break;
                    case "G": score[2]++; break;
                    case "Y": score[3]++; break;
                    case "V": score[4]++; break;
                    case "Ʌ": score[4]++; break;
                    case "U": score[5] = true; break;
                    case "∩": score[5] = true; break;
                    case "-": score[6] = true; break;
                    case "'": score[7] = true; break;
                };
            }
        };
        return score;
    }
    for (let x of inputArr) {
        switch (x) {
            case "B": score[0]++; break;
            case "R": score[1]++; break;
            case "G": score[2]++; break;
            case "Y": score[3]++; break;
            case "V": score[4]++; break;
            case "Ʌ": score[4]++; break;
            case "U": score[5] = true; break;
            case "∩": score[5] = true; break;
            case "-": score[6] = true; break;
            case "'": score[7] = true; break;
        };
    };
    return score;
};
function translateName(input) {
    switch (input) {
        case "B": return "blue";
        case "R": return "red";
        case "G": return "green";
        case "Y": return "yellow";
        case "U": return "union";
        case "∩": return "intersect";
        case "-": return "subtract";
        case "'": return "not";
        case "V": return "universe";
        case "Ʌ": return "empty-set";
        case "blue": return "B";
        case "red": return "R";
        case "green": return "G";
        case "yellow": return "Y";
        case "union": return "U";
        case "intersect": return "∩";
        case "subtract": return "-";
        case "not": return "'";
        case "universe": return "V";
        case "empty-set": return "Ʌ";
    }
};
function addColorChild(card, color) {
    const newColor = document.createElement('div')
    newColor.classList.add(color)
    card.append(newColor)
};
function randomArrayValue(arr) {
    return arr[getRandomInt(0, arr.length - 1)]
};
function createMapTable(params) {
    // Create table and its elements
    const table = document.createElement('table');
    table.classList.add("map-table");

    // Data for table
    const columns = [
        [[''], ['R', 2], ["R'", 2]],
        [['B', 2], 'B<br>R', 'B<br>R<br><br>Y', 'B<br><br><br>Y', 'B', ["G'", 1]],
        ['B<br>R<br>G', 'B<br>R<br>G<br>Y', 'B<br><br>G<br>Y', 'B<br><br>G', ['G', 2]],
        [["B'", 2], '<br>R<br>G', '<br>R<br>G<br>Y', '<br><br>G<br>Y', '<br><br>G'],
        ['<br>R', '<br>R<br><br>Y', '<br><br><br>Y', '', ['G', 1]],
        [[''], ["Y'", 1], ['Y', 2], ["Y'", 1]]
    ];

    // Populate table with data
    columns.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');

        row.forEach((cell, cellIndex) => {
            let element;
            if (typeof cell === 'string') {
                element = document.createElement('td');
                element.innerHTML = cell;
            } else {
                element = document.createElement('th');
                element.innerHTML = cell[0];
                if (!cell[0].length) {
                } else if (rowIndex === 5 || rowIndex === 0) {
                    element.colSpan = cell[1];
                    element.classList.add("horizontal-table-heading");
                } else if (cellIndex === 0 || cellIndex === row.length - 1) {
                    element.rowSpan = cell[1];
                    element.classList.add("vertical-table-heading");
                }
            }

            if (!params.isAnswerMap) element.classList.add('map-hover-event')
            tr.append(element);
        });

        table.append(tr);
    });
    
    // Format the data
    const mapArr = table.querySelectorAll("td")
    let nullSet = ["BRGY","BRG","BRY","BR","BGY","BG","BY","B","RGY","RG","RY","R","GY","G","Y",""].filter(val => !puzzleData.universe.includes(val));
    let cardIDMap = new Map([
        [0, 'BR'], [1, 'BRY'], [2, 'BY'], [3, 'B'],
        [4, 'BRG'], [5, 'BRGY'], [6, 'BGY'], [7, 'BG'],
        [8, 'RG'], [9, 'RGY'], [10, 'GY'], [11, 'G'],
        [12, 'R'], [13, 'RY'], [14, 'Y'], [15, '']
    ]);
    if (blankWildActive && params.blankCard) {
        let blankCard = ''
        let tableText = ['<br>','<br>','<br>','<br>']
        for (let j = 0; j < 4; j++) {
            if (params.blankCard[j]) {
                switch (j) {
                    case 0: 
                        blankCard += 'B';
                        tableText[0] = 'B<br>';
                        break;
                    case 1: 
                        blankCard += 'R'; 
                        tableText[1] = 'R<br>';
                        break;
                    case 2: 
                        blankCard += 'G'; 
                        tableText[2] = 'G<br>';
                        break;
                    case 3: 
                        blankCard += 'Y'; 
                        tableText[3] = 'Y';
                        break;
                }
            }
        }
        cardIDMap.set(15, blankCard)
        mapArr[15].innerHTML = tableText.join('')
        mapArr[15].classList.add('blank-wild')
    }
    for (let i = 0; i < 16; i++) {
        if (nullSet.includes(cardIDMap.get(i))) {
            mapArr[i].classList.add('blackout')
            continue;
        }

        if (!params.isAnswerMap) continue;
        if (puzzleData.metaData.double.includes(cardIDMap.get(i))) {
            const double = document.createElement('div')
            double.classList.add('map-double')
            double.innerText = '2'
            mapArr[i].append(double)
        }
        let requiredCard = [puzzleData.variationsMap.get('requiredCard')] ?? []
        if (requiredCard.includes(cardIDMap.get(i))) {
            const star = document.createElement('div')
            star.classList.add('map-star')
            const starSvg = createSvg('star')
            star.append(starSvg)
            mapArr[i].append(star)
        }
        let forbiddenCard = [puzzleData.variationsMap.get('forbiddenCard')] ?? []
        if (forbiddenCard.includes(cardIDMap.get(i))) {
            const x = document.createElement('div')
            x.classList.add('map-x')
            const xSvg = createSvg('x')
            x.append(xSvg)
            mapArr[i].append(x)
        }
        if (params.setName.includes(cardIDMap.get(i))) {
            mapArr[i].classList.toggle('map-shade');
        }
        if (params.restriction.includes(cardIDMap.get(i))) {
            mapArr[i].classList.toggle('map-cross');
        }
    }
    if (!params.isAnswerMap) {
        for (let cell of mapArr) {
            if (cell.classList.contains('blackout')) continue;
            cell.addEventListener('click', function() {
                const activeTool = universeMapToolbox.querySelector('.active')
                let activeToolID = activeTool.dataset.id
                switch (activeToolID) {
                    case '0':
                        this.classList.toggle('map-cross');
                        break;
                    case '1':
                        if (!this.classList.contains('double')) {
                            const double = document.createElement('div')
                            double.classList.add('map-double')
                            double.innerText = '2'
                            this.append(double)
                        } else {
                            const double = this.querySelector('.map-double')
                            double.remove()
                        }
                        this.classList.toggle('double');
                        break;
                    case '2':
                        if (!this.classList.contains('star')) {
                            const star = document.createElement('div')
                            star.classList.add('map-star')
                            const starSvg = createSvg('star')
                            star.append(starSvg)
                            this.append(star)
                        } else {
                            const star = this.querySelector('.map-star')
                            star.remove()
                        }
                        this.classList.toggle('star');
                        break;
                    case '3':
                        if (!this.classList.contains('x')) {
                            const x = document.createElement('div')
                            x.classList.add('map-x')
                            const xSvg = createSvg('x')
                            x.append(xSvg)
                            this.append(x)
                        } else {
                            const x = this.querySelector('.map-x')
                            x.remove()
                        }
                        this.classList.toggle('x');
                        break;
                    case '4':
                        if (!this.classList.contains('circle')) {
                            const circle = document.createElement('div')
                            circle.classList.add('map-circle')
                            this.append(circle)
                        } else {
                            const circle = this.querySelector('.map-circle')
                            circle.remove()
                        }
                        this.classList.toggle('circle');
                        break;
                    case '5':
                        this.classList.toggle('map-shade');
                        break;
                }
            })
        }
    }
    // Append table to container
    const container = document.createElement('div')
    container.classList.add('map')
    container.append(table);

    return container;
}
function createSvg(type, parameters = {}) {

    // let customText = parameters.customText
    let color = parameters.color ?? '#ffffff'
    let textWidth = parameters.textWidth ?? '0.38'

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    
    text.setAttribute('xml:space', 'preserve')
    text.setAttribute('style', `font-weight:normal;font-size:6.65px;font-family:Arial;fill:${color};stroke:${color};stroke-width:${textWidth};`)
    text.setAttribute('x', '3.75')
    text.setAttribute('y', '7.96')
    text.append(tspan)

    if (!type) return

    switch (type) {
        case 'arrow':
            svg.setAttribute('viewBox', "0 0 24 24")
            svg.setAttribute('stroke', "currentColor")

            path1.setAttribute('d', `M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 
            1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z`);
            svg.append(path1)
            return svg
        case 'settings':
            svg.setAttribute('viewBox', "0 0 24 24")
            svg.setAttribute('fill', "none")
            svg.setAttribute('stroke', "currentColor")
            path1.setAttribute('stroke-width', `2.34791`)
            path2.setAttribute('stroke-width', `2.34791`)
            path1.setAttribute('d', `m 15.521867,11.99822 a 3.5218678,3.5218678 0 1 1 -7.0437347,0 
            3.5218678,3.5218678 0 0 1 7.0437347,0 z`)
            path2.setAttribute('d', `m 21.019503,10.033625 c 2.061465,0.500105 2.061465,3.432646 0,3.932752 
            a 2.0238998,2.0238998 0 0 0 -1.251438,3.020587 c 1.103519,1.811414 -0.969688,3.885794 -2.782274,2.782275 
            a 2.0238998,2.0238998 0 0 0 -3.019416,1.250264 c -0.500105,2.061465 -3.432646,2.061465 -3.932752,0 
            A 2.0238998,2.0238998 0 0 0 7.0130359,19.768066 C 5.2016221,20.871584 3.1272422,18.798378 4.2307606,16.985791 
            A 2.0238998,2.0238998 0 0 0 2.9804977,13.966377 c -2.06146654,-0.500106 -2.06146654,-3.432647 0,-3.932752 
            A 2.0238998,2.0238998 0 0 0 4.2319346,7.0130359 C 3.1284161,5.2016222 5.2016221,3.1272423 7.0142099,4.2307607 
            A 2.0238998,2.0238998 0 0 0 10.033623,2.9804978 c 0.500106,-2.06146641 3.432647,-2.06146641 3.932752,0 a 
            2.0238998,2.0238998 0 0 0 3.020589,1.2514369 c 1.811413,-1.1035184 3.885794,0.9696875 2.782275,2.7822753 
            -0.713765,1.1692598 -0.08217,2.6954023 1.250264,3.019415 z`)
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'warning':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z`)
            path2.setAttribute('d', `M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 
            4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z`)
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'clockwise-arrow':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z`)
            path1.setAttribute('fill-rule', 'evenodd')
            path2.setAttribute('d', `M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z`)
            svg.append(path1)
            svg.append(path2)
            return svg
        case 'x':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 
            2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z`)
            svg.append(path1)
            return svg
        case 'star':
            svg.setAttribute('viewBox', "0 0 16 16")
            svg.setAttribute('stroke', "currentColor")
            svg.setAttribute('fill', "currentColor")
            path1.setAttribute('d', `M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 
            3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 
            3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 
            3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z`)
            svg.append(path1)
            return svg
    }
}
function compareArr(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false;
    return true;
}
function setInputFilter(textbox, inputFilter) {
    // Input filter from StackOverflow
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
        textbox.addEventListener(event, function(e) {
            if (!inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = '';
            }
        });
    });
};
// End of functions

// Create Elements
const cursor = document.createElement('div')
cursor.id = 'cursor'
cursor.classList.add('blink-animation')
const settingsIcon = createSvg('settings');
settingsIcon.id = 'settings-ico'
const header = document.querySelector('header')
header.addEventListener('click', applySettings)
header.append(settingsIcon)

const variationsArrowBox = document.querySelector('#variations-arrow-box')
variationsArrowBox.addEventListener('click', function() {
    this.parentElement.classList.toggle('shown')
})

const loading = document.querySelector('#loading')
const loadingText = document.createElement('p')
const loadingTextContainer = document.createElement('div')
loadingTextContainer.id = 'loading-text-container'
loadingText.innerText = 'Loading puzzle...'
loading.append(loadingTextContainer)
loadingTextContainer.append(loadingText)
document.body.append(loading)
let loadingInterval, loadTimer = 0;

function showLoading() {
    variationsContainer.parentElement.classList.remove('shown')
    variationsArrowBox.classList.remove('shown')
    loading.classList.add('shown')
    let interval = 1000;
    loadingInterval = setInterval(() => {

        let dotCount = loadingText.innerText.match(/\./g) ?? ''
        dotCount = dotCount.length
        if (dotCount === 3) {
            dotCount = 0
            interval = 1200;
        } else {
            dotCount++
            interval = 500;
        }
        console.log('')
        loadingText.innerText = 'Loading puzzle' + '.'.repeat(dotCount)
        loadTimer += interval
        if (loadTimer >= 3000 && !document.querySelector('#new-puzzle-button')) {
            showNewPuzzleButton()
        }
    }, interval)
}
function hideLoading() {
    loadTimer = 0;
    variationsArrowBox.classList.add('shown')
    loading.classList.remove('shown')
    const puzzleButton = document.querySelector('#new-puzzle-button')
    if (puzzleButton) {
        puzzleButton.classList.remove('shown')
        setTimeout(() => {puzzleButton.remove()}, 100)
    }
    clearInterval(loadingInterval)
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
}
function showNewPuzzleButton() {
    const newPuzzleButton = document.createElement('div')
    newPuzzleButton.id = 'new-puzzle-button'
    loading.append(newPuzzleButton)
    setTimeout(() => {newPuzzleButton.classList.add('shown')}, 10)
    const newPuzzleButtonText = document.createElement('p')
    newPuzzleButtonText.innerText = 'Generate New Puzzle'
    const arrow = createSvg('clockwise-arrow')
    newPuzzleButton.append(arrow)
    newPuzzleButton.append(newPuzzleButtonText)
    newPuzzleButton.addEventListener('click', () => {
        hideLoading()
        newPuzzle()
        newPuzzleButton.classList.remove('shown')
        setTimeout(() => {newPuzzleButton.remove()}, 100)
    })
}
// ADD MIN AND MAX UNIVERSE
// let puzzleParameters = 
// {
//     randomize: 
//         false,
//     setCubes: 
//         [   
//             ["R", "G", "G", "V", "Y", "B"],
//             [1, 3, 5],
//             ["'", "-", "-", "-"],
//             ["<", "="]
//         ],
//     setUniverse:
//         ['RG', 'BRY', 'RGY', 'B', 'BRG', 'Y', 'BG', '', 'BRGY', 'G', 'R', 'BY', 'RY'],
//     setVariations:
//         ['symmetricDifference', 'blankWild', 'wild', 'requiredCube'],
//     setVariationsLength: 
//         4,
//     setGoal:
//         {
//             goalArr: [5, "*", 1, "*", 2],
//             goalValues: [10],
//             goalShape: 5
//         },
//     setForbidden:
//         {
//             forbiddenArrLength: 0
//         },
//     forceSymmetricDifference: true,
// }

// RESTRICTIONLESS PUZZLE ADD MIN AND MAX UNIVERSE
// let puzzleParameters = {
//     randomize: 
//         false,
//     setCubes: 
//         [   
//             ["R", "G", "B"],
//             [1, 3, 5],
//             ["'", "-", "U", "-"],
//             ["V", "V"]
//         ],
//     setUniverse:
//         ['RG', 'BRY', 'RGY', 'B', 'BRG', 'Y', 'BG', '', 'BRGY', 'G', 'R', 'BY', 'RY'],
//     minUniverse: 10,
//     maxUniverse: 14,
//     setVariations:
//         ['symmetricDifference', 'noNull'],
//     setVariationsLength: 
//         2,
//     setGoal:
//         {
//             'goalArr': [5, "*", 1, "*", 2],
//             'goalValues': [10],
//             'goalShape': 5
//         },
//     setForbidden:
//         {
//             forbiddenArrLength: 0
//         },
//     forceSymmetricDifference: false,
// }

// puzzleParameters = 
// {
//     randomize: 
//         false,
//     setCubes: 
//         [   
//             ["B", "G", "Y", "B", "G", "Y"],
//             [1, 3, 5],
//             ["'", "'", "-"],
//             ["<", "="]
//         ],
//     setUniverse:
//         ["BR", "BRY", "B", "BRG", "BRGY", "BGY", "BG", "RG", "RGY", "GY", "G", "RY", ''],
//     minUniverse: 10,
//     maxUniverse: 14,
//     setVariations:
//         ['double', 'twoSolutions', 'symmetricDifference', 'blankWild', 'noNull', 'requiredCard'],
//     setVariationsLength: 
//         6,
//     setGoal:
//         {
//             goalArr: [-1, "*", -2, "+", -1],
//             goalValues: [3],
//             goalShape: 6,
//         },
//     setForbidden:
//         {
//             forbiddenArrLength: 0
//         },
//     forceSymmetricDifference: false,
// }

puzzleParameters = {
    randomize: true,
    setCubes: null,
    setUniverse: null,
    minUniverse: 10,
    maxUniverse: 14,
    setVariations: [],
    setVariationsLength: 6,
    setGoal: null,
    setForbidden: null,
    forceSymmetricDifference: false,
}

// NEW PUZZLE
function newPuzzle() {
    showLoading()
    console.group("NEW PUZZLE")

    // Reset Containers
    inputValues.selectedCubeIndex = {
        setNameArr1: {row: 0, column: null},
        setNameArr2: {row: 0, column: null},
        restrictionArr1: {row: 0, column: null},
        restrictionArr2: {row: 0, column: null},
    },
    inputValues.cursorRow = {
        setNameArr1: [0],
        setNameArr2: [0],
        restrictionArr1: [0],
        restrictionArr2: [0],
    },
    inputValues.flatArray = {
        setNameArr1: [],
        setNameArr2: [],
        restrictionArr1: [],
        restrictionArr2: []
    };
    inputValues.wrap = {
        setNameArr1: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        setNameArr2: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        restrictionArr1: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        restrictionArr2: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
    },
    inputValues.divNodes = {
        setNameArr1: [],
        setNameArr2: [],
        restrictionArr1: [],
        restrictionArr2: []
    };
    inputValues.blankWild = {
        solution1: [false, false, false, false],
        solution2: [false, false, false, false]
    };
    inputValues.wildCube = {
        solution1: null,
        solution2: null
    }
    restrictionContainer.innerHTML = ""
    solutionContainer.innerHTML = ""
    solutionFormToggleDiv.classList.remove('move')
    solution1Toggle.dataset.active = 'true'
    solution2Toggle.dataset.active = 'false'
    activeSolution = 'solution1'
    for (let i = 0; i < blankWildContainer.children.length; i++) {
        blankWildContainer.children[i].classList.add('wild')
    };
    forbiddenContainer.innerHTML = ""
    requiredContainer.innerHTML = ""
    resourcesContainer.innerHTML = ""
    cardsContainer.innerHTML = ""
    variationsContainer.querySelector('ul').innerHTML = ""
    for (let map of mapContainer.children) {
        map.remove()
    }
    for (let key of keyboardContainer.querySelectorAll('.wild-cube')) {
        key.classList.remove('wild-cube')
    }

    goalContainer.innerHTML = ""
    goalContainer.parentElement.classList.remove('three-rows')

    changeRows(restrictionContainer, inputValues.wrap.restrictionArr2, false, 0)
    changeRows(solutionContainer, inputValues.wrap.setNameArr2, true, 0)

    // Generate New Puzzle
    params = Object.values(puzzleParameters)
    console.log(params)

    console.log(workers)
    if (workers.mainWorker) {
        workers.mainWorker.terminate()
    }
    if (workers.queueWorker) {
        workers.queueWorker.terminate()
    }

    const mainPuzzleWorker = new Worker('onsets_worker.js');
    workers.mainWorker = mainPuzzleWorker;

    if (queuedPuzzleData) {
        mainPuzzleWorker.postMessage([
            'return',
            queuedPuzzleData
        ])
    } else {
        mainPuzzleWorker.postMessage(params)
    };

    mainPuzzleWorker.onmessage = (e) => {
        puzzleData = e.data

        // Display Blank Wild and Solution Toggle (If Applicable)
        blankWildActive = puzzleData.variationsMap.get('blankWild') ?? false
        twoSolutionsActive = puzzleData.variationsMap.get('twoSolutions') ?? false
        blankWildContainer.style.display = (blankWildActive) ? '' : 'none'
        solutionFormContainer.style.display = (twoSolutionsActive) ? '' : 'none'

        // Move solution toggle if goal is too tall
        if (puzzleData.goalShape === 5 && twoSolutionsActive) {
            requiredContainer.parentElement.append(solutionFormContainer)
        } else {
            rightInputContainer.append(solutionFormContainer)
        }
        
        // Set Wild Cube
        if (puzzleData.variationsMap.get('wild')) {
            inputValues.wildCube.solution1 = translateName(puzzleData.variationsMap.get('wild'))
            inputValues.wildCube.solution2 = translateName(puzzleData.variationsMap.get('wild'))
            changeWildStyle(translateName(puzzleData.variationsMap.get('wild')))
            for (let key of keyboardContainer.querySelectorAll('.keyboard-cube')) {
                if (key.classList[1] === translateName(puzzleData.variationsMap.get('wild'))) key.classList.add('wild-cube')
            }
        }
        let wildCubeName = null
        switch (puzzleData.variationsMap.get('wild')) {
            case "R": wildCubeName = 'red'; break;
            case "B": wildCubeName = 'blue'; break;
            case "G": wildCubeName = 'green'; break;
            case "Y": wildCubeName = 'yellow'; break;
            case "U": wildCubeName = 'union'; break;
            case "∩": wildCubeName = 'intersect'; break;
            case "-": wildCubeName = 'subtract'; break;
            case "'": wildCubeName = 'not'; break;
            case "V": wildCubeName = 'universe'; break;
            case "Ʌ": wildCubeName = 'empty-set'; break;
        }
        console.log("WILD CUBE NAME: " + wildCubeName)
        
        // Display forbidden cubes
        console.log(puzzleData);
        console.log(puzzleData.forbidden)
        for (let forbiddenCube of puzzleData.forbidden) {
            const newForbiddenCube = document.createElement("div")
            newForbiddenCube.classList.add("cube", "restraint-cube");
            switch (forbiddenCube) {
                case "B": newForbiddenCube.classList.add("blue"); break;
                case "R": newForbiddenCube.classList.add("red"); break;
                case "G": newForbiddenCube.classList.add("green"); break;
                case "Y": newForbiddenCube.classList.add("yellow"); break;
                case "V": newForbiddenCube.classList.add("universe"); break;
                case "Ʌ": newForbiddenCube.classList.add("empty-set"); break;
            };
            forbiddenContainer.append(newForbiddenCube);
        };

        // Display goal cubes
        function goalAddCube(cube, row) {
            const newGoalCube = document.createElement("div")
            if (cube < 0) newGoalCube.classList.add('upsidedown')
            newGoalCube.innerText = Math.abs(cube);
            newGoalCube.classList.add("cube", "goal-cube")
            goalContainer.children[row].append(newGoalCube)
        }

        console.log(puzzleData.goalShape)
        let goalRow = document.createElement('div')
        goalRow.classList.add('goal-row')
        switch (puzzleData.goalShape) {
            case 1:
                goalContainer.append(goalRow)
                goalAddCube(puzzleData.goal[0], 0)
                break;
            case 2:
                goalContainer.append(goalRow)
                goalAddCube(puzzleData.goal[0], 0)
                goalAddCube(puzzleData.goal[2], 0)
                break;
            case 3:
                goalContainer.append(goalRow)
                goalAddCube(puzzleData.goal[0], 0)
                goalAddCube(puzzleData.goal[2], 0)
                goalAddCube(puzzleData.goal[4], 0)
                break;
            case 4:
                goalContainer.append(goalRow)
                goalContainer.append(goalRow.cloneNode())
                goalAddCube(puzzleData.goal[0], 1)
                goalAddCube(puzzleData.goal[2], 0)
                break;
            case 5:
                goalContainer.parentElement.classList.add('three-rows')
                // goalContainer.classList.add('three-rows')
                goalContainer.append(goalRow)
                goalContainer.append(goalRow.cloneNode())
                goalContainer.append(goalRow.cloneNode())
                goalAddCube(puzzleData.goal[0], 0)
                goalAddCube(puzzleData.goal[2], 1)
                goalAddCube(puzzleData.goal[4], 2)
                break;
            case 6:
                goalContainer.append(goalRow)
                goalContainer.append(goalRow.cloneNode())
                goalAddCube(puzzleData.goal[0], 0)
                goalAddCube(puzzleData.goal[2], 1)
                goalAddCube(puzzleData.goal[4], 1)
                break;
            case 7:
                console.log("D")
                goalContainer.append(goalRow)
                goalContainer.append(goalRow.cloneNode())
                goalContainer.children[0].classList.add('align-left')
                goalAddCube(puzzleData.goal[0], 0)
                goalAddCube(puzzleData.goal[2], 1)
                goalAddCube(puzzleData.goal[4], 1)
                break;
        }

        // Determine required cubes from solutions
        let solutionScores = []

        for (let currSolution of puzzleData.solution) {
            if (currSolution.restriction) solutionScores.push(calcScore(currSolution.restriction, 2))
            solutionScores.push(calcScore(currSolution.flag))
        }
        let highStandard = solutionScores.shift()
        for (let score of solutionScores) {
            for (let i = 0; i < score.length; i++) {
                let standardScore = highStandard[i]
                let currentScore = score[i]
                if (typeof currentScore === "number") {
                    if (currentScore < standardScore) highStandard[i] = currentScore;
                } else {
                    if (!currentScore) highStandard[i] = false
                }
            }
        }
        console.log("HSTD", highStandard);
        let requiredArr = []
        let resourcesArr = puzzleData.modifiedCubes[0].concat(puzzleData.modifiedCubes[2]).concat(puzzleData.modifiedCubes[3])
        console.log(resourcesArr)

        // Create required and resources arr
        requiredContainer.dataset.values = ""
        resourcesContainer.dataset.values = ""

        for (let i = 0; i < highStandard.length; i++) {
            const cube = {name: null, symbol: null};
            switch(i) {
                case 0: cube.name = "blue"; cube.symbol = 'B'; break;
                case 1: cube.name = "red"; cube.symbol = 'R'; break;
                case 2: cube.name = "green"; cube.symbol = 'G'; break;
                case 3: cube.name = "yellow"; cube.symbol = 'Y'; break;
                case 4: cube.name = "universe"; cube.symbol = 'V'; break;
                case 5: cube.name = "union"; cube.symbol = 'U'; break;
                case 6: cube.name = "subtract"; cube.symbol = '-'; break;
                case 7: cube.name = "not"; cube.symbol = "'"; break;
            }
            if (typeof highStandard[i] === 'number') {
                for (let j = 0; j < highStandard[i]; j++) {
                    requiredContainer.dataset.values += cube.symbol
                    if (cube.symbol === 'V') {
                        cube.symbol = resourcesArr.includes("V") ? "V" : "Ʌ"
                        cube.name = resourcesArr.includes("V") ? "universe" : "empty-set"
                    }
                    requiredArr.push(cube.name);
                    resourcesArr = deleteFirstArrItem(resourcesArr, cube.symbol)
                };
            } else if (highStandard[i]) {
                requiredContainer.dataset.values += cube.symbol
                if (cube.symbol === 'U') {
                    cube.symbol = resourcesArr.includes("U") ? "U" : "∩"
                    cube.name = resourcesArr.includes("U") ? "union" : "intersect"
                }
                requiredArr.push(cube.name);
                resourcesArr = deleteFirstArrItem(resourcesArr, cube.symbol)
            };
        };
        console.log(requiredContainer.dataset.values)
        console.log(requiredArr)
        requiredArr = randomSort(requiredArr)

        for (let x of puzzleData.cubes[3].filter(val => val === '<' || val === '=')) {
            resourcesArr = deleteFirstArrItem(resourcesArr, x);
            (x === "<") ? requiredArr.push("must-contain") : requiredArr.push("equals");
        }

        // Place cubes from required arr into required
        for (let requiredCube of requiredArr) {
            const newRequiredCube = document.createElement("div")
            newRequiredCube.classList.add("cube", "restraint-cube", requiredCube);
            if (requiredCube === wildCubeName) {
                newRequiredCube.classList.add('wild-cube')
                newRequiredCube.addEventListener('click', toggleWildPicker)
            }
            requiredContainer.append(newRequiredCube);
        };

        // Place cubes from resources arr into resources
        console.log(resourcesArr)
        for (let resourceCube of resourcesArr) {
            const newResourcesCube = document.createElement("div")
            newResourcesCube.classList.add("cube", "restraint-cube");
            switch (resourceCube) {
                case "B": newResourcesCube.classList.add("blue"); break;
                case "R": newResourcesCube.classList.add("red"); break;
                case "G": newResourcesCube.classList.add("green"); break;
                case "Y": newResourcesCube.classList.add("yellow"); break;
                case "U": newResourcesCube.classList.add("union"); break;
                case "∩": newResourcesCube.classList.add("intersect"); break;
                case "-": newResourcesCube.classList.add("subtract"); break;
                case "'": newResourcesCube.classList.add("not"); break;
                case "V": newResourcesCube.classList.add("universe"); break;
                case "Ʌ": newResourcesCube.classList.add("empty-set"); break;
            };
            resourcesContainer.dataset.values += resourceCube
            if (resourceCube === puzzleData.variationsMap.get('wild')) {
                newResourcesCube.classList.add('wild-cube')
                newResourcesCube.addEventListener('click', toggleWildPicker)
            }
            resourcesContainer.append(newResourcesCube);
        }
        console.log(filterDuplicates(puzzleData.universe))

        // Display Map
        mapContainer.append(createMapTable({isAnswerMap: false}))

        // Display Cards
        for (let card of filterDuplicates(puzzleData.universe)) {
            const newCard = document.createElement('div');
            newCard.dataset.getCard = card
            // newCard.addEventListener("click", hideKeyboard);
            newCard.classList.add('card')
            const cardContent = document.createElement('div')
            const cardContentFront = document.createElement('div')
            const cardContentBack = document.createElement('div')
            cardContent.classList.add('card-content')
            cardContentFront.classList.add('card-content-front')
            cardContentBack.classList.add('card-content-back')
            if (/B/.test(card)) addColorChild(cardContentFront, "blue")
            if (/R/.test(card)) addColorChild(cardContentFront, "red")
            if (/G/.test(card)) addColorChild(cardContentFront, "green")
            if (/Y/.test(card)) addColorChild(cardContentFront, "yellow")
            cardContent.append(cardContentFront, cardContentBack)
            newCard.append(cardContent)
            newCard.addEventListener('click', function(){this.classList.toggle('flip')})
            cardsContainer.append(newCard)
        }
        if (filterDuplicates(puzzleData.universe).length > 14) {
            universeSize.cardsWidth = 704 + 52
            universeSize.mapWidth = 756
        } else {
            universeSize.cardsWidth = 616 + 52
            universeSize.mapWidth = 700
        }
        resizeUniverse()

        // Display Variations
        console.log(variationsContainer)
        const variationsDisplay = variationsContainer.querySelector('ul')
        for (let x of puzzleData.variations) {variationsDisplay.append(document.createElement('li'))}
        for (let i = 0; i < variationsDisplay.children.length; i++) {
            let currVariation = puzzleData.variations[i]
            let variationToPush;
            if (typeof currVariation === "string") {
                switch (currVariation) {
                    case "twoOp": variationToPush = "Two Op."; break;
                    case "noNull": variationToPush = "No Null"; break;
                    case "absValue": variationToPush = "Absolute Value"; break;
                    case "blankWild": variationToPush = "Blank Wild"; break;
                    case "symmetricDifference": variationToPush = "Symmetric Difference"; break;
                    case "twoSolutions": variationToPush = "Two Solutions"; break;
                }
            } else {
                console.log(currVariation)
                switch (Object.keys(currVariation)[0]) {
                    case "requiredCube": variationToPush = "Required Cube " + currVariation.requiredCube; break;
                    case "wild": variationToPush = "Wild " + currVariation.wild; break;
                    case "double": variationToPush = "Double " + currVariation.double; break;
                    case "requiredCard": variationToPush = 'Required Card "' + currVariation.requiredCard + '"'; break;
                    case "forbiddenCard": variationToPush = 'Forbidden Card "' + currVariation.forbiddenCard + '"'; break;
                }
            }
            variationsDisplay.children[i].innerText = variationToPush;
        }
        hideLoading();

        console.log(puzzleData.variations)
        console.log(variationsDisplay)
        
        // Queue New Puzzle
        console.groupCollapsed("QUEUE PUZZLE")
        const queuePuzzleWorker = new Worker('onsets_worker.js');
        workers.queueWorker = queuePuzzleWorker
        queuePuzzleWorker.postMessage(params)

        queuePuzzleWorker.onmessage = (e) => {
            queuedPuzzleData = e.data
            queuePuzzleWorker.terminate();
            console.log("DONE QUEUE PUZZLE")
        }
        console.groupEnd()

        mainPuzzleWorker.terminate();

        // TODO: WHEN SWITCHING BETWEEN SOLUTIONS, MAKE SURE THE CURSOR GAP DISAPPEARS
        // currInput = 'restriction1'
        // inputCube('green')
        // inputCube('must-contain')
        // inputCube('blue')
        // inputCube('intersect')
        // inputCube('red')
        // currInput = "setName1"
        // inputCube('blue')
        // inputCube('union')
        // inputCube('left-parenthesis')
        // inputCube('red')
        // inputCube('intersect')
        // inputCube('green')
        // inputCube('right-parenthesis')
        // if (twoSolutionsActive) {
        //     solutionFormToggleDiv.click()
        //     currInput = 'restriction2'
        //     inputCube('green')
        //     inputCube('must-contain')
        //     inputCube('yellow')
        //     currInput = "setName2"
        //     inputCube('blue')
        //     inputCube('intersect')
        //     inputCube('left-parenthesis')
        //     inputCube('green')
        //     inputCube('union')
        //     inputCube('red')
        //     inputCube('right-parenthesis')
        // }
        // submitInput()
    };
};

// Elements that relate to Puzzle:
function createElement(id, parent, innerText = '', attributes = []) {
    const element = document.createElement('div')
    element.id = id
    element.innerText = innerText
    for (let attribute of attributes) {
        element.setAttribute(attribute[0], attribute[1])
    }
    parent.append(element)
    return element
}
const puzzleContainer = document.querySelector('#puzzle-container')
// Cube Containers
const boardContainer = document.querySelector('#board-container')
const forbiddenContainer = document.querySelector('#forbidden-container');
const requiredContainer = document.querySelector('#required-container');
const resourcesContainer = document.querySelector('#resources-container');
const solutionContainer = document.querySelector('#solution-container');
const restrictionContainer = document.querySelector('#restriction-container');
const goalContainer = document.querySelector('#goal-container');
// Misc. Puzzle Containers
const variationsContainer = document.querySelector('#variations-container')
const map = document.querySelector('.map')
const blankWildContainer = document.querySelector('#blank-wild-container')
const submitButton = document.querySelector('#submit-button');
// Two Solutions Toggle
const rightInputContainer = document.querySelector('#right-input-container')
const solutionFormContainer = document.querySelector('#solution-form-container')
const solution1Toggle = document.querySelector('#solution1-toggle')
const solution2Toggle = document.querySelector('#solution2-toggle')
const solutionFormToggleDiv = document.querySelector('#solution-form-toggle-div')
// Keyboard
const keyboardContainer = document.querySelector('#keyboard-container');
const keyboardButtons = document.querySelectorAll(".keyboard-row > div")
// Universe Container
const universeContainer = document.querySelector('#universe-container')
const universeHeader = createElement('universe-header', universeContainer)
const universeHeaderToggle = createElement('universe-header-toggle', universeHeader)
const universeCardsToggle = createElement('universe-cards-toggle', universeHeaderToggle, 'Cards', [['data-active', 'true']])
const universeMapToggle = createElement('universe-map-toggle', universeHeaderToggle, 'Map', [['data-active', 'false']])
const universeToggleDiv = createElement('universe-toggle-div', universeHeaderToggle)
const cardsContainer = createElement('cards-container', universeContainer)
const mapContainer = createElement('map-container', universeContainer)
const universeMapToolbox = createElement('universe-map-toolbox', universeHeader)
for (let i = 0; i < 6; i++) {
    const universeMapTool = document.createElement('div')
    universeMapTool.classList.add('universe-map-tool')
    universeMapTool.dataset.id = i
    universeMapTool.addEventListener('click', function() {
        const active = universeMapToolbox.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
    })
    switch (i) {
        case 0:
            const cross = document.createElement('div')
            cross.style.width = '16px'
            cross.style.height = '16px'
            cross.style.borderRadius = '2px'
            cross.style.background = 'linear-gradient(to bottom right, transparent 42%, rgb(0 0 0 / 100%) 42%, rgb(0 0 0 / 100%) 58%, transparent 58%)'
            universeMapTool.append(cross)
            universeMapTool.classList.add('active')
            break;
        case 1:
            universeMapTool.style.fontSize = '20px'
            universeMapTool.style.fontWeight = 'bold'
            const double = document.createElement('div')
            double.style.paddingTop = '1px'
            double.innerText = 2
            universeMapTool.append(double)
            break;
        case 2:
            const starSvg = createSvg('star')
            starSvg.style.width = '17px'
            starSvg.style.height = '17px'
            universeMapTool.append(starSvg)
            break;
        case 3:
            const xSvg = createSvg('x')
            xSvg.style.width = '24px'
            xSvg.style.height = '24px'
            universeMapTool.append(xSvg)
            break;
        case 4:
            const circle = document.createElement('div')
            circle.style.width = '18px'
            circle.style.height = '18px'
            circle.style.borderRadius = '100%'
            circle.style.border = '2.5px solid rgb(0 0 0 / 100%)'
            universeMapTool.append(circle)
            break;
        case 5:
            const shade = document.createElement('div')
            shade.style.width = '18px'
            shade.style.height = '18px'
            shade.style.borderRadius = '4px'
            shade.style.border = '2px solid rgb(0 0 0 / 100%)'
            shade.style.backgroundColor = 'rgb(0 0 0 / 30%)'
            universeMapTool.append(shade)
            break;
    }
    universeMapToolbox.append(universeMapTool)
}
const workers = {
    mainWorker: null,
    queueWorker: null
}
const inputValues = {
    selectedCubeIndex: {
        setNameArr1: {row: 0, column: null},
        setNameArr2: {row: 0, column: null},
        restrictionArr1: {row: 0, column: null},
        restrictionArr2: {row: 0, column: null},
    },
    cursorRow: {
        setNameArr1: [0],
        setNameArr2: [0],
        restrictionArr1: [0],
        restrictionArr2: [0],
    },
    flatArray: {
        setNameArr1: [],
        setNameArr2: [],
        restrictionArr1: [],
        restrictionArr2: [],
    },
    wrap: {
        setNameArr1: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        setNameArr2: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        restrictionArr1: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
        restrictionArr2: {elements: [[], []], widths: [[], []], values: [0, 0], row: 0},
    },
    divNodes: {
        setNameArr1: [],
        setNameArr2: [],
        restrictionArr1: [],
        restrictionArr2: [],
    },
    blankWild: {
        solution1: [false, false, false, false],
        solution2: [false, false, false, false],
    },
    wildCube: {
        solution1: null,
        solution2: null,
    }
};
const universeSize = {
    cardsWidth: 616,
    cardsHeight: 302,
    mapWidth: 700,
    mapHeight: 352,
}
window.onresize = resizeUniverse
function resizeUniverse() {
    // Cards
    const UNIVERSE_HEADER_SIZE = 40
    const VERTICAL_PADDING = 10
    const HORIZONTAL_PADDING = 42
    const CARD_HEIGHT = 126
    const CARD_WIDTH = 88
    const CARDS_CONTAINER_WIDTH = Math.min(window.innerWidth * .97 * .95, universeSize.cardsWidth - HORIZONTAL_PADDING)
    let columns = Math.floor(CARDS_CONTAINER_WIDTH / CARD_WIDTH)
    let rows = Math.ceil(cardsContainer.children.length / columns)
    universeSize.cardsHeight = (rows * CARD_HEIGHT) + UNIVERSE_HEADER_SIZE + VERTICAL_PADDING
    if (universeCardsToggle.dataset.active === 'true') {
        universeContainer.animate(
        [{ height: universeSize.cardsHeight + 'px' }], {
            fill: 'forwards',
        });
        cardsContainer.animate(
            [{ width: `min(95%, ${universeSize.cardsWidth - HORIZONTAL_PADDING}px`}], {
            fill: 'forwards',
        });
        universeContainer.animate(
            [{ width: `min(97%, ${universeSize.cardsWidth}px`}], {
            fill: 'forwards',
        });
    }

}
let activeSolution = 'solution1';
let keyboardActive = false;
let currInput;

let blankWildActive
let twoSolutionsActive

let puzzleData;
let queuedPuzzleData
// Start and Time Puzzle
newPuzzle();
let stopTimer = new Date(); console.log((stopTimer.getTime() - setTimer.getTime())/1000 + " SECONDS");
console.log(' > DONE')

keyboardContainer.addEventListener('click', function(e) {e.stopPropagation()})
document.addEventListener('click', hideKeyboard);

restrictionContainer.addEventListener('click', showKeyboard);
solutionContainer.addEventListener('click', showKeyboard);

function showKeyboard(e) {
    
    let target = (e.target.id) ? e.target.id : e.target.parentNode.id
    const targetElement = document.querySelector(`#${target}`)

    e.stopPropagation();
    cursor.classList.add('blink-animation')
    keyboardContainer.classList.remove("hidden")

    let wrap, container, selectedCubeIndex, row, column, cursorRow, frontCursor, clickedRow
    switch (currInput) {
        case "restriction1":
            container = restrictionContainer;
            wrap = inputValues.wrap.restrictionArr1;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            cursorRow = inputValues.cursorRow.restrictionArr1
            break;
        case "setName1":
            container = solutionContainer;
            wrap = inputValues.wrap.setNameArr1
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1
            break;
        case "restriction2":
            container = restrictionContainer;
            wrap = inputValues.wrap.restrictionArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            cursorRow = inputValues.cursorRow.restrictionArr2
            break;
        case "setName2":
            container = solutionContainer;
            wrap = inputValues.wrap.setNameArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            cursorRow = inputValues.cursorRow.setNameArr2
            break;
        default:
    };

    if (!targetElement.classList.contains('active') && currInput) {

        const activeContainer = document.querySelector('#restriction-container.active, #solution-container.active')
        if (activeContainer) {
            activeContainer.classList.remove('active')
        }
        for (let row of wrap.elements) {
            for (let node of row) {
                node.dataset.cursorOffset = 0
            }
        }
        selectedCubeIndex.row = wrap.row
        cursorRow[0] = wrap.row
        selectedCubeIndex.column = wrap.elements[wrap.row].length - 1

        alignCursor()
        alignInputNodes()
    }

    if (targetElement.classList.contains('active')) {

        let previousSelectedCubeRow
        
        if (getSelectedCube()) {
            previousSelectedCubeRow = getSelectedCube().dataset.row
        } else {
            previousSelectedCubeRow = 0
        }

        if (e.target === container) {

            row = Math.floor((e.offsetY - 2) / 50)
            
            if (row < 0) row = 0;
            if (row > wrap.row) row--

            cursorRow[0] = row
            clickedRow = row

            let leftBound = (container.offsetWidth - wrap.values[row]) / 2
            let rightBound = leftBound + wrap.values[row]
            if (e.offsetX < leftBound) { // Clicked to the left of all cubes

                frontCursor = true;
                if (row > 0) { // Ensure cube is not very first cube
                    row--
                    column = wrap.elements[row].length - 1
                } else { // If cube is first cube, set index accordingly
                    row = 0
                    column = null
                }

            } else if (e.offsetX > rightBound) { // Clicked to the right of all cubes
                column = wrap.widths[row].length - 1
                // Move cursor to first position of next row if applicable

                if (wrap.row > row) { 
                    clickedRow = row + 1
                    cursorRow[0] = row + 1
                    frontCursor = true;
                }

            } else {

                let difference = e.offsetX - leftBound
                column = -1;
                if (difference === 0) column = 0;
                for (let i = 0; difference > 0; i++) {
                    difference -= wrap.widths[row][i]
                    column++
                }

                let clickedCube = wrap.elements[row][column]

                // Clicking on left half of cube will keep column same as left cube
                let halfWidth = (clickedCube.classList.contains('cube')) ? 23 : 8
                if (difference + halfWidth < 0) {
                    if (column > 0) { // Default, select cube to the left
                        column--
                    } else {  // If cube is first of its row
                        frontCursor = true;
                        if (row === 0) { // Cube is very first cube
                            column = null
                        } else { // Default, select last cube of previous row
                            row--
                            column = wrap.elements[row].length - 1
                        }
                    }
                } else if (column === wrap.elements[row].length - 1) { // If clicked to the right of last cube in row
                    if (wrap.row > row) { // Move cursor to first position of next row if applicable
                        clickedRow = row + 1
                        cursorRow[0] = row + 1
                        frontCursor = true;
                    }
                }

            } 

        } else {

            let clickedCube = e.target
            if (clickedCube.classList.contains('pointer')) return;
            let halfWidth = (clickedCube.classList.contains('cube')) ? 23 : 8
            clickedRow = parseInt(clickedCube.dataset.row)
            row = clickedRow
            column = wrap.elements[clickedRow].indexOf(clickedCube)
            cursorRow[0] = clickedRow
            // Clicking on left half of cube select the previous cube
            if (e.offsetX < halfWidth) {
                if (column > 0) { // Default, select cube to the left
                    column--
                } else { // If cube is first of its row
                    frontCursor = true;
                    if (row === 0) { // Cube is very first cube
                        column = null
                    } else { // Default, select last cube of previous row
                        row--
                        column = wrap.elements[row].length - 1
                    }
                }
            } else if (column === wrap.elements[row].length - 1) {
                // If clicked to the right of last cube in row
                if (wrap.row > row) { // Move cursor to first position of next row if applicable
                    clickedRow = row + 1
                    cursorRow[0] = row + 1
                    frontCursor = true;
                }
            }
        }
        selectedCubeIndex.row = row
        selectedCubeIndex.column = column

        for (let i = 0; i < wrap.elements[previousSelectedCubeRow].length; i++) {
            if (cursorRow[0] == previousSelectedCubeRow) break;
            wrap.elements[previousSelectedCubeRow][i].dataset.cursorOffset = 0
        }
        for (let i = 0; i < wrap.elements[clickedRow].length; i++) {
            if (i > column || frontCursor) {
                wrap.elements[clickedRow][i].dataset.cursorOffset = 6
            } else [
                wrap.elements[clickedRow][i].dataset.cursorOffset = 0
            ]
        }

        alignCursor([70, 70], frontCursor)
        alignInputNodes()

    } else if (target === 'restriction-container') {

        currInput = (activeSolution === 'solution1') ? 'restriction1' : 'restriction2'

        if (puzzleData.metaData.noRestrictions) {
            notify('No Restriction Cubes Avaiable!', 'red', 'bounce', 1000, '40px', '260px')
            hideKeyboard()
            return;
        }

        restrictionContainer.classList.add('active')
        restrictionContainer.append(cursor)
        alignCursor([0, 0])

    } else {

        currInput = (activeSolution === 'solution1') ? 'setName1' : 'setName2'
        solutionContainer.classList.add('active')
        solutionContainer.append(cursor)
        alignCursor([0, 0])

    };
};

function hideKeyboard() {

    if (!currInput) return;

    const activeContainer = document.querySelector('#restriction-container.active, #solution-container.active')

    let selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            cursorRow = inputValues.cursorRow.restrictionArr1;
            wrap = inputValues.wrap.restrictionArr1;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            break;
        case "setName1":
            cursorRow = inputValues.cursorRow.setNameArr1;
            wrap = inputValues.wrap.setNameArr1
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            break;
        case "restriction2":
            cursorRow = inputValues.cursorRow.restrictionArr2;
            wrap = inputValues.wrap.restrictionArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            break;
        case "setName2":
            cursorRow = inputValues.cursorRow.setNameArr2;
            wrap = inputValues.wrap.setNameArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            break;
    };

    if (wrap) { // Clicked on container while another container was still active
        for (let row of wrap.elements) {
            for (let node of row) {
                node.dataset.cursorOffset = 0
            }
        }

        selectedCubeIndex.row = wrap.row
        cursorRow[0] = wrap.row
        selectedCubeIndex.column = wrap.elements[wrap.row].length - 1
        alignCursor()
        alignInputNodes()
    }

    cursor.classList.remove('blink-animation')
    if (activeContainer) {
        activeContainer.classList.remove('active')
    }
    keyboardContainer.classList.add("hidden")

    currInput = null;
}

// Add colors when clicking on Blank Wild Card
blankWildContainer.addEventListener('click', (e) => {
    // If not clicking on color, then return
    if (e.target.classList.value.includes('card')) return;

    // Else, add toggle wild classlist to display color
    e.target.classList.toggle('wild')

    // Toggle color index in inputValues
    let index;
    switch (e.target.classList[0]) {
        case "blue": index = 0; break;
        case "red": index = 1; break;
        case "green": index = 2; break;
        case "yellow": index = 3; break;
    }
    if (activeSolution === 'solution1') {
        inputValues.blankWild.solution1[index] = !inputValues.blankWild.solution1[index]
    } else {
        inputValues.blankWild.solution2[index] = !inputValues.blankWild.solution2[index]
    };
})


// Toggle between Solution 1 and 2:
solutionFormContainer.addEventListener('click', toggleSolution)
function toggleSolution(e) {
    hideKeyboard()

    // If clicking on active toggle, return
    if (e.target.dataset.active === 'true') return;

    // Else, move toggle and swap inputs
    solutionFormToggleDiv.classList.toggle('move')

    if (solutionFormToggleDiv.classList.contains('move')) {
        // Clicked on second toggle

        // Swap active toggles
        solution1Toggle.dataset.active = 'false'
        solution2Toggle.dataset.active = 'true'
        activeSolution = 'solution2'

        // Replace current divNodes with that from other input
        inputValues.divNodes.restrictionArr1 = []
        inputValues.divNodes.setNameArr1 = []
        for (let node of restrictionContainer.children) inputValues.divNodes.restrictionArr1.push(node.cloneNode())
        for (let node of solutionContainer.children) inputValues.divNodes.setNameArr1.push(node.cloneNode())

        // Replace current inputs with that from other input 
        restrictionContainer.innerHTML = ""
        solutionContainer.innerHTML = ""
        for (let node of inputValues.wrap.restrictionArr2.elements.flat()) restrictionContainer.append(node)
        for (let node of inputValues.wrap.setNameArr2.elements.flat()) solutionContainer.append(node)

        // Add wild picker event to wild cubes and set style
        for (let node of restrictionContainer.children) {
            if (node.classList.contains('wild-cube')) {
                node.addEventListener('click', toggleWildPicker)
            }
        }
        for (let node of solutionContainer.children) {
            if (node.classList.contains('wild-cube')) {
                node.addEventListener('click', toggleWildPicker)
            }
        }
        changeWildStyle(inputValues.wildCube.solution2)

        // Replace blank wild card with that from other input
        if (blankWildActive) {
            for (let i = 0; i < blankWildContainer.children.length; i++) {
                if (inputValues.blankWild.solution2[i]) {
                    blankWildContainer.children[i].classList.remove('wild')
                } else {
                    blankWildContainer.children[i].classList.add('wild')
                }
            }
        }

        // Fix row sizes
        if (inputValues.wrap.restrictionArr2.row !== inputValues.wrap.restrictionArr1.row
            && inputValues.wrap.setNameArr2.row !== inputValues.wrap.setNameArr1.row) {
            changeRows(restrictionContainer, inputValues.wrap.restrictionArr2)
            changeRows(solutionContainer, inputValues.wrap.setNameArr2, true)
        } else if (inputValues.wrap.restrictionArr2.row !== inputValues.wrap.restrictionArr1.row) {
            changeRows(restrictionContainer, inputValues.wrap.restrictionArr2)
        } else if (inputValues.wrap.setNameArr2.row !== inputValues.wrap.setNameArr1.row) {
            changeRows(solutionContainer, inputValues.wrap.setNameArr2)
        }
        
        currInput = 'restriction2'
        alignInputNodes()
        currInput = 'setName2'
        alignInputNodes()
        currInput = 'null'

    } else {
        // Clicked on first toggle

        // Swap active toggles
        solution1Toggle.dataset.active = 'true'
        solution2Toggle.dataset.active = 'false'
        activeSolution = 'solution1'

        // Replace current divNodes with that from other input
        inputValues.divNodes.restrictionArr2 = []
        inputValues.divNodes.setNameArr2 = []
        for (let node of restrictionContainer.children) inputValues.divNodes.restrictionArr2.push(node.cloneNode())
        for (let node of solutionContainer.children) inputValues.divNodes.setNameArr2.push(node.cloneNode())

        // Replace current inputs with that from other input 
        restrictionContainer.innerHTML = ""
        solutionContainer.innerHTML = ""
        for (let node of inputValues.wrap.restrictionArr1.elements.flat()) restrictionContainer.append(node)
        for (let node of inputValues.wrap.setNameArr1.elements.flat()) solutionContainer.append(node)

        // Add wild picker event to wild cubes and set style
        for (let node of restrictionContainer.children) {
            if (node.classList.contains('wild-cube')) {
                node.addEventListener('click', toggleWildPicker)
            }
        }
        for (let node of solutionContainer.children) {
            if (node.classList.contains('wild-cube')) {
                node.addEventListener('click', toggleWildPicker)
            }
        }
        changeWildStyle(inputValues.wildCube.solution1)

        // Replace blank wild card with that from other input
        if (blankWildActive) {
            for (let i = 0; i < blankWildContainer.children.length; i++) {
                if (inputValues.blankWild.solution1[i]) {
                    blankWildContainer.children[i].classList.remove('wild')
                } else {
                    blankWildContainer.children[i].classList.add('wild')
                };
            };
        };

        // Fix row sizes
        if (inputValues.wrap.restrictionArr1.row !== inputValues.wrap.restrictionArr2.row &&
        inputValues.wrap.setNameArr1.row !== inputValues.wrap.setNameArr2.row) {
            changeRows(restrictionContainer, inputValues.wrap.restrictionArr1)
            changeRows(solutionContainer, inputValues.wrap.setNameArr1, true)
        } else if (inputValues.wrap.restrictionArr1.row !== inputValues.wrap.restrictionArr2.row) {
            changeRows(restrictionContainer, inputValues.wrap.restrictionArr1)
        } else if (inputValues.wrap.setNameArr1.row !== inputValues.wrap.setNameArr2.row) {
            changeRows(solutionContainer, inputValues.wrap.setNameArr1)
        }

        currInput = 'restriction1'
        alignInputNodes()
        currInput = 'setName1'
        alignInputNodes()
        currInput = 'null'

    };

};

// resizeNewAnswer()
// window.onresize = resizeNewAnswer

function resizeNewAnswer() {
    // DEPRECATED, BUT FIND A WAY TO AVOID ROUNDING ISSUES WITH CARD PLACEMENT
    // MAYBE USE SVG INSTEAD OF DIVS TO CONSTRUCT CARDS
    console.log("DEBUG")
    console.log(document.body.offsetWidth)
    console.log(document.body.getBoundingClientRect().width)
    console.log(newResult.getBoundingClientRect().width)
    console.log(newResult.getBoundingClientRect().x)

    let getCard = document.querySelector(".answer-cards-container .card.double")
    if (getCard) {
        console.log(getCard)
        console.log(getCard.getBoundingClientRect().width)
        console.log(getCard.getBoundingClientRect().x)
    }

    let bodyWidth = document.body.getBoundingClientRect().width
    let newAnswerWidth = Math.round(bodyWidth * .9)
    let leftOffset = Math.round((bodyWidth - newAnswerWidth) / 2)


    newResult.style.width = newAnswerWidth + "px"
    newResult.style.left = leftOffset + "px"
}

submitButton.addEventListener('click', submitInput);
const newResult = document.createElement('div')
const resultBackground = document.createElement('div')
newResult.id = 'new-answer'

resultBackground.id = 'answer-background'
document.body.append(resultBackground)
document.body.append(newResult)

// When clicking on answer background, hide newAnswer and answerBackground
resultBackground.addEventListener('click', function(){
    newResult.classList.remove('shown')
    resultBackground.classList.remove('shown')
})

document.addEventListener('keydown', function(keypress){

    // Apply settings if settings container active
    if (settingsContainer.classList.contains('shown')) {
        applySettings()
    }

    // Hide wild cube if it is open
    if (wildPickerContainer.classList.contains('shown')) {
        hideWildPicker()
        return;
    }

    // Input cube on keypress when keyboard is active
    if (!currInput) return;
    if (keypress.key === 'ArrowLeft' || keypress.key === 'ArrowRight') {
        moveCursor(keypress.key)
    }
    switch (keypress.key) {
        case 'b': inputCube('blue'); break;
        case 'r': inputCube('red'); break;
        case 'g': inputCube('green'); break;
        case 'y': inputCube('yellow'); break;
        case 'u': inputCube('union'); break;
        case 'n': inputCube('intersect'); break;
        case '-': inputCube('subtract'); break;
        case "'": inputCube('not'); break;
        case 'v': inputCube('universe'); break;
        case 'm': inputCube('empty-set'); break;
        case '<': inputCube('must-contain'); break;
        case '=': inputCube('equals'); break;
        case '(': inputCube('left-parenthesis'); break;
        case ')': inputCube('right-parenthesis'); break;
        case 'Backspace': inputCube('backspace'); break;
        case 'Enter': submitInput(); break;
    };
});

function getSelectedCube(width) {
    let selectedCubeIndex, wrap
    switch (currInput) {
        case "restriction1":
            wrap = inputValues.wrap.restrictionArr1;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            break;
        case "setName1":
            wrap = inputValues.wrap.setNameArr1
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            break;
        case "restriction2":
            wrap = inputValues.wrap.restrictionArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            break;
        case "setName2":
            wrap = inputValues.wrap.setNameArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            break;
    }
    let value = width ? wrap.widths : wrap.elements
    let cube = value[selectedCubeIndex.row][selectedCubeIndex.column]
    return cube ? cube : null
}

function inputCube(cube) {

    if (wildPickerContainer.classList.contains('shown')) return;
    let input, flatArray, wrap, selectedCubeIndex
    let isRestriction = false;

    // Determine current input
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            flatArray = inputValues.flatArray.restrictionArr1;
            wrap = inputValues.wrap.restrictionArr1;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            isRestriction = true;
            break;
        case "setName1":
            input = solutionContainer;
            flatArray = inputValues.flatArray.setNameArr1;
            wrap = inputValues.wrap.setNameArr1
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            break;
        case "restriction2":
            input = restrictionContainer;
            flatArray = inputValues.flatArray.restrictionArr2;
            wrap = inputValues.wrap.restrictionArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            isRestriction = true;
            break;
        case "setName2":
            input = solutionContainer;
            flatArray = inputValues.flatArray.setNameArr2;
            wrap = inputValues.wrap.setNameArr2;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            break;
    };

    if (puzzleData.metaData.noRestrictions && isRestriction) {
        notify('No Restriction Cubes Available!', 'red', 'bounce', 1000, '40px', '260px');
        return;
    }

    // Determine inputted cube
    let currCube = null;

    currCube = 2;
    switch (cube) {
        case "blue": currCube = "B"; break;
        case "red": currCube = "R"; break;
        case "green": currCube = "G"; break;
        case "yellow": currCube = "Y"; break;
        case "union": currCube = "U"; break;
        case "intersect": currCube = "∩"; break;
        case "subtract": currCube = "-"; break;
        case "not": currCube = "'"; break;
        case "universe": currCube = "V"; break;
        case "empty-set": currCube = "Ʌ"; break;
        case "must-contain":
            if (!isRestriction) return;
            currCube = "<"; break;
        case "equals":
            if (!isRestriction) return;
            currCube = "="; break;
        case "left-parenthesis": currCube = "("; break;
        case "right-parenthesis": currCube = ")"; break;
        case "backspace":

        const selectedCubeElement = getSelectedCube()

        // If no cubes available, return
        if (!selectedCubeElement) return;

        // Set cube data
        let cubeWidth = 48;
        currCube = selectedCubeElement.dataset.symbol
        if (/[()]/.test(currCube)) cubeWidth = 16;
        
        // Modify row sizes and check lengths
        wrap.values[selectedCubeIndex.row] -= cubeWidth
        checkInputWidth(cubeWidth);
        
        selectedCubeElement.remove()
        return;
    };

    const solutionCube = document.createElement("div");
    solutionCube.classList.add(cube);
    let cubeWidth = 16;
    if (!/[()]/.test(currCube)) {
        cubeWidth = 48
        solutionCube.classList.add("cube", "solution-cube");
    }
    if (currCube === puzzleData.variationsMap.get('wild')) {
        solutionCube.classList.add('wild-cube')
        solutionCube.addEventListener('click', toggleWildPicker)
    }
    solutionCube.dataset.symbol = currCube

    // Add and remove hidden classlist for fade in effect
    solutionCube.classList.add('hidden')

    if (checkInputWidth(cubeWidth, solutionCube)) {
        solutionCube.classList.remove('hidden')
    }
};

function checkInputWidth(cubeWidth, element) {

    let input, selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            wrap = inputValues.wrap.restrictionArr1;
            cursorRow = inputValues.cursorRow.restrictionArr1
            break;
        case "setName1":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            wrap = inputValues.wrap.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1
            break;
        case "restriction2":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            wrap = inputValues.wrap.restrictionArr2;
            cursorRow = inputValues.cursorRow.restrictionArr2
            break;
        case "setName2":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            wrap = inputValues.wrap.setNameArr2;
            cursorRow = inputValues.cursorRow.setNameArr2
            break;
    };

    let case1 = false;
    let containerWidth = input.offsetWidth
    let nodeAnimationDuration = 70;
    let cursorAnimationDuration = [0, 30];
    let frontCursor;

    if (element) {
        
        // Append element if one is passed
        
        // Create index for new cube
        let newRow, newColumn
        
        if (wrap.values[selectedCubeIndex.row] + cubeWidth >= containerWidth - 10) {
            // If current row is too wide, move to next row
            // Also, make sure cursor is not front cursor

            // Maximum solution size
            if (wrap.values[1]) {
                if (wrap.values[1] + cubeWidth >= containerWidth - 10) {
                    if (input === restrictionContainer) {
                        notify(`Restriction is too big!`, 'red', 'bounce', 1000, '40px', '190px')
                    } else {
                        notify(`Solution is too big!`, 'red', 'bounce', 1000, '40px', '170px')
                    };
                    return false;
                }
            }
            
            if (selectedCubeIndex.column === wrap.widths[selectedCubeIndex.row].length - 1) {
                // Selected cube is last fitting cube in row
                newRow = selectedCubeIndex.row + 1
                newColumn = 0
                wrap.values[newRow] += cubeWidth

                if (cursorRow[0] === selectedCubeIndex.row) {
                    // Case where cursor will end up onto next row
                    cursorRow[0]++
                    cursorAnimationDuration = [0, 0]

                    wrap.row++
                    changeRows()
                } else {
                    // Case where cursor is at leftmost position on non-first row
                    
                    let overflowData = preventInputOverflow(selectedCubeIndex.row)
                    cursorAnimationDuration = overflowData[0]
                    nodeAnimationDuration = overflowData[1]
                    frontCursor = overflowData[2]
                }

            } else {
                // Default
                
                let totalWidth = wrap.widths[selectedCubeIndex.row].slice(0, selectedCubeIndex.column + 1).reduce((a, b) => a + b, 0)

                if (totalWidth + cubeWidth >= containerWidth - 10) {
                    // Edge case where cube must move to next row but other objects are in front (i.e. parenthesis that fit)
                    
                    case1 = true

                    newRow = selectedCubeIndex.row
                    newColumn = selectedCubeIndex.column + 1
                    wrap.values[newRow] += cubeWidth

                } else {
                    newRow = selectedCubeIndex.row

                    if (selectedCubeIndex.column === null) {
                         // Special case for first cube
                        newColumn = selectedCubeIndex.column + 0
                    } else {
                        newColumn = selectedCubeIndex.column + 1
                    }
                    wrap.values[newRow] += cubeWidth

                    let overflowData = preventInputOverflow(selectedCubeIndex.row)
                    cursorAnimationDuration = overflowData[0]
                    nodeAnimationDuration = overflowData[1]
                    if (overflowData[2] !== null) frontCursor = overflowData[2]
                }

            }

            // If wrap value does not contain index for spare row, make one
            if (!wrap.values[wrap.row + 1]) wrap.values[wrap.row + 1] = 0
            if (!wrap.widths[wrap.row + 1]) wrap.widths[wrap.row + 1] = []
            if (!wrap.elements[wrap.row + 1]) wrap.elements[wrap.row + 1] = []

        } else if (cursorRow[0] !== selectedCubeIndex.row) {
            // Case where cursor is at leftmost position and cube fits into previous row
            newRow = selectedCubeIndex.row
            newColumn = selectedCubeIndex.column + 1
            wrap.values[newRow] += cubeWidth

            frontCursor = true;
        } else if (selectedCubeIndex.column === null) {
            // Case where no cubes in input yet
            newRow = selectedCubeIndex.row
            newColumn = 0;
            wrap.values[newRow] += cubeWidth
        } else {
            // Default, new index is 1 column to the right of current selected cube
            newRow = selectedCubeIndex.row
            newColumn = selectedCubeIndex.column + 1
            wrap.values[newRow] += cubeWidth
        }

        // Add new cube into wrap indexes
        wrap.widths[newRow].splice(newColumn, 0, cubeWidth)
        wrap.elements[newRow].splice(newColumn, 0, element)

        // Set position
        let totalWidth = (wrap.values[newRow])
        let leftBound = (containerWidth - totalWidth + cubeWidth) / 2
        // Offset is sum of widths up to column
        let offset = wrap.widths[newRow].slice(0, newColumn).reduce((a, b) => a + b, 0)
        let position = leftBound + offset

        element.dataset.offset = offset
        element.dataset.row = newRow
        element.dataset.cursorOffset = 0
        element.style.top = 2 + (newRow * 50) + "px"
        element.style.left = position + "px";

        // Edge case where cube must move to next row but other objects are in front (i.e. parenthesis that fit)

        if (case1) {

            cursorRow[0]++

            let overflowData = preventInputOverflow(selectedCubeIndex.row)
            cursorAnimationDuration = overflowData[0]
            nodeAnimationDuration = overflowData[1]
            if (overflowData[2] !== null) frontCursor = overflowData[2]

            newRow = selectedCubeIndex.row + 1
            newColumn = 0

            for (let i = 1; i < wrap.elements[cursorRow[0]].length; i++) {
                wrap.elements[cursorRow[0]][i].dataset.cursorOffset = 6
            }

        }

        cursor.style.top = 8 + (newRow * 50) + "px"

        input.append(element)
        selectedCubeIndex.row = newRow;
        selectedCubeIndex.column = newColumn;

        // Adjust offset for succceeding cubes
        for (let i = newColumn + 1; i < wrap.elements[newRow].length; i++) {
            if (case1) break;
            let element = wrap.elements[newRow][i]
            element.dataset.offset = parseInt(element.dataset.offset) + cubeWidth
        }

    } else {
        // Backspace, Remove element

        // if (wrap.row > 0 && wrap.values[wrap.row] === 0 && boardContainer.offsetHeight > 450) {
        if (wrap.row > 0 && wrap.values[wrap.row] === 0) {
            // If current row is empty

            wrap.row--
            cursorRow[0]--
            changeRows()

            wrap.widths[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)
            wrap.elements[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)

            if (selectedCubeIndex.row) {
                selectedCubeIndex.row--
                selectedCubeIndex.column = wrap.elements[wrap.row].length - 1
            }
            else {
                selectedCubeIndex.column = null
            }

            alignCursor(0)
            return;

        }

        cursorAnimationDuration = [0, 70]
        const currCube = getSelectedCube()

        // Remove selected cube from wrap values
        wrap.widths[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)
        wrap.elements[selectedCubeIndex.row].splice(selectedCubeIndex.column, 1)

        // Adjust offset for succceeding cubes
        for (let i = selectedCubeIndex.column; i < wrap.elements[selectedCubeIndex.row].length; i++) {
            wrap.elements[selectedCubeIndex.row][i].dataset.offset -= cubeWidth
        }

        if (selectedCubeIndex.column) {

            if (selectedCubeIndex.row !== cursorRow[0]) {
                // If cursor was at leftmost position of next row

                let remainingSpace = (containerWidth - 10) - (wrap.values[selectedCubeIndex.row])
                let nextCubeWidth = wrap.widths[selectedCubeIndex.row + 1][0]
                if (nextCubeWidth && nextCubeWidth < remainingSpace) {
                    // Default, move cursor to rightmost position of current row
                    let cursorOffset = parseInt(currCube.dataset.offset) + 2
                    let leftBound = (containerWidth - (wrap.values[selectedCubeIndex.row] + cubeWidth)) / 2
                    position = leftBound + cursorOffset + cubeWidth

                    cursor.animate(
                        [{ left: position + "px" }], {
                        fill: 'forwards',
                        duration: 0,
                        easing: 'ease',
                    });
                    cursor.style.top = 8 + (cursorRow[0] * 50) + "px"
                    // Then, let it animate to desired position with align cursor
                    for (let node of wrap.elements[cursorRow[0]]) { node.dataset.cursorOffset = 0 }
                    cursorRow[0]--
                } else {
                    // Not enough room to move next row cube into row, activate frontCursor
                    selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length
                    frontCursor = true;
                }

            }

            // Default, move selected cube to the left
            selectedCubeIndex.column--

        } else if (selectedCubeIndex.row) {
            // If deleted cube is first of its row, set position accordingly and activate frontCursor
            selectedCubeIndex.row--
            selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length - 1
            frontCursor = true;
        } else {
            // Else deleted cube was first cube
            selectedCubeIndex.row = 0
            selectedCubeIndex.column = null
            frontCursor = true;

        }

        let fillData = fillEmptyInputSpace(selectedCubeIndex.row)
        cursorAnimationDuration = fillData[0]
        nodeAnimationDuration = fillData[1]
        if (fillData[2] !== null) frontCursor = fillData[2]

    };
    // console.log(selectedCubeIndex)
    // console.log(wrap.elements)
    // console.log(wrap.widths)
    // console.log(cursorRow)

    alignCursor(cursorAnimationDuration, frontCursor)
    alignInputNodes(nodeAnimationDuration)

    return true;
}

// window.onresize = () => {
//     alignNodes()
//     alignCursor()
// }

function alignInputNodes(duration = 70, rows = []) {

    let input, wrap
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            wrap = inputValues.wrap.restrictionArr1;
            break;
        case "setName1":
            input = solutionContainer;
            wrap = inputValues.wrap.setNameArr1
            break;
        case "restriction2":
            input = restrictionContainer;
            wrap = inputValues.wrap.restrictionArr2;
            break;
        case "setName2":
            input = solutionContainer;
            wrap = inputValues.wrap.setNameArr2;
            break;
    };

    let containerWidth = input.offsetWidth

    for (let node of input.children) {

        if (node.id === 'cursor') continue;
        if (rows.includes(parseInt(node.dataset.row))) return // Future feature for optimization

        let row = parseInt(node.dataset.row)
        let leftBound = (containerWidth - wrap.values[row]) / 2
        let position = leftBound + parseInt(node.dataset.offset) + parseInt(node.dataset.cursorOffset)

        node.animate(
            [{ left: position + "px" }], {
            fill: 'forwards',
            duration: duration,
            easing: 'ease',
        });
        node.animate(
            [{ top: (50 * row) + 2 + "px" }], {
            fill: 'forwards',
            duration: duration,
            easing: 'ease',
        });
    };
}

function preventInputOverflow(startIndex) {

    let input, selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            wrap = inputValues.wrap.restrictionArr1;
            cursorRow = inputValues.cursorRow.restrictionArr1
            break;
        case "setName1":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            wrap = inputValues.wrap.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1
            break;
        case "restriction2":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            wrap = inputValues.wrap.restrictionArr2;
            cursorRow = inputValues.cursorRow.restrictionArr2
            break;
        case "setName2":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            wrap = inputValues.wrap.setNameArr2;
            cursorRow = inputValues.cursorRow.setNameArr2
            break;
    };

    let containerWidth = input.offsetWidth
    let cursorAnimationDuration = [0, 30];
    let nodeAnimationDuration = 120;
    let frontCursor = null;

    if (startIndex === undefined) {
        startIndex = 0
        defaultBehavior = true;
    }

    // Have extra cubes move into new row cubes
    for (let i = startIndex; i < wrap.elements.length - 1; i++) {

        let overflowAmount = (wrap.values[i]) - (containerWidth - 10)

        if (overflowAmount >= 0 && i === wrap.row) {
            wrap.row++
            changeRows()
        }
        
        while (overflowAmount >= 0) {

            let width = wrap.widths[i].pop()
            overflowAmount -= width

            let element = wrap.elements[i].pop()
            let newRow = parseInt(element.dataset.row) + 1
            let offset = 0
            wrap.values[i] -= width
            wrap.elements[i + 1].unshift(element)
            wrap.widths[i + 1].unshift(width)

            for (let j = 0; j < wrap.elements[i + 1].length; j++) {
                let element = wrap.elements[i + 1][j]
                element.dataset.offset = parseInt(element.dataset.offset) + width
            }

            element.dataset.row = newRow
            element.dataset.offset = offset
            element.dataset.cursorOffset = 0
            // nodeAnimationDuration = 70;
            wrap.values[i + 1] += width

            // Moves next row if selected cube does not fit onto row
            if (selectedCubeIndex.column === wrap.elements[selectedCubeIndex.row].length - 1) {
                // Ensure this doesn't happen if cursor is on leftmost position of row
                if (selectedCubeIndex.row === cursorRow[0]) {
                    cursorRow[0]++
                    cursorAnimationDuration = [100, 100];
                    frontCursor = true
                    for (let node of wrap.elements[cursorRow[0]]) { node.dataset.cursorOffset = 6 }
                    nodeAnimationDuration = 100
                };
            };

        };
    };

    return [cursorAnimationDuration, nodeAnimationDuration, frontCursor]

};

function fillEmptyInputSpace(startIndex) {

    let input, selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            wrap = inputValues.wrap.restrictionArr1;
            cursorRow = inputValues.cursorRow.restrictionArr1
            break;
        case "setName1":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            wrap = inputValues.wrap.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1
            break;
        case "restriction2":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            wrap = inputValues.wrap.restrictionArr2;
            cursorRow = inputValues.cursorRow.restrictionArr2
            break;
        case "setName2":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            wrap = inputValues.wrap.setNameArr2;
            cursorRow = inputValues.cursorRow.setNameArr2
            break;
    };
    let containerWidth = input.offsetWidth
    let cursorAnimationDuration = [0, 70];
    let nodeAnimationDuration = 120;
    let frontCursor = null;

    if (startIndex === undefined) {
        startIndex = 0;
        defaultBehavior = true
    }

    // Have subsequent cubes fill in remaining space
    for (let i = startIndex; i < wrap.elements.length - 1; i++) {

        // Break if no subsequent cubes
        if (!wrap.widths[i + 1][0]) break;

        let remainingSpace = (containerWidth - 10) - (wrap.values[i])
        while (wrap.widths[i + 1][0] < remainingSpace) {

            let width = wrap.widths[i + 1].shift()
            remainingSpace -= width

            let offset = wrap.widths[i].reduce((a, b) => a + b, 0)

            let element = wrap.elements[i + 1].shift()
            wrap.values[i + 1] -= width
            wrap.elements[i].push(element)
            wrap.widths[i].push(width)

            let newRow = parseInt(element.dataset.row) - 1
            element.dataset.row = newRow
            element.dataset.offset = offset
            if (newRow === cursorRow[0]) {
                element.dataset.cursorOffset = 6
            };
            nodeAnimationDuration = 100;
            wrap.values[i] += width

            for (let j = 0; j < wrap.elements[i + 1].length; j++) {
                wrap.elements[i + 1][j].dataset.offset -= width
            }

            // Moves cursor to previous row when cubes behind cursor get realigned to previous row
            if (selectedCubeIndex.row !== cursorRow[0] && selectedCubeIndex.column < wrap.elements[i].length) {
                for (let node of wrap.elements[cursorRow[0]]) { node.dataset.cursorOffset = 0 }
                cursorRow[0]--
                cursorAnimationDuration = [0, 0];
                frontCursor = false
            }

            // Next row becomes empty
            if (!wrap.elements[i + 1].length) {
                wrap.row--
                changeRows()
            }
        }
    }

    return [cursorAnimationDuration, nodeAnimationDuration, frontCursor]

}

function moveCursor(key) {
    let selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            wrap = inputValues.wrap.restrictionArr1;
            cursorRow = inputValues.cursorRow.restrictionArr1
            break;
        case "setName1":
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            wrap = inputValues.wrap.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1
            break;
        case "restriction2":
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            wrap = inputValues.wrap.restrictionArr2;
            cursorRow = inputValues.cursorRow.restrictionArr2
            break;
        case "setName2":
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            wrap = inputValues.wrap.setNameArr2;
            cursorRow = inputValues.cursorRow.setNameArr2
            break;
    };
    let frontCursor;
    let cursorAnimationDuration = [0, 100]
    let fixRow = [];

    if (key === 'ArrowLeft') {
        // Left Arrow

        if (selectedCubeIndex.row !== cursorRow[0]) {
            // Move cursor up a row
            cursorAnimationDuration = [0, 0];
            fixRow.push(cursorRow[0])
            cursorRow[0]--
        }

        if (selectedCubeIndex.column > 0) {
            // Default, move left
            selectedCubeIndex.column--
        } else if (selectedCubeIndex.row) {
            // If not on first row, to leftmost spot of current row
            selectedCubeIndex.row--
            selectedCubeIndex.column = wrap.elements[selectedCubeIndex.row].length - 1
            frontCursor = true
        } else {
            // If on first row, move to leftmost position
            selectedCubeIndex.row = 0
            selectedCubeIndex.column = null
            frontCursor = true
        };

    } else {
        // Right arrow

        if (selectedCubeIndex.column === null) {
            // If cursor is in leftmost position, move to the right of first cube if it exists
            if (wrap.elements[0].length) {
                selectedCubeIndex.column = 0
            }
        } else if (selectedCubeIndex.column + 2 < wrap.elements[selectedCubeIndex.row].length) {
            // Default, move right
            selectedCubeIndex.column++
        } else if (wrap.elements[selectedCubeIndex.row + 1].length) {
            // Move onto next row if available
            if (selectedCubeIndex.column + 2 === wrap.elements[selectedCubeIndex.row].length) {
                // If cursor reaches position before rightmost position, move onto leftmost spot of next row
                // Selected cube will still be rightmost cube of current row
                selectedCubeIndex.column++
                fixRow.push(cursorRow[0])
                cursorRow[0]++
                cursorAnimationDuration = [0, 0];
                frontCursor = true;
            } else {
                // If cursor is already on next row, set selected cube to be first cube on next row
                selectedCubeIndex.row++
                selectedCubeIndex.column = 0
            }
        } else if (selectedCubeIndex.column + 1 < wrap.elements[selectedCubeIndex.row].length) {
            // If on last row, move to rightmost spot of last cube
            selectedCubeIndex.column++
        };

    };

    alignCursor(cursorAnimationDuration, frontCursor)

    for (let row of fixRow) {
        for (let node of wrap.elements[row]) {
            node.dataset.cursorOffset = 0
        }
    }

    if (frontCursor) {
        for (let node of wrap.elements[cursorRow[0]]) {
            node.dataset.cursorOffset = 6
        }
    } else {
        for (let i = 0; i < wrap.elements[selectedCubeIndex.row].length; i++) {
            if (i <= selectedCubeIndex.column) {
                wrap.elements[selectedCubeIndex.row][i].dataset.cursorOffset = 0;
            } else {
                wrap.elements[selectedCubeIndex.row][i].dataset.cursorOffset = 6;
            }
        }
    }

    alignInputNodes(120)

}

function alignCursor(duration = [0, 30], frontCursor) {

    let input, selectedCubeIndex, wrap, cursorRow
    switch (currInput) {
        case "restriction1":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr1
            wrap = inputValues.wrap.restrictionArr1;
            cursorRow = inputValues.cursorRow.restrictionArr1[0]
            break;
        case "setName1":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr1
            wrap = inputValues.wrap.setNameArr1
            cursorRow = inputValues.cursorRow.setNameArr1[0]
            break;
        case "restriction2":
            input = restrictionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.restrictionArr2
            wrap = inputValues.wrap.restrictionArr2;
            cursorRow = inputValues.cursorRow.restrictionArr2[0]
            break;
        case "setName2":
            input = solutionContainer;
            selectedCubeIndex = inputValues.selectedCubeIndex.setNameArr2
            wrap = inputValues.wrap.setNameArr2;
            cursorRow = inputValues.cursorRow.setNameArr2[0]
            break;
    };

    let containerWidth = input.offsetWidth

    if (frontCursor) {
        let cursorLeftBound = (containerWidth - wrap.values[cursorRow]) / 2
        let cursorPosition = cursorLeftBound + 2
        cursor.animate(
            [{ top: 8 + cursorRow * 50 + "px" }], {
            fill: 'forwards',
            duration: duration[0],
            easing: 'ease',
        });
        cursor.animate(
            [{ left: cursorPosition + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });

        cursor.classList.remove('blink-animation')
        void cursor.offsetWidth;
        cursor.classList.add('blink-animation')
        return;
    }

    if (getSelectedCube() === null) {
        let cursorPosition = (containerWidth / 2) + 2
        cursor.animate(
            [{ top: 8 + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });
        cursor.animate(
            [{ left: cursorPosition + "px" }], {
            fill: 'forwards',
            duration: duration[1],
            easing: 'ease',
        });

        cursor.classList.remove('blink-animation')
        void cursor.offsetWidth;
        cursor.classList.add('blink-animation')
        return;
    }

    let cursorLeftBound = (containerWidth - wrap.values[selectedCubeIndex.row]) / 2
    let cursorOffset = parseInt(getSelectedCube().dataset.offset) + 2
    let cubeWidth = getSelectedCube('width')
    let cursorPosition = cursorLeftBound + cursorOffset + cubeWidth

    cursor.animate(
        [{ top: 8 + (selectedCubeIndex.row * 50) + "px" }], {
        fill: 'forwards',
        duration: duration[0],
        easing: 'ease',
    });
    cursor.animate(
        [{ left: cursorPosition + "px" }], {
        fill: 'forwards',
        duration: duration[1],
        easing: 'ease',
    });

    // Reset cursor animation
    cursor.classList.remove('blink-animation')
    void cursor.offsetWidth;
    cursor.classList.add('blink-animation')
}

function changeRows(element, wrap, dontAnimateBoard, totalRows) {

    if (!wrap) {
        switch (currInput) {
            case "restriction1":
                element = restrictionContainer
                wrap = inputValues.wrap.restrictionArr1;
                totalRows = inputValues.wrap.setNameArr1.row + inputValues.wrap.restrictionArr1.row
                break;
            case "setName1":
                element = solutionContainer
                wrap = inputValues.wrap.setNameArr1
                totalRows = inputValues.wrap.setNameArr1.row + inputValues.wrap.restrictionArr1.row
                break;
            case "restriction2":
                element = restrictionContainer
                wrap = inputValues.wrap.restrictionArr2;
                totalRows = inputValues.wrap.setNameArr2.row + inputValues.wrap.restrictionArr2.row
                break;
            case "setName2":
                element = solutionContainer
                wrap = inputValues.wrap.setNameArr2;
                totalRows = inputValues.wrap.setNameArr2.row + inputValues.wrap.restrictionArr2.row
                break;
        };
    } else {
        if (activeSolution === 'solution1') {
            totalRows = inputValues.wrap.setNameArr1.row + inputValues.wrap.restrictionArr1.row
        } else {
            totalRows = inputValues.wrap.setNameArr2.row + inputValues.wrap.restrictionArr2.row
        }
    };
    let elementHeight, parentHeight, boardHeight;
    elementHeight = 52 + 50 * wrap.row + "px"
    parentHeight = 90 + 50 * wrap.row + "px"
    boardHeight = 540 + 50 * totalRows + "px"
    element.animate(
        [{height: elementHeight}], {
            fill: 'forwards',
            duration: 100,
            easing: 'ease',
    });
    element.parentNode.animate(
        [{height: parentHeight}], {
            fill: 'forwards',
            duration: 100,
            easing: 'ease',
    });
    if (dontAnimateBoard) return;
    boardContainer.animate(
        [{height: boardHeight}], {
            fill: 'forwards',
            duration: 100,
            easing: 'ease',
    });
}

// const testDiv = document.createElement('div')
// testDiv.style.cssText = 'height: 50px; width: 50px; background-color: red; position: absolute; left: 40px; top: 50px'
// const testDiv2 = document.createElement('div')
// testDiv2.style.cssText = 'height: 50px; width: 50px; background-color: red; position: absolute; left: 100px; top: 50px'
// testDiv.addEventListener('click', () => {notify('Incorrect!', 'green', 'bounce', null, null, null, 1)})
// testDiv2.addEventListener('click', () => {notify('Incorrect!', 'green', 'bounce', null, null, null, 2)})
// document.body.append(testDiv, testDiv2)
const notification = document.createElement('div')
notification.classList.add('notification')
// const notificationText = document.createElement('p')
// notification.append(notificationText)

function notify(message, color, animation, duration = 1500, height, width, extraContent) {
    notification.getAnimations().forEach(val => val.cancel())
    notification.innerText = message
    switch (color) {
        case 'red': notification.style.backgroundColor = 'rgb(204, 65, 60)'; break;
        case 'green': notification.style.backgroundColor = 'rgb(51, 186, 65)'; break;
    }
    notification.style.height = height
    notification.style.width = width
    document.body.append(notification)
    if (animation === 'bounce') {
        notification.animate(
            [
            {top: 0, opacity: 0, easing: 'ease',},
            {top: 72 + 'px', opacity: 1, offset: 0.4, easing: 'ease',},
            {top: 68 + 'px', opacity: 1, offset: 0.8, easing: 'ease',},
            {top: 70 + 'px', opacity: 1, easing: 'ease',}
            ], {
            fill: "forwards",
            duration: 350,
        });
    }
    // if (extraContent) {
    //     console.log(extraContent)
    //     const newContent = document.createElement(extraContent.type)
    //     newContent.style.marginLeft = '5px'
    //     // newContent.style.width = '0px'
    //     newContent.classList.add('extra-content')
    //     newContent.innerText = extraContent.content
    //     notification.append(newContent)
    // }
    if (duration === 'persistent') return;
    notification.animate(
        [
        {top: 0, opacity: 1, easing: 'ease',},
        {top: 72 + 'px', opacity: 1, offset: 0.4, easing: 'ease',}
        ], {
        fill: "forwards",
        duration: 300,
        direction: 'reverse',
        delay: duration,
    });
}

// Map/Card Toggle
let universeAnimationIntervals = []
universeHeaderToggle.addEventListener('click', (e) => {
    if (e.target.dataset.active === 'true') {
        // Clicked on active toggle
        return
    }
    universeToggleDiv.classList.toggle('move')

    if (universeToggleDiv.classList.contains('move')) {
        // Clicked on map toggle
        universeCardsToggle.dataset.active = 'false'
        universeMapToggle.dataset.active = 'true'

        setTimeout(function() {
            cardsContainer.style.display = 'none'
            mapContainer.style.display = 'flex'
            universeMapToolbox.style.display = 'flex'
        }, 60)

        cardsContainer.animate( 
            [{opacity: '0'}], {
            easing: 'ease',
            fill: "forwards",
            duration: 60,
        });
        mapContainer.animate(
            [
            {opacity: '0', offset: 0.7},
            {opacity: '1'},
            ], {
            easing: 'ease',
            fill: "forwards",
            duration: 150,
        });
        universeMapToolbox.animate(
            [
            {opacity: '0', offset: 0.7},
            {opacity: '1'},
            ], {
            easing: 'ease',
            fill: "forwards",
            duration: 150,
        });
        universeContainer.animate(
            [
            {width: `min(97%, ${universeSize.cardsWidth}px`, height: universeSize.cardsHeight + 'px', offset: 0.2},
            {width: `min(97%, ${universeSize.mapWidth}px)`, height: '352px'},
            ], {
            easing: 'cubic-bezier(.01,.86,.72,1.01)',
            fill: "forwards",
            duration: 200,
        });

    } else {
        // Clicked on cards toggle
        universeCardsToggle.dataset.active = 'true'
        universeMapToggle.dataset.active = 'false'

        setTimeout(function() {
            cardsContainer.style.display = 'grid'
            mapContainer.style.display = 'none'
            universeMapToolbox.style.display = 'none'
        }, 60)
        mapContainer.animate(
            [{opacity: '0'}], {
            easing: 'ease',
            fill: "forwards",
            duration: 60,
        });
        universeMapToolbox.animate(
            [{opacity: '0'}], {
            easing: 'ease',
            fill: "forwards",
            duration: 60,
        });
        cardsContainer.animate(
            [
            {opacity: '0', offset: 0.7},
            {opacity: '1'},
            ], {
            easing: 'ease',
            fill: "forwards",
            duration: 150,
        });
        universeContainer.animate(
            [
            {width: `min(97%, ${universeSize.mapWidth}px)`, height: '352px', offset: 0.2},
            {width: `min(97%, ${universeSize.cardsWidth}px`, height: universeSize.cardsHeight + 'px'},
            ], {
            easing: 'cubic-bezier(.01,.86,.72,1.01)',
            fill: "forwards",
            duration: 200,
        });
    }
});

function submitInput() {
    try {
        console.log(puzzleData)
        let universe = puzzleData.universe
        let setNameArr1, setNameArr2, restrictionArr1, restrictionArr2;
        for (let i = 0; i < 4; i++) {
            let array = []
            switch (i) {
                case 0: 
                    input = inputValues.wrap.restrictionArr1.elements.flat();
                    for (let node of input) {array.push(node.dataset.symbol)}
                    restrictionArr1 = array.join("")
                    break;
                case 1: 
                    input = inputValues.wrap.setNameArr1.elements.flat(); 
                    for (let node of input) {array.push(node.dataset.symbol)}
                    setNameArr1 = array.join("")
                    break;
                case 2: 
                    input = inputValues.wrap.restrictionArr2.elements.flat(); 
                    for (let node of input) {array.push(node.dataset.symbol)}
                    restrictionArr2 = array.join("")
                    break;
                case 3:
                    input = inputValues.wrap.setNameArr2.elements.flat(); 
                    for (let node of input) {array.push(node.dataset.symbol)}
                    setNameArr2 = array.join("")
                    break;
            };
        }
        
        // Pre-calculation Validation
        if (!setNameArr1.length) {
            notify('Input a Solution!', 'red', 'bounce', 1000, '', '160px'); 
            console.log('NO SOLUTION 1'); return;
        } else if (!restrictionArr1.length && !puzzleData.metaData.noRestrictions) {
            notify('Input a Restriction!', 'red', 'bounce', 1000, '', '170px');
            console.log('NO RESTRICTION 1'); return;
        } else if (twoSolutionsActive && !setNameArr2.length) {
            notify('Input a Solution!', 'red', 'bounce', 1000, '', '160px');
            console.log('NO SOLUTION 2'); return;
        } else if (twoSolutionsActive && !restrictionArr2.length && !puzzleData.metaData.noRestrictions) {
            notify('Input a Restriction!', 'red', 'bounce', 1000, '', '170px');
            console.log('NO RESTRICTION 2'); return;
        }
        
        if (!/[<=]/.test(restrictionArr1) || (!/[<=]/.test(restrictionArr2) && twoSolutionsActive)) {
            if (!puzzleData.metaData.noRestrictions) {
                notify('Invalid Restriction!', 'red', 'bounce', 1000, '', '160px');
                console.log('Restriction has no restriction'); return;
            }
        }

        for (let i = 1; i <= 4; i++) {
            let input
            switch (i) {
                case 1: input = restrictionArr1; break;
                case 2: input = setNameArr1; break;
                case 3: input = restrictionArr2; break;
                case 4: input = setNameArr2; break;
            };
            let leftParenthesis = (input.match(/\(/g) || []).length
            let rightParenthesis = (input.match(/\)/g) || []).length
            if (leftParenthesis !== rightParenthesis) {
                console.log(i)
                notify('Invalid Input, Check Parenthesis!', 'red', 'bounce', 1600, '', '270px')
                console.log('Mistmatched Parenthesis'); return;
            };
        };
        
        // Prepratory functions
        console.group("SUBMITTING INPUT:")
        function translateBRGY(val) {
            switch (val) {
                case "B": return universe.filter(val => /B/.test(val));
                case "R": return universe.filter(val => /R/.test(val));
                case "G": return universe.filter(val => /G/.test(val));
                case "Y": return universe.filter(val => /Y/.test(val));
                case "V": return universe;
                case "Ʌ": return [];
                default: return val;
            };
        };
        
        function setOperation(arr) {
            let val1 = translateBRGY(arr[0]);
            let val2 = translateBRGY(arr[2]);
            switch (arr[1]) {
                case "U":
                return val1.concat(val2.filter(val => !val1.includes(val)));
                case "∩":
                return val1.filter(val => val2.includes(val));
                case "-":
                if (puzzleData.variationsMap.get('symmetricDifference') && calcSymmetricDifference) {
                    return val1.filter(val => !val2.includes(val)).concat(val2.filter(val => !val1.includes(val)))
                } else {
                    return val1.filter(val => !val2.includes(val));
                };
            };
        };
                    
        function calcSet(arr) {
            if (arr.length === 1) {
                return translateBRGY(...arr)   
            } else if (arr.length == 3) {
                return setOperation([arr[0], arr[1], arr[2]]);
            } else if (arr.length > 3) {
                return calcSet([setOperation(arr.slice(0, 3)), arr[3], ...arr.slice(4, arr.length)])
            };
        };
        
        function parseInput(arr) {
            let index = [0];
            let parsedArr = [];
            for (let i = 0; i < arr.length; i++) {
                let currPosition = parsedArr
                for (let i = 0; i < index.length - 1; i++) currPosition = currPosition[index[i]]
                if (arr[i] === "(") {
                    currPosition[index[index.length - 1]] = [];
                    index.push(0)
                } else if (arr[i] === ")") {
                    index.pop()
                    currPosition = parsedArr;
                    for (let i = 0; i < index.length - 1; i++) currPosition = currPosition[index[i]]
                    currPosition[index[index.length - 1]] = calcSet(currPosition[index[index.length - 1]])
                    index[index.length - 1]++
                } else if (arr[i] === "'") {
                    let previousSetNot = universe.filter(val => !translateBRGY(currPosition[index[index.length - 1] - 1]).includes(val))
                    currPosition[index[index.length - 1] - 1] = previousSetNot;
                } else {
                    currPosition[index[index.length - 1]] = arr[i];
                    index[index.length - 1]++
                };
            };
            return calcSet(parsedArr);
        };
        
        // Parsing inputs
        let solution1Cards = [];
        let solution1SetName = [];
        let solution1RestrictedCards = [];
        let solution2Cards = [];
        let solution2SetName = [];
        let solution2RestrictedCards = [];
        let calcSymmetricDifference = true;

        // Prepare double set
        let doubleIndex = puzzleData.variations.findIndex(val => Object.keys(val)[0] === 'double');
        let doubleSet = []
        if (doubleIndex !== -1) {
            universe = ["BRGY","BRG","BRY","BR","BGY","BG","BY","B","RGY","RG","RY","R","GY","G","Y",""];
            let symmetricDifferenceIndex = puzzleData.variations.indexOf('symmetricDifference')
            console.log(doubleIndex)
            console.log(symmetricDifferenceIndex)
            if (doubleIndex < symmetricDifferenceIndex) calcSymmetricDifference = false;
            doubleSet = parseInput(puzzleData.variations[doubleIndex].double.split(""))
            universe = puzzleData.universe
            if (doubleIndex < symmetricDifferenceIndex) calcSymmetricDifference = true;
        }
        // Prepare Blank Wild
        if (blankWildActive) {
            while (universe.includes("")) universe = deleteFirstArrItem(universe, "")
        }

        console.log('Universe/Double Set/puzzleData.metaData.double')
        console.log(universe)
        console.log(doubleSet)
        console.log(puzzleData.metaData.double)

        // All input calculations happen here:
        let nullRestriction = false;
        for (let i = 0; i <= (twoSolutionsActive); i++) {

            // Add blank wild cards
            let blankWild = ''
            if (blankWildActive) {
                let currBlankCard = i ? inputValues.blankWild.solution2 : inputValues.blankWild.solution1;
                for (let j = 0; j < 4; j++) {
                    if (currBlankCard[j]) {
                        switch (j) {
                            case 0: blankWild += "B"; break;
                            case 1: blankWild += "R"; break;
                            case 2: blankWild += "G"; break;
                            case 3: blankWild += "Y"; break;
                        }
                    }
                }
                universe.push(blankWild)
                if (doubleSet.includes(blankWild)) universe.push(blankWild)
            }
            console.log(universe)
            
            // Unstringify inputs and change wild cubes
            let inputRestriction;
            let inputSetName;
            switch (i) {
                case 0:
                    inputRestriction = restrictionArr1.split("");
                    inputSetName = setNameArr1.split("");
                    break;
                case 1: 
                    inputRestriction = restrictionArr2.split("");
                    inputSetName = setNameArr2.split("");
                    break;
            }
            if (puzzleData.variationsMap.get('wild')) {
                let currWild = puzzleData.variationsMap.get('wild')
                let replacement = i ? inputValues.wildCube.solution2 : inputValues.wildCube.solution1
                inputRestriction = inputRestriction.join("").replaceAll(currWild, translateName(replacement)).split("")
                inputSetName = inputSetName.join("").replaceAll(currWild, translateName(replacement)).split("")
            }
            console.log('inputRestriction/inputSetName')
            console.log(inputRestriction)
            console.log(inputSetName)

            // Format restriction array:
            // ['R', 'U', 'B', '<', 'B'] => [['R', 'U', 'B'], '<', ['B']]
            let formattedRestrictionArr = [[]]
            for (let i = 0; i < inputRestriction.length; i++) {
                if (inputRestriction[i] === "<" || inputRestriction[i] === "=") {
                    formattedRestrictionArr.push(inputRestriction[i]);
                    formattedRestrictionArr.push([])
                } else {
                    formattedRestrictionArr[formattedRestrictionArr.length - 1].push(inputRestriction[i])
                }
            }
            console.log('formattedRestrictionArr')
            console.log(formattedRestrictionArr)

            // Parse restriction and set names
            // Finds cards associated with each set (ex. RUB => ['R', 'B', ...])
            let parsedRestrictionArr = []
            for (let i = 0; i < formattedRestrictionArr.length; i++) {
                if (i % 2 === 1) {
                    parsedRestrictionArr.push(formattedRestrictionArr[i]);
                } else {
                    parsedRestrictionArr.push(parseInput(formattedRestrictionArr[i]));
                };
            };
            let parsedSetName = parseInput(inputSetName)
            console.log('parsedRestrictionArr/parsedSetName')
            console.log(parsedRestrictionArr)
            console.log(parsedSetName)

            // Parse restriction and find restricted cards
            let restrictedCards = [];
            for (let j = 0; j < (formattedRestrictionArr.length - 1) / 2; j++) {
                let operation = parsedRestrictionArr[j * 2 + 1];
                let leftVal = parsedRestrictionArr[j * 2];
                let rightVal = parsedRestrictionArr[j * 2 + 2];
                restrictedCards = restrictedCards.concat(leftVal.filter(val => !rightVal.includes(val)))
                if (operation === "=") restrictedCards = restrictedCards.concat(rightVal.filter(val => !leftVal.includes(val)))
            }
            if (!restrictedCards.length && !puzzleData.metaData.noRestrictions) nullRestriction = true;
            
            // Remove blank wild from universe for next set
            if (blankWildActive) {
                universe = deleteFirstArrItem(universe, blankWild)
                if (doubleSet.includes(blankWild)) universe = deleteFirstArrItem(universe, blankWild)
            }

            // Apply restricted cards to set name and return
            if (i === 0) {
                solution1SetName = parsedSetName
                solution1RestrictedCards = restrictedCards
                solution1Cards = parsedSetName.filter(val => !restrictedCards.includes(val))
            } else if (i === 1) {
                solution2SetName = parsedSetName
                solution2RestrictedCards = restrictedCards
                solution2Cards = parsedSetName.filter(val => !restrictedCards.includes(val))
            }
        }
        console.log('solution1Cards/solution2Cards')
        console.log(solution1Cards)
        console.log(solution2Cards)
        
        // Displaying Answer
        newResult.innerHTML = ''

        // Header
        const answerHeader = document.createElement('div')
        answerHeader.id = 'answer-header'
        const backButton = document.createElement('div')
        backButton.addEventListener('click', () => {resultBackground.click()})
        const newPuzzleButton = document.createElement('div')
        newPuzzleButton.addEventListener('click', () => {
            newPuzzle(queuedPuzzleData)
            resultBackground.click()
        })
        backButton.classList.add('answer-button')
        newPuzzleButton.classList.add('answer-button')
        backButton.innerText = 'Back'
        newPuzzleButton.innerText = 'Next'
        newPuzzleButton.style.marginLeft = 'auto'
        backButton.style.cssText = ''
        answerHeader.append(backButton)
        answerHeader.append(newPuzzleButton)
        newResult.append(answerHeader)
        
        // Content
        const answerContent = document.createElement('div')
        answerContent.id = 'answer-content'

        let title, paragraph = '';

        (function checkInput() {

            title = 'Incorrect:'

            if (!puzzleData.goalValues.includes(solution1Cards.length)) {
                paragraph = `Solution does not evaluate to goal.`
                return;
            } else if (!puzzleData.goalValues.includes(solution2Cards.length) && twoSolutionsActive) {
                paragraph = `Solution does not evaluate to goal.`
                return;
            };

            if (nullRestriction && puzzleData.variationsMsp.get('noNull')) { // NO NULL
                paragraph = `Null Restriction.`
                return;
            }

            function altCalcScore(inputArr) {
                let score = [0, 0, 0, 0, 0, 0, 0, 0]
                for (let x of inputArr) {
                    switch (x) {
                        case "B": score[0]++; break;
                        case "R": score[1]++; break;
                        case "G": score[2]++; break;
                        case "Y": score[3]++; break;
                        case "V": score[4]++; break;
                        case "Ʌ": score[4]++; break;
                        case "U": score[5]++; break;
                        case "∩": score[5]++; break;
                        case "-": score[6]++; break;
                        case "'": score[7]++; break;
                    };
                };
                return score;
            };

            if (puzzleData.variationsMap.get('requiredCube')) { // Required Cube
                if (restrictionArr1.concat(setNameArr1).indexOf(puzzleData.variationsMap.get('requiredCube')) === -1) {
                    paragraph = `Solution does not contain required cube`
                    return;
                };
                if (twoSolutionsActive) {
                    if (restrictionArr2.concat(setNameArr2).indexOf(puzzleData.variationsMap.get('requiredCube')) === -1) {
                        paragraph = `Solution does not contain required cube`
                        return;
                    };
                };
            };

            console.log(requiredContainer.dataset.values)
            console.log(resourcesContainer.dataset.values)
            for (let i = 1; i <= (twoSolutionsActive ? 4 : 2); i++) {

                let currWild = (i <= 2) ? inputValues.wildCube.solution1 : inputValues.wildCube.solution2
                console.log(currWild)
                let requiredValues = requiredContainer.dataset.values
                let resourcesValues = requiredContainer.dataset.values.concat(resourcesContainer.dataset.values)
                if (puzzleData.variationsMap.get('wild')) {
                    requiredValues = requiredValues.replaceAll(puzzleData.variationsMap.get('wild'), translateName(currWild))
                    resourcesValues = resourcesValues.replaceAll(puzzleData.variationsMap.get('wild'), translateName(currWild))
                }
                let requiredScore = altCalcScore(requiredValues)
                let resourcesScore = altCalcScore(resourcesValues)
                let input
                switch (i) {
                    case 1:
                        if (puzzleData.metaData.noRestrictions) continue;
                        input = restrictionArr1; 
                        break;
                    case 2: input = setNameArr1; break;
                    case 3:
                        if (puzzleData.metaData.noRestrictions) continue;
                        input = restrictionArr2; 
                        break;
                    case 4: input = setNameArr2; break;
                };
        
                if (puzzleData.variationsMap.get('wild')) {
                    input = input.replaceAll(puzzleData.variationsMap.get('wild'), translateName(currWild))
                }
                console.log(input)
                let inputScore = altCalcScore(input)
                console.log(inputScore)
                console.log(requiredScore)
                
                for (let j = 0; j < requiredScore.length; j++) {
                    let min = requiredScore[j]
                    let max = resourcesScore[j]
                    let curr = inputScore[j]
                    if (curr < min) {
                        console.log(i)
                        console.log("LOG")
                        paragraph = `Required cubes missing from solution.`
                        return;
                    };
    
                    if (curr > max) {
                        if (j >= 5 && max !== 0) continue;
                        let extraCube;
                        switch (j) {
                            case 0: extraCube = 'Blue'; break
                            case 1: extraCube = 'Red'; break
                            case 2: extraCube = 'Green'; break
                            case 3: extraCube = 'Yellow'; break
                            case 4: 
                                let arr = []
                                if (input.includes("V")) arr.push('"Universe"')
                                if (input.includes("Ʌ")) arr.push('"Empty-Set"')
                                extraCube = arr[getRandomInt(0, arr.length - 1)];
                                break;
                            case 5:
                                let arr2 = []
                                if (input.includes("U")) arr2.push('"Or"')
                                if (input.includes("∩")) arr2.push('"And"')
                                extraCube = arr2[getRandomInt(0, arr2.length - 1)];
                                break;
                            case 6: extraCube = '"Minus"'
                            case 7: extraCube = '"Not"'
                        }
                        if (max === 0) {
                            paragraph = `Resources does not contain a ${extraCube} cube.`
                            return;
                        } else {
                            paragraph = `${i % 2 == 0 ? 'Set Name' : 'Restriction'} has too many ${extraCube} cubes.`
                            return;
                        };
                    };
                };
            };

        if (solution1Cards === solution2Cards) {
            paragraph = `Both solutions cannot contain the same cards.`
            return;
        }

        if (puzzleData.variationsMap.get('requiredCard') !== undefined) {
            if (!solution1Cards.includes(puzzleData.variationsMap.get('requiredCard'))) {
                paragraph = `Solution does not contain required card.`
                return;
            };
            if (twoSolutionsActive && !solution2Cards.includes(puzzleData.variationsMap.get('requiredCard'))) {
                paragraph = `Solution does not contain required card.`
                return;
            };
        };
        if (puzzleData.variationsMap.get('forbiddenCard') !== undefined) {
            if (solution1Cards.includes(puzzleData.variationsMap.get('forbiddenCard'))) {
                paragraph = `Solution contains forbidden card.`
                return;
            };
            if (twoSolutionsActive && solution2Cards.includes(puzzleData.variationsMap.get('forbiddenCard'))) {
                paragraph = `Solution contains forbidden card.`
                return;
            };
        };
            title = 'Correct!'
        })();

        // Result Info
        const inputResult = document.createElement('div')
        inputResult.id = 'input-result'
        answerContent.append(inputResult)
        if (title === 'Correct!') inputResult.classList.add('correct')

        const resultTitle = document.createElement('h2')
        resultTitle.innerText = title
        inputResult.append(resultTitle)
        if (paragraph.length) {
            const resultParagraph = document.createElement('p');
            resultParagraph.innerText = paragraph
            inputResult.append(resultParagraph)
        }

        // Title
        const titleNode = document.createElement('h2')
        titleNode.innerText = 'Your Solution'
        answerContent.append(titleNode)

        // Toggle (2 Solutions)
        
        if (twoSolutionsActive) {

            const answerToggleContainer = document.createElement('div')
            answerToggleContainer.id = 'answer-toggle-container-1'
            answerToggleContainer.classList.add('answer-toggle-container')
            const answerLeftToggle = document.createElement('div')
            const answerRightToggle = document.createElement('div')
            answerLeftToggle.classList.add('answer-left-toggle')
            answerRightToggle.classList.add('answer-right-toggle')
            answerLeftToggle.innerText = 'Solution 1'
            answerRightToggle.innerText = 'Solution 2'
            answerLeftToggle.dataset.active = 'true';
            answerRightToggle.dataset.active = 'false';
            const answerToggleDiv = document.createElement('div')
            answerToggleDiv.classList.add('answer-toggle-div')
            console.log(inputValues)

            if (solutionFormToggleDiv.classList.contains('move')) {
                inputValues.divNodes.restrictionArr2 = []
                inputValues.divNodes.setNameArr2 = []
                for (let node of restrictionContainer.children) {inputValues.divNodes.restrictionArr2.push(node.cloneNode())}
                for (let node of solutionContainer.children) {inputValues.divNodes.setNameArr2.push(node.cloneNode())}
            } else {
                inputValues.divNodes.restrictionArr1 = []
                inputValues.divNodes.setNameArr1 = []
                for (let node of restrictionContainer.children) {inputValues.divNodes.restrictionArr1.push(node.cloneNode())}
                for (let node of solutionContainer.children) {inputValues.divNodes.setNameArr1.push(node.cloneNode())}
            }

            answerToggleContainer.addEventListener('click', (e) => {

                if (e.target.dataset.active === 'true') {
                    // Clicked on active toggle
                    return
                }

                answerToggleDiv.classList.toggle('move')

                if (answerToggleDiv.classList.contains('move')) {
                    // Clicked on right toggle
                    answerLeftToggle.dataset.active = 'false'
                    answerRightToggle.dataset.active = 'true'
                    inputRestriction.innerHTML = ""
                    inputSetName.innerHTML = ""
                    for (let node of inputValues.wrap.restrictionArr2.elements.flat()) {
                        inputAnswerCube(inputRestriction, node, inputValues.wildCube.solution2)
                    }
                    for (let node of inputValues.wrap.setNameArr2.elements.flat()) {
                        inputAnswerCube(inputSetName, node, inputValues.wildCube.solution2)
                    }
                    evaluationParagraph.innerText = `Your solution evaluates to ${solution2Cards.length} cards:`
                    inputCardSet.innerHTML = ''
                    for (let node of inputCardsArr[1]) inputCardSet.append(node)
                    inputMapContainer.innerHTML = ''
                    inputMapContainer.append(inputMapsArr[1])
                } else {
                    // Clicked on left toggle
                    answerLeftToggle.dataset.active = 'true'
                    answerRightToggle.dataset.active = 'false'
                    inputRestriction.innerHTML = ""
                    inputSetName.innerHTML = ""
                    for (let node of inputValues.wrap.restrictionArr1.elements.flat()) {
                        inputAnswerCube(inputRestriction, node, inputValues.wildCube.solution1)
                    }
                    for (let node of inputValues.wrap.setNameArr1.elements.flat()) {
                        inputAnswerCube(inputSetName, node, inputValues.wildCube.solution1)
                    }
                    evaluationParagraph.innerText = `Your solution evaluates to ${solution1Cards.length} cards:`
                    inputCardSet.innerHTML = ''
                    for (let node of inputCardsArr[0]) inputCardSet.append(node)
                    inputMapContainer.innerHTML = ''
                    inputMapContainer.append(inputMapsArr[0])
                }

            })

            answerToggleContainer.append(answerLeftToggle, answerRightToggle, answerToggleDiv)
            answerContent.append(answerToggleContainer)

        } else {
            inputValues.divNodes.restrictionArr1 = []
            inputValues.divNodes.setNameArr1 = []
            for (let node of restrictionContainer.children) {inputValues.divNodes.restrictionArr1.push(node.cloneNode())}
            for (let node of solutionContainer.children) {inputValues.divNodes.setNameArr1.push(node.cloneNode())}
        }

        // Inputted Solution
        function stringArr(string) {
            let newString
            for (let i = 0; i < string.length; i++) {
                if (string.charAt(i) === '(') {
                    newString += '['
                } else if (string.charAt(i) === ')') {
                    newString += ']'
                } else {
                    newString += `"${string.charAt(i)}"`
                    if (string.charAt(i + 1) !== ')') newString += ','
                }
            }
            return newString;
        }
        function inputAnswerCube(input, cube, currWild) {
            cube.style.left = '0px'
            cube.style.top = '0px'
            input.append(cube.cloneNode())
            if (!puzzleData.variationsMap.get('wild')) return;
            // Give some wild class name 
            const recentCube = input.lastElementChild
            if (recentCube.classList[0] === translateName(puzzleData.variationsMap.get('wild'))) {
                recentCube.classList.replace(recentCube.classList[0], currWild)
            };
        };

        const inputSolutionContainer = document.createElement('div')
        inputSolutionContainer.classList = 'answer-solution-sub-container'

        const inputRestriction = document.createElement('div')
        inputRestriction.classList = 'answer-solution-sub-container'
        const inputSetName = document.createElement('div')
        const bar = document.createElement('div')
        inputSolutionContainer.classList = 'answer-solution-container'
        for (let node of inputValues.wrap.restrictionArr1.elements.flat()) {
            inputAnswerCube(inputRestriction, node, inputValues.wildCube.solution1)
        }
        for (let node of inputValues.wrap.setNameArr1.elements.flat()) {
            inputAnswerCube(inputSetName, node, inputValues.wildCube.solution1)
        }
        if (!puzzleData.metaData.noRestrictions) {
            inputSolutionContainer.append(inputRestriction)
            inputSolutionContainer.append(bar)
        }
        inputSolutionContainer.append(inputSetName)
        answerContent.append(inputSolutionContainer)

        // Input Paragraph
        const evaluationParagraph = document.createElement('p')
        evaluationParagraph.classList.add('evaluation-paragraph')
        evaluationParagraph.innerText = `Your solution evaluates to ${solution1Cards.length} cards:`
        answerContent.append(evaluationParagraph)
        
        // Input Universe (Cards/Map)
        const inputUniverse = document.createElement('div')
        inputUniverse.classList.add('answer-universe-container')
        answerContent.append(inputUniverse)

        // Input Cards
        let inputCardsArr = [[], []]
        const inputCardSet = document.createElement('div')
        inputCardSet.classList.add('answer-cards-container')
        for (let i = 0; i <= (twoSolutionsActive); i++) {

            let solutionSet = i ? solution2Cards : solution1Cards;
            for (let card of cardsContainer.children) {

                const newCard = card.cloneNode(true);
                newCard.classList.remove('flip')
                if (blankWildActive && newCard.dataset.getCard === "") {
                    let blankWildCard = i ? inputValues.blankWild.solution2 : inputValues.blankWild.solution1
                    for (let j = 0; j < blankWildCard.length; j++) {
                        if (blankWildCard[j]) {
                            switch (j) {
                                case 0:
                                    newCard.dataset.getCard += "B";
                                    addColorChild(newCard.firstChild.firstChild, 'blue');
                                    break;
                                case 1:
                                    newCard.dataset.getCard += "R";
                                    addColorChild(newCard.firstChild.firstChild, 'red');
                                    break;
                                case 2:
                                    newCard.dataset.getCard += "G";
                                    addColorChild(newCard.firstChild.firstChild, 'green');
                                    break;
                                case 3:
                                    newCard.dataset.getCard += "Y";
                                    addColorChild(newCard.firstChild.firstChild, 'yellow');
                                    break;
                            }
                        }
                    }
                    if (newCard.dataset.getCard) newCard.classList.add('blank-wild')
                }
                if (!solutionSet.includes(newCard.dataset.getCard)) newCard.classList.add('flip')
                if (doubleSet.includes(newCard.dataset.getCard)) {
                    const cardBorder = document.createElement('div')
                    cardBorder.classList.add('card-border')
                    newCard.firstChild.append(cardBorder)
                    newCard.classList.add('double')
                }
                newCard.classList.add('card');
                inputCardsArr[i].push(newCard)
            };
        };
        for (let node of inputCardsArr[0]) inputCardSet.append(node)
        inputUniverse.append(inputCardSet)

        // Input Map
        let inputMapsArr = []
        const inputMapContainer = document.createElement('div')
        inputMapContainer.classList.add('answer-map-container')
        for (let i = 0; i <= (twoSolutionsActive); i++) {
            if (i === 0) {
                inputMapsArr[0] = createMapTable({
                    isAnswerMap: true,
                    setName: solution1SetName,
                    restriction: solution1RestrictedCards,
                    blankCard: inputValues.blankWild.solution1
                })
            } else if (i === 1) {
                inputMapsArr[1] = createMapTable({
                    isAnswerMap: true,
                    setName: solution2SetName,
                    restriction: solution2RestrictedCards,
                    blankCard: inputValues.blankWild.solution2
                })
            }
        }
        inputMapContainer.append(inputMapsArr[0])
        inputUniverse.append(inputMapContainer)

        // Separate Answer
        const horizontalRule = document.createElement('hr')
        horizontalRule.style.cssText = 'width: 80%;'
        answerContent.append(horizontalRule)
        
        // Computer Title
        const titleNode2 = document.createElement('h2')
        titleNode2.innerText = 'Solution'
        answerContent.append(titleNode2)

        console.log(puzzleData)

        // Calculate Computer Answer
        let computer1SetName
        let computer1RestrictedCards
        let computer1Cards
        let computer2SetName
        let computer2RestrictedCards
        let computer2Cards
        for (let i = 0; i <= (twoSolutionsActive); i++) {
            
            // Get computer inputs
            let computerRestriction = puzzleData.solution[i].restriction ?? [];
            let computerSetName = puzzleData.solution[i].flag;
            console.log('computerRestriction/computerSetName')
            console.log(computerRestriction)
            console.log(computerSetName)

            // Add blank wild cards
            let blankWild = ''
            if (blankWildActive) {
                blankWild = puzzleData.solution[i].blankCard ?? ''
                universe.push(blankWild)
                if (doubleSet.includes(blankWild)) universe.push(blankWild)
            }

            // Parse restriction and set names
            // Finds cards associated with each set (ex. RUB => ['R', 'B', ...])
            let parsedRestrictionArr = []
            for (let i = 0; i < computerRestriction.length; i++) {
                if (i % 2 === 1) {
                    parsedRestrictionArr.push(computerRestriction[i]);
                } else {
                    parsedRestrictionArr.push(parseInput(computerRestriction[i]));
                };
            };
            let parsedSetName = parseInput(computerSetName)
            console.log('parsedRestrictionArr/parsedSetName')
            console.log(parsedRestrictionArr)
            console.log(parsedSetName)

            // Parse restriction and find restricted cards
            let restrictedCards = [];
            for (let j = 0; j < (parsedRestrictionArr.length - 1) / 2; j++) {
                let operation = parsedRestrictionArr[j * 2 + 1];
                let leftVal = parsedRestrictionArr[j * 2];
                let rightVal = parsedRestrictionArr[j * 2 + 2];
                restrictedCards = restrictedCards.concat(leftVal.filter(val => !rightVal.includes(val)))
                if (operation === "=") restrictedCards = restrictedCards.concat(rightVal.filter(val => !leftVal.includes(val)))
            }
            
            // Remove blank wild from universe for next set
            if (blankWildActive) {
                universe = deleteFirstArrItem(universe, blankWild)
                if (doubleSet.includes(blankWild)) universe = deleteFirstArrItem(universe, blankWild)
            }
            
            // Apply restricted cards to set name and return
            if (i === 0) {
                computer1SetName = parsedSetName
                computer1RestrictedCards = restrictedCards
                computer1Cards = parsedSetName.filter(val => !restrictedCards.includes(val))
            } else if (i === 1) {
                computer2SetName = parsedSetName
                computer2RestrictedCards = restrictedCards
                computer2Cards = parsedSetName.filter(val => !restrictedCards.includes(val))
            }
        }

        console.log('computer1Cards/computer2Cards')
        console.log(computer1Cards)
        console.log(computer2Cards)

        // Computer toggle
        if (twoSolutionsActive) {
            const answerToggleContainer = document.createElement('div');
            answerToggleContainer.id = 'answer-toggle-container-1'
            answerToggleContainer.classList.add('answer-toggle-container');
            const answerLeftToggle = document.createElement('div');
            const answerRightToggle = document.createElement('div');
            answerLeftToggle.classList.add('answer-left-toggle');
            answerRightToggle.classList.add('answer-right-toggle');
            answerLeftToggle.innerText = 'Solution 1'
            answerRightToggle.innerText = 'Solution 2'
            answerLeftToggle.dataset.active = 'true'
            answerRightToggle.dataset.active = 'false'
            const answerToggleDiv = document.createElement('div');
            answerToggleDiv.classList.add('answer-toggle-div');
            console.log(inputValues)
            answerToggleContainer.addEventListener('click', (e) => {
                if (e.target.dataset.active === 'true') {return}
                answerToggleDiv.classList.toggle('move')
                if (answerToggleDiv.classList.contains('move')) {
                    // Clicked on second toggle
                    answerLeftToggle.dataset.active = 'false'
                    answerRightToggle.dataset.active = 'true'
                    computerRestriction.innerHTML = ''
                    computerSetName.innerHTML = ''
                    for (let node of computerValueNodes[1][0]) computerRestriction.append(node);
                    for (let node of computerValueNodes[1][1]) computerSetName.append(node);
                    computerParagraph.innerText = `Solution evaluates to ${computer2Cards.length} cards:`
                    computerCardSet.innerHTML = ''
                    for (let node of computerCardsArr[1]) computerCardSet.append(node);
                    computerMapContainer.innerHTML = ''
                    computerMapContainer.append(computerMapsArr[1])
                } else {
                    // Clicked on first toggle
                    answerLeftToggle.dataset.active = 'true'
                    answerRightToggle.dataset.active = 'false'
                    computerRestriction.innerHTML = ''
                    computerSetName.innerHTML = ''
                    for (let node of computerValueNodes[0][0]) computerRestriction.append(node);
                    for (let node of computerValueNodes[0][1]) computerSetName.append(node);
                    computerParagraph.innerText = `Solution evaluates to ${computer1Cards.length} cards:`
                    computerCardSet.innerHTML = ''
                    for (let node of computerCardsArr[0]) computerCardSet.append(node);
                    computerMapContainer.innerHTML = ''
                    computerMapContainer.append(computerMapsArr[0])
                };
            });
            answerToggleContainer.append(answerLeftToggle, answerRightToggle, answerToggleDiv);
            answerContent.append(answerToggleContainer);
        };

        // Computer Solution
        const computerSolutionContainer = document.createElement('div')
        const computerRestriction = document.createElement('div')
        const computerSetName = document.createElement('div')
        computerSolutionContainer.classList.add('answer-solution-container')

        const computerValueNodes = [[[], []], [[], []]]

        for (let i = 0; i <= twoSolutionsActive; i++) {
            for (let j = 0; j < 2; j++) {

                // Set loop for all solutions and flags
                let currIterable
                if (j) {
                    currIterable = puzzleData.solution[i].flag;
                } else if (puzzleData.solution[i].restriction) {
                    currIterable = puzzleData.solution[i].restriction.join("");
                    if (!currIterable) continue;
                };

                // Remove redundant parenthesis
                let unionRegex1 = /\(([BRGYVɅ]'?|\(.+\)'?)U([BRGYVɅ]'?|\(.+\)'?)\)U([BRGYVɅ]|\(.+\)'?)/g
                let unionRegex2 = /([BRGYVɅ]'?|\(.+\)'?)U\(([BRGYVɅ]'?|\(.+\)'?)U([BRGYVɅ]'?|\(.+\)'?)\)(?!')/g
                let intersectRegex1 = /\(([BRGYVɅ]'?|\(.+\)'?)∩([BRGYVɅ]'?|\(.+\)'?)\)∩([BRGYVɅ]|\(.+\)'?)/g
                let intersectRegex2 = /([BRGYVɅ]'?|\(.+\)'?)∩\(([BRGYVɅ]'?|\(.+\)'?)∩([BRGYVɅ]'?|\(.+\)'?)\)(?!')/g
                let symDiffRegex1 = /\(([BRGYVɅ]'?|\(.+\)'?)-([BRGYVɅ]'?|\(.+\)'?)\)-([BRGYVɅ]|\(.+\)'?)/g
                let symDiffRegex2 = /([BRGYVɅ]'?|\(.+\)'?)-\(([BRGYVɅ]'?|\(.+\)'?)-([BRGYVɅ]'?|\(.+\)'?)\)(?!')/g
                let cases = (puzzleData.variationsMap.get('symmetricDifference')) ? 6 : 4
                let oldIterable
                do {
                    oldIterable = currIterable
                    for (let i = 0; i < cases; i++) {
                        let regex
                        switch (i) {
                            case 0: regex = unionRegex1; break;
                            case 1: regex = unionRegex2; break;
                            case 2: regex = intersectRegex1; break;
                            case 3: regex = intersectRegex2; break;
                            case 4: regex = symDiffRegex1; break;
                            case 5: regex = symDiffRegex2; break;
                        }
                        currIterable = currIterable.replace(regex, function(match) {
                            let captureGroups = regex.exec(match)
                            if (!captureGroups) return match;
                            if (i === 0 || i === 1) {
                                return `${captureGroups[1]}U${captureGroups[2]}U${captureGroups[3]}`
                            } else if (i === 2 || i === 3) {
                                return `${captureGroups[1]}∩${captureGroups[2]}∩${captureGroups[3]}`
                            } else if (i === 4 || i === 5) {
                                return `${captureGroups[1]}-${captureGroups[2]}-${captureGroups[3]}`
                            }
                        });
                    }
                } while (oldIterable !== currIterable)

                // Place cubes in display
                for (let k = 0; k < currIterable.length; k++) {
                    const solutionCube = document.createElement("div");
                    if (!(currIterable[k] === "(" || currIterable[k] === ")")) {
                        solutionCube.classList.add("cube", "solution-cube");
                    };
                    switch (currIterable[k]) {
                        case 'B': solutionCube.classList.add('blue'); break;
                        case 'R': solutionCube.classList.add('red'); break;
                        case 'G': solutionCube.classList.add('green'); break;
                        case 'Y': solutionCube.classList.add('yellow'); break;
                        case 'U': solutionCube.classList.add('union'); break;
                        case '∩': solutionCube.classList.add('intersect'); break;
                        case '-': solutionCube.classList.add('subtract'); break;
                        case "'": solutionCube.classList.add('not'); break;
                        case 'V': solutionCube.classList.add('universe'); break;
                        case 'Ʌ': solutionCube.classList.add('empty-set'); break;
                        case '<': solutionCube.classList.add('must-contain'); break;
                        case '=': solutionCube.classList.add('equals'); break;
                        case '(': solutionCube.classList.add('left-parenthesis', 'black'); break;
                        case ')': solutionCube.classList.add('right-parenthesis', 'black'); break;
                    };
                    computerValueNodes[i][j].push(solutionCube);
                }
            }
        }

        for (let node of computerValueNodes[0][0]) computerRestriction.append(node);
        for (let node of computerValueNodes[0][1]) computerSetName.append(node);
        if (!puzzleData.metaData.noRestrictions) {
            computerSolutionContainer.append(computerRestriction)
            computerSolutionContainer.append(bar.cloneNode())
        }
        computerSolutionContainer.append(computerSetName)
        answerContent.append(computerSolutionContainer)

        // Computer Paragraph
        const computerParagraph = document.createElement('p')
        computerParagraph.classList.add('evaluation-paragraph')
        computerParagraph.innerText = `Solution evaluates to ${computer1Cards.length} cards:`
        answerContent.append(computerParagraph)

        // Computer Universe
        const computerUniverse = document.createElement('div')
        computerUniverse.classList.add('answer-universe-container')
        answerContent.append(computerUniverse)

        // Computer Cards
        const computerCardSet = document.createElement('div')
        computerCardSet.classList.add('answer-cards-container')
        let computerCardsArr = [[], []]
        
        for (let i = 0; i <= (twoSolutionsActive); i++) {
            let solutionSet = puzzleData.solution[i].cards
            for (let card of cardsContainer.children) {
                const newCard = card.cloneNode(true);
                newCard.classList.remove('flip')
                let blankWildCard = puzzleData.solution[i].blankCard
                if (blankWildActive && newCard.dataset.getCard === "" && blankWildCard) {
                    newCard.dataset.getCard = blankWildCard;
                    for (let i = 0; i < blankWildCard.length; i++) {
                        switch (blankWildCard.charAt(i)) {
                            case "B": addColorChild(newCard.firstChild.firstChild, 'blue'); break;
                            case "R": addColorChild(newCard.firstChild.firstChild, 'red'); break;
                            case "G": addColorChild(newCard.firstChild.firstChild, 'green'); break;
                            case "Y": addColorChild(newCard.firstChild.firstChild, 'yellow'); break;
                        };
                    };
                    newCard.classList.add('blank-wild')
                };
                if (!solutionSet.includes(newCard.dataset.getCard)) newCard.classList.add('flip')
                if (doubleSet.includes(newCard.dataset.getCard)) {
                    const cardBorder = document.createElement('div')
                    cardBorder.classList.add('card-border')
                    newCard.firstChild.append(cardBorder)
                    newCard.classList.add('double')
                }
                newCard.classList.add('card');
                computerCardsArr[i].push(newCard)
            };
        };
        for (let node of computerCardsArr[0]) computerCardSet.append(node)
        computerUniverse.append(computerCardSet)

        // Computer Map
        let computerMapsArr = []
        const computerMapContainer = document.createElement('div')
        computerMapContainer.classList.add('answer-map-container')
        for (let i = 0; i <= (twoSolutionsActive); i++) {
            let blankCard = [false, false, false, false]
            if (blankWildActive) {
                let currBlankCard = puzzleData.solution[i].blankCard ?? ''
                if (/B/.test(currBlankCard)) blankCard[0] = true
                if (/R/.test(currBlankCard)) blankCard[1] = true
                if (/G/.test(currBlankCard)) blankCard[2] = true
                if (/Y/.test(currBlankCard)) blankCard[3] = true
            }
            if (i === 0) {
                computerMapsArr[0] = createMapTable({
                    isAnswerMap: true,
                    setName: computer1SetName,
                    restriction: computer1RestrictedCards,
                    blankCard: blankCard
                })
            } else if (i === 1) {
                computerMapsArr[1] = createMapTable({
                    isAnswerMap: true,
                    setName: computer2SetName,
                    restriction: computer2RestrictedCards,
                    blankCard: blankCard
                })
            }
        }
        computerMapContainer.append(computerMapsArr[0])
        computerUniverse.append(computerMapContainer)

        newResult.append(answerContent)
        resultBackground.classList.toggle('shown')
        newResult.classList.toggle('shown')

    } catch (error) {
        console.log(error)
        notify('Invalid input!', 'red', 'bounce', 1500, '', '')
    }
    console.groupEnd()
}
for (let button of keyboardButtons) button.addEventListener('click', function() {inputCube(this.classList[1])});


const settings = {
    headerText: 'Settings',
    genNewPuzzle: false,
    forceVariations: [],
    forceSymmetricDifference: false,
    maxUniverse: 14,
    minUniverse: 10,
}
function applySettings(e) {
    // Clicked on menu while wild picker open
    if (wildPickerContainer.classList.contains('shown')) {
        hideWildPicker(e)
        return;
    }
    
    if (settingsContainer.classList.contains('shown')) {
        validateSettings()
        let newVariationsLength = variationCount.value
        if (parseFloat(newVariationsLength) !== puzzleParameters.setVariationsLength) {
            settings.genNewPuzzle = true;
            puzzleParameters.setVariationsLength = parseFloat(newVariationsLength)
        }
        if (!compareArr(settings.forceVariations, puzzleParameters.setVariations)) {
            settings.genNewPuzzle = true;
            puzzleParameters.setVariations = clone(settings.forceVariations)
        }
        if (settings.forceSymmetricDifference !== puzzleParameters.forceSymmetricDifference) {
            settings.genNewPuzzle = true;
            puzzleParameters.forceSymmetricDifference = settings.forceSymmetricDifference
        }
        if (settings.maxUniverse !== puzzleParameters.maxUniverse) {
            settings.genNewPuzzle = true;
            puzzleParameters.maxUniverse = settings.maxUniverse
        }
        if (settings.minUniverse !== puzzleParameters.minUniverse) {
            settings.genNewPuzzle = true;
            puzzleParameters.minUniverse = settings.minUniverse
        }
        if (settings.genNewPuzzle) {
            queuedPuzzleData = null;
            newPuzzle()
            settings.genNewPuzzle = false
        }
        
    }

    settingsContainer.classList.remove('shown')
    menuBackground.classList.remove('shown')
    header.classList.remove('dark')
    if (settingsNodesContainer.classList.contains('page-2')) {
        setTimeout(() => {
            settingsNodesContainer.classList.remove('page-2')
            settingsHeaderText.innerText = 'Settings'
        }, 150)
    }
    variationsArrowBox.parentElement.classList.remove('dark') // REMOVE
}
function validateSettings() {
    // Universe
    let newMaxUniverse = parseInt(maxUniverse.value)
    let newMinUniverse = parseInt(minUniverse.value)
    if (newMaxUniverse < newMinUniverse) {
        maxUniverse.value = settings.maxUniverse
        minUniverse.value = settings.minUniverse
    }
    newMinUniverse = parseInt(minUniverse.value)
    newMaxUniverse = parseInt(maxUniverse.value)

    if (newMaxUniverse > 16) maxUniverse.value = 16
    if (newMaxUniverse < 6) maxUniverse.value = 6
    if (newMinUniverse > 16) minUniverse.value = 16
    if (newMinUniverse < 6) minUniverse.value = 6

    settings.maxUniverse = parseInt(maxUniverse.value)
    settings.minUniverse = parseInt(minUniverse.value)
};

const settingsContainer = document.createElement('settings-container')
settingsContainer.id = 'settings-container'
header.append(settingsContainer)
settingsContainer.addEventListener('click', (e) => e.stopPropagation())

const settingsHeader = document.createElement('div')
settingsHeader.id = 'settings-header'
settingsContainer.append(settingsHeader)

const settingsNavButton = document.createElement('settings-nav-button')
settingsNavButton.id = 'settings-nav-button'
settingsHeader.append(settingsNavButton)
settingsNavButton.addEventListener('click', () => {
    if (settings.headerText === 'Settings') {
        applySettings();
        return;
    }
    settingsNodesContainer.classList.remove('page-2')
    settingsHeaderText.classList.add('fade')
    settingsNavButton.classList.add('fade')
    settings.headerText = 'Settings'
})
settingsNavButton.addEventListener('transitionend', () => {
    settingsNavButton.classList.remove('fade')
})
const settingsHeaderText = document.createElement('h4')
settingsHeaderText.innerText = 'Settings'
settingsHeader.append(settingsHeaderText)
settingsHeaderText.addEventListener('transitionend', () => {
    settingsHeaderText.innerText = settings.headerText;
    settingsHeaderText.classList.remove('fade')
})

const settingsOverflowContainer = document.createElement('div')
settingsOverflowContainer.id = 'settings-overflow-container'
settingsContainer.append(settingsOverflowContainer)

const settingsNodesContainer = document.createElement('div')
settingsNodesContainer.id = 'settings-nodes-container'
settingsOverflowContainer.append(settingsNodesContainer)

// Create menu background
const menuBackground = document.createElement('div')
menuBackground.id = 'menu-background'
document.body.append(menuBackground)
menuBackground.addEventListener('click', (e) => {applySettings()})

settingsIcon.addEventListener('click', (e) => {
    if (wildPickerContainer.classList.contains('shown')) {
        hideWildPicker()
        return;
    }
    e.stopPropagation()
    hideKeyboard()
    if (!settingsContainer.classList.contains('shown')) {
        settingsContainer.classList.add('shown')
        menuBackground.classList.add('shown')
        variationsArrowBox.parentElement.classList.add('dark') // Remove
        header.classList.add('dark')
        if (!settingsContainer.classList.contains('shown') && settingsNodesContainer.classList.contains('page-2')) {
            setTimeout(() => {
                settingsNodesContainer.classList.remove('page-2')
                settingsHeaderText.innerText = 'Settings'
            }, 150)
        }
    } else {
        applySettings()
    }
});

function switchPage(activePage, title) {
    settingsNodesContainer.classList.add('page-2')
    settingsHeaderText.classList.add('fade')
    settingsNavButton.classList.add('fade')
    for (let node of document.querySelectorAll('.settings-page-2.active')) {
        node.classList.remove('active')
    }
    activePage.classList.add('active')
    settings.headerText = title
    validateSettings()
}
function createToggle(label, action) {

    const toggleContainer = document.createElement('li')
    toggleContainer.classList.add('settings-toggle')
    const toggleLabel = document.createElement('p')
    toggleLabel.innerText = label
    toggleContainer.append(toggleLabel)

    const toggle = document.createElement('div')
    toggle.classList.add('toggle')
    toggleContainer.append(toggle)
    const toggleSwitch = document.createElement('div')
    toggleSwitch.classList.add('toggle-switch')
    toggle.append(toggleSwitch)

    toggle.addEventListener('click', () => action(toggle))

    return toggleContainer;
}
function createCounter(label, id, action, parameters = {}) {
    const counter = document.createElement('li');
    counter.classList.add('settings-counter');
    const counterLabel = document.createElement('label');
    counterLabel.innerText = label;
    counterLabel.for = id;
    const counterInput = document.createElement('input');
    counterInput.id = id;

    setInputFilter(counterInput, function(value) {return parameters.regex.test(value)});
    counterInput.value = parameters.value;
    counterInput.maxLength = parameters.maxLength;

    const arrowUpDiv = document.createElement('div');
    const arrowDownDiv = document.createElement('div');
    const arrowUp = document.createElement('div');
    const arrowDown = document.createElement('div');
    arrowUpDiv.classList.add('container-arrow-up');
    arrowDownDiv.classList.add('container-arrow-down');
    arrowUp.classList.add('counter-arrow-up');
    arrowDown.classList.add('counter-arrow-down');
    arrowUpDiv.append(arrowUp);
    arrowDownDiv.append(arrowDown);
    arrowUpDiv.addEventListener('click', () => action(1));
    arrowDownDiv.addEventListener('click', () => action(-1));

    counter.append(counterLabel, counterInput, arrowUpDiv, arrowDownDiv);
    return counter;
}
function createCheckbox(text, type) {
    const checkBox = document.createElement('li');
    checkBox.classList.add('settings-checkbox');
    checkBox.innerHTML = text;
    checkBox.addEventListener('click', () => forceVariation(checkBox, type));
    return checkBox;
}
(function createSettings() {
    
    // Main Page
    const mainPage = document.createElement('ul')
    mainPage.classList.add('settings-page-1')

    // Variations Page
    const settingsVariationsPage = document.createElement('div')
    settingsVariationsPage.id = 'settings-variations-page'
    settingsVariationsPage.classList.add('settings-page-2')
    const variationsScrollContainer = document.createElement('div')
    variationsScrollContainer.classList.add('scroll-container')
    settingsVariationsPage.append(variationsScrollContainer)
    settingsNodesContainer.append(settingsVariationsPage)

    const variationCounterList = document.createElement('ul')
    variationsScrollContainer.append(variationCounterList)
    const variationsCounter = createCounter('Number of Variations:', 'variation-count', function(increment) {
        let newVal = parseFloat(variationCount.value) + increment
        let activeCount = document.querySelectorAll('.settings-checkbox.active').length
        if (newVal > 6 || newVal < activeCount) return;
        variationCount.value = newVal
    },
    {regex: /[^0-6]/, value: 6, maxLength: 1})
    variationCounterList.append(variationsCounter)

    const variationLabel = document.createElement('div')
    variationLabel.classList.add('settings-label')
    variationLabel.innerText = 'Choose variations to always appear'
    variationsScrollContainer.append(variationLabel)

    const forceVariationsList = document.createElement('ul')
    forceVariationsList.classList.add('force-variations')
    forceVariationsList.style.marginTop = '2px'
    variationsScrollContainer.append(forceVariationsList)

    let variationsArr = [['requiredCube', 'Required Cube'], ['wild', 'Wild'], ['twoOp', 'Two Operations',], 
    ['noNull', 'No Null Restrictions'], ['absValue', 'Absolute Value'], ['double', 'Double Set'], 
    ['requiredCard', 'Required Card'], ['forbiddenCard', 'Forbidden Card'], ['blankWild', 'Blank Card Wild'], 
    ['symmetricDifference', 'Symmetric Difference'], ['twoSolutions', 'Two Solutions']]
    
    for (let variation of variationsArr) {
        const checkboxNode = createCheckbox(variation[1], variation[0])
        forceVariationsList.append(checkboxNode)
    }

    // Universe Page
    const settingsUniversePage = document.createElement('div')
    settingsUniversePage.id = 'settings-universe-page'
    settingsUniversePage.classList.add('settings-page-2')
    const universeScrollContainer = document.createElement('div')
    universeScrollContainer.classList.add('scroll-container')
    settingsUniversePage.append(universeScrollContainer)
    settingsNodesContainer.append(settingsUniversePage)

    const universeCounterList = document.createElement('ul')
    universeScrollContainer.append(universeCounterList)
    const maxUniverseCounter = createCounter('Maximum Universe Count', 'max-universe', function(increment) {
        let newVal = parseFloat(maxUniverse.value) + increment
        if (newVal > 16) newVal = 16
        if (newVal < 6) newVal = 6
        maxUniverse.value = newVal
    },
    {regex: /[^\d]/, value: 14, maxLength: 2})
    universeCounterList.append(maxUniverseCounter)
    const minUniverseCounter = createCounter('Minimum Universe Count', 'min-universe', function(increment) {
        let newVal = parseFloat(minUniverse.value) + increment
        if (newVal > 16) newVal = 16
        if (newVal < 6) newVal = 6
        minUniverse.value = newVal
    },
    {regex: /[^\d]/, value: 10, maxLength: 2})
    universeCounterList.append(minUniverseCounter)

    // Create pages
    const pagesList = document.createElement('ul')
    pagesList.style.marginTop = '8px'
    mainPage.append(pagesList)

    function createPage(buttonID, pageID, title) {
        const button = document.createElement('li')
        button.id = buttonID
        button.classList.add('settings-page')
        button.innerText = title
    
        const page = document.querySelector(pageID)
        button.addEventListener('click', () => {switchPage(page, title)})
        return button
    }
    const pages = [
        ['#variations-button', '#settings-variations-page', 'Variations'],
        ['#universe-button', '#settings-universe-page', 'Universe']
    ]
    for (let page of pages) {
        const newPage = createPage(...page)
        console.log(newPage)
        pagesList.append(newPage)
    }
    settingsNodesContainer.append(mainPage)

    // Create Toggles
    const togglesList = document.createElement('ul')
    togglesList.style.marginTop = '8px'
    mainPage.append(togglesList)

    const symmetricDifferenceToggle = createToggle('Force Symmetric Difference', (element) => {

        settings.forceSymmetricDifference = !settings.forceSymmetricDifference
        if (!element.classList.contains('active')) {
            if (settings.forceVariations.length >= variationCount.value) {
                notify('Too many variations!', 'red', 'bounce', 1500, '40px', '180px');
                return
            }
            settings.forceSymmetricDifference = true
            symmetricDifferenceCheck.classList.add('active')
            settings.forceVariations.push('symmetricDifference')
        } else if (symmetricDifferenceCheck.classList.contains('active')) {
            symmetricDifferenceCheck.classList.remove('active')
            settings.forceVariations = deleteFirstArrItem(settings.forceVariations, 'symmetricDifference')
        }
        element.classList.toggle('active')
        console.log(puzzleParameters)
    })
    symmetricDifferenceToggle.id = 'force-symmetric-difference'
    togglesList.append(symmetricDifferenceToggle)
    
})();

const variationCount = document.querySelector('#variation-count')
const minUniverse = document.querySelector('#min-universe')
const maxUniverse = document.querySelector('#max-universe')

function forceVariation(element, variation) {
    if (!element.classList.contains('active')) {
        if (settings.forceVariations.length >= variationCount.value) return
        if (variation === 'requiredCard' && forbiddenCheck.classList.contains('active')) forceVariation(forbiddenCheck, 'forbiddenCard')
        if (variation === 'forbiddenCard' && requiredCheck.classList.contains('active')) forceVariation(requiredCheck, 'requiredCard')
        settings.forceVariations.push(variation)
    } else {
        if (element === symmetricDifferenceCheck && puzzleParameters.forceSymmetricDifference) {
            forceSymmetricDifference.classList.remove('active')
            settings.forceSymmetricDifference = false
        }
        settings.forceVariations = deleteFirstArrItem(settings.forceVariations, variation)
    }
    element.classList.toggle('active')
}

const forceSymmetricDifference = document.querySelector('#force-symmetric-difference .toggle')
const requiredCheck = document.querySelectorAll(".settings-checkbox")[6]
const forbiddenCheck = document.querySelectorAll(".settings-checkbox")[7]
const symmetricDifferenceCheck = document.querySelectorAll(".settings-checkbox")[9]


// Wild
const wildPickerContainer = document.querySelector('#wild-picker-container')
wildPickerContainer.addEventListener('click', setWildCube)
const wildPickerContainerBox = wildPickerContainer.getBoundingClientRect()
const wildBackground = document.createElement('div')
wildBackground.id = 'wild-background'
wildBackground.addEventListener('click', hideWildPicker)
document.body.append(wildBackground)

function toggleWildPicker(e) {
    e.stopPropagation()
    if (this.parentElement !== restrictionContainer && this.parentElement !== solutionContainer) hideKeyboard();
    let element = this, elementX = 0, elementY = 0
    while (true) {
        elementX += element.offsetLeft;
        elementY += element.offsetTop;
        if (element.offsetParent === null) break;
        element = element.offsetParent;
    }
    wildPickerContainer.style.left = elementX - 109 + 'px'
    wildPickerContainer.style.top = elementY - 120 + 'px'
    this.classList.toggle('active')
    wildPickerContainer.classList.toggle('shown')
    wildBackground.classList.toggle('shown')
    header.classList.toggle('dark')
    keyboardContainer.classList.toggle('dark')
    variationsArrowBox.parentElement.classList.toggle('dark') // REMOVE
}

function hideWildPicker(e) {
    if (e) e.stopPropagation()
    let activeCube = document.querySelector('.wild-cube.active')
    if (activeCube) activeCube.classList.remove('active')
    wildPickerContainer.classList.remove('shown')
    wildBackground.classList.remove('shown')
    header.classList.remove('dark')
    keyboardContainer.classList.remove('dark')
    variationsArrowBox.parentElement.classList.remove('dark') // REMOVE
}

const wildStylesElement = document.createElement('style')
document.head.append(wildStylesElement)
const wildStylesSheet = wildStylesElement.sheet

function setWildCube(e) {
    e.stopPropagation();
    if (changeWildStyle(e.target.classList[1])) hideWildPicker(e);
    if (activeSolution === 'solution1') {
        inputValues.wildCube.solution1 = e.target.classList[1]
    } else {
        inputValues.wildCube.solution2 = e.target.classList[1]
    }
};
function changeWildStyle(style) {
    if (/blue|red|green|yellow/.test(style)) {
        let newColor
        switch (style) {
            case "blue": newColor = 'rgb(28, 116, 227)'; break;
            case "red": newColor = 'rgb(196, 41, 38)'; break;
            case "green": newColor = 'rgb(34, 136, 87)'; break;
            case "yellow": newColor = 'rgb(230, 206, 53)'; break;
        }
        wildStylesElement.innerHTML = 
        `#puzzle-container .wild-cube::after {
            display: block;
            content: "";
            border-radius: 100%;
            height: 26px;
            width: 26px;
            background-color: ${newColor};
        }`; return true;
    }
    switch (style) {
        case 'union': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                font-size: 40px;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', Verdana, sans-serif;
                content: url(/icons/union.svg);
            }`; return true;
        case 'intersect': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                font-size: 40px;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', Verdana, sans-serif;
                content: url(/icons/intersect.svg);
            }`; return true;
        case 'not': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                content: "'";
                color: rgb(227, 39, 36);
                font-size: 45px;
                font-weight: 500;
                position: relative;
                top: 5px;
            }`; return true;
        case 'subtract': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                content: "–";
                color: rgb(227, 39, 36);
                font-size: 45px;
                font-weight: 500;
                position: relative;
                bottom: 2px;
            }`; return true;
        case 'universe': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', Verdana, sans-serif;
                content: "V";
                color: rgb(28, 116, 227);
                font-size: 38px;
                font-weight: 100;
            }`; return true;
        case 'empty-set': wildStylesElement.innerHTML = 
            `#puzzle-container .wild-cube::after {
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', Verdana, sans-serif;
                content: "Ʌ";
                color: rgb(28, 116, 227);
                font-size: 38px;
                font-weight: 100;
            }`; return true;
    }
}

// wildStylesElement.innerHTML = '#puzzle-container .wild-cube { background-color: white; }'
// wildStylesSheet.insertRule('.wild-cube { background-color: white; }', wildStylesSheet.cssRules.length)
// wildStylesSheet.insertRule('.wild-cube { background-color: white }', 0);


// currInput = 'restriction1'
// inputCube('red')

// currInput = "setName1"
// inputCube('red')
// inputCube('union')
// inputCube('left-parenthesis')
// inputCube('blue')
// inputCube('union')
// inputCube('blue')
// inputCube('right-parenthesis')
// solutionFormToggleDiv.click()
// currInput = 'restriction2'
// inputCube('green')
// inputCube('must-contain')
// inputCube('yellow')
// currInput = "setName2"
// inputCube('blue')
// inputCube('intersect')
// inputCube('left-parenthesis')
// inputCube('green')
// inputCube('union')
// inputCube('red')
// inputCube('right-parenthesis')
// submitInput()

// DATABASES ARE PROBABLY FASTER
// let newArr;
// let map1 = new Map([["A", 2], ["B", 3], ["C", 4]])
// let map2 = new Map([["A", 2], ["B", 3], ["C", 4]])
// map1.set("D", map2)
// console.log()
// let b = 0;
// for (let i = 0; i < 10000000; i++) {
//     let arr = [2, 4]
//     // newArr = [1, 2, 3, 4].filter(val => !arr.includes(val))
//     // newArr = [1, 2, 3, 4].filter (val => arr.indexOf(val) < 0)
//     if (map1.get("D").has("A")) {
//         newArr = map1.get("D").get("A")
//     } else {
//         newArr = [1, 2, 3, 4].filter (val => arr.indexOf(val) < 0)
//     }
        
//     // newArr = map1.get("D").get("A")
//     // newArr = arr.join(",")
// }
// console.log(newArr)
// console.log(b)

document.addEventListener('keydown', function (keypress) {
    if (keypress.key !== 'p') return
    console.log(inputValues)

    // let keysArr = ['ArrowLeft', 'ArrowRight', 'b', 'r', 'n', 
    // '-', "'", 'v', 'm', '(', ')', 'Backspace']
    // for (let i = 0; i < 20; i++) {
    //     document.dispatchEvent(new KeyboardEvent('keydown', {'key': randomArrayValue(keysArr)}));
    // }

    // answerContent.scrollTo({top: answerContent.scrollTop - 10})
    // console.log(answerContent.scrollTop)
    // console.log(answerContent.scrollHeight)
    // console.log(answerContent.offsetHeight)
});
