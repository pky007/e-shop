import Image from 'next/image'

type Props = {}

function index({ }: Props) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image className="d-block w-100"
                        src={"/images/hero/Bg3.png"}
                        alt="First slide"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="carousel-item">
                <Image className="d-block w-100"
                        src={"/images/hero/Bg.png"}
                        alt="First slide"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="carousel-item">
                    <Image className="d-block w-100"
                        src={"/images/hero/Bg.png"}
                        alt="First slide"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default index