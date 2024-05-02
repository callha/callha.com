

export default function layout({ children }:any) {
    return (
        <>
            <div className=" min-h-[calc(100vh-85px)]" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
                {children}
            </div>
        </>
    )
}