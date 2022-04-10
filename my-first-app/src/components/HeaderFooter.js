export default function HeaderFooter(props) {
    return (
        <div>
            {props.children}
            <div className="Copyright">&copy; 2022 HappyCards</div>
        </div>
    )
}