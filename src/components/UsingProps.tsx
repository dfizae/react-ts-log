interface PlayerInfo {
    title: string;
    children: React.ReactNode;
};


export default function UsingProps(props: PlayerInfo) {
    const { title, children, } = props;
    return(
        <>
            <h1>{title}</h1>
            {children}
        </>
    );
}