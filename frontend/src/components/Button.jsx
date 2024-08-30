export default function Button ({name, onclick}) {
    return <button className="text-xl  font-semibold" onClick={onclick}> {name} </button>
}