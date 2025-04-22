export default function ContentContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col justify-between p-4 bg-white/20 backdrop-blur-md w-5/6 mt-4 border shadow-2xl h-5/6 text-center rounded-xl border-b border-white/10">
            {children}
        </div>
    )
}