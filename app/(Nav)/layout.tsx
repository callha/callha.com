

export default function layout({ children }:any) {
    return (
        <>
            <div className=" min-h-dvh" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
                {children}
            </div>
        </>
    )
}