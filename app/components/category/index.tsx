import "./index.css"
import CategoryCard from "./category"
import { CategoryType } from "@/app/utils/type"

type Props = {
    data:CategoryType[]
}

function index({data }: Props) {
    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className="col-md-2">
                            <CategoryCard
                                {...item}
                            />
                        </div>
                    )
                })
            }

        </>

    )
}

export default index