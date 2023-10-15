import Result from "./Result";

function Form(props){
    return (
        <form className="form">
            <div className="wrapper">
                <input className="form-input" type="text" placeholder="Local" onChange={props.changeLocal} value={props.local}></input>
                <button className="btn" onClick={props.fetchWeather}>Procurar</button>
            </div>
            <Result apiData={props.apiData} weatherImg={props.weatherImg}></Result>
        </form>
    )
}

export default Form;