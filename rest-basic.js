import React  from 'react';

export default function RestBasic(){
    let[serverTime,setServertime] = React.useState('')
    let[footballResult,setFootballResult] = React.useState('')

    const onClickShowTime = () =>{
        fetch('/api/server-time')
        .then(response => response.json())
        .then(result =>{
            let r = <>{result.hour}:{result.minute}:{result.second}</>
            setServertime(r)
        }).catch(err => alert(err))
    }

    const onClickFootballResult =() => {
        fetch('/api/football-result')
        .then(response => response.text())
        .then(result => setFootballResult(result))
        .catch(err => alert(err))
    }

    return(
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <button onClick={onClickShowTime}>Show time from server</button>
            <div>{serverTime}</div>
            <br/>
            <button onClick={onClickFootballResult}>Show result of football</button>
            <div dangerouslySetInnerHTML={{__html:footballResult}}></div>
        </div>
    )
}
