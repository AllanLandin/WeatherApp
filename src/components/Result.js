function Result(props){
    return (
        <div>
            {
            !props.apiData? 
            (<div></div>): 
                (props.apiData.cod == '404'? <div className="text">Local não encontrado!</div>:
                (<div className="card">
                    <div className="card-title">{`${props.apiData.name}, ${props.apiData.sys.country}`}</div>
                    <img src={props.weatherImg} className="card-img"></img>
                    <div className="card-desc">{props.apiData.weather[0].description}</div>
                    <div className="card-wrapper">
                        <div className="card-item">
                            <label className="card-item-label">Atual</label>
                            <p className="card-item-info">{props.apiData.main.temp}°C</p>
                        </div>
                        <div className="card-item">
                            <label className="card-item-label">Mínima</label>
                            <p className="card-item-info">{props.apiData.main.temp_min}°C</p>
                        </div>
                        <div className="card-item">
                            <label className="card-item-label">Máxima</label>
                            <p className="card-item-info">{props.apiData.main.temp_max}°C</p>
                        </div>
                    </div>
            </div>))}
        </div>
    )
}

export default Result;