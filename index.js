


const treeData = {
    name: "vote data",
    children: [{

    }]
}

const states = [];

const url = "https://raw.githubusercontent.com/booshay/temp/master/countypres_2000-2016.json";

const dataRemote = fetch(url).then(res => res.json()).then(data => {
    data.map((e) => {
        if (states.indexOf(e.state) == -1) {
            states.push(e.state)
        }
    })


    data.map((e) => {
        if (states.indexOf(e.state) == -1) {
            states.push(e.state)
        }
    })

    states.map((state) => {   //alabama
        const tempData = data.filter((e) => { //alabama's data
            return e.state === state
        })
        treeData.children.push({ state: state, children: [] });

        treeData.children.map((e, i) => {
            if (e.state) {
                tempData.map((e) => {
                    if (treeData.children[i].state == state) {
                        treeData.children[i].children.push(
                            {
                                name: e.candidate,
                                state: e.state,
                                votes: e.candidatevotes
                            }
                        )
                    }
                })

            }
        })
    })
    console.log(treeData)








})








/*

const url = "https://raw.githubusercontent.com/booshay/temp/master/countypres_2000-2016.json";

const dataRemote = fetch(url).then(res => res.json()).then(data => {
    data.map((e) => {
        if (states.indexOf(e.state) == -1) {
            states.push(e.state)
        }
    })
    console.log(states)
})

*/












/*
const treeData = {
    name: "vote data",
    children: [{

    }]
}

const states = [];

data.map((e) => {
    if (states.indexOf(e.state) == -1) {
        states.push(e.state)
    }
})

states.map((state) => {   //alabama
    const tempData = data.filter((e) => { //alabama's data
        return e.state === state
    })
    treeData.children.push({ state: state, children: [] });

    treeData.children.map((e, i) => {
        if (e.state) {
            tempData.map((e) => {
                if (treeData.children[i].state == state) {
                    treeData.children[i].children.push(
                        {
                            name: e.candidate,
                            state: e.state,
                            votes: e.candidatevotes
                        }
                    )
                }
            })

        }
    })
})
console.log(treeData)

*/



/*
const treeData = {
    name: "vote data",
    children: [{
        state: "New York",
        children: [{
            name: "canidate",
            state: "New York",
            votes: "canidatevotes"
        }]
    }, {
        state: "New York",
        children: [{
            name: "canidate2",
            state: "New York",
            votes: "canidate2votes"
        }]
    }
    ]
}
]*/


/*
const data = [
    {
        "year": 2000,
        "state": "Alabama",
        "state_po": "AL",
        "county": "Autauga",
        "FIPS": "1001",
        "office": "President",
        "candidate": "Al Gore",
        "party": "democrat",
        "candidatevotes": "4942",
        "totalvotes": 17208,
        "version": "20191203"
    },
    {
        "year": 2000,
        "state": "Alabama",
        "state_po": "AL",
        "county": "Autauga",
        "FIPS": "1001",
        "office": "President",
        "candidate": "George W. Bush",
        "party": "republican",
        "candidatevotes": "11993",
        "totalvotes": 17208,
        "version": "20191203"
    },
    {
        "year": 2000,
        "state": "Alabama",
        "state_po": "AL",
        "county": "Autauga",
        "FIPS": "1001",
        "office": "President",
        "candidate": "Ralph Nader",
        "party": "green",
        "candidatevotes": "160",
        "totalvotes": 17208,
        "version": "20191203"
    }, {
        "year": 2000,
        "state": "Wisconsin",
        "state_po": "WI",
        "county": "Door",
        "FIPS": "55029",
        "office": "President",
        "candidate": "Other",
        "party": "NA",
        "candidatevotes": "141",
        "totalvotes": 15220,
        "version": "20191203"
    },
    {
        "year": 2000,
        "state": "Wisconsin",
        "state_po": "WI",
        "county": "Douglas",
        "FIPS": "55031",
        "office": "President",
        "candidate": "Al Gore",
        "party": "democrat",
        "candidatevotes": "13593",
        "totalvotes": 21706,
        "version": "20191203"
    },
    {
        "year": 2008,
        "state": "Oklahoma",
        "state_po": "OK",
        "county": "Creek",
        "FIPS": "40037",
        "office": "President",
        "candidate": "Other",
        "party": "NA",
        "candidatevotes": "0",
        "totalvotes": 28505,
        "version": "20191203"
    },
    {
        "year": 2008,
        "state": "Oklahoma",
        "state_po": "OK",
        "county": "Custer",
        "FIPS": "40039",
        "office": "President",
        "candidate": "Barack Obama",
        "party": "democrat",
        "candidatevotes": "2660",
        "totalvotes": 10502,
        "version": "20191203"
    }
]
*/