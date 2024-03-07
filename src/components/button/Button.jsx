export default function Button({ onClick, text }) {
    return (
        <div className="button-wraper">
            <button className="btn border border-black" onClick={onClick}>{text}</button>
        </div>
    )
}
