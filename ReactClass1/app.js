const parent = React.createElement("div", {}, [React.createElement("div", {}, "Hi from div1"),
    React.createElement("div", {}, React.createElement("h1", {}, "Hi from child of second div"))

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)