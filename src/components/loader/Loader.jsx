import { BallTriangle } from "react-loader-spinner";
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.backdrop}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#407BFF"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
}