

export default function layout({ children }:any) {
    return (
        <>
            <div className=" min-h-dvh pt-16 md:pt-20" style={{ backgroundImage: 'url(/repeated-square-dark.png)' }}>
                {children}
            </div>
        </>
    )
}