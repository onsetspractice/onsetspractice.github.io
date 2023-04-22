let setTimer = new Date()

// Start of functions
function clone(arr) {
    return JSON.parse(JSON.stringify(arr))
}
function getVariation(variation) {
    console.log()
    return puzzleData.variations[puzzleData.variations.findIndex(val => Object.keys(val)[0] === variation)][variation]
};
function test() {
    let stopTimer = new Date(); console.log((stopTimer.getTime() - setTimer.getTime())/1000 + " SECONDS");
};
function getRandomNumber(min, max) {
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
    return arr[getRandomNumber(0, arr.length - 1)]
};
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
header.addEventListener('click', () => menuBackground.click())
header.append(settingsIcon)

const variationsArrowBox = document.querySelector('#variations-arrow-box')
variationsArrowBox.addEventListener('click', function() {
    this.parentElement.classList.toggle('shown')
})
const mapArrowBox = document.querySelector('#map-arrow-box')
mapArrowBox.addEventListener('click', function() {
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
    mapArrowBox.classList.remove('shown')
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
    mapArrowBox.classList.add('shown')
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

// let puzzleParamaters = 
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

// RESTRICTIONLESS PUZZLE
// puzzleParamaters = 
// {
//     'randomize': 
//         false,
//     'setCubes': 
//         [   
//             ["R", "G", "B"],
//             [1, 3, 5],
//             ["'", "-", "U", "-"],
//             ["V", "V"]
//         ],
//     'setUniverse':
//         ['RG', 'BRY', 'RGY', 'B', 'BRG', 'Y', 'BG', '', 'BRGY', 'G', 'R', 'BY', 'RY'],
//     'setVariations':
//         ['symmetricDifference', 'noNull'],
//     'setVariationsLength': 
//         2,
//     'setGoal':
//         {
//             'goalArr': [5, "*", 1, "*", 2],
//             'goalValues': [10],
//             'goalShape': 5
//         },
//     'setForbidden':
//         {
//             'forbiddenArrLength': 0
//         },
//     'forceSymmetricDifference': false,
// }

// puzzleParamaters = 
// {
//     'randomize': 
//         false,
//     'setCubes': 
//         [   
//             ["B", "G", "Y", "B", "G", "Y"],
//             [1, 3, 5],
//             ["'", "'", "-"],
//             ["<", "="]
//         ],
//     'setUniverse':
//         ["BR", "BRY", "B", "BRG", "BRGY", "BGY", "BG", "RG", "RGY", "GY", "G", "RY", ''],
//     'setVariations':
//         ['double', 'twoSolutions', 'symmetricDifference', 'blankWild', 'noNull', 'requiredCard'],
//     'setVariationsLength': 
//         6,
//     'setGoal':
//         {
//             'goalArr': [-1, "*", -2, "+", -1],
//             'goalValues': [3],
//             'goalShape': 6,
//         },
//     'setForbidden':
//         {
//             'forbiddenArrLength': 0
//         },
//     'forceSymmetricDifference': false,
// }

puzzleParameters = {
    randomize: true,
    setCubes: null,
    setUniverse: null,
    setVariations: [],
    // setVariations:
    //     [ 'double', 'symmetricDifference'],
    setVariationsLength: 6,
    // setVariationsLength: 2,
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
    for (let cell of map.querySelectorAll("td")) {
        cell.classList.remove('whitebg')
    }
    for (let x of mapArr) {
        x.classList.remove('strike-through')
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
        blankWild = puzzleData.variations.includes('blankWild')
        twoSolutions = puzzleData.variations.includes('twoSolutions')
        blankWildContainer.style.display = (blankWild) ? '' : 'none'
        solutionFormContainer.style.display = (twoSolutions) ? '' : 'none'

        // Move solution toggle if goal is too tall
        if (puzzleData.goalShape === 5 && twoSolutions) {
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

        if (puzzleData.variations.includes("twoSolutions")) {
            console.log(puzzleData.solution)
            for (let currSolution of puzzleData.solution) {
                if (currSolution.restriction) solutionScores.push(calcScore(currSolution.restriction, 2))
                solutionScores.push(calcScore(currSolution.flag))
            }
        } else {
            if (puzzleData.solution.restriction) solutionScores.push(calcScore(puzzleData.solution.restriction, 2))
            solutionScores.push(calcScore(puzzleData.solution.flag));
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
        for (let cell of mapArr) {
            if (!cell.dataset.hasStrikeThrough) {
                cell.dataset.hasStrikeThrough = true;
                cell.addEventListener('click', function() {
                    this.classList.toggle('strike-through')
                })
            }
        }

        // Display Cards
        for (let card of filterDuplicates(puzzleData.universe)) {
            switch (card) {
                case "BR": mapArr[0].classList.add('whitebg'); break;
                case "BRY": mapArr[1].classList.add('whitebg'); break;
                case "BY": mapArr[2].classList.add('whitebg'); break;
                case "B": mapArr[3].classList.add('whitebg'); break;
                case "BRG": mapArr[4].classList.add('whitebg'); break;
                case "BRGY": mapArr[5].classList.add('whitebg'); break;
                case "BGY": mapArr[6].classList.add('whitebg'); break;
                case "BG": mapArr[7].classList.add('whitebg'); break;
                case "RG": mapArr[8].classList.add('whitebg'); break;
                case "RGY": mapArr[9].classList.add('whitebg'); break;
                case "GY": mapArr[10].classList.add('whitebg'); break;
                case "G": mapArr[11].classList.add('whitebg'); break;
                case "R": mapArr[12].classList.add('whitebg'); break;
                case "RY": mapArr[13].classList.add('whitebg'); break;
                case "Y": mapArr[14].classList.add('whitebg'); break;
                case "": mapArr[15].classList.add('whitebg'); break;
            }
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
    };
};

// Cube Containers
const boardContainer = document.querySelector('#board-container')
const forbiddenContainer = document.querySelector('#forbidden-container');
const requiredContainer = document.querySelector('#required-container');
const resourcesContainer = document.querySelector('#resources-container');
const solutionContainer = document.querySelector('#solution-container');
const restrictionContainer = document.querySelector('#restriction-container');
const goalContainer = document.querySelector('#goal-container');
// Misc. Puzzle Containers
const cardsContainer = document.querySelector('#cards-container');
const variationsContainer = document.querySelector('#variations-container')
const map = document.querySelector('#map')
const blankWildContainer = document.querySelector('#blank-wild-container')
const submitButton = document.querySelector('#submit-button');
const mapArr = map.querySelectorAll("td")
// Two Solutions Toggle
const rightInputContainer = document.querySelector('#right-input-container')
const solutionFormContainer = document.querySelector('#solution-form-container')
const solution1Toggle = document.querySelector('#solution1-toggle')
const solution2Toggle = document.querySelector('#solution2-toggle')
const solutionFormToggleDiv = document.querySelector('#solution-form-toggle-div')
// Keyboard
const keyboardContainer = document.querySelector('#keyboard-container');
const keyboardButtons = document.querySelectorAll(".keyboard-row > div")

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
let activeSolution = 'solution1';
let keyboardActive = false;
let currInput;

let blankWild
let twoSolutions

let puzzleData;
let queuedPuzzleData
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
        alignNodes()
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
        alignNodes()

    } else if (target === 'restriction-container') {

        currInput = (activeSolution === 'solution1') ? 'restriction1' : 'restriction2'

        if (puzzleData.metaData.includes('noRestrictions')) {
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
        alignNodes()
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
        if (blankWild) {
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
        alignNodes()
        currInput = 'setName2'
        alignNodes()
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
        if (blankWild) {
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
        alignNodes()
        currInput = 'setName1'
        alignNodes()
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

    let getCard = document.querySelector(".card-set .card.double")
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

    if (puzzleData.metaData.includes('noRestrictions') && isRestriction) {
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

    // Give and remove hidden classlist for fade in effect
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
                    
                    let overflowData = stopOverflow(selectedCubeIndex.row)
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

                    let overflowData = stopOverflow(selectedCubeIndex.row)
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

            let overflowData = stopOverflow(selectedCubeIndex.row)
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

        let fillData = stopEmptySpace(selectedCubeIndex.row)
        cursorAnimationDuration = fillData[0]
        nodeAnimationDuration = fillData[1]
        if (fillData[2] !== null) frontCursor = fillData[2]

    };
    // console.log(selectedCubeIndex)
    // console.log(wrap.elements)
    // console.log(wrap.widths)
    // console.log(cursorRow)

    alignCursor(cursorAnimationDuration, frontCursor)
    alignNodes(nodeAnimationDuration)

    return true;
}

window.onresize = () => {
    alignNodes()
    alignCursor()
}

function alignNodes(duration = 70, rows = []) {

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

function stopOverflow(startIndex) {

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
            }

        }
    }

    return [cursorAnimationDuration, nodeAnimationDuration, frontCursor]

}

function stopEmptySpace(startIndex) {

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

    alignNodes(120)

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
        // let setNameArr1 = [...inputValues.flatArray.setNameArr1].join("");
        // let setNameArr2 = [...inputValues.flatArray.setNameArr2].join("");
        // let restrictionArr1 = [...inputValues.flatArray.restrictionArr1].join("");
        // let restrictionArr2 = [...inputValues.flatArray.restrictionArr2].join("");
        let calcSymmetricDifference = true;

        if (!setNameArr1.length) {
            notify('Input a Solution!', 'red', 'bounce', 1000, '', '160px'); 
            console.log('NO SOLUTION 1'); return;
        } else if (!restrictionArr1.length && !puzzleData.metaData.includes('noRestrictions')) {
            notify('Input a Restriction!', 'red', 'bounce', 1000, '', '170px');
            console.log('NO RESTRICTION 1'); return;
        } else if (twoSolutions && !setNameArr2.length) {
            notify('Input a Solution!', 'red', 'bounce', 1000, '', '160px');
            console.log('NO SOLUTION 2'); return;
        } else if (twoSolutions && !restrictionArr2.length && !puzzleData.metaData.includes('noRestrictions')) {
            notify('Input a Restriction!', 'red', 'bounce', 1000, '', '170px');
            console.log('NO RESTRICTION 2'); return;
        }
        
        if (!/[<=]/.test(restrictionArr1) || (!/[<=]/.test(restrictionArr2) && twoSolutions)) {
            if (!puzzleData.metaData.includes('noRestrictions')) {
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
                if (puzzleData.variations.includes('symmetricDifference') && calcSymmetricDifference) {
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
            let returnArr = [];
            for (let i = 0; i < arr.length; i++) {
                let currPosition = returnArr
                for (let i = 0; i < index.length - 1; i++) currPosition = currPosition[index[i]]
                if (arr[i] === "(") {
                    currPosition[index[index.length - 1]] = [];
                    index.push(0)
                } else if (arr[i] === ")") {
                    index.pop()
                    currPosition = returnArr;
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
            return calcSet(returnArr);
        };
        
        // PARSING INPUTS
        let solutionSet1 = [];
        let solutionSet2 = [];

        let doubleIndex = puzzleData.variations.findIndex(val => Object.keys(val)[0] === 'double');
        let doubleSet = []
        if (doubleIndex !== -1) {
            universe = ["BRGY","BRG","BRY","BR","BGY","BG","BY","B","RGY","RG","RY","R","GY","G","Y",""];
            let doubleIndex = puzzleData.variations.findIndex(val => Object.keys(val)[0] === 'double')
            let symmetricDifferenceIndex = puzzleData.variations.indexOf('symmetricDifference')
            console.log(doubleIndex)
            console.log(symmetricDifferenceIndex)
            if (doubleIndex < symmetricDifferenceIndex) calcSymmetricDifference = false;
            doubleSet = parseInput(puzzleData.variations[doubleIndex].double.split(""))
            universe = puzzleData.universe
            if (doubleIndex < symmetricDifferenceIndex) calcSymmetricDifference = true;
        }

        console.log(universe)
        console.log(doubleSet)
        console.log(puzzleData.metaData[0])

        let nullRestriction = false;
        for (let i = 0; i <= (twoSolutions); i++) {
            if (blankWild) {
                while (universe.includes("")) universe = deleteFirstArrItem(universe, "")
                let newCard = ''
                let currBlankCard = i ? inputValues.blankWild.solution2 : inputValues.blankWild.solution1;
                for (let j = 0; j < currBlankCard.length; j++) {
                    if (currBlankCard[j]) {
                        switch (j) {
                            case 0: newCard += "B"; break;
                            case 1: newCard += "R"; break;
                            case 2: newCard += "G"; break;
                            case 3: newCard += "Y"; break;
                        }
                    }
                }
                universe.push(newCard)
                if (doubleSet.includes(newCard)) universe.push(newCard)
            }
            console.log(universe)
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
            console.log(inputRestriction)
            console.log(inputSetName)

            let formattedRestrictionArr = [[]]
            for (let i = 0; i < inputRestriction.length; i++) {
                if (inputRestriction[i] === "<" || inputRestriction[i] === "=") {
                    formattedRestrictionArr.push(inputRestriction[i]);
                    formattedRestrictionArr.push([])
                } else {
                    formattedRestrictionArr[formattedRestrictionArr.length - 1].push(inputRestriction[i])
                }
            }
            console.log(formattedRestrictionArr)

            let parsedRestrictionArr = []
            for (let i = 0; i < formattedRestrictionArr.length; i++) {
                if (i % 2 === 1) {
                    parsedRestrictionArr.push(formattedRestrictionArr[i]);
                } else {
                    parsedRestrictionArr.push(parseInput(formattedRestrictionArr[i]));
                };
            };
            let parsedSetName = parseInput(inputSetName)
            
            console.log(parsedRestrictionArr)
            console.log(parsedSetName)
            let restrictedCards = [];
            for (let i = 0; i < (formattedRestrictionArr.length - 1) / 2; i++) {
                let operation = parsedRestrictionArr[i * 2 + 1];
                let leftVal = parsedRestrictionArr[i * 2];
                let rightVal = parsedRestrictionArr[i * 2 + 2];
                restrictedCards = restrictedCards.concat(leftVal.filter(val => !rightVal.includes(val)))
                if (operation === "=") restrictedCards = restrictedCards.concat(rightVal.filter(val => !leftVal.includes(val)))
            }
            console.log(restrictedCards)
            if (!restrictedCards.length && !puzzleData.metaData.includes('noRestrictions')) nullRestriction = true;
            if (i) {
                solutionSet2 = parsedSetName.filter(val => !restrictedCards.includes(val))
            } else {
                solutionSet1 = parsedSetName.filter(val => !restrictedCards.includes(val))
            }
        }
        console.log(solutionSet1)
        console.log(solutionSet2)
        
        // DISPLAYING ANSWER
        newResult.innerHTML = ''

        // HEADER
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
        
        // Contnet
        const answerContent = document.createElement('div')
        answerContent.id = 'answer-content'


        let title, paragraph = '';

        (function checkInput() {

            title = 'Incorrect:'

            if (!puzzleData.goalValues.includes(solutionSet1.length)) {
                paragraph = `Solution does not evaluate to goal.`
                return;
            } else if (!puzzleData.goalValues.includes(solutionSet2.length) && twoSolutions) {
                paragraph = `Solution does not evaluate to goal.`
                return;
            };

            if (nullRestriction && puzzleData.variations.includes('noNull')) { // NO NULL
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

            if (puzzleData.variationsMap.get('requiredCube')) { // REQUIRED CUBE
                if (restrictionArr1.concat(setNameArr1).indexOf(puzzleData.variationsMap.get('requiredCube')) === -1) {
                    paragraph = `Solution does not contain required cube`
                    return;
                };
                if (twoSolutions) {
                    if (restrictionArr2.concat(setNameArr2).indexOf(puzzleData.variationsMap.get('requiredCube')) === -1) {
                        paragraph = `Solution does not contain required cube`
                        return;
                    };
                };
            };

            console.log(requiredContainer.dataset.values)
            console.log(resourcesContainer.dataset.values)
            for (let i = 1; i <= (twoSolutions ? 4 : 2); i++) {

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
                        if (puzzleData.metaData.includes('noRestrictions')) continue;
                        input = restrictionArr1; 
                        break;
                    case 2: input = setNameArr1; break;
                    case 3:
                        if (puzzleData.metaData.includes('noRestrictions')) continue;
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
                                extraCube = arr[getRandomNumber(0, arr.length - 1)];
                                break;
                            case 5:
                                let arr2 = []
                                if (input.includes("U")) arr2.push('"Or"')
                                if (input.includes("∩")) arr2.push('"And"')
                                extraCube = arr2[getRandomNumber(0, arr2.length - 1)];
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

        if (solutionSet1 === solutionSet2) {
            paragraph = `Both solutions cannot contain the same cards.`
            return;
        }

        if (puzzleData.variations.includes('requiredCard')) {
            if (!solutionSet1.includes(getVariation('requiredCard'))) {
                paragraph = `Solution does not contain required card.`
                return;
            };
            if (twoSolutions && !solutionSet2.includes(getVariation('requiredCard'))) {
                paragraph = `Solution does not contain required card.`
                return;
            };
        };
        if (puzzleData.variations.includes('forbiddenCard')) {
            if (solutionSet1.includes(getVariation('forbiddenCard')) || solutionSet2.includes(getVariation('forbiddenCard'))) {
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

        // TITLE
        const titleNode = document.createElement('h2')
        titleNode.innerText = 'Your Solution'
        answerContent.append(titleNode)

        // TOGGLE (2 SOLUTIONS)
        
        if (twoSolutions) {

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
                    evaluationParagraph.innerText = `Your solution evaluates to ${solutionSet2.length} cards:`
                    inputCardSet.innerHTML = ''
                    for (let node of inputCardsArr[1]) inputCardSet.append(node)
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
                    evaluationParagraph.innerText = `Your solution evaluates to ${solutionSet1.length} cards:`
                    inputCardSet.innerHTML = ''
                    for (let node of inputCardsArr[0]) inputCardSet.append(node)
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

        // for (let node of nodes) {
        //     const newNode = node.cloneNode('deep')
        //     newNode.style.left = '0px'
        //     newNode.style.top = '0px'
        //     inputAnswer.append(newNode)
        // }
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
        if (!puzzleData.metaData.includes('noRestrictions')) {
            inputSolutionContainer.append(inputRestriction)
            inputSolutionContainer.append(bar)
        }
        inputSolutionContainer.append(inputSetName)
        answerContent.append(inputSolutionContainer)

        const evaluationParagraph = document.createElement('p')
        evaluationParagraph.id = 'evaluation-paragraph'
        evaluationParagraph.innerText = `Your solution evaluates to ${solutionSet1.length} cards:`
        answerContent.append(evaluationParagraph)
        
        // Input Cards
        let inputCardsArr = [[], []]
        const inputCardSet = document.createElement('div')
        inputCardSet.classList.add('card-set')
        for (let i = 0; i <= (twoSolutions); i++) {
            let solutionSet = i ? solutionSet2 : solutionSet1;
            for (let card of cardsContainer.children) {
                const newCard = card.cloneNode(true);
                newCard.classList.remove('flip')
                if (blankWild && newCard.dataset.getCard === "") {
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
        answerContent.append(inputCardSet)

        // Separate Answer
        const horizontalRule = document.createElement('hr')
        horizontalRule.style.cssText = 'width: 80%;'
        answerContent.append(horizontalRule)
        
        // Defined Title
        const titleNode2 = document.createElement('h2')
        titleNode2.innerText = 'Solution'
        answerContent.append(titleNode2)

        console.log(puzzleData)

        // DEFINED TOGGLE
        if (twoSolutions) {
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
                if (answerToggleDiv.classList.contains('move')) {    // CLICKED ON SECOND TOGGLE
                    answerLeftToggle.dataset.active = 'false'
                    answerRightToggle.dataset.active = 'true'
                    computerRestriction.innerHTML = ''
                    computerSetName.innerHTML = ''
                    for (let node of computerValueNodes[1][0]) computerRestriction.append(node);
                    for (let node of computerValueNodes[1][1]) computerSetName.append(node);
                    computerCardSet.innerHTML = ''
                    for (let node of computerCardsArr[1]) computerCardSet.append(node);
                } else {    // CLICKED ON FIRST TOGGLE
                    answerLeftToggle.dataset.active = 'true'
                    answerRightToggle.dataset.active = 'false'
                    computerRestriction.innerHTML = ''
                    computerSetName.innerHTML = ''
                    for (let node of computerValueNodes[0][0]) computerRestriction.append(node);
                    for (let node of computerValueNodes[0][1]) computerSetName.append(node);
                    computerCardSet.innerHTML = ''
                    for (let node of computerCardsArr[0]) computerCardSet.append(node);
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

        for (let i = 0; i <= twoSolutions; i++) {
            for (let j = 0; j < 2; j++) {

                // Set loop for all solutions and flags
                let currIterable
                if (twoSolutions) {
                    if (j) {
                        currIterable = puzzleData.solution[i].flag;
                    } else if (puzzleData.solution[i].restriction) {
                        currIterable = puzzleData.solution[i].restriction.join("");
                    };
                } else {
                    if (j) {
                        currIterable = puzzleData.solution.flag;
                    } else if (puzzleData.solution.restriction) {
                        currIterable = puzzleData.solution.restriction.join("");
                    };
                }
                if (!currIterable) {
                    continue;
                }

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
        if (!puzzleData.metaData.includes("noRestrictions")) {
            computerSolutionContainer.append(computerRestriction)
            computerSolutionContainer.append(bar.cloneNode())
        }
        computerSolutionContainer.append(computerSetName)
        answerContent.append(computerSolutionContainer)
        
        // Computer Cards
        const computerCardSet = document.createElement('div')
        computerCardSet.classList.add('card-set')
        let computerCardsArr = [[], []]
        console.log(twoSolutions)
        for (let i = 0; i <= (twoSolutions); i++) {
            let solutionSet = twoSolutions ? puzzleData.solution[i].cards : puzzleData.solution.cards
            i ? puzzleData.solution[1] : puzzleData.solution[0]
            for (let card of cardsContainer.children) {
                const newCard = card.cloneNode(true);
                newCard.classList.remove('flip')
                let blankWildCard = twoSolutions ? puzzleData.solution[i].blankCard : puzzleData.solution.blankCard;
                if (blankWild && newCard.dataset.getCard === "" && blankWildCard) {
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
        answerContent.append(computerCardSet)

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
    forceSymmetricDifference: false
}

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
        menuBackground.click()
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
menuBackground.addEventListener('click', (e) => {
    if (wildPickerContainer.classList.contains('shown')) {
        hideWildPicker(e)
        return;
    }
    if (settingsContainer.classList.contains('shown')) {
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
    mapArrowBox.parentElement.classList.remove('dark') // REMOVE
})

settingsIcon.addEventListener('click', (e) => {
    if (wildPickerContainer.classList.contains('shown')) {
        hideWildPicker(e)
        return;
    }
    e.stopPropagation()
    hideKeyboard()
    if (!settingsContainer.classList.contains('shown')) {
        settingsContainer.classList.add('shown')
        menuBackground.classList.add('shown')
        variationsArrowBox.parentElement.classList.add('dark') // Remove
        mapArrowBox.parentElement.classList.add('dark')
        header.classList.add('dark')
        if (!settingsContainer.classList.contains('shown') && settingsNodesContainer.classList.contains('page-2')) {
            setTimeout(() => {
                settingsNodesContainer.classList.remove('page-2')
                settingsHeaderText.innerText = 'Settings'
            }, 150)
        }
    } else {
        menuBackground.click()
    }
});

function switchPage(activePage, title) {
    settingsNodesContainer.classList.add('page-2')
    settingsHeaderText.classList.add('fade')
    settingsNavButton.classList.add('fade')
    for (let node of document.querySelectorAll('.settings-page-2.active')) node.classList.remove('active')
    activePage.classList.add('active')
    settings.headerText = title
}
function createCategory(buttonID, pageID, title) {
    const button = document.createElement('li')
    button.id = buttonID
    button.classList.add('settings-category')
    button.innerText = title

    const page = document.querySelector(pageID)
    button.addEventListener('click', () => {switchPage(page, title)})
    return button
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
    counterInput.maxValue = parameters.maxValue;

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
(function createPages() {
    
    
    // Variations Page
    const settingsVariations = document.createElement('div')
    settingsVariations.id = 'settings-variations'
    settingsVariations.classList.add('settings-page-2')
    const scrollContainer = document.createElement('div')
    scrollContainer.classList.add('scroll-container')
    settingsVariations.append(scrollContainer)
    settingsNodesContainer.append(settingsVariations)

    
    const variationCounterList = document.createElement('ul')
    scrollContainer.append(variationCounterList)
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
    scrollContainer.append(variationLabel)

    const forceVariationsList = document.createElement('ul')
    forceVariationsList.classList.add('force-variations')
    scrollContainer.append(forceVariationsList)

    let variationsArr = [['requiredCube', 'Required Cube'], ['wild', 'Wild'], ['twoOp', 'Two Operations',], 
    ['noNull', 'No Null Restrictions'], ['absValue', 'Absolute Value'], ['double', 'Double Set'], 
    ['requiredCard', 'Required Card'], ['forbiddenCard', 'Forbidden Card'], ['blankWild', 'Blank Card Wild'], 
    ['symmetricDifference', 'Symmetric Difference'], ['twoSolutions', 'Two Solutions']]
    
    for (let variation of variationsArr) {
        const checkboxNode = createCheckbox(variation[1], variation[0])
        forceVariationsList.append(checkboxNode)
    }
    
    // Main Page
    const mainPage = document.createElement('ul')
    mainPage.classList.add('settings-page-1')

    const pages = [
        // ['#card-view-button', '#settings-card-view', 'Card View (Testing)'],
        ['#variations-button', '#settings-variations', 'Variations'],
    ]
    for (let page of pages) {
        console.log("D")
        const newCategory = createCategory(...page)
        console.log(newCategory)
        mainPage.append(newCategory)
    }
    settingsNodesContainer.append(mainPage)

    const symmetricDifferenceToggle = createToggle('Force Symmetric Difference', (element) => {

        settings.forceSymmetricDifference = !settings.forceSymmetricDifference
        if (!element.classList.contains('active')) {
            if (settings.forceVariations.length >= variationCount.value) {
                notify('Too many variations!', 'red', 'bounce', 1500, '40px', '180px');
                return
            }
            settings.forceSymmetricDifference = true
            // if (settings.forceVariations.length === 6) variationCount.value = parseFloat(variationCount.value) + 1
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
    mainPage.append(symmetricDifferenceToggle)
    
})();

const variationCount = document.querySelector('#variation-count')

// function toggleSetting(e) {
//     // console.log(this)
//     // console.log(e)
//     genNewPuzzle = true;
//     switch (this.dataset.type) {
//         case 'force-symmetric-difference':
//             this.classList.toggle('active')
//             puzzleParameters.forceSymmetricDifference = !puzzleParameters.forceSymmetricDifference
//             if (symmetricDifferenceCheck.classList.contains('active')) {
//                 if (!this.classList.contains('active')) {
//                     symmetricDifferenceCheck.classList.remove('active')
//                     puzzleParameters.setVariations = deleteFirstArrItem(puzzleParameters.setVariations, 'symmetricDifference')
//                 };
//                 console.log(puzzleParameters)
//                 return;
//             }
//             if (this.classList.contains('active')) {
//                 if (puzzleParameters.setVariations.length === 6) variationCount.value = parseFloat(variationCount.value) + 1
//                 symmetricDifferenceCheck.classList.add('active')
//                 puzzleParameters.setVariations.push('symmetricDifference')
//             }
//             console.log(puzzleParameters)
//         break;
//     }
// }

function forceVariation(element, variation) {
    console.log("D")
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
    mapArrowBox.parentElement.classList.toggle('dark') // REMOVE
}

function hideWildPicker(e) {
    e.stopPropagation()
    let activeCube = document.querySelector('.wild-cube.active')
    if (activeCube) activeCube.classList.remove('active')
    wildPickerContainer.classList.remove('shown')
    wildBackground.classList.remove('shown')
    header.classList.remove('dark')
    keyboardContainer.classList.remove('dark')
    variationsArrowBox.parentElement.classList.remove('dark') // REMOVE
    mapArrowBox.parentElement.classList.remove('dark') // REMOVE
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
