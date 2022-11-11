import { ProgressBar } from "./ProgressBar"


export const  Loading = () => {
    return (
        <div className='py-[25vh] flex justify-center items-center'>
            {<ProgressBar />}
        </div>
    )
}