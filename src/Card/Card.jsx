import "./Card.css";
// eslint-disable-next-line react/prop-types
export default function Card({color = "white" ,emoje = "😊",title = "Nothing",description = "Nothing",photoNumber = 4,
}) {
  return (
    <>
      <div className="border-card">
        <div className="card-content">
          <div>
            <p className="emoje" style={{backgroundColor: color}}>{emoje}</p>
          </div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div>  
             <img
             className="img"
            src={`/public/photo_${photoNumber}.png`}
            alt="f"
              /> 
          </div>
       
        </div>
      </div>
    </>
  );
}
