import { Button } from "./style"

export default function ButtonComponent(props) {
    const { name, onClick, className, arrow="block" } = props
    return (
        <Button
            className={className}
            onClick={onClick}
            arrow={arrow}
        >{name}</Button>
    )
}