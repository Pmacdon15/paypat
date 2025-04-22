export default function PageContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center w-full justify-items-center h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
            {children}
        </div>
    )
}