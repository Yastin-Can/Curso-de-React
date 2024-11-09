import './App.css'

export function UserCard(props) {
    return (
        <div className='section-container'>
            <img src={`https://www.freecodecamp.org/static/${props.img}`} alt="" className='section-img'/>
            <div className='section-container-info'>
                <p className="section-p name">{props.children} in {props.ubi}</p>
                <p className="section-p profec">{props.prof}</p>
                <p className="section-p-descrip">{props.descript}</p>
            </div>
        </div>
    );
}
