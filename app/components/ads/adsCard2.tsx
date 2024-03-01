
import "./index.css"

type Props = {
    thumbnail:string
}
export default function index({thumbnail}: Props) {
    return (
        <div className="card-ads2" style={{ backgroundImage: `url(${thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        </div>
        
    )
}